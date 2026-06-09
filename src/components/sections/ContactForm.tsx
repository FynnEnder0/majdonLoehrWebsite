import { useState, type FormEvent } from 'react';

export type ContactLabels = {
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  required: string;
  invalidEmail: string;
};

type Props = {
  labels: ContactLabels;
  endpoint: string;
  accessKey: string;
  email: string;
};

type Status = 'idle' | 'sending' | 'success' | 'error';
type Errors = Partial<Record<'name' | 'email' | 'message', string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ labels, endpoint, accessKey, email }: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});

  function validate(data: { name: string; email: string; message: string }): Errors {
    const e: Errors = {};
    if (!data.name.trim()) e.name = labels.required;
    if (!data.email.trim()) e.email = labels.required;
    else if (!emailRe.test(data.email)) e.email = labels.invalidEmail;
    if (!data.message.trim()) e.message = labels.required;
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const fd = new FormData(form);

    // Honeypot — wenn ausgefüllt, stillschweigend „Erfolg“ (Bot)
    if ((fd.get('botcheck') as string)?.length) {
      setStatus('success');
      form.reset();
      return;
    }

    const data = {
      name: String(fd.get('name') ?? ''),
      email: String(fd.get('email') ?? ''),
      message: String(fd.get('message') ?? ''),
    };

    const v = validate(data);
    setErrors(v);
    if (Object.keys(v).length) return;

    // Kein Endpoint konfiguriert → Fallback auf mailto
    if (!endpoint) {
      const subject = encodeURIComponent(`Anfrage über majdonloehr.de — ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\n${data.name}\n${data.email}`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          subject: `Anfrage über majdonloehr.de — ${data.name}`,
          ...(accessKey ? { access_key: accessKey } : {}),
        }),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <p
        role="status"
        className="border-l-4 border-footlight bg-stage-dark/40 py-6 pl-6 font-body text-xl text-parchment"
      >
        {labels.success}
      </p>
    );
  }

  const fieldClass =
    'mt-2 w-full border border-wing-shadow bg-stage-dark/60 px-4 py-3 font-body text-lg text-parchment placeholder:text-warm-ash/40 focus:border-footlight focus:outline-none';
  const labelClass =
    'font-mono text-sm font-bold uppercase tracking-[0.16em] text-dusk-label';
  const errClass = 'mt-1 font-mono text-xs text-footlight';

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      {/* Honeypot (visuell versteckt) */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label>
          Leave this empty
          <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            {labels.nameLabel}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder={labels.namePlaceholder}
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={fieldClass}
          />
          {errors.name && (
            <p id="name-error" className={errClass}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            {labels.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={labels.emailPlaceholder}
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={fieldClass}
          />
          {errors.email && (
            <p id="email-error" className={errClass}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {labels.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder={labels.messagePlaceholder}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${fieldClass} resize-y`}
        />
        {errors.message && (
          <p id="message-error" className={errClass}>
            {errors.message}
          </p>
        )}
      </div>

      {status === 'error' && (
        <p role="alert" className="font-mono text-xs text-footlight">
          {labels.error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex min-h-[44px] items-center justify-center bg-footlight px-7 font-mono text-xs uppercase tracking-[0.18em] text-stage-dark transition-colors hover:bg-parchment disabled:opacity-60"
      >
        {status === 'sending' ? labels.sending : labels.submit}
      </button>
    </form>
  );
}
