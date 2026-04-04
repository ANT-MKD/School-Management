import AdminLayout from '../../components/AdminLayout'

export default function SallesPage() {
  const salles = [
    { code: 'AMPHI-A', name: 'Amphithéâtre A', type: 'Amphithéâtre', capacite: 300, batiment: 'Bât. Principal', statut: 'Disponible' },
    { code: 'AMPHI-B', name: 'Amphithéâtre B', type: 'Amphithéâtre', capacite: 200, batiment: 'Bât. Principal', statut: 'Disponible' },
    { code: 'B201', name: 'Salle B201', type: 'Salle de cours', capacite: 50, batiment: 'Bât. B', statut: 'Disponible' },
    { code: 'B202', name: 'Salle B202', type: 'Salle de cours', capacite: 50, batiment: 'Bât. B', statut: 'Disponible' },
    { code: 'B204', name: 'Salle B204', type: 'Salle de cours', capacite: 40, batiment: 'Bât. B', statut: 'Maintenance' },
    { code: 'INFO-LAB1', name: 'Labo Informatique 1', type: 'Laboratoire', capacite: 30, batiment: 'Bât. C', statut: 'Disponible' },
    { code: 'INFO-LAB2', name: 'Labo Informatique 2', type: 'Laboratoire', capacite: 25, batiment: 'Bât. C', statut: 'Disponible' },
    { code: 'CONF-1', name: 'Salle de Conférence', type: 'Conférence', capacite: 80, batiment: 'Admin', statut: 'Disponible' },
  ]

  const statutClass: Record<string, string> = {
    'Disponible': 'status-active',
    'Maintenance': 'status-inactive',
    'Occupée': 'status-pending',
  }

  return (
    <AdminLayout>
      <main className="admin-main">
        <div className="dashboard-header">
          <div>
            <h1>Gestion des Salles</h1>
            <p>Inventaire des salles et amphithéâtres disponibles.</p>
          </div>
          <button className="btn btn-primary">
            <i className="fas fa-plus"></i> Ajouter une Salle
          </button>
        </div>

        <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '1.5rem' }}>
          <div className="kpi-card">
            <div className="kpi-icon students"><i className="fas fa-door-open"></i></div>
            <div className="kpi-info">
              <p>Total Salles</p>
              <h2>8</h2>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon teachers"><i className="fas fa-check-circle"></i></div>
            <div className="kpi-info">
              <p>Disponibles</p>
              <h2>7</h2>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon unpaid"><i className="fas fa-tools"></i></div>
            <div className="kpi-info">
              <p>En Maintenance</p>
              <h2>1</h2>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon revenue"><i className="fas fa-users"></i></div>
            <div className="kpi-info">
              <p>Capacité totale</p>
              <h2>775</h2>
            </div>
          </div>
        </div>

        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Nom</th>
                <th>Type</th>
                <th>Capacité</th>
                <th>Bâtiment</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {salles.map((s) => (
                <tr key={s.code}>
                  <td><code style={{ background: 'var(--bg-alt)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.82rem' }}>{s.code}</code></td>
                  <td><strong>{s.name}</strong></td>
                  <td>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
                      <i className={`fas ${s.type === 'Amphithéâtre' ? 'fa-theater-masks' : s.type === 'Laboratoire' ? 'fa-laptop' : 'fa-door-open'}`} style={{ marginRight: '0.4rem' }}></i>
                      {s.type}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <i className="fas fa-users" style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}></i>
                      <strong>{s.capacite}</strong>
                    </div>
                  </td>
                  <td>{s.batiment}</td>
                  <td><span className={`status-badge ${statutClass[s.statut]}`}>{s.statut}</span></td>
                  <td>
                    <div className="action-btns">
                      <button className="btn-icon"><i className="fas fa-calendar-check"></i></button>
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
