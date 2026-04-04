import { useEffect, useRef } from 'react'
import AdminLayout from '../../components/AdminLayout'

declare const Chart: any

export default function AdminDashboard() {
  const revenueChartRef = useRef<HTMLCanvasElement>(null)
  const successChartRef = useRef<HTMLCanvasElement>(null)
  const revenueChartInstance = useRef<any>(null)
  const successChartInstance = useRef<any>(null)

  useEffect(() => {
    if (typeof Chart === 'undefined') return

    // Revenue Chart
    if (revenueChartRef.current) {
      if (revenueChartInstance.current) revenueChartInstance.current.destroy()
      revenueChartInstance.current = new Chart(revenueChartRef.current, {
        type: 'bar',
        data: {
          labels: ['Oct', 'Nov', 'Déc', 'Jan', 'Fév', 'Mar'],
          datasets: [{
            label: 'Recettes (FCFA)',
            data: [8500000, 11200000, 9800000, 14500000, 12300000, 15800000],
            backgroundColor: 'rgba(79, 70, 229, 0.7)',
            borderRadius: 6,
          }, {
            label: 'Impayés',
            data: [2100000, 1800000, 2500000, 3200000, 2800000, 2100000],
            backgroundColor: 'rgba(239, 68, 68, 0.5)',
            borderRadius: 6,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: { legend: { position: 'bottom' } },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: (v: number) => (v / 1000000).toFixed(1) + 'M'
              }
            }
          }
        }
      })
    }

    // Success Rate Chart
    if (successChartRef.current) {
      if (successChartInstance.current) successChartInstance.current.destroy()
      successChartInstance.current = new Chart(successChartRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Admis', 'Ajournés', 'Défaillants'],
          datasets: [{
            data: [68, 24, 8],
            backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
            borderWidth: 0,
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'bottom' },
          },
          cutout: '65%',
        }
      })
    }

    return () => {
      revenueChartInstance.current?.destroy()
      successChartInstance.current?.destroy()
    }
  }, [])

  return (
    <AdminLayout>
      <main className="admin-main">
        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1>Tableau de Bord</h1>
            <p>Vue d'ensemble de l'université — Année 2023/2024</p>
          </div>
          <button className="btn btn-primary">
            <i className="fas fa-download"></i> Exporter le rapport
          </button>
        </div>

        {/* KPI Cards */}
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-icon students"><i className="fas fa-user-graduate"></i></div>
            <div className="kpi-info">
              <p>Étudiants Inscrits</p>
              <h2>2 450</h2>
              <span className="trend up"><i className="fas fa-arrow-up"></i> +12% vs an dernier</span>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon teachers"><i className="fas fa-chalkboard-teacher"></i></div>
            <div className="kpi-info">
              <p>Enseignants</p>
              <h2>128</h2>
              <span className="trend up"><i className="fas fa-arrow-up"></i> +5 nouveaux</span>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon revenue"><i className="fas fa-coins"></i></div>
            <div className="kpi-info">
              <p>Paiements du Mois</p>
              <h2>14,5M</h2>
              <span className="trend up"><i className="fas fa-arrow-up"></i> FCFA collectés</span>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon unpaid"><i className="fas fa-exclamation-triangle"></i></div>
            <div className="kpi-info">
              <p>Frais Impayés</p>
              <h2>3,2M</h2>
              <span className="trend down"><i className="fas fa-arrow-down"></i> FCFA en attente</span>
            </div>
          </div>
        </div>

        {/* Charts + Alerts */}
        <div className="dashboard-grid">
          <div className="charts-column">
            {/* Revenue Chart */}
            <div className="chart-card">
              <div className="card-header">
                <h3><i className="fas fa-chart-bar" style={{ color: 'var(--primary)', marginRight: '0.5rem' }}></i> Recettes vs Impayés</h3>
                <span>6 derniers mois</span>
              </div>
              <div className="chart-body">
                <canvas ref={revenueChartRef}></canvas>
              </div>
            </div>

            {/* Success Rate Chart */}
            <div className="chart-card">
              <div className="card-header">
                <h3><i className="fas fa-chart-pie" style={{ color: 'var(--secondary)', marginRight: '0.5rem' }}></i> Taux de Réussite</h3>
                <span>Session 2023/2024</span>
              </div>
              <div className="chart-body" style={{ display: 'flex', justifyContent: 'center' }}>
                <canvas ref={successChartRef} style={{ maxWidth: '260px' }}></canvas>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="alerts-column">
            <div className="alert-card">
              <div className="card-header">
                <h3><i className="fas fa-bell" style={{ color: '#ef4444', marginRight: '0.5rem' }}></i> Actions Requises</h3>
                <span className="status-badge status-inactive">3 urgentes</span>
              </div>
              <ul className="alert-list">
                <li className="alert-item high-priority">
                  <div className="alert-icon"><i className="fas fa-exclamation-circle"></i></div>
                  <div className="alert-content">
                    <p>127 étudiants ont des frais impayés depuis +30j</p>
                    <small>Relancer par SMS Wave/OM</small>
                  </div>
                  <div className="alert-actions">
                    <button className="btn-icon"><i className="fas fa-paper-plane"></i></button>
                  </div>
                </li>
                <li className="alert-item high-priority">
                  <div className="alert-icon"><i className="fas fa-file-alt"></i></div>
                  <div className="alert-content">
                    <p>Les notes du S3 ne sont pas encore saisies</p>
                    <small>Délai dépassé depuis 5 jours</small>
                  </div>
                  <div className="alert-actions">
                    <button className="btn-icon"><i className="fas fa-arrow-right"></i></button>
                  </div>
                </li>
                <li className="alert-item medium-priority">
                  <div className="alert-icon"><i className="fas fa-money-bill-wave"></i></div>
                  <div className="alert-content">
                    <p>États de paiement vacataires à valider</p>
                    <small>12 professeurs en attente</small>
                  </div>
                  <div className="alert-actions">
                    <button className="btn-icon"><i className="fas fa-check"></i></button>
                  </div>
                </li>
                <li className="alert-item medium-priority">
                  <div className="alert-icon"><i className="fas fa-door-open"></i></div>
                  <div className="alert-content">
                    <p>Salle B204 signalée non disponible</p>
                    <small>Vérifier l'emploi du temps</small>
                  </div>
                  <div className="alert-actions">
                    <button className="btn-icon"><i className="fas fa-eye"></i></button>
                  </div>
                </li>
              </ul>
            </div>

            {/* Calendar */}
            <div className="chart-card">
              <div className="card-header">
                <h3><i className="fas fa-calendar-alt" style={{ color: 'var(--accent)', marginRight: '0.5rem' }}></i> Agenda</h3>
              </div>
              <div className="calendar-card">
                <div className="calendar-events">
                  <div className="calendar-event">
                    <div className="event-date">
                      <span className="day">15</span>
                      <span className="month">Jan</span>
                    </div>
                    <div className="event-details">
                      <h4>Délibérations S1</h4>
                      <p>Amphi A — 9h00</p>
                    </div>
                  </div>
                  <div className="calendar-event">
                    <div className="event-date">
                      <span className="day">20</span>
                      <span className="month">Jan</span>
                    </div>
                    <div className="event-details">
                      <h4>Publication résultats L1</h4>
                      <p>Portail étudiant</p>
                    </div>
                  </div>
                  <div className="calendar-event">
                    <div className="event-date">
                      <span className="day">28</span>
                      <span className="month">Jan</span>
                    </div>
                    <div className="event-details">
                      <h4>Début S2 - Reprises cours</h4>
                      <p>Toutes filières</p>
                    </div>
                  </div>
                  <div className="calendar-event">
                    <div className="event-date">
                      <span className="day">05</span>
                      <span className="month">Fév</span>
                    </div>
                    <div className="event-details">
                      <h4>Conseil d'Administration</h4>
                      <p>Salle de réunion — 14h00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity */}
        <div className="activity-section">
          <h2>Activité Récente</h2>
          <div className="activity-grid">
            <div className="activity-card">
              <div className="card-header">
                <h3>Dernières Actions</h3>
              </div>
              <div className="activity-timeline">
                <div className="timeline-item">
                  <div className="timeline-icon icon-success"><i className="fas fa-money-bill-wave"></i></div>
                  <div className="timeline-content">
                    <p>Paiement Wave reçu — Fatou Diallo (ETU-2024-001)</p>
                    <small>Il y a 10 minutes · 75 000 FCFA</small>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-icon icon-primary"><i className="fas fa-user-plus"></i></div>
                  <div className="timeline-content">
                    <p>Nouvel étudiant inscrit — Ibrahima Ndiaye (L1 Informatique)</p>
                    <small>Il y a 45 minutes</small>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-icon icon-accent"><i className="fas fa-pen"></i></div>
                  <div className="timeline-content">
                    <p>Notes saisies — UE Algorithmes S3 (Prof. Sow)</p>
                    <small>Il y a 2 heures · 45 étudiants</small>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-icon icon-primary"><i className="fas fa-file-pdf"></i></div>
                  <div className="timeline-content">
                    <p>Relevé de notes généré — Aïssatou Ba</p>
                    <small>Il y a 3 heures</small>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-icon icon-success"><i className="fas fa-money-bill-wave"></i></div>
                  <div className="timeline-content">
                    <p>Paiement Orange Money — Moussa Sy (ETU-2024-002)</p>
                    <small>Il y a 4 heures · 50 000 FCFA</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="activity-card">
              <div className="card-header">
                <h3>Stats Rapides</h3>
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: 'Taux de recouvrement', value: '78%', color: 'var(--secondary)' },
                  { label: 'Taux de réussite global', value: '68%', color: 'var(--primary)' },
                  { label: 'Présence moyenne', value: '82%', color: 'var(--accent)' },
                  { label: 'Satisfaction étudiants', value: '4.2/5', color: 'var(--secondary)' },
                ].map((stat) => (
                  <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', marginBottom: '0.4rem' }}>{stat.label}</div>
                      <div style={{ background: 'var(--bg-alt)', borderRadius: '999px', height: '8px', overflow: 'hidden' }}>
                        <div style={{
                          width: stat.value.includes('%') ? stat.value : '84%',
                          height: '100%',
                          background: stat.color,
                          borderRadius: '999px',
                          transition: 'width 1s ease'
                        }}></div>
                      </div>
                    </div>
                    <span style={{ fontSize: '0.88rem', fontWeight: '700', color: stat.color, minWidth: '50px', textAlign: 'right' }}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </AdminLayout>
  )
}
