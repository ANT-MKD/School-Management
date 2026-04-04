import AdminLayout from '../../components/AdminLayout'

export default function StudentsPage() {
  return (
    <AdminLayout>
      <main className="admin-main">
        <div className="dashboard-header">
          <div>
            <h1>Gestion des Étudiants</h1>
            <p>Liste de tous les étudiants inscrits à l'université.</p>
          </div>
          <a href="#" className="btn btn-primary">
            <i className="fas fa-user-plus"></i> Inscrire un Étudiant
          </a>
        </div>

        {/* Filters */}
        <div className="table-filters">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Rechercher un étudiant..." />
          </div>
          <select className="filter-select">
            <option>Toutes les Filières</option>
            <option>Informatique</option>
            <option>Droit</option>
            <option>Économie-Gestion</option>
          </select>
          <select className="filter-select">
            <option>Tous les Niveaux</option>
            <option>Licence 1</option>
            <option>Licence 2</option>
            <option>Licence 3</option>
            <option>Master 1</option>
          </select>
        </div>

        {/* Table */}
        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Étudiant</th>
                <th>Matricule</th>
                <th>Filière / Niveau</th>
                <th>Contact</th>
                <th>Statut Paiement</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src="https://ui-avatars.com/api/?name=Fatou+Diallo&background=4f46e5&color=fff" style={{ width: '36px', height: '36px', borderRadius: '50%' }} alt="" />
                    <div>
                      <strong>Fatou Diallo</strong><br />
                      <small style={{ color: 'var(--text-light)' }}>L2 Informatique</small>
                    </div>
                  </div>
                </td>
                <td>ETU-2024-001</td>
                <td><strong>Informatique</strong><br /><small style={{ color: 'var(--text-light)' }}>Licence 2 - S3</small></td>
                <td>
                  <div style={{ fontSize: '0.85rem' }}>
                    <div><i className="fas fa-envelope" style={{ color: 'var(--text-light)', marginRight: '5px' }}></i>f.diallo@etud.edu</div>
                    <div style={{ color: 'var(--text-light)', marginTop: '3px' }}><i className="fas fa-phone" style={{ marginRight: '5px' }}></i>+221 77 000 11 22</div>
                  </div>
                </td>
                <td><span className="status-badge status-active">À jour</span></td>
                <td>
                  <div className="action-btns">
                    <button className="btn-icon"><i className="fas fa-eye"></i></button>
                    <button className="btn-icon edit"><i className="fas fa-pen"></i></button>
                    <button className="btn-icon delete"><i className="fas fa-trash"></i></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src="https://ui-avatars.com/api/?name=Moussa+Sy&background=10b981&color=fff" style={{ width: '36px', height: '36px', borderRadius: '50%' }} alt="" />
                    <div>
                      <strong>Moussa Sy</strong><br />
                      <small style={{ color: 'var(--text-light)' }}>L1 Éco-Gestion</small>
                    </div>
                  </div>
                </td>
                <td>ETU-2024-002</td>
                <td><strong>Économie-Gestion</strong><br /><small style={{ color: 'var(--text-light)' }}>Licence 1 - S1</small></td>
                <td>
                  <div style={{ fontSize: '0.85rem' }}>
                    <div><i className="fas fa-envelope" style={{ color: 'var(--text-light)', marginRight: '5px' }}></i>m.sy@etud.edu</div>
                    <div style={{ color: 'var(--text-light)', marginTop: '3px' }}><i className="fas fa-phone" style={{ marginRight: '5px' }}></i>+221 77 123 45 67</div>
                  </div>
                </td>
                <td><span className="status-badge status-inactive">Impayé</span></td>
                <td>
                  <div className="action-btns">
                    <button className="btn-icon"><i className="fas fa-eye"></i></button>
                    <button className="btn-icon edit"><i className="fas fa-pen"></i></button>
                    <button className="btn-icon delete"><i className="fas fa-trash"></i></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src="https://ui-avatars.com/api/?name=Aissatou+Ba&background=f59e0b&color=fff" style={{ width: '36px', height: '36px', borderRadius: '50%' }} alt="" />
                    <div>
                      <strong>Aïssatou Ba</strong><br />
                      <small style={{ color: 'var(--text-light)' }}>L2 Droit</small>
                    </div>
                  </div>
                </td>
                <td>ETU-2024-003</td>
                <td><strong>Sciences Juridiques</strong><br /><small style={{ color: 'var(--text-light)' }}>Licence 2 - S3</small></td>
                <td>
                  <div style={{ fontSize: '0.85rem' }}>
                    <div><i className="fas fa-envelope" style={{ color: 'var(--text-light)', marginRight: '5px' }}></i>a.ba@etud.edu</div>
                    <div style={{ color: 'var(--text-light)', marginTop: '3px' }}><i className="fas fa-phone" style={{ marginRight: '5px' }}></i>+221 76 987 65 43</div>
                  </div>
                </td>
                <td><span className="status-badge status-active">À jour</span></td>
                <td>
                  <div className="action-btns">
                    <button className="btn-icon"><i className="fas fa-eye"></i></button>
                    <button className="btn-icon edit"><i className="fas fa-pen"></i></button>
                    <button className="btn-icon delete"><i className="fas fa-trash"></i></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src="https://ui-avatars.com/api/?name=Oumar+Diop&background=7c3aed&color=fff" style={{ width: '36px', height: '36px', borderRadius: '50%' }} alt="" />
                    <div>
                      <strong>Oumar Diop</strong><br />
                      <small style={{ color: 'var(--text-light)' }}>M1 Finance</small>
                    </div>
                  </div>
                </td>
                <td>ETU-2024-004</td>
                <td><strong>Finance-Comptabilité</strong><br /><small style={{ color: 'var(--text-light)' }}>Master 1 - S7</small></td>
                <td>
                  <div style={{ fontSize: '0.85rem' }}>
                    <div><i className="fas fa-envelope" style={{ color: 'var(--text-light)', marginRight: '5px' }}></i>o.diop@etud.edu</div>
                    <div style={{ color: 'var(--text-light)', marginTop: '3px' }}><i className="fas fa-phone" style={{ marginRight: '5px' }}></i>+221 70 456 78 90</div>
                  </div>
                </td>
                <td><span className="status-badge status-pending">Partiel</span></td>
                <td>
                  <div className="action-btns">
                    <button className="btn-icon"><i className="fas fa-eye"></i></button>
                    <button className="btn-icon edit"><i className="fas fa-pen"></i></button>
                    <button className="btn-icon delete"><i className="fas fa-trash"></i></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src="https://ui-avatars.com/api/?name=Mariama+Fall&background=ef4444&color=fff" style={{ width: '36px', height: '36px', borderRadius: '50%' }} alt="" />
                    <div>
                      <strong>Mariama Fall</strong><br />
                      <small style={{ color: 'var(--text-light)' }}>L3 Informatique</small>
                    </div>
                  </div>
                </td>
                <td>ETU-2024-005</td>
                <td><strong>Informatique</strong><br /><small style={{ color: 'var(--text-light)' }}>Licence 3 - S5</small></td>
                <td>
                  <div style={{ fontSize: '0.85rem' }}>
                    <div><i className="fas fa-envelope" style={{ color: 'var(--text-light)', marginRight: '5px' }}></i>m.fall@etud.edu</div>
                    <div style={{ color: 'var(--text-light)', marginTop: '3px' }}><i className="fas fa-phone" style={{ marginRight: '5px' }}></i>+221 77 654 32 10</div>
                  </div>
                </td>
                <td><span className="status-badge status-active">À jour</span></td>
                <td>
                  <div className="action-btns">
                    <button className="btn-icon"><i className="fas fa-eye"></i></button>
                    <button className="btn-icon edit"><i className="fas fa-pen"></i></button>
                    <button className="btn-icon delete"><i className="fas fa-trash"></i></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--text-light)', fontSize: '0.88rem' }}>Affichage de 1 à 5 sur 2 450 étudiants</p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="btn-icon"><i className="fas fa-chevron-left"></i></button>
            <button className="btn-icon" style={{ background: 'var(--primary)', color: '#fff', borderColor: 'var(--primary)' }}>1</button>
            <button className="btn-icon">2</button>
            <button className="btn-icon">3</button>
            <span style={{ padding: '0.25rem 0.5rem', color: 'var(--text-light)' }}>...</span>
            <button className="btn-icon">245</button>
            <button className="btn-icon"><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </main>
    </AdminLayout>
  )
}
