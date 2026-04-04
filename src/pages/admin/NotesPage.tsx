import AdminLayout from '../../components/AdminLayout'

export default function NotesPage() {
  const notes = [
    { etudiant: 'Fatou Diallo', matricule: 'ETU-2024-001', ec: 'Algorithmes', cc: 14.5, examen: 16, moyenne: 15.6 },
    { etudiant: 'Moussa Sy', matricule: 'ETU-2024-002', ec: 'Algorithmes', cc: 8.0, examen: 11, moyenne: 10.0 },
    { etudiant: 'Aïssatou Ba', matricule: 'ETU-2024-003', ec: 'Droit Civil', cc: 15, examen: 17, moyenne: 16.4 },
    { etudiant: 'Oumar Diop', matricule: 'ETU-2024-004', ec: 'Microéconomie', cc: 12, examen: 13.5, moyenne: 13.0 },
    { etudiant: 'Mariama Fall', matricule: 'ETU-2024-005', ec: 'Java OOP', cc: 17, examen: 18.5, moyenne: 18.0 },
    { etudiant: 'Ibrahima Ndiaye', matricule: 'ETU-2024-006', ec: 'Algorithmes', cc: 11, examen: 9, moyenne: 9.8 },
  ]

  function getMention(note: number) {
    if (note >= 16) return { label: 'TB', color: 'var(--secondary)' }
    if (note >= 14) return { label: 'B', color: 'var(--primary)' }
    if (note >= 12) return { label: 'AB', color: 'var(--accent)' }
    if (note >= 10) return { label: 'P', color: '#64748b' }
    return { label: 'F', color: '#ef4444' }
  }

  return (
    <AdminLayout>
      <main className="admin-main">
        <div className="dashboard-header">
          <div>
            <h1>Saisie des Notes</h1>
            <p>Gestion des notes par EC et semestre.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-outline">
              <i className="fas fa-upload"></i> Importer CSV
            </button>
            <button className="btn btn-primary">
              <i className="fas fa-plus"></i> Saisir une Note
            </button>
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <select className="filter-select">
            <option>Sélectionner une Classe</option>
            <option>Licence 1 Informatique</option>
            <option>Licence 2 Informatique</option>
          </select>
          <select className="filter-select">
            <option>Sélectionner une UE</option>
            <option>UE-INFO-101 Algorithmique</option>
            <option>UE-INFO-102 POO</option>
          </select>
          <select className="filter-select">
            <option>Sélectionner un EC</option>
            <option>Algorithmes et Complexité</option>
          </select>
          <button className="btn btn-primary"><i className="fas fa-search"></i> Charger</button>
        </div>

        <div className="table-container">
          <div className="table-header">
            <h3><i className="fas fa-pen" style={{ color: 'var(--primary)', marginRight: '0.5rem' }}></i> Notes — Algorithmes et Complexité</h3>
            <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
              <i className="fas fa-save"></i> Enregistrer les notes
            </button>
          </div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Étudiant</th>
                <th>Matricule</th>
                <th>Matière</th>
                <th>CC (30%)</th>
                <th>Examen (70%)</th>
                <th>Moyenne</th>
                <th>Mention</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((n) => {
                const mention = getMention(n.moyenne)
                return (
                  <tr key={n.matricule + n.ec}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(n.etudiant)}&background=4f46e5&color=fff`} style={{ width: '30px', height: '30px', borderRadius: '50%' }} alt="" />
                        <strong>{n.etudiant}</strong>
                      </div>
                    </td>
                    <td style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>{n.matricule}</td>
                    <td>{n.ec}</td>
                    <td>
                      <span style={{ fontWeight: '600', color: n.cc >= 10 ? 'var(--secondary)' : '#ef4444' }}>
                        {n.cc}/20
                      </span>
                    </td>
                    <td>
                      <span style={{ fontWeight: '600', color: n.examen >= 10 ? 'var(--secondary)' : '#ef4444' }}>
                        {n.examen}/20
                      </span>
                    </td>
                    <td>
                      <strong style={{ fontSize: '1rem' }}>{n.moyenne.toFixed(1)}/20</strong>
                    </td>
                    <td>
                      <span style={{
                        background: `${mention.color}20`,
                        color: mention.color,
                        padding: '0.2rem 0.6rem',
                        borderRadius: '6px',
                        fontWeight: '700',
                        fontSize: '0.82rem'
                      }}>{mention.label}</span>
                    </td>
                    <td>
                      <button className="btn-icon edit"><i className="fas fa-pen"></i></button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </main>
    </AdminLayout>
  )
}
