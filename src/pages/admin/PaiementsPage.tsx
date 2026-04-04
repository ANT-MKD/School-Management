import AdminLayout from '../../components/AdminLayout'

export default function PaiementsPage() {
  const paiements = [
    { etudiant: 'Fatou Diallo', matricule: 'ETU-2024-001', montant: 75000, mode: 'Wave', date: '10 Jan 2024', ref: 'WAVE-2024-001', statut: 'Confirmé' },
    { etudiant: 'Aïssatou Ba', matricule: 'ETU-2024-003', montant: 150000, mode: 'Orange Money', date: '09 Jan 2024', ref: 'OM-2024-015', statut: 'Confirmé' },
    { etudiant: 'Oumar Diop', matricule: 'ETU-2024-004', montant: 50000, mode: 'Espèces', date: '08 Jan 2024', ref: 'CASH-2024-007', statut: 'Confirmé' },
    { etudiant: 'Moussa Sy', matricule: 'ETU-2024-002', montant: 75000, mode: 'Wave', date: '05 Jan 2024', ref: 'WAVE-2024-003', statut: 'En attente' },
    { etudiant: 'Mariama Fall', matricule: 'ETU-2024-005', montant: 200000, mode: 'Virement', date: '03 Jan 2024', ref: 'VIR-2024-002', statut: 'Confirmé' },
    { etudiant: 'Ibrahima Ndiaye', matricule: 'ETU-2024-006', montant: 75000, mode: 'Free Money', date: '02 Jan 2024', ref: 'FREE-2024-001', statut: 'Échoué' },
  ]

  const modeIcon: Record<string, string> = {
    'Wave': '🌊',
    'Orange Money': '🟠',
    'Espèces': '💵',
    'Virement': '🏦',
    'Free Money': '📱',
  }

  const statutClass: Record<string, string> = {
    'Confirmé': 'status-active',
    'En attente': 'status-pending',
    'Échoué': 'status-inactive',
  }

  return (
    <AdminLayout>
      <main className="admin-main">
        <div className="dashboard-header">
          <div>
            <h1>Paiements Étudiants</h1>
            <p>Historique des paiements de frais de scolarité.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-outline">
              <i className="fas fa-file-excel"></i> Exporter
            </button>
            <button className="btn btn-primary">
              <i className="fas fa-plus"></i> Enregistrer un Paiement
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="finance-stats">
          <div className="finance-stat-card">
            <p>Total collecté (Jan)</p>
            <h3>14 500 000 <span style={{ fontSize: '1rem', color: 'var(--text-light)' }}>FCFA</span></h3>
            <div className="sub" style={{ color: 'var(--secondary)' }}>↑ +18% vs déc.</div>
          </div>
          <div className="finance-stat-card">
            <p>Transactions</p>
            <h3>287</h3>
            <div className="sub">Ce mois</div>
          </div>
          <div className="finance-stat-card">
            <p>Via Wave/OM</p>
            <h3>68%</h3>
            <div className="sub">Paiements mobiles</div>
          </div>
          <div className="finance-stat-card">
            <p>Impayés total</p>
            <h3 style={{ color: '#ef4444' }}>3 200 000 <span style={{ fontSize: '1rem' }}>FCFA</span></h3>
            <div className="sub" style={{ color: '#ef4444' }}>127 étudiants</div>
          </div>
        </div>

        <div className="table-filters">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Rechercher un paiement..." />
          </div>
          <select className="filter-select">
            <option>Tous les modes</option>
            <option>Wave</option>
            <option>Orange Money</option>
            <option>Espèces</option>
          </select>
          <select className="filter-select">
            <option>Tous les statuts</option>
            <option>Confirmé</option>
            <option>En attente</option>
          </select>
        </div>

        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Étudiant</th>
                <th>Référence</th>
                <th>Montant</th>
                <th>Mode</th>
                <th>Date</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paiements.map((p) => (
                <tr key={p.ref}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(p.etudiant)}&background=4f46e5&color=fff`} style={{ width: '30px', height: '30px', borderRadius: '50%' }} alt="" />
                      <div>
                        <strong>{p.etudiant}</strong><br />
                        <small style={{ color: 'var(--text-light)' }}>{p.matricule}</small>
                      </div>
                    </div>
                  </td>
                  <td><code style={{ fontSize: '0.82rem', color: 'var(--text-light)' }}>{p.ref}</code></td>
                  <td><strong style={{ color: 'var(--secondary)' }}>{p.montant.toLocaleString('fr-FR')} FCFA</strong></td>
                  <td>
                    <span style={{ fontSize: '0.88rem' }}>{modeIcon[p.mode]} {p.mode}</span>
                  </td>
                  <td style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>{p.date}</td>
                  <td><span className={`status-badge ${statutClass[p.statut]}`}>{p.statut}</span></td>
                  <td>
                    <div className="action-btns">
                      <button className="btn-icon"><i className="fas fa-eye"></i></button>
                      <button className="btn-icon"><i className="fas fa-receipt"></i></button>
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
