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
    id: 'cm-232',
    part: 'cm',
    num: 232,
    numHe: 'רלב',
    titleHu: 'Megtévesztés az adásvételben',
    titleHe: 'הלכות מקח טעות',
    desc: 'Mikor érvénytelen egy adásvétel (mekách táut)? Az áru visszaadásának, a mum-reklamációnak és a kártérítésnek szabályai.',
    pdfs: { hu: 'cm-232-hu.pdf' },
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
