import AdminLayout from '../../components/AdminLayout'

export default function RelevesPage() {
  const releves = [
    { etudiant: 'Fatou Diallo', matricule: 'ETU-2024-001', classe: 'L2 Informatique', annee: '2023/2024', genere: '15 Jan 2024', statut: 'Disponible' },
    { etudiant: 'Aïssatou Ba', matricule: 'ETU-2024-003', classe: 'L2 Droit', annee: '2023/2024', genere: '15 Jan 2024', statut: 'Disponible' },
    { etudiant: 'Oumar Diop', matricule: 'ETU-2024-004', classe: 'M1 Finance', annee: '2023/2024', genere: '15 Jan 2024', statut: 'Disponible' },
    { etudiant: 'Mariama Fall', matricule: 'ETU-2024-005', classe: 'L3 Informatique', annee: '2023/2024', genere: '15 Jan 2024', statut: 'Disponible' },
    { etudiant: 'Moussa Sy', matricule: 'ETU-2024-002', classe: 'L1 Économie', annee: '2023/2024', genere: '—', statut: 'Non généré' },
  ]

  const statutClass: Record<string, string> = {
    'Disponible': 'status-active',
    'Non généré': 'status-inactive',
    'En cours': 'status-pending',
  }

  return (
    <AdminLayout>
      <main className="admin-main">
        <div className="dashboard-header">
          <div>
            <h1>Relevés de Notes</h1>
            <p>Génération et téléchargement des relevés officiels.</p>
          </div>
          <button className="btn btn-primary">
            <i className="fas fa-file-pdf"></i> Générer tous les relevés
          </button>
        </div>

        <div style={{ background: 'rgba(79,70,229,0.06)', border: '1px solid rgba(79,70,229,0.2)', borderRadius: '12px', padding: '1rem 1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <i className="fas fa-info-circle" style={{ color: 'var(--primary)', fontSize: '1.1rem' }}></i>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>
            Les relevés officiels sont générés en PDF avec signature numérique et cachet de l'établissement. Assurez-vous que toutes les notes ont été saisies avant la génération.
          </p>
        </div>

        <div className="table-filters">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Rechercher un étudiant..." />
          </div>
          <select className="filter-select">
            <option>Toutes les classes</option>
            <option>Licence 1 Informatique</option>
            <option>Licence 2 Informatique</option>
          </select>
        </div>

        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Étudiant</th>
                <th>Matricule</th>
                <th>Classe</th>
                <th>Année Académique</th>
                <th>Généré le</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {releves.map((r) => (
                <tr key={r.matricule}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(r.etudiant)}&background=4f46e5&color=fff`} style={{ width: '30px', height: '30px', borderRadius: '50%' }} alt="" />
                      <strong>{r.etudiant}</strong>
                    </div>
                  </td>
                  <td style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>{r.matricule}</td>
                  <td>{r.classe}</td>
                  <td>
                    <span style={{ background: 'rgba(79,70,229,0.08)', color: 'var(--primary)', padding: '0.2rem 0.6rem', borderRadius: '6px', fontWeight: '600', fontSize: '0.82rem' }}>
                      {r.annee}
                    </span>
                  </td>
                  <td style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>{r.genere}</td>
                  <td><span className={`status-badge ${statutClass[r.statut]}`}>{r.statut}</span></td>
                  <td>
                    <div className="action-btns">
                      {r.statut === 'Disponible' ? (
                        <>
                          <button className="btn-icon"><i className="fas fa-eye"></i></button>
                          <button className="btn-icon"><i className="fas fa-download"></i></button>
                          <button className="btn-icon"><i className="fas fa-envelope"></i></button>
                        </>
                      ) : (
                        <button className="btn-icon" style={{ background: 'var(--primary)', color: '#fff', borderColor: 'var(--primary)' }}>
                          <i className="fas fa-file-pdf"></i>
                        </button>
                      )}
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
