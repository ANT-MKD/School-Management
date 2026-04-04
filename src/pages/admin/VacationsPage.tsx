import AdminLayout from '../../components/AdminLayout'

export default function VacationsPage() {
  const vacations = [
    { prof: 'Dr. Cheikh Mbaye', type: 'Vacataire', heures: 36, tarif: 10000, total: 360000, mois: 'Janvier 2024', statut: 'À payer' },
    { prof: 'Mme. Rokhaya Cissé', type: 'Vacataire', heures: 24, tarif: 8000, total: 192000, mois: 'Janvier 2024', statut: 'À payer' },
    { prof: 'M. Adama Diallo', type: 'Vacataire', heures: 30, tarif: 10000, total: 300000, mois: 'Janvier 2024', statut: 'Payé' },
    { prof: 'Dr. Cheikh Mbaye', type: 'Vacataire', heures: 34, tarif: 10000, total: 340000, mois: 'Décembre 2023', statut: 'Payé' },
    { prof: 'Mme. Rokhaya Cissé', type: 'Vacataire', heures: 22, tarif: 8000, total: 176000, mois: 'Décembre 2023', statut: 'Payé' },
  ]

  return (
    <AdminLayout>
      <main className="admin-main">
        <div className="dashboard-header">
          <div>
            <h1>Paiements Professeurs Vacataires</h1>
            <p>États de paiement des heures d'enseignement.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-outline">
              <i className="fas fa-file-pdf"></i> État de paiement PDF
            </button>
            <button className="btn btn-primary">
              <i className="fas fa-check"></i> Valider les paiements
            </button>
          </div>
        </div>

        <div className="finance-stats">
          <div className="finance-stat-card">
            <p>À payer (Janvier)</p>
            <h3>552 000 <span style={{ fontSize: '1rem', color: 'var(--text-light)' }}>FCFA</span></h3>
            <div className="sub" style={{ color: '#ef4444' }}>2 professeurs en attente</div>
          </div>
          <div className="finance-stat-card">
            <p>Total payé (Déc)</p>
            <h3>516 000 <span style={{ fontSize: '1rem', color: 'var(--text-light)' }}>FCFA</span></h3>
            <div className="sub" style={{ color: 'var(--secondary)' }}>Tout réglé</div>
          </div>
          <div className="finance-stat-card">
            <p>Heures total (Jan)</p>
            <h3>90h</h3>
            <div className="sub">3 vacataires actifs</div>
          </div>
          <div className="finance-stat-card">
            <p>Tarif moyen / heure</p>
            <h3>9 333 FCFA</h3>
            <div className="sub">Vacataires confondus</div>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <select className="filter-select" style={{ marginRight: '1rem' }}>
            <option>Janvier 2024</option>
            <option>Décembre 2023</option>
            <option>Novembre 2023</option>
          </select>
          <select className="filter-select">
            <option>Tous les statuts</option>
            <option>À payer</option>
            <option>Payé</option>
          </select>
        </div>

        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Professeur</th>
                <th>Type</th>
                <th>Heures</th>
                <th>Tarif/h</th>
                <th>Total</th>
                <th>Mois</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {vacations.map((v, i) => (
                <tr key={i}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(v.prof)}&background=10b981&color=fff`} style={{ width: '30px', height: '30px', borderRadius: '50%' }} alt="" />
                      <strong>{v.prof}</strong>
                    </div>
                  </td>
                  <td><span className="status-badge status-pending">{v.type}</span></td>
                  <td><strong>{v.heures}h</strong></td>
                  <td style={{ color: 'var(--text-light)' }}>{v.tarif.toLocaleString('fr-FR')} FCFA</td>
                  <td><strong style={{ color: 'var(--primary)' }}>{v.total.toLocaleString('fr-FR')} FCFA</strong></td>
                  <td style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>{v.mois}</td>
                  <td>
                    <span className={`status-badge ${v.statut === 'Payé' ? 'status-active' : 'status-inactive'}`}>
                      {v.statut}
                    </span>
                  </td>
                  <td>
                    <div className="action-btns">
                      {v.statut === 'À payer' ? (
                        <button className="btn-icon" style={{ background: 'var(--secondary)', color: '#fff', borderColor: 'var(--secondary)' }}>
                          <i className="fas fa-money-bill-wave"></i>
                        </button>
                      ) : (
                        <button className="btn-icon"><i className="fas fa-receipt"></i></button>
                      )}
                      <button className="btn-icon"><i className="fas fa-eye"></i></button>
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
