import PublicNav from '../components/PublicNav'
import PublicFooter from '../components/PublicFooter'

export default function PricingPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-alt)' }}>
      <PublicNav />

      <div style={{ paddingTop: '72px' }}>
        <section className="pricing-section">
          <div className="section-header">
            <h2 className="text-gradient">Tarifs simples et transparents</h2>
            <p>Choisissez le plan adapté à la taille de votre établissement. Pas de frais cachés.</p>
          </div>

          <div className="pricing-grid">
            {/* Starter */}
            <div className="price-card">
              <h3 className="pack-name">Starter</h3>
              <p className="pack-desc">Idéal pour les petits établissements qui démarrent leur transformation digitale.</p>
              <div className="pack-price">
                75 000 <span>FCFA / mois</span>
              </div>
              <ul className="pack-features">
                <li><i className="fas fa-check-circle"></i> Jusqu'à 300 étudiants</li>
                <li><i className="fas fa-check-circle"></i> Gestion académique LMD</li>
                <li><i className="fas fa-check-circle"></i> 5 comptes utilisateurs</li>
                <li><i className="fas fa-check-circle"></i> Relevés de notes</li>
                <li><i className="fas fa-check-circle"></i> Support par email</li>
                <li><i className="fas fa-times-circle" style={{ color: '#94a3b8' }}></i> Intégration Wave/OM</li>
                <li><i className="fas fa-times-circle" style={{ color: '#94a3b8' }}></i> API avancée</li>
              </ul>
              <a href="#" className="btn btn-outline btn-full-width">Commencer gratuitement</a>
            </div>

            {/* Pro - Popular */}
            <div className="price-card popular">
              <span className="popular-badge">⭐ Le plus populaire</span>
              <h3 className="pack-name">Pro</h3>
              <p className="pack-desc">Pour les universités en croissance avec des besoins financiers avancés.</p>
              <div className="pack-price">
                150 000 <span>FCFA / mois</span>
              </div>
              <ul className="pack-features">
                <li><i className="fas fa-check-circle"></i> Jusqu'à 1 500 étudiants</li>
                <li><i className="fas fa-check-circle"></i> Gestion académique LMD complète</li>
                <li><i className="fas fa-check-circle"></i> 20 comptes utilisateurs</li>
                <li><i className="fas fa-check-circle"></i> Relevés & Bulletins PDF</li>
                <li><i className="fas fa-check-circle"></i> Intégration Wave & Orange Money</li>
                <li><i className="fas fa-check-circle"></i> Gestion des vacataires</li>
                <li><i className="fas fa-check-circle"></i> Support prioritaire 24/7</li>
              </ul>
              <a href="#" className="btn btn-primary btn-full-width">Démarrer l'essai gratuit</a>
            </div>

            {/* Enterprise */}
            <div className="price-card">
              <h3 className="pack-name">Entreprise</h3>
              <p className="pack-desc">Pour les groupes universitaires et les grandes institutions avec des besoins sur mesure.</p>
              <div className="pack-price">
                Sur devis
              </div>
              <ul className="pack-features">
                <li><i className="fas fa-check-circle"></i> Étudiants illimités</li>
                <li><i className="fas fa-check-circle"></i> Utilisateurs illimités</li>
                <li><i className="fas fa-check-circle"></i> Toutes les intégrations</li>
                <li><i className="fas fa-check-circle"></i> API complète (Wave/OM/Free)</li>
                <li><i className="fas fa-check-circle"></i> Personnalisation complète</li>
                <li><i className="fas fa-check-circle"></i> SLA garanti 99.9%</li>
                <li><i className="fas fa-check-circle"></i> Gestionnaire de compte dédié</li>
              </ul>
              <a href="#" className="btn btn-outline btn-full-width">Contacter l'équipe commerciale</a>
            </div>
          </div>

          {/* FAQ simple */}
          <div style={{ maxWidth: '700px', margin: '4rem auto 0', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Questions fréquentes</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
              <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.25rem' }}>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>Y a-t-il une période d'essai gratuite ?</h4>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Oui, tous nos plans incluent 30 jours d'essai gratuit sans engagement et sans carte bancaire requise.</p>
              </div>
              <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.25rem' }}>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>Comment fonctionne la migration des données ?</h4>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Notre équipe vous accompagne dans la migration de vos données existantes (Excel, Access, autre logiciel) sans frais supplémentaires.</p>
              </div>
              <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.25rem' }}>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>Les données sont-elles sécurisées ?</h4>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Vos données sont hébergées sur des serveurs sécurisés avec chiffrement AES-256. Sauvegardes automatiques quotidiennes.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <PublicFooter />
    </div>
  )
}
