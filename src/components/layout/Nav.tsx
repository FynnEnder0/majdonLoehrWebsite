import { useEffect, useState } from 'react';

export type NavLabels = {
  about: string;
  work: string;
  press: string;
  gallery: string;
  contact: string;
  menu: string;
  close: string;
};

type Props = {
  labels: NavLabels;
  /** Pfad der gleichen Seite in der anderen Sprache. */
  altHref: string;
  /** Code der anderen Sprache, z. B. "EN". */
  altLabel: string;
};

export default function Nav({ labels, altHref, altLabel }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links: Array<[string, string]> = [
    ['#about', labels.about],
    ['#work', labels.work],
    ['#press', labels.press],
    ['#gallery', labels.gallery],
    ['#contact', labels.contact],
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.body.style.overflow = open ? 'hidden' : '';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'bg-stage-dark/90 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Hauptnavigation"
        className="mx-auto flex max-w-stage items-center justify-between px-6 py-4"
      >
        <a
          href="#top"
          className="font-display text-lg tracking-wide text-parchment"
          aria-label="Majdon Löhr — Start"
        >
          M&nbsp;·&nbsp;L
        </a>

        {/* Desktop-Links */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {links.map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="font-mono text-sm uppercase tracking-[0.15em] text-warm-ash transition-colors hover:text-parchment"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={altHref}
            className="font-mono text-sm font-bold uppercase tracking-[0.15em] text-dusk-label transition-colors hover:text-footlight"
            hrefLang={altLabel.toLowerCase()}
          >
            {altLabel}
          </a>
        </div>

        {/* Mobile-Toggle */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? labels.close : labels.menu}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-px w-6 bg-parchment transition-transform duration-300 ${
                open ? 'top-2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-2 block h-px w-6 bg-parchment transition-opacity duration-200 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-6 bg-parchment transition-transform duration-300 ${
                open ? 'top-2 -rotate-45' : 'top-4'
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile-Menü */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-8 pt-2">
          {links.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block py-3 font-mono text-sm uppercase tracking-[0.18em] text-warm-ash transition-colors hover:text-parchment"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="mt-2 border-t border-wing-shadow pt-4">
            <a
              href={altHref}
              hrefLang={altLabel.toLowerCase()}
              className="block py-2 font-mono text-sm uppercase tracking-[0.18em] text-dusk-label transition-colors hover:text-footlight"
            >
              {altLabel}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
