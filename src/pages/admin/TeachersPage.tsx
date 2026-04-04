import AdminLayout from '../../components/AdminLayout'

export default function TeachersPage() {
  return (
    <AdminLayout>
      <main className="admin-main">
        <div className="dashboard-header">
          <div>
            <h1>Gestion des Professeurs</h1>
            <p>Liste de tous les enseignants permanents et vacataires.</p>
          </div>
          <button className="btn btn-primary">
            <i className="fas fa-user-plus"></i> Ajouter un Professeur
          </button>
        </div>

        <div className="table-filters">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Rechercher un professeur..." />
          </div>
          <select className="filter-select">
            <option>Tous les types</option>
            <option>Permanent</option>
            <option>Vacataire</option>
          </select>
          <select className="filter-select">
            <option>Toutes les filières</option>
            <option>Informatique</option>
            <option>Droit</option>
            <option>Économie</option>
          </select>
        </div>

        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Professeur</th>
                <th>Spécialité</th>
                <th>Type</th>
                <th>Contact</th>
                <th>Heures / Mois</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Dr. Abdou Sow', spec: 'Algorithmique & Prog.', type: 'Permanent', email: 'a.sow@univ.edu', tel: '+221 77 111 22 33', heures: 60, bg: '4f46e5', statut: 'active' },
                { name: 'Prof. Aida Ndiaye', spec: 'Droit Civil', type: 'Permanent', email: 'a.ndiaye@univ.edu', tel: '+221 77 222 33 44', heures: 48, bg: '10b981', statut: 'active' },
                { name: 'Dr. Cheikh Mbaye', spec: 'Macroéconomie', type: 'Vacataire', email: 'c.mbaye@gmail.com', tel: '+221 76 333 44 55', heures: 36, bg: 'f59e0b', statut: 'active' },
                { name: 'Mme. Rokhaya Cissé', spec: 'Anglais des Affaires', type: 'Vacataire', email: 'r.cisse@gmail.com', tel: '+221 70 444 55 66', heures: 24, bg: 'ef4444', statut: 'inactive' },
                { name: 'Dr. Ibrahima Gueye', spec: 'Base de Données', type: 'Permanent', email: 'i.gueye@univ.edu', tel: '+221 77 555 66 77', heures: 52, bg: '7c3aed', statut: 'active' },
              ].map((p) => (
                <tr key={p.email}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(p.name)}&background=${p.bg}&color=fff`} style={{ width: '36px', height: '36px', borderRadius: '50%' }} alt="" />
                      <strong>{p.name}</strong>
                    </div>
                  </td>
                  <td>{p.spec}</td>
                  <td>
                    <span className={`status-badge ${p.type === 'Permanent' ? 'status-active' : 'status-pending'}`}>
                      {p.type}
                    </span>
                  </td>
                  <td>
                    <div style={{ fontSize: '0.85rem' }}>
                      <div><i className="fas fa-envelope" style={{ color: 'var(--text-light)', marginRight: '5px' }}></i>{p.email}</div>
                      <div style={{ color: 'var(--text-light)', marginTop: '3px' }}><i className="fas fa-phone" style={{ marginRight: '5px' }}></i>{p.tel}</div>
                    </div>
                  </td>
                  <td><strong>{p.heures}h</strong></td>
                  <td><span className={`status-badge ${p.statut === 'active' ? 'status-active' : 'status-inactive'}`}>{p.statut === 'active' ? 'Actif' : 'Inactif'}</span></td>
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
