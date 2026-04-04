import { useState } from 'react'
import AdminLayout from '../../components/AdminLayout'

export default function SchedulePage() {
  const [selectedClass, setSelectedClass] = useState('L2 Informatique')

  const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi']
  const timeSlots = ['08h00–10h00', '10h00–12h00', '12h00–14h00', '14h00–16h00', '16h00–18h00']

  // schedule[time][day] = course or null
  const schedule: Record<string, Record<string, { course: string; teacher: string; room: string; color: string } | null>> = {
    '08h00–10h00': {
      'Lundi': { course: 'Algorithmes', teacher: 'Dr. Sow', room: 'B201', color: '' },
      'Mardi': { course: 'Base de Données', teacher: 'Dr. Gueye', room: 'B202', color: 'green' },
      'Mercredi': null,
      'Jeudi': { course: 'Java OOP', teacher: 'Dr. Gueye', room: 'B201', color: '' },
      'Vendredi': null,
    },
    '10h00–12h00': {
      'Lundi': { course: 'Réseaux', teacher: 'Dr. Sow', room: 'B202', color: 'amber' },
      'Mardi': null,
      'Mercredi': { course: 'Algorithmes', teacher: 'Dr. Sow', room: 'B201', color: '' },
      'Jeudi': null,
      'Vendredi': { course: 'Base de Données', teacher: 'Dr. Gueye', room: 'Labo 1', color: 'green' },
    },
    '12h00–14h00': {
      'Lundi': null,
      'Mardi': null,
      'Mercredi': null,
      'Jeudi': null,
      'Vendredi': null,
    },
    '14h00–16h00': {
      'Lundi': { course: 'TP Algo', teacher: 'Dr. Sow', room: 'Labo 1', color: 'amber' },
      'Mardi': { course: 'Java OOP', teacher: 'Dr. Gueye', room: 'B201', color: '' },
      'Mercredi': { course: 'Réseaux', teacher: 'Dr. Sow', room: 'B202', color: 'amber' },
      'Jeudi': null,
      'Vendredi': null,
    },
    '16h00–18h00': {
      'Lundi': null,
      'Mardi': { course: 'TP Base de Données', teacher: 'Dr. Gueye', room: 'Labo 2', color: 'green' },
      'Mercredi': null,
      'Jeudi': { course: 'TP Réseaux', teacher: 'Dr. Sow', room: 'Labo 1', color: 'amber' },
      'Vendredi': null,
    },
  }

  return (
    <AdminLayout>
      <main className="admin-main">
        <div className="dashboard-header">
          <div>
            <h1>Emploi du Temps</h1>
            <p>Planning hebdomadaire par classe.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-outline">
              <i className="fas fa-file-pdf"></i> Imprimer
            </button>
            <button className="btn btn-primary">
              <i className="fas fa-plus"></i> Ajouter un Cours
            </button>
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <label style={{ fontWeight: '600', fontSize: '0.88rem', color: 'var(--text-light)' }}>Classe :</label>
          <select
            className="filter-select"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option>L1 Informatique</option>
            <option>L2 Informatique</option>
            <option>L3 Informatique</option>
            <option>L1 Droit</option>
            <option>M1 Finance</option>
          </select>
          <label style={{ fontWeight: '600', fontSize: '0.88rem', color: 'var(--text-light)' }}>Semaine :</label>
          <input type="week" className="filter-select" defaultValue="2024-W03" />
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          {[
            { label: 'Cours Magistral', color: 'var(--primary)', bg: 'rgba(79,70,229,0.08)' },
            { label: 'Travaux Dirigés', color: 'var(--secondary)', bg: 'rgba(16,185,129,0.08)' },
            { label: 'Travaux Pratiques', color: 'var(--accent)', bg: 'rgba(245,158,11,0.08)' },
          ].map((l) => (
            <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: l.bg, border: `2px solid ${l.color}` }}></div>
              <span style={{ color: 'var(--text-light)' }}>{l.label}</span>
            </div>
          ))}
        </div>

        <div className="schedule-container">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Horaire</th>
                {days.map((d) => <th key={d}>{d}</th>)}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((slot) => (
                <tr key={slot}>
                  <td>{slot}</td>
                  {days.map((day) => {
                    const cell = schedule[slot][day]
                    if (slot === '12h00–14h00') {
                      return day === 'Lundi'
                        ? <td key={day} colSpan={5} style={{ textAlign: 'center', background: 'var(--bg-alt)', color: 'var(--text-light)', fontSize: '0.82rem', fontStyle: 'italic' }}>— Pause déjeuner —</td>
                        : null
                    }
                    return (
                      <td key={day}>
                        {cell && (
                          <div className={`schedule-card ${cell.color}`}>
                            <span className="sc-course">{cell.course}</span>
                            <span className="sc-teacher">{cell.teacher}</span>
                            <span className="sc-room"><i className="fas fa-door-open" style={{ marginRight: '3px' }}></i>{cell.room}</span>
                          </div>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </AdminLayout>
  )
}
