import { SIMANIM } from '@/data/simanim';

const totalReady = SIMANIM.filter((s) => !s.pending).length;
const totalPdfs  = SIMANIM.filter((s) => !s.pending).reduce(
  (acc, s) => acc + Object.keys(s.pdfs).length,
  0,
);

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">
        Sulchán Áruch
        <br />
        <span>összefoglalók</span>
      </h1>
      <p className="hero-desc">
        Szimánok áttekinthető gyűjteménye. Minden szimánhoz tömör magyar, héber
        és angol összefoglaló PDF, egységes szerkezetben – a gyors áttekintéshez
        és a mindennapi tanuláshoz.
      </p>
      <div className="hero-stats">
        <div>
          <div className="stat-num">{totalPdfs}</div>
          <div className="stat-label">elérhető PDF</div>
        </div>
        <div>
          <div className="stat-num">576</div>
          <div className="stat-label">szimán összesen</div>
        </div>
        <div>
          <div className="stat-num">3</div>
          <div className="stat-label">nyelv tervben</div>
        </div>
      </div>
    </section>
  );
}
