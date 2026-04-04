import AdminLayout from '../../components/AdminLayout'

export default function FilieresPage() {
  const filieres = [
    { code: 'INFO', name: 'Informatique', desc: 'Licence & Master en Sciences Informatiques', niveaux: 5, classes: 5, etudiants: 430 },
    { code: 'DROIT', name: 'Sciences Juridiques', desc: 'Droit civil, pénal et des affaires', niveaux: 3, classes: 4, etudiants: 320 },
    { code: 'ECO', name: 'Économie-Gestion', desc: 'Économie, management et entrepreneuriat', niveaux: 3, classes: 4, etudiants: 280 },
    { code: 'FIN', name: 'Finance-Comptabilité', desc: 'Finance, comptabilité et audit', niveaux: 4, classes: 3, etudiants: 210 },
    { code: 'GRH', name: 'Gestion des Ressources Humaines', desc: 'Management RH et droit social', niveaux: 2, classes: 2, etudiants: 95 },
    { code: 'COMM', name: 'Communication & Marketing', desc: 'Marketing digital et communication', niveaux: 3, classes: 3, etudiants: 145 },
  ]

  return (
    <AdminLayout>
      <main className="admin-main">
        <div className="dashboard-header">
          <div>
            <h1>Gestion des Filières</h1>
            <p>Organisation des formations proposées par l'université.</p>
          </div>
          <button className="btn btn-primary">
            <i className="fas fa-plus"></i> Créer une Filière
          </button>
        </div>

        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Filière</th>
                <th>Description</th>
                <th>Niveaux</th>
                <th>Classes</th>
                <th>Étudiants</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filieres.map((f) => (
                <tr key={f.code}>
                  <td>
                    <span style={{
                      background: 'rgba(79,70,229,0.1)',
                      color: 'var(--primary)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                      fontWeight: '700',
                      fontSize: '0.82rem'
                    }}>{f.code}</span>
                  </td>
                  <td><strong>{f.name}</strong></td>
                  <td style={{ color: 'var(--text-light)', fontSize: '0.88rem' }}>{f.desc}</td>
                  <td><strong>{f.niveaux}</strong></td>
                  <td><strong>{f.classes}</strong></td>
                  <td>
                    <span className="status-badge status-active">{f.etudiants} étudiants</span>
                  </td>
                  <td>
                    <div className="action-btns">
                      <button className="btn-icon"><i className="fas fa-eye"></i></button>
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
