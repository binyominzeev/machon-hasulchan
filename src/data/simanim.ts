export type PartId = 'oc' | 'jd' | 'eh' | 'cm';
export type Lang = 'hu' | 'he' | 'en';

export interface Siman {
  /** e.g. 'jd-189' – must be unique */
  id: string;
  part: PartId;
  /** Arabic number */
  num: number;
  /** Hebrew gematria letters shown in background */
  numHe: string;
  titleHu: string;
  titleHe: string;
  desc: string;
  /**
   * Keys are languages with an available PDF.
   * Value is the filename inside /public/pdfs/ (no leading slash).
   * Omit a key to show a disabled button for that language.
   */
  pdfs: Partial<Record<Lang, string>>;
  /**
   * Optional external teaching videos by language.
   * Each language can have 0..N links.
   */
  videos?: Partial<Record<Lang, string[]>>;
  pending?: boolean;
}

export interface Part {
  id: PartId;
  labelHe: string;
  labelHu: string;
  total: number;
}

// ─────────────────────────────────────────────
//  RÉSZEK
// ─────────────────────────────────────────────
export const PARTS: Part[] = [
  { id: 'oc', labelHe: 'אורח חיים', labelHu: 'Orách Cháim',  total: 697 },
  { id: 'jd', labelHe: 'יורה דעה',  labelHu: 'Jore Déá',     total: 403 },
  { id: 'eh', labelHe: 'אבן העזר',  labelHu: 'Even Háezer',  total: 178 },
  { id: 'cm', labelHe: 'חושן משפט', labelHu: 'Chosen Mispát', total: 427 },
];

