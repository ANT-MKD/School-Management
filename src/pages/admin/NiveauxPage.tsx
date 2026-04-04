import AdminLayout from '../../components/AdminLayout'

export default function NiveauxPage() {
  const niveaux = [
    { code: 'L1', name: 'Licence 1', filiere: 'Tous', credits: 60, semestres: 2, classes: 6 },
    { code: 'L2', name: 'Licence 2', filiere: 'Tous', credits: 60, semestres: 2, classes: 5 },
    { code: 'L3', name: 'Licence 3', filiere: 'Tous', credits: 60, semestres: 2, classes: 4 },
    { code: 'M1', name: 'Master 1', filiere: 'Informatique, Finance', credits: 60, semestres: 2, classes: 3 },
    { code: 'M2', name: 'Master 2', filiere: 'Informatique', credits: 30, semestres: 1, classes: 1 },
  ]

  return (
    <AdminLayout>
      <main className="admin-main">
        <div className="dashboard-header">
          <div>
            <h1>Niveaux d'Études</h1>
            <p>Configuration des niveaux du système LMD.</p>
          </div>
          <button className="btn btn-primary">
            <i className="fas fa-plus"></i> Ajouter un Niveau
          </button>
        </div>

        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Niveau</th>
                <th>Filières concernées</th>
                <th>Crédits ECTS</th>
                <th>Semestres</th>
                <th>Classes actives</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {niveaux.map((n) => (
                <tr key={n.code}>
                  <td>
                    <span style={{
                      background: 'rgba(16,185,129,0.1)',
                      color: 'var(--secondary)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                      fontWeight: '700',
                      fontSize: '0.82rem'
                    }}>{n.code}</span>
                  </td>
                  <td><strong>{n.name}</strong></td>
                  <td style={{ color: 'var(--text-light)', fontSize: '0.88rem' }}>{n.filiere}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <i className="fas fa-star" style={{ color: 'var(--accent)', fontSize: '0.75rem' }}></i>
                      <strong>{n.credits} crédits</strong>
                    </div>
                  </td>
                  <td><strong>{n.semestres}</strong></td>
                  <td><span className="status-badge status-active">{n.classes} classes</span></td>
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
