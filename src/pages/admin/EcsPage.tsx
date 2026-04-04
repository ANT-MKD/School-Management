import AdminLayout from '../../components/AdminLayout'

export default function EcsPage() {
  const ecs = [
    { code: 'EC-INFO-101A', name: 'Algorithmes et Complexité', ue: 'UE-INFO-101', coeff: 2, cc: 30, examen: 70, prof: 'Dr. Abdou Sow' },
    { code: 'EC-INFO-101B', name: 'Structures de Données', ue: 'UE-INFO-101', coeff: 2, cc: 30, examen: 70, prof: 'Dr. Abdou Sow' },
    { code: 'EC-INFO-101C', name: 'TP Algorithmique', ue: 'UE-INFO-101', coeff: 1, cc: 100, examen: 0, prof: 'Dr. Abdou Sow' },
    { code: 'EC-INFO-102A', name: 'Java Orienté Objet', ue: 'UE-INFO-102', coeff: 2, cc: 40, examen: 60, prof: 'Dr. Ibrahima Gueye' },
    { code: 'EC-INFO-102B', name: 'Design Patterns', ue: 'UE-INFO-102', coeff: 2, cc: 30, examen: 70, prof: 'Dr. Ibrahima Gueye' },
    { code: 'EC-DROIT-101A', name: 'Droit des Personnes', ue: 'UE-DROIT-101', coeff: 3, cc: 20, examen: 80, prof: 'Prof. Aida Ndiaye' },
    { code: 'EC-ECO-101A', name: 'Théorie du Consommateur', ue: 'UE-ECO-101', coeff: 2, cc: 30, examen: 70, prof: 'Dr. Cheikh Mbaye' },
  ]

  return (
    <AdminLayout>
      <main className="admin-main">
        <div className="dashboard-header">
          <div>
            <h1>Éléments Constitutifs (EC)</h1>
            <p>Gestion des matières et leur pondération.</p>
          </div>
          <button className="btn btn-primary">
            <i className="fas fa-plus"></i> Créer un EC
          </button>
        </div>

        <div className="table-filters">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Rechercher un EC..." />
          </div>
          <select className="filter-select">
            <option>Toutes les UEs</option>
            <option>UE-INFO-101</option>
            <option>UE-INFO-102</option>
          </select>
        </div>

        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Code EC</th>
                <th>Matière</th>
                <th>UE parente</th>
                <th>Coefficient</th>
                <th>CC / Examen</th>
                <th>Professeur</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {ecs.map((ec) => (
                <tr key={ec.code}>
                  <td><code style={{ background: 'var(--bg-alt)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.78rem' }}>{ec.code}</code></td>
                  <td><strong>{ec.name}</strong></td>
                  <td style={{ color: 'var(--primary)', fontSize: '0.85rem' }}>{ec.ue}</td>
                  <td><strong>× {ec.coeff}</strong></td>
                  <td>
                    <div style={{ fontSize: '0.82rem' }}>
                      <span style={{ color: 'var(--secondary)' }}>CC: {ec.cc}%</span>
                      {ec.examen > 0 && <span style={{ color: 'var(--text-light)', marginLeft: '0.5rem' }}>Exam: {ec.examen}%</span>}
                    </div>
                  </td>
                  <td>{ec.prof}</td>
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
