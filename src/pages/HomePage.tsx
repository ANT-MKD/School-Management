import PublicNav from '../components/PublicNav'
import PublicFooter from '../components/PublicFooter'

export default function HomePage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-color)' }}>
      <PublicNav />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Gérez votre université privée <span>avec excellence</span>.</h1>
            <p>EduManage est la première plateforme "tout-en-un" conçue spécifiquement pour le système LMD, les paiements mobiles (Wave/Orange Money) et les réalités des universités privées au Sénégal.</p>
            <div className="hero-buttons">
              <a href="#" className="btn btn-primary">
                Commencer gratuitement <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#" className="btn btn-secondary">
                <i className="fas fa-play"></i> Voir la vidéo
              </a>
            </div>
          </div>
          <div className="hero-graphic">
            <div className="dashboard-preview">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Dashboard Preview"
              />
            </div>
            <div className="floating-card wave">
              <div className="fc-icon icon-wave"><i className="fas fa-wallet"></i></div>
              <div className="fc-text">
                <h4>Paiement Reçu</h4>
                <p>+ 150 000 FCFA</p>
              </div>
            </div>
            <div className="floating-card students">
              <div className="fc-icon icon-success"><i className="fas fa-user-graduate"></i></div>
              <div className="fc-text">
                <h4>Nouvel Inscrit</h4>
                <p>Licence 1 - Info</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="trusted-by">
        <p className="trusted-title">CONÇU POUR LES MEILLEURS ÉTABLISSEMENTS SUPÉRIEURS PRIVÉS</p>
        <div className="logo-grid-wrapper">
          <div className="logo-grid">
            <h3>UCAO</h3>
            <h3>SupDeco</h3>
            <h3>ISM Group</h3>
            <h3>BEM Dakar</h3>
            <h3>AFI L'Université</h3>
            <h3>UCAO</h3>
            <h3>SupDeco</h3>
            <h3>ISM Group</h3>
            <h3>BEM Dakar</h3>
            <h3>AFI L'Université</h3>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="section-header">
          <h2 className="text-gradient">Tout ce dont vous avez besoin, au même endroit.</h2>
          <p>Fini les fichiers Excel dispersés et les processus manuels chronophages. EduManage centralise tout.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card ft-academic">
            <div className="feature-icon"><i className="fas fa-book-open"></i></div>
            <h3>Gestion Académique (LMD)</h3>
            <p>Structurez vos facultés, départements, et classes. Gestion automatisée des crédits, contrôles continus, et génération des relevés de notes conformes.</p>
          </div>
          <div className="feature-card ft-finance">
            <div className="feature-icon"><i className="fas fa-coins"></i></div>
            <h3>Finance & Scolarités</h3>
            <p>Suivez les paiements, gérez les échéanciers, et identifiez instantanément les impayés. Intégration Wave et Orange Money native.</p>
          </div>
          <div className="feature-card ft-hr">
            <div className="feature-icon"><i className="fas fa-chalkboard-teacher"></i></div>
            <h3>Gestion des Vacataires</h3>
            <p>Suivez les heures exactes d'enseignement de vos professeurs vacataires. Génération automatique des états de paiement.</p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT FINANCE */}
      <section className="highlight-section" id="finance">
        <div className="highlight-content">
          <div className="highlight-image">
            <img
              src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&w=600&q=80"
              alt="Mobile Money"
            />
          </div>
          <div className="highlight-text">
            <h2>Connectez vos scolarités aux moyens de paiement locaux.</h2>
            <p>Facilitez la vie de vos étudiants et de leurs parents grâce à l'intégration native des wallets mobiles.</p>
            <ul className="check-list">
              <li><i className="fas fa-check-circle"></i> Intégration API Wave, Orange Money et Free Money.</li>
              <li><i className="fas fa-check-circle"></i> Réconciliation automatique avec le dossier de l'étudiant.</li>
              <li><i className="fas fa-check-circle"></i> Génération instantanée du reçu de paiement envoyée par email.</li>
              <li><i className="fas fa-check-circle"></i> SMS de rappel envoyé aux parents 48h avant l'échéance.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="cta">
        <h2>Prêt à moderniser votre campus ?</h2>
        <p>Rejoignez les institutions qui ont déjà fait le choix de l'excellence opérationnelle.</p>
        <a href="#" className="btn btn-primary" style={{ background: 'white', color: 'var(--primary)' }}>
          Programmer une Démo Gratuite
        </a>
      </section>

      <PublicFooter />
    </div>
  )
}
