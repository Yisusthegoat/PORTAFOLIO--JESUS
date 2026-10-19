const links = [
  { href: '#home', label: 'Inicio' },
  { href: '#about', label: 'Perfil' },
  { href: '#notebook', label: 'Bitácora' },
  { href: '#project', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-orbit" aria-hidden="true"><span /><span /><span /></div>
      <div className="footer-intro">
        <div>
          <p className="footer-kicker">DE LA IDEA AL CÓDIGO</p>
          <h2>Siempre hay algo<br /><em>nuevo por construir.</em></h2>
        </div>
        <a className="footer-contact" href="#contact">Conversemos <span aria-hidden="true">↗</span></a>
      </div>
      <div className="footer-bottom">
        <p><strong>JA / DEV</strong><span>Jesús Antonio © 2026</span></p>
        <nav aria-label="Navegación del pie de página">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <a className="footer-top" href="#home" aria-label="Volver al inicio">↑</a>
      </div>
    </footer>
  );
}