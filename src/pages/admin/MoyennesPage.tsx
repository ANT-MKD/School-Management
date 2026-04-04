import AdminLayout from '../../components/AdminLayout'

export default function MoyennesPage() {
  const moyennes = [
    { etudiant: 'Fatou Diallo', matricule: 'ETU-2024-001', classe: 'L2 Info', s1: 14.8, s2: 15.2, annuelle: 15.0, credits: 60, statut: 'Admis' },
    { etudiant: 'Moussa Sy', matricule: 'ETU-2024-002', classe: 'L1 Éco', s1: 9.5, s2: 10.2, annuelle: 9.9, credits: 30, statut: 'Ajourné' },
    { etudiant: 'Aïssatou Ba', matricule: 'ETU-2024-003', classe: 'L2 Droit', s1: 16.1, s2: 15.8, annuelle: 15.9, credits: 60, statut: 'Admis' },
    { etudiant: 'Oumar Diop', matricule: 'ETU-2024-004', classe: 'M1 Finance', s1: 13.2, s2: 14.0, annuelle: 13.6, credits: 60, statut: 'Admis' },
    { etudiant: 'Mariama Fall', matricule: 'ETU-2024-005', classe: 'L3 Info', s1: 17.5, s2: 18.1, annuelle: 17.8, credits: 60, statut: 'Admis' },
    { etudiant: 'Ibrahima Ndiaye', matricule: 'ETU-2024-006', classe: 'L1 Info', s1: 8.2, s2: null, annuelle: null, credits: 0, statut: 'Défaillant' },
  ]

  const statutClass: Record<string, string> = {
    'Admis': 'status-active',
    'Ajourné': 'status-pending',
    'Défaillant': 'status-inactive',
  }

  return (
    <AdminLayout>
      <main className="admin-main">
        <div className="dashboard-header">
          <div>
            <h1>Moyennes Annuelles</h1>
            <p>Résultats consolidés par étudiant pour l'année 2023/2024.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-outline">
              <i className="fas fa-file-excel"></i> Exporter Excel
            </button>
            <button className="btn btn-primary">
              <i className="fas fa-calculator"></i> Calculer les moyennes
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="finance-stats">
          <div className="finance-stat-card">
            <p>Total étudiants</p>
            <h3>2 450</h3>
            <div className="sub">Cette promotion</div>
          </div>
          <div className="finance-stat-card">
            <p>Taux de réussite</p>
            <h3>68%</h3>
            <div className="sub" style={{ color: 'var(--secondary)' }}>↑ +3% vs an dernier</div>
          </div>
          <div className="finance-stat-card">
            <p>Moyenne générale</p>
            <h3>12.4/20</h3>
            <div className="sub">Toutes filières</div>
          </div>
          <div className="finance-stat-card">
            <p>Mentions TB+</p>
            <h3>15%</h3>
            <div className="sub">≥ 16/20</div>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <select className="filter-select" style={{ marginRight: '1rem' }}>
            <option>Toutes les classes</option>
            <option>Licence 1 Informatique</option>
            <option>Licence 2 Informatique</option>
          </select>
          <select className="filter-select">
            <option>Tous les statuts</option>
            <option>Admis</option>
            <option>Ajourné</option>
            <option>Défaillant</option>
          </select>
        </div>

        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Étudiant</th>
                <th>Matricule</th>
                <th>Classe</th>
                <th>Moy. S1</th>
                <th>Moy. S2</th>
                <th>Moy. Annuelle</th>
                <th>Crédits</th>
                <th>Décision</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {moyennes.map((m) => (
                <tr key={m.matricule}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(m.etudiant)}&background=4f46e5&color=fff`} style={{ width: '30px', height: '30px', borderRadius: '50%' }} alt="" />
                      <strong>{m.etudiant}</strong>
                    </div>
                  </td>
                  <td style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>{m.matricule}</td>
                  <td>{m.classe}</td>
                  <td><strong style={{ color: (m.s1 ?? 0) >= 10 ? 'var(--secondary)' : '#ef4444' }}>{m.s1?.toFixed(1) ?? 'N/A'}</strong></td>
                  <td><strong style={{ color: m.s2 !== null && m.s2 >= 10 ? 'var(--secondary)' : m.s2 === null ? 'var(--text-light)' : '#ef4444' }}>{m.s2?.toFixed(1) ?? 'N/A'}</strong></td>
                  <td><strong style={{ fontSize: '1rem', color: m.annuelle !== null && m.annuelle >= 10 ? 'var(--primary)' : '#ef4444' }}>{m.annuelle?.toFixed(1) ?? 'N/A'}</strong></td>
                  <td>{m.credits > 0 ? <span style={{ color: 'var(--secondary)', fontWeight: '600' }}>{m.credits} cr.</span> : <span style={{ color: 'var(--text-light)' }}>—</span>}</td>
                  <td><span className={`status-badge ${statutClass[m.statut]}`}>{m.statut}</span></td>
                  <td>
                    <div className="action-btns">
                      <button className="btn-icon"><i className="fas fa-eye"></i></button>
                      <button className="btn-icon"><i className="fas fa-file-pdf"></i></button>
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
