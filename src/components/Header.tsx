import { PARTS } from '@/data/simanim';

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo-area">
        <div className="logo-he">מכון השולחן</div>
        <div className="logo-sub">Máchon Hásulchán · esstorah.com</div>
      </div>
      <nav className="site-nav" aria-label="Fő navigáció">
        {PARTS.map((p) => (
          <a key={p.id} href={`#${p.id}`}>
            {p.labelHu}
          </a>
        ))}
      </nav>
    </header>
  );
}
