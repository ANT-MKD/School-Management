import AdminLayout from '../../components/AdminLayout'

export default function UesPage() {
  const ues = [
    { code: 'UE-INFO-101', name: 'Algorithmique et Structures de Données', filiere: 'Informatique', semestre: 'S1', credits: 6, ecs: 3 },
    { code: 'UE-INFO-102', name: 'Programmation Orientée Objet', filiere: 'Informatique', semestre: 'S1', credits: 6, ecs: 2 },
    { code: 'UE-INFO-201', name: 'Base de Données', filiere: 'Informatique', semestre: 'S3', credits: 6, ecs: 3 },
    { code: 'UE-INFO-202', name: 'Réseaux Informatiques', filiere: 'Informatique', semestre: 'S3', credits: 6, ecs: 2 },
    { code: 'UE-DROIT-101', name: 'Introduction au Droit Civil', filiere: 'Droit', semestre: 'S1', credits: 8, ecs: 3 },
    { code: 'UE-ECO-101', name: 'Microéconomie', filiere: 'Économie', semestre: 'S1', credits: 6, ecs: 2 },
    { code: 'UE-ECO-201', name: 'Macroéconomie Avancée', filiere: 'Économie', semestre: 'S3', credits: 6, ecs: 3 },
  ]

  return (
    <AdminLayout>
      <main className="admin-main">
        <div className="dashboard-header">
          <div>
            <h1>Unités d'Enseignement (UE)</h1>
            <p>Configuration des UE par filière et semestre.</p>
          </div>
          <button className="btn btn-primary">
            <i className="fas fa-plus"></i> Créer une UE
          </button>
        </div>

        <div className="table-filters">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Rechercher une UE..." />
          </div>
          <select className="filter-select">
            <option>Toutes les filières</option>
            <option>Informatique</option>
            <option>Droit</option>
            <option>Économie</option>
          </select>
          <select className="filter-select">
            <option>Tous les semestres</option>
            <option>S1</option><option>S2</option><option>S3</option><option>S4</option>
          </select>
        </div>

        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Code UE</th>
                <th>Intitulé</th>
                <th>Filière</th>
                <th>Semestre</th>
                <th>Crédits ECTS</th>
                <th>Nbre EC</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {ues.map((u) => (
                <tr key={u.code}>
                  <td><code style={{ background: 'var(--bg-alt)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.78rem' }}>{u.code}</code></td>
                  <td><strong>{u.name}</strong></td>
                  <td>{u.filiere}</td>
                  <td><span style={{ background: 'rgba(245,158,11,0.1)', color: 'var(--accent)', padding: '0.2rem 0.6rem', borderRadius: '6px', fontWeight: '700', fontSize: '0.82rem' }}>{u.semestre}</span></td>
                  <td><strong>{u.credits}</strong> <span style={{ color: 'var(--text-light)' }}>ECTS</span></td>
                  <td><span className="status-badge status-active">{u.ecs} EC</span></td>
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
