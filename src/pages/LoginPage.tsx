import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className="login-body">
      <div className="login-container">
        {/* Graphic Side */}
        <div className="login-graphic">
          <div className="login-graphic-content">
            <h2>Bienvenue sur EduManage</h2>
            <p>La plateforme de gestion académique pensée pour les universités privées d'Afrique francophone.</p>
            <div className="stats">
              <div className="stat-item">
                <span className="stat-num">50+</span>
                <span className="stat-label">Établissements</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">15k+</span>
                <span className="stat-label">Étudiants gérés</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">99.9%</span>
                <span className="stat-label">Disponibilité</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="login-form-wrapper">
          <div className="login-form-inner">
            <div className="login-logo">
              <i className="fas fa-graduation-cap"></i> Edu<span>Manage</span>
            </div>
            <div className="login-header">
              <h1>Connexion</h1>
              <p>Accédez à votre tableau de bord administrateur</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="form-label">Adresse email</label>
                <div className="input-icon-wrapper">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="admin@universite.sn"
                    defaultValue=""
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Mot de passe</label>
                <div className="input-icon-wrapper">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="••••••••"
                    defaultValue=""
                  />
                </div>
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  Se souvenir de moi
                </label>
                <a href="#" className="forgot-pwd">Mot de passe oublié ?</a>
              </div>

              <Link to="/admin" className="btn btn-primary btn-block">
                <i className="fas fa-sign-in-alt"></i> Se Connecter
              </Link>
            </form>

            <div className="back-home">
              <a href="#" style={{ marginRight: '0.5rem' }}>
                <i className="fas fa-arrow-left" style={{ marginRight: '0.3rem' }}></i>
              </a>
              <Link to="/">Retour à l'accueil</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
