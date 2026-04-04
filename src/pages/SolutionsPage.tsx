import PublicNav from '../components/PublicNav'
import PublicFooter from '../components/PublicFooter'
import { Link } from 'react-router-dom'

export default function SolutionsPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-color)' }}>
      <PublicNav />

      <div style={{ paddingTop: '72px' }}>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #7c3aed 100%)', padding: '5rem 2rem', textAlign: 'center', color: '#fff' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-heading)', marginBottom: '1rem', color: '#fff' }}>
            Nos Solutions
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: '600px', margin: '0 auto' }}>
            Des outils adaptés à chaque dimension de la gestion universitaire, conçus pour les réalités africaines.
          </p>
        </section>

        <section className="solutions-section">
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="feature-icon" style={{ background: 'rgba(79,70,229,0.1)', color: 'var(--primary)', marginBottom: '1rem' }}>
                <i className="fas fa-university"></i>
              </div>
              <h3>Gestion Académique LMD</h3>
              <p>Structurez vos filières, niveaux et semestres selon le système Licence-Master-Doctorat. Gérez les UE, EC, et coefficients automatiquement.</p>
            </div>

            <div className="solution-card">
              <div className="feature-icon" style={{ background: 'rgba(16,185,129,0.1)', color: 'var(--secondary)', marginBottom: '1rem' }}>
                <i className="fas fa-wallet"></i>
              </div>
              <h3>Paiements Mobile (Wave / OM)</h3>
              <p>Acceptez les paiements via Wave, Orange Money et Free Money. Réconciliation automatique et reçus instantanés par email et SMS.</p>
            </div>

            <div className="solution-card">
              <div className="feature-icon" style={{ background: 'rgba(245,158,11,0.1)', color: 'var(--accent)', marginBottom: '1rem' }}>
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3>Gestion des Vacataires</h3>
              <p>Suivez les heures d'enseignement, calculez les rémunérations et générez les états de paiement des professeurs vacataires.</p>
            </div>

            <div className="solution-card">
              <div className="feature-icon" style={{ background: 'rgba(79,70,229,0.1)', color: 'var(--primary)', marginBottom: '1rem' }}>
                <i className="fas fa-file-alt"></i>
              </div>
              <h3>Relevés & Bulletins PDF</h3>
              <p>Générez des relevés de notes et bulletins PDF conformes aux normes LMD avec tampons et signatures numériques.</p>
            </div>

            <div className="solution-card">
              <div className="feature-icon" style={{ background: 'rgba(16,185,129,0.1)', color: 'var(--secondary)', marginBottom: '1rem' }}>
                <i className="fas fa-clock"></i>
              </div>
              <h3>Emploi du Temps</h3>
              <p>Planifiez et gérez les emplois du temps des classes, professeurs et salles. Détection automatique des conflits de créneaux.</p>
            </div>

            <div className="solution-card">
              <div className="feature-icon" style={{ background: 'rgba(245,158,11,0.1)', color: 'var(--accent)', marginBottom: '1rem' }}>
                <i className="fas fa-chart-bar"></i>
              </div>
              <h3>Statistiques & Rapports</h3>
              <p>Tableaux de bord dynamiques avec indicateurs clés : taux de réussite, taux de recouvrement, présence des étudiants.</p>
            </div>

            <div className="solution-card">
              <div className="feature-icon" style={{ background: 'rgba(79,70,229,0.1)', color: 'var(--primary)', marginBottom: '1rem' }}>
                <i className="fas fa-user-graduate"></i>
              </div>
              <h3>Portail Étudiant</h3>
              <p>Un espace dédié où les étudiants consultent leurs notes, emplois du temps, attestations et paient leurs frais de scolarité.</p>
            </div>

            <div className="solution-card">
              <div className="feature-icon" style={{ background: 'rgba(16,185,129,0.1)', color: 'var(--secondary)', marginBottom: '1rem' }}>
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Application Mobile</h3>
              <p>Accédez à EduManage depuis votre smartphone. Notifications en temps réel pour les paiements et événements académiques.</p>
            </div>

            <div className="solution-card">
              <div className="feature-icon" style={{ background: 'rgba(245,158,11,0.1)', color: 'var(--accent)', marginBottom: '1rem' }}>
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Sécurité & Conformité</h3>
              <p>Données hébergées localement, chiffrement de bout en bout, gestion fine des rôles et permissions pour chaque utilisateur.</p>
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Prêt à transformer votre établissement ?</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>Démarrez votre essai gratuit de 30 jours dès aujourd'hui.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#" className="btn btn-primary">Essai gratuit 30 jours</a>
              <Link to="/pricing" className="btn btn-outline">Voir les tarifs</Link>
            </div>
          </div>
        </section>
      </div>

      <PublicFooter />
    </div>
  )
}
