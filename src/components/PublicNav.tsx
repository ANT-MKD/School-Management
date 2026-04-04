import { Link } from 'react-router-dom'

export default function PublicNav() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <i className="fas fa-graduation-cap"></i> Edu<span>Manage</span>
      </Link>
      <ul className="nav-links">
        <li><a href="#features">Fonctionnalités</a></li>
        <li><a href="#finance">Paiements (Wave/OM)</a></li>
        <li><Link to="/solutions">Solutions</Link></li>
        <li><Link to="/pricing">Tarifs</Link></li>
      </ul>
      <div className="nav-actions">
        <Link to="/login" className="btn btn-outline">Se Connecter</Link>
        <a href="#cta" className="btn btn-primary">Demander une Démo</a>
      </div>
      <button className="mobile-menu-btn">
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  )
}
