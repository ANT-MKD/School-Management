import AdminLayout from '../../components/AdminLayout'

export default function SemestresPage() {
  const semestres = [
    { code: 'S1', niveau: 'Licence 1', periode: 'Oct 2023 – Jan 2024', statut: 'Terminé', ues: 5 },
    { code: 'S2', niveau: 'Licence 1', periode: 'Fév – Jun 2024', statut: 'En cours', ues: 5 },
    { code: 'S3', niveau: 'Licence 2', periode: 'Oct 2023 – Jan 2024', statut: 'Terminé', ues: 6 },
    { code: 'S4', niveau: 'Licence 2', periode: 'Fév – Jun 2024', statut: 'En cours', ues: 5 },
    { code: 'S5', niveau: 'Licence 3', periode: 'Oct 2023 – Jan 2024', statut: 'Terminé', ues: 5 },
    { code: 'S6', niveau: 'Licence 3', periode: 'Fév – Jun 2024', statut: 'Planifié', ues: 4 },
    { code: 'S7', niveau: 'Master 1', periode: 'Oct 2023 – Jan 2024', statut: 'Terminé', ues: 4 },
    { code: 'S8', niveau: 'Master 1', periode: 'Fév – Jun 2024', statut: 'En cours', ues: 3 },
  ]

  const statutClass: Record<string, string> = {
    'Terminé': 'status-active',
    'En cours': 'status-pending',
    'Planifié': 'status-inactive',
  }

  return (
    <AdminLayout>
      <main className="admin-main">
        <div className="dashboard-header">
          <div>
            <h1>Semestres</h1>
            <p>Gestion des périodes académiques par niveau.</p>
          </div>
          <button className="btn btn-primary">
            <i className="fas fa-plus"></i> Ajouter un Semestre
          </button>
        </div>

        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Niveau</th>
                <th>Période</th>
                <th>UEs</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {semestres.map((s) => (
                <tr key={s.code + s.niveau}>
                  <td>
                    <span style={{
                      background: 'rgba(245,158,11,0.1)',
                      color: 'var(--accent)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                      fontWeight: '700',
                      fontSize: '0.82rem'
                    }}>{s.code}</span>
                  </td>
                  <td><strong>{s.niveau}</strong></td>
                  <td style={{ color: 'var(--text-light)' }}>
                    <i className="fas fa-calendar" style={{ marginRight: '0.4rem', color: 'var(--primary)' }}></i>
                    {s.periode}
                  </td>
                  <td><strong>{s.ues} UEs</strong></td>
                  <td><span className={`status-badge ${statutClass[s.statut]}`}>{s.statut}</span></td>
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
