import AdminLayout from '../../components/AdminLayout'

export default function TransactionsPage() {
  const transactions = [
    { ref: 'TXN-2024-0087', type: 'Encaissement', description: 'Frais de scolarité - Fatou Diallo', montant: 75000, sens: '+', date: '10 Jan 2024 14:32', compte: 'Compte principal' },
    { ref: 'TXN-2024-0086', type: 'Encaissement', description: 'Frais de scolarité - Aïssatou Ba (OM)', montant: 150000, sens: '+', date: '09 Jan 2024 11:15', compte: 'Orange Money' },
    { ref: 'TXN-2024-0085', type: 'Décaissement', description: 'Paiement vacataire - Dr. Adama Diallo', montant: 300000, sens: '-', date: '08 Jan 2024 09:00', compte: 'Compte principal' },
    { ref: 'TXN-2024-0084', type: 'Encaissement', description: 'Frais inscription - Ibrahima Ndiaye', montant: 50000, sens: '+', date: '07 Jan 2024 16:20', compte: 'Wave' },
    { ref: 'TXN-2024-0083', type: 'Décaissement', description: 'Achats fournitures informatique', montant: 85000, sens: '-', date: '05 Jan 2024 10:00', compte: 'Compte principal' },
    { ref: 'TXN-2024-0082', type: 'Encaissement', description: 'Frais dossier - Mariama Fall', montant: 200000, sens: '+', date: '03 Jan 2024 08:45', compte: 'Virement bancaire' },
    { ref: 'TXN-2024-0081', type: 'Décaissement', description: 'Maintenance matériel - Labo Info', montant: 120000, sens: '-', date: '02 Jan 2024 14:00', compte: 'Compte principal' },
  ]

  return (
    <AdminLayout>
      <main className="admin-main">
        <div className="dashboard-header">
          <div>
            <h1>Journal & Transactions</h1>
            <p>Historique complet de toutes les opérations financières.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-outline">
              <i className="fas fa-file-excel"></i> Exporter
            </button>
            <button className="btn btn-outline">
              <i className="fas fa-filter"></i> Filtres avancés
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="finance-stats">
          <div className="finance-stat-card">
            <p>Solde au 10 Jan</p>
            <h3 style={{ color: 'var(--secondary)' }}>22 450 000 FCFA</h3>
            <div className="sub">Tous comptes confondus</div>
          </div>
          <div className="finance-stat-card">
            <p>Encaissements (Jan)</p>
            <h3 style={{ color: 'var(--secondary)' }}>+475 000</h3>
            <div className="sub">FCFA cette semaine</div>
          </div>
          <div className="finance-stat-card">
            <p>Décaissements (Jan)</p>
            <h3 style={{ color: '#ef4444' }}>-505 000</h3>
            <div className="sub">FCFA cette semaine</div>
          </div>
          <div className="finance-stat-card">
            <p>Transactions</p>
            <h3>7</h3>
            <div className="sub">Cette semaine</div>
          </div>
        </div>

        <div className="table-filters">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Rechercher une transaction..." />
          </div>
          <select className="filter-select">
            <option>Tous les types</option>
            <option>Encaissement</option>
            <option>Décaissement</option>
          </select>
          <select className="filter-select">
            <option>Tous les comptes</option>
            <option>Compte principal</option>
            <option>Wave</option>
            <option>Orange Money</option>
          </select>
          <input type="date" className="filter-select" style={{ padding: '0.75rem 1rem' }} />
        </div>

        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Référence</th>
                <th>Type</th>
                <th>Description</th>
                <th>Montant</th>
                <th>Compte</th>
                <th>Date & Heure</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.ref}>
                  <td><code style={{ fontSize: '0.82rem', color: 'var(--primary)' }}>{t.ref}</code></td>
                  <td>
                    <span className={`status-badge ${t.type === 'Encaissement' ? 'status-active' : 'status-inactive'}`}>
                      {t.sens} {t.type}
                    </span>
                  </td>
                  <td style={{ maxWidth: '280px' }}>{t.description}</td>
                  <td>
                    <strong style={{ color: t.sens === '+' ? 'var(--secondary)' : '#ef4444', fontSize: '0.95rem' }}>
                      {t.sens} {t.montant.toLocaleString('fr-FR')} FCFA
                    </strong>
                  </td>
                  <td style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>{t.compte}</td>
                  <td style={{ color: 'var(--text-light)', fontSize: '0.82rem' }}>{t.date}</td>
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
