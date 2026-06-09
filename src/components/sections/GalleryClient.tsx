import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export type GalleryItem = {
  thumb: string;
  full: string;
  width: number;
  height: number;
  alt: string;
  category: 'stage' | 'portrait';
};

export type GalleryLabels = {
  all: string;
  stage: string;
  portrait: string;
  close: string;
  prev: string;
  next: string;
};

type Filter = 'all' | 'portrait' | 'stage';

export default function GalleryClient({
  items,
  labels,
}: {
  items: GalleryItem[];
  labels: GalleryLabels;
}) {
  const [filter, setFilter] = useState<Filter>('all');
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const visible = useMemo(
    () => (filter === 'all' ? items : items.filter((i) => i.category === filter)),
    [filter, items],
  );

  const filters: Array<[Filter, string]> = [
    ['all', labels.all],
    ['portrait', labels.portrait],
    ['stage', labels.stage],
  ];

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((a) => (a === null ? a : (a + 1) % visible.length)),
    [visible.length],
  );
  const prev = useCallback(
    () => setActive((a) => (a === null ? a : (a - 1 + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    if (active === null) return;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, next, prev]);

  return (
    <div>
      {/* Filter */}
      <div className="mt-8 flex flex-wrap gap-3" role="tablist" aria-label="Galerie-Filter">
        {filters.map(([key, label]) => {
          const selected = filter === key;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setFilter(key)}
              className={`min-h-[44px] border-b px-1 font-mono text-xs uppercase tracking-[0.18em] transition-colors ${
                selected
                  ? 'border-footlight text-footlight'
                  : 'border-transparent text-warm-ash hover:text-parchment'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Masonry-Grid */}
      <div className="mt-10 gap-4 [column-fill:_balance] columns-1 sm:columns-2 lg:columns-3">
        {visible.map((item, i) => (
          <button
            key={item.full}
            type="button"
            onClick={() => setActive(i)}
            className="group mb-4 block w-full overflow-hidden break-inside-avoid focus-visible:outline-2 focus-visible:outline-footlight"
            aria-label={item.alt}
          >
            <img
              src={item.thumb}
              width={item.width}
              height={item.height}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              className="w-full bg-wing-shadow transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && visible[active] && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-stage-dark/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={visible[active].alt}
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label={labels.close}
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center font-mono text-2xl text-parchment transition-colors hover:text-footlight"
          >
            ✕
          </button>

          {visible.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label={labels.prev}
                className="absolute left-2 flex h-12 w-12 items-center justify-center font-mono text-3xl text-parchment/80 transition-colors hover:text-footlight sm:left-6"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label={labels.next}
                className="absolute right-2 flex h-12 w-12 items-center justify-center font-mono text-3xl text-parchment/80 transition-colors hover:text-footlight sm:right-6"
              >
                ›
              </button>
            </>
          )}

          <img
            src={visible[active].full}
            alt={visible[active].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-full object-contain shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
