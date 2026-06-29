'use client';

import { useState } from 'react';
import { PARTS, SIMANIM, type PartId } from '@/data/simanim';
import Card from './Card';

export default function SimanimBrowser() {
  const [activePart, setActivePart] = useState<PartId | 'all'>('all');
  const [readyOnly, setReadyOnly] = useState(false);

  return (
    <>
      {/* ── FILTERS ── */}
      <div className="filters" role="group" aria-label="Szűrők">
        <span className="filter-label">Rész:</span>
        <button
          className={`pill${activePart === 'all' ? ' active' : ''}`}
          onClick={() => setActivePart('all')}
        >
          Mind
        </button>
        {PARTS.map((p) => (
          <button
            key={p.id}
            className={`pill${activePart === p.id ? ' active' : ''}`}
            onClick={() => setActivePart(p.id)}
          >
            {p.labelHu}
          </button>
        ))}
        <span className="filter-sep">·</span>
        <span className="filter-label">Elérhetőség:</span>
        <button
          className={`pill${readyOnly ? ' active' : ''}`}
          onClick={() => setReadyOnly((v) => !v)}
        >
          Csak kész
        </button>
      </div>

      {/* ── SECTIONS ── */}
      <main className="body-wrap">
        {PARTS.map((part) => {
          if (activePart !== 'all' && activePart !== part.id) return null;

          const cards = SIMANIM.filter(
            (s) => s.part === part.id && (!readyOnly || !s.pending),
          );
          const readyCount = SIMANIM.filter(
            (s) => s.part === part.id && !s.pending,
          ).length;

          return (
            <section key={part.id} className="section" id={part.id}>
              <div className="section-head">
                <h2 className="section-title">
                  {part.labelHe} – {part.labelHu}
                </h2>
                <div className="section-line" />
                <div className="section-count">
                  {readyCount} kész / {part.total} szimán
                </div>
              </div>
              <div className="card-grid">
                {cards.map((s) => (
                  <Card key={s.id} siman={s} />
                ))}
              </div>
            </section>
          );
        })}

        {/* ── COMING SOON ── */}
        <div className="coming-soon">
          <div>
            <div className="coming-soon-title">Az anyag folyamatosan bővül</div>
            <div className="coming-soon-sub">
              Új összefoglalók elkészültükkor kerülnek fel. Az oldal fenntartója: esstorah.com
            </div>
          </div>
          <a className="coming-soon-link" href="https://esstorah.com">
            esstorah.com →
          </a>
        </div>
      </main>
    </>
  );
}
