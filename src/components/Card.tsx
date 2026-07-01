import type { Lang, Siman } from '@/data/simanim';

const LANG_LABELS: Record<Lang, string> = { hu: 'HU', he: 'HE', en: 'EN' };
const ALL_LANGS: Lang[] = ['hu', 'he', 'en'];

const DownloadIcon = () => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M8 2v8m-3-3 3 3 3-3M3 13h10" />
  </svg>
);

const VideoIcon = () => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M5.5 4.5h4.5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5.5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z" />
    <path d="m7 6.7 2.7 1.3L7 9.3V6.7Z" fill="currentColor" stroke="none" />
  </svg>
);

export default function Card({ siman }: { siman: Siman }) {
  const partPrefix = siman.part.toUpperCase().replace('jd', 'JD').replace('oc', 'OC').replace('eh', 'EH').replace('cm', 'CM');
  const label = `${siman.part.toUpperCase()} ${siman.num}`;
  const videoEntries = ALL_LANGS.flatMap((lang) =>
    (siman.videos?.[lang] ?? []).map((url, idx) => ({
      lang,
      url,
      idx,
    })),
  );

  return (
    <div className={`card${siman.pending ? ' pending' : ''}`} data-ready={siman.pending ? 'false' : 'true'}>
      <div className="card-bg-num" aria-hidden="true">{siman.numHe}</div>

      <div className="card-top">
        <div className="siman-num">{label}</div>
        <div className="lang-badges">
          {ALL_LANGS.map((lang) => (
            <span
              key={lang}
              className={`badge ${siman.pdfs[lang] ? `badge-${lang}` : 'badge-empty'}`}
            >
              {LANG_LABELS[lang]}
            </span>
          ))}
        </div>
      </div>

      <div className="card-title">{siman.titleHu}</div>
      <div className="card-he">{siman.titleHe}</div>
      <div className="card-desc">{siman.desc}</div>

      <div className="card-foot">
        {ALL_LANGS.map((lang) => {
          const file = siman.pdfs[lang];
          if (file) {
            return (
              <a
                key={lang}
                className="dl-btn"
                href={`/pdfs/${file}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <DownloadIcon />
                {LANG_LABELS[lang]} PDF
              </a>
            );
          }
          // Show disabled placeholder only for HU (primary language)
          if (lang === 'hu') {
            return (
              <span key={lang} className="dl-btn disabled" aria-disabled="true">
                <DownloadIcon />
                HU
              </span>
            );
          }
          return (
            <span key={lang} className="dl-btn disabled" aria-disabled="true">
              <DownloadIcon />
              {LANG_LABELS[lang]}
            </span>
          );
        })}

        {videoEntries.map(({ lang, url, idx }) => (
          <a
            key={`${lang}-vid-${idx}-${url}`}
            className="dl-btn vid-btn"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <VideoIcon />
            {LANG_LABELS[lang]} VID {idx + 1}
          </a>
        ))}
      </div>
    </div>
  );
}
