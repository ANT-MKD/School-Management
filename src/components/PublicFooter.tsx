import { Link } from 'react-router-dom'

export default function PublicFooter() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo">
            <i className="fas fa-graduation-cap"></i> Edu<span>Manage</span>
          </div>
          <p>Le SaaS n°1 de gestion académique pour les universités en Afrique francophone.</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
          </div>
        </div>
        <div>
          <h4 className="footer-title">Produit</h4>
          <ul className="footer-links">
            <li><a href="#features">Fonctionnalités</a></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/pricing">Tarifs</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-title">Ressources</h4>
          <ul className="footer-links">
            <li><a href="#">Blog EdTech</a></li>
            <li><a href="#">Guide d'Implémentation</a></li>
            <li><a href="#">Centre d'Aide</a></li>
            <li><a href="#">API Docs (Wave/OM)</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-title">Entreprise</h4>
          <ul className="footer-links">
            <li><a href="#">À Propos</a></li>
            <li><a href="#">Partenaires</a></li>
            <li><a href="#">Contactez-nous</a></li>
            <li><a href="#">Dakar, Sénégal</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 EduManage. Tous droits réservés. Construit avec ❤️ pour l'enseignement africain.</p>
      </div>
    </footer>
  )
}