// ─────────────────────────────────────────────
//  SZIMÁNOK
//  Új bejegyzés hozzáadásához csak egy objektumot
//  kell bemásolni ebbe a tömbhöz.
// ─────────────────────────────────────────────
export const SIMANIM: Siman[] = [
  // ── Orách Cháim ─────────────────────────────
  {
    id: 'oc-1',
    part: 'oc',
    num: 1,
    numHe: 'א',
    titleHu: 'Ébredés reggel',
    titleHe: 'הלכות השכמה',
    desc: 'Hamarosan – placeholder',
    pdfs: {},
    pending: true,
  },
  {
    id: 'oc-612',
    part: 'oc',
    num: 612,
    numHe: 'תריב',
    titleHu: 'Jom Kipur – étkezés tilalma',
    titleHe: 'הלכות יום הכיפורים',
    desc: '',
    pdfs: { hu: 'oc-612-hu.pdf' },
  },
  {
    id: 'oc-625',
    part: 'oc',
    num: 625,
    numHe: 'תרפה',
    titleHu: 'Sátor építésének törvényei',
    titleHe: 'הלכות סוכה',
    desc: 'Ánáné hákávod – mit szimbolizál a sátor?',
    pdfs: { hu: 'oc-625-629-hu.pdf' },
  },
  {
    id: 'oc-626',
    part: 'oc',
    num: 626,
    numHe: 'תרפו',
    titleHu: 'Sátor építésének törvényei',
    titleHe: 'הלכות סוכה',
    desc: 'Fa vagy háztető alatt épülő sátor',
    pdfs: { hu: 'oc-625-629-hu.pdf' },
  },
  {
    id: 'oc-627',
    part: 'oc',
    num: 627,
    numHe: 'תרפז',
    titleHu: 'Sátorban alvás – ágy és baldachin',
    titleHe: 'הלכות סוכה',
    desc: '',
    pdfs: { hu: 'oc-625-629-hu.pdf' },
  },
    {
    id: 'oc-628',
    part: 'oc',
    num: 628,
    numHe: 'תרפח',
    titleHu: 'Egyik sátor a másikban',
    titleHe: 'הלכות סוכה',
    desc: '',
    pdfs: { hu: 'oc-625-629-hu.pdf' },
  },
  {
    id: 'oc-629',
    part: 'oc',
    num: 629,
    numHe: 'תרפט',
    titleHu: 'A szchách anyaga',
    titleHe: 'הלכות סוכה',
    desc: '',
    pdfs: { hu: 'oc-625-629-hu.pdf' },
  },
  // ── Jore Déá ────────────────────────────────
  {
    id: 'jd-189',
    part: 'jd',
    num: 189,
    numHe: 'קפט',
    titleHu: 'Vesztot – tilalmas megelőző időszakok',
    titleHe: 'הלכות נדה',
    desc: 'Mikor kell tartózkodni az együttléttől a várható vérzés előtt? Kiszámítások lehetséges módjai és kombinációi.',
    pdfs: { hu: 'jd-189-hu.pdf' },
  },
  {
    id: 'jd-190',
    part: 'jd',
    num: 190,
    numHe: 'קצ',
    titleHu: 'Ketámim – pecsételő vérzés',
    titleHe: 'בדיקות ועובי',
    desc: 'Mikor tesz tiltottá egy ruhán vagy testfelületen talált vérfolt? A ketem forrásának, méretének és a felület minőségének halachikus megítélése.',
    pdfs: { hu: 'jd-190-hu.pdf' },
  },
  {
    id: 'jd-191',
    part: 'jd',
    num: 191,
    numHe: 'קצא',
    titleHu: 'Vizelés közben látott vér',
    titleHe: 'פסיקת הנידה',
    desc: 'Mikor tulajdonítható betegségnek?',
    pdfs: { hu: 'jd-191-hu.pdf' },
  },
  {
    id: 'jd-192',
    part: 'jd',
    num: 192,
    numHe: 'קצב',
    titleHu: 'Mikve és alámerülés',
    titleHe: 'הלכות טבילה',
    desc: 'Hamarosan – placeholder',
    pdfs: {},
    pending: true,
  },

  // ── Even Háezer ─────────────────────────────
  {
    id: 'eh-1',
    part: 'eh',
    num: 1,
    numHe: 'א',
    titleHu: 'Peru urvú – szaporodás kötelezettsége',
    titleHe: 'מצות פריה ורביה',
    desc: 'Hamarosan – placeholder',
    pdfs: {},
    pending: true,
  },

  // ── Chosen Mispát ───────────────────────────
    {
    id: 'cm-154',
    part: 'cm',
    num: 154,
    numHe: 'קנד',
    titleHu: 'Ablakok, ajtók nyitása',
    titleHe: 'הלכות נזקי שכנים',
    desc: 'Mik a feltételei annak, hogy új ablakot vagy ajtót nyissunk a szomszédos lakás felé? Mikor kell engedélyt kérni a szomszédtól?',
    pdfs: { hu: 'cm-154-hu.pdf' },
  },
  {
    id: 'cm-156',
    part: 'cm',
    num: 156,
    numHe: 'קנו',
    titleHu: 'Szomszédok és új beköltözők jogai',
    titleHe: 'הלכות נזקי שכנים',
    desc: 'Mikor tiltakozhatnak a lakók az új beköltözők ellen? Indíthatnak-e vállalkozást, ha a forgalom zavarja a társasházat vagy a konkurenciát?',
    pdfs: { hu: 'cm-156-hu.pdf' },
  },
  {
    id: 'cm-232',
    part: 'cm',
    num: 232,
    numHe: 'רלב',
    titleHu: 'Megtévesztés az adásvételben',
    titleHe: 'הלכות מקח טעות',
    desc: 'Mikor érvénytelen egy adásvétel (mekách táut)? Az áru visszaadásának, a mum-reklamációnak és a kártérítésnek szabályai.',
    pdfs: { hu: 'cm-232-hu.pdf' },
    videos: {
      hu: [
        'https://binjomin.hu/siur/mekach-taut-1-resz-kesedelmes-szallitas-es-elallas-a-vasarlastol-cm-2323-6/',
        'https://binjomin.hu/siur/mekach-taut-2-resz-miben-kulonbozik-a-tularazastol-cm-2321/',
        'https://binjomin.hu/siur/mekach-taut-3-resz-mi-a-teendo-ha-nem-korrigalhato-a-szamitasi-hiba-cm-2321/',
        'https://binjomin.hu/siur/mekach-taut-4-resz-felelosseg-az-eszrevehetetlen-hibaert-cm-2327-14/',
        'https://binjomin.hu/siur/mekach-taut-5-resz-vitak-bizonyitasa-esku-vagy-szakerto-altal-cm-23215-23/',
        'https://binjomin.hu/siur/mekach-taut-6-resz-mikor-bizonyito-ereju-a-vetelar-cm-23223/',
        'https://binjomin.hu/siur/mekach-taut-7-resz-damim-mochichin-meta-machmat-mum-cm-23218-23/'
      ],
    },
  },
  {
    id: 'cm-233',
    part: 'cm',
    num: 233,
    numHe: 'רלג',
    titleHu: 'Adásvétel visszavonása',
    titleHe: 'ביטול מקח',
    desc: 'Hamarosan – placeholder',
    pdfs: {},
    pending: true,
  },
];
