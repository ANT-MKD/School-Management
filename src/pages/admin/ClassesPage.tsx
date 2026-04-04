import AdminLayout from '../../components/AdminLayout'

export default function ClassesPage() {
  const classes = [
    { code: 'CL-INFO-L1', name: 'Licence 1 Informatique', filiere: 'Informatique', niveau: 'Licence 1', effectif: 85, prof: 'Dr. Abdou Sow' },
    { code: 'CL-INFO-L2', name: 'Licence 2 Informatique', filiere: 'Informatique', niveau: 'Licence 2', effectif: 72, prof: 'Dr. Ibrahima Gueye' },
    { code: 'CL-INFO-L3', name: 'Licence 3 Informatique', filiere: 'Informatique', niveau: 'Licence 3', effectif: 58, prof: 'Dr. Abdou Sow' },
    { code: 'CL-DROIT-L1', name: 'Licence 1 Sciences Juridiques', filiere: 'Droit', niveau: 'Licence 1', effectif: 110, prof: 'Prof. Aida Ndiaye' },
    { code: 'CL-ECO-L2', name: 'Licence 2 Économie-Gestion', filiere: 'Économie', niveau: 'Licence 2', effectif: 95, prof: 'Dr. Cheikh Mbaye' },
    { code: 'CL-FIN-M1', name: 'Master 1 Finance', filiere: 'Finance', niveau: 'Master 1', effectif: 42, prof: 'Dr. Cheikh Mbaye' },
  ]

  return (
    <AdminLayout>
      <main className="admin-main">
        <div className="dashboard-header">
          <div>
            <h1>Gestion des Classes</h1>
            <p>Toutes les classes actives par filière et niveau.</p>
          </div>
          <button className="btn btn-primary">
            <i className="fas fa-plus"></i> Créer une Classe
          </button>
        </div>

        <div className="table-filters">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Rechercher une classe..." />
          </div>
          <select className="filter-select">
            <option>Toutes les filières</option>
            <option>Informatique</option>
            <option>Droit</option>
            <option>Économie</option>
          </select>
        </div>

        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Nom de la Classe</th>
                <th>Filière</th>
                <th>Niveau</th>
                <th>Effectif</th>
                <th>Responsable</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((c) => (
                <tr key={c.code}>
                  <td><code style={{ background: 'var(--bg-alt)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.82rem' }}>{c.code}</code></td>
                  <td><strong>{c.name}</strong></td>
                  <td>{c.filiere}</td>
                  <td><span className="status-badge status-active">{c.niveau}</span></td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <i className="fas fa-users" style={{ color: 'var(--text-light)' }}></i>
                      <strong>{c.effectif}</strong>
                    </div>
                  </td>
                  <td>{c.prof}</td>
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
