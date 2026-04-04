import AdminLayout from '../../components/AdminLayout'

export default function FraisPage() {
  const frais = [
    { code: 'FRAIS-INFO-L1', nom: 'Frais de scolarité L1 Informatique', filiere: 'Informatique', niveau: 'Licence 1', montant: 500000, echeances: 4 },
    { code: 'FRAIS-INFO-L2', nom: 'Frais de scolarité L2 Informatique', filiere: 'Informatique', niveau: 'Licence 2', montant: 550000, echeances: 4 },
    { code: 'FRAIS-INFO-L3', nom: 'Frais de scolarité L3 Informatique', filiere: 'Informatique', niveau: 'Licence 3', montant: 600000, echeances: 4 },
    { code: 'FRAIS-DROIT-L1', nom: 'Frais de scolarité L1 Droit', filiere: 'Droit', niveau: 'Licence 1', montant: 450000, echeances: 3 },
    { code: 'FRAIS-M1', nom: 'Frais de scolarité M1 (toutes filières)', filiere: 'Toutes', niveau: 'Master 1', montant: 750000, echeances: 4 },
    { code: 'FRAIS-INSCR', nom: 'Frais d\'inscription (1ère inscription)', filiere: 'Toutes', niveau: 'Tous', montant: 75000, echeances: 1 },
    { code: 'FRAIS-EXAMEN', nom: 'Frais d\'examen semestriel', filiere: 'Toutes', niveau: 'Tous', montant: 25000, echeances: 1 },
  ]

  return (
    <AdminLayout>
      <main className="admin-main">
        <div className="dashboard-header">
          <div>
            <h1>Configuration des Frais</h1>
            <p>Paramétrage des frais de scolarité par filière et niveau.</p>
          </div>
          <button className="btn btn-primary">
            <i className="fas fa-plus"></i> Nouveau Frais
          </button>
        </div>

        <div style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '12px', padding: '1rem 1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <i className="fas fa-exclamation-triangle" style={{ color: 'var(--accent)', fontSize: '1.1rem' }}></i>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>
            Toute modification des frais prend effet pour les nouvelles inscriptions. Les contrats existants ne sont pas impactés sauf modification manuelle.
          </p>
        </div>

        <div className="table-filters">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Rechercher un frais..." />
          </div>
          <select className="filter-select">
            <option>Toutes les filières</option>
            <option>Informatique</option>
            <option>Droit</option>
          </select>
        </div>

        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Désignation</th>
                <th>Filière</th>
                <th>Niveau</th>
                <th>Montant Total</th>
                <th>Échéances</th>
                <th>Par Échéance</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {frais.map((f) => (
                <tr key={f.code}>
                  <td><code style={{ background: 'var(--bg-alt)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.78rem' }}>{f.code}</code></td>
                  <td><strong>{f.nom}</strong></td>
                  <td>{f.filiere}</td>
                  <td><span className="status-badge status-active">{f.niveau}</span></td>
                  <td><strong style={{ color: 'var(--primary)', fontSize: '0.95rem' }}>{f.montant.toLocaleString('fr-FR')} FCFA</strong></td>
                  <td>{f.echeances}×</td>
                  <td style={{ color: 'var(--text-light)' }}>{Math.round(f.montant / f.echeances).toLocaleString('fr-FR')} FCFA</td>
                  <td>
                    <div className="action-btns">
                      <button className="btn-icon edit"><i className="fas fa-pen"></i></button>
                      <button className="btn-icon delete"><i className="fas fa-trash"></i></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </AdminLayout>
  )
}
