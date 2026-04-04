import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function AdminNav() {
  const location = useLocation()
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('edumanage-theme')
    if (saved === 'dark') {
      document.documentElement.classList.add('dark-theme')
      setIsDark(true)
    }
  }, [])

  function toggleTheme() {
    const html = document.documentElement
    if (isDark) {
      html.classList.remove('dark-theme')
      localStorage.setItem('edumanage-theme', 'light')
      setIsDark(false)
    } else {
      html.classList.add('dark-theme')
      localStorage.setItem('edumanage-theme', 'dark')
      setIsDark(true)
    }
  }

  function isActive(path: string) {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  return (
    <header className="admin-topbar">
      {/* Logo */}
      <Link to="/admin" className="admin-logo">
        <i className="fas fa-graduation-cap"></i> Edu<span>Manage</span>
      </Link>

      {/* Navigation */}
      <nav className="admin-nav">
        <ul className="admin-menu">
          {/* Dashboard */}
          <li>
            <Link to="/admin" className={isActive('/admin') && location.pathname === '/admin' ? 'active' : ''}>
              <i className="fas fa-th-large"></i> Dashboard
            </Link>
          </li>

          {/* Académiques */}
          <li className="dropdown">
            <a className={isActive('/admin/filieres') || isActive('/admin/niveaux') || isActive('/admin/semestres') || isActive('/admin/classes') || isActive('/admin/salles') || isActive('/admin/ues') || isActive('/admin/ecs') || isActive('/admin/schedule') ? 'active' : ''}>
              <i className="fas fa-university"></i> Académiques <i className="fas fa-chevron-down chevron"></i>
            </a>
            <div className="dropdown-menu">
              <Link to="/admin/filieres"><i className="fas fa-code-branch"></i> Filières</Link>
              <Link to="/admin/niveaux"><i className="fas fa-layer-group"></i> Niveaux</Link>
              <Link to="/admin/semestres"><i className="fas fa-calendar-alt"></i> Semestres</Link>
              <Link to="/admin/classes"><i className="fas fa-chalkboard"></i> Classes</Link>
              <Link to="/admin/salles"><i className="fas fa-door-open"></i> Salles</Link>
              <Link to="/admin/ues"><i className="fas fa-book"></i> UE</Link>
              <Link to="/admin/ecs"><i className="fas fa-book-open"></i> EC</Link>
              <Link to="/admin/schedule"><i className="fas fa-clock"></i> Emploi du temps</Link>
            </div>
          </li>

          {/* Utilisateurs */}
          <li className="dropdown">
            <a className={isActive('/admin/teachers') || isActive('/admin/students') ? 'active' : ''}>
              <i className="fas fa-users"></i> Utilisateurs <i className="fas fa-chevron-down chevron"></i>
            </a>
            <div className="dropdown-menu">
              <Link to="/admin/teachers"><i className="fas fa-chalkboard-teacher"></i> Professeurs</Link>
              <Link to="/admin/students"><i className="fas fa-user-graduate"></i> Étudiants</Link>
            </div>
          </li>

          {/* Évaluations */}
          <li className="dropdown">
            <a className={isActive('/admin/notes') || isActive('/admin/moyennes') || isActive('/admin/releves') ? 'active' : ''}>
              <i className="fas fa-clipboard-list"></i> Évaluations <i className="fas fa-chevron-down chevron"></i>
            </a>
            <div className="dropdown-menu">
              <Link to="/admin/notes"><i className="fas fa-pen"></i> Notes</Link>
              <Link to="/admin/moyennes"><i className="fas fa-chart-bar"></i> Moyennes</Link>
              <Link to="/admin/releves"><i className="fas fa-file-alt"></i> Relevé de notes</Link>
            </div>
          </li>

          {/* Finances */}
          <li className="dropdown">
            <a className={isActive('/admin/frais') || isActive('/admin/paiements') || isActive('/admin/vacations') || isActive('/admin/transactions') ? 'active' : ''}>
              <i className="fas fa-wallet"></i> Finances <i className="fas fa-chevron-down chevron"></i>
            </a>
            <div className="dropdown-menu">
              <Link to="/admin/frais"><i className="fas fa-cog"></i> Frais</Link>
              <Link to="/admin/paiements"><i className="fas fa-money-bill-wave"></i> Paiements étudiants</Link>
              <Link to="/admin/vacations"><i className="fas fa-hand-holding-usd"></i> Paiements professeurs</Link>
              <Link to="/admin/transactions"><i className="fas fa-exchange-alt"></i> Journal & Transactions</Link>
            </div>
          </li>
        </ul>
      </nav>

      {/* Right side */}
      <div className="admin-user">
        <button className="theme-toggle" onClick={toggleTheme} title="Basculer le thème">
          <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
        <div className="notifications">
          <i className="fas fa-bell"></i>
          <span className="notif-badge">3</span>
        </div>
        <div style={{ position: 'relative' }}>
          <button className="user-avatar-btn" onClick={() => setUserMenuOpen(!userMenuOpen)}>
            <img src="https://ui-avatars.com/api/?name=Admin+User&background=4f46e5&color=fff" alt="Admin" />
            <span>Admin</span>
            <i className="fas fa-chevron-down"></i>
          </button>
          {userMenuOpen && (
            <div className="user-dropdown">
              <a href="#"><i className="fas fa-user"></i> Mon Profil</a>
              <a href="#"><i className="fas fa-cog"></i> Paramètres</a>
              <hr />
              <Link to="/" className="logout" onClick={() => setUserMenuOpen(false)}>
                <i className="fas fa-sign-out-alt"></i> Déconnexion
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
