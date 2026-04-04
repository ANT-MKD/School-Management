import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import PricingPage from './pages/PricingPage'
import SolutionsPage from './pages/SolutionsPage'
import AdminDashboard from './pages/admin/AdminDashboard'
import StudentsPage from './pages/admin/StudentsPage'
import TeachersPage from './pages/admin/TeachersPage'
import ClassesPage from './pages/admin/ClassesPage'
import FilieresPage from './pages/admin/FilieresPage'
import NiveauxPage from './pages/admin/NiveauxPage'
import SemestresPage from './pages/admin/SemestresPage'
import UesPage from './pages/admin/UesPage'
import EcsPage from './pages/admin/EcsPage'
import SallesPage from './pages/admin/SallesPage'
import NotesPage from './pages/admin/NotesPage'
import MoyennesPage from './pages/admin/MoyennesPage'
import RelevesPage from './pages/admin/RelevesPage'
import PaiementsPage from './pages/admin/PaiementsPage'
import VacationsPage from './pages/admin/VacationsPage'
import TransactionsPage from './pages/admin/TransactionsPage'
import FraisPage from './pages/admin/FraisPage'
import SchedulePage from './pages/admin/SchedulePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />

        {/* Admin routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<StudentsPage />} />
        <Route path="/admin/teachers" element={<TeachersPage />} />
        <Route path="/admin/classes" element={<ClassesPage />} />
        <Route path="/admin/filieres" element={<FilieresPage />} />
        <Route path="/admin/niveaux" element={<NiveauxPage />} />
        <Route path="/admin/semestres" element={<SemestresPage />} />
        <Route path="/admin/ues" element={<UesPage />} />
        <Route path="/admin/ecs" element={<EcsPage />} />
        <Route path="/admin/salles" element={<SallesPage />} />
        <Route path="/admin/notes" element={<NotesPage />} />
        <Route path="/admin/moyennes" element={<MoyennesPage />} />
        <Route path="/admin/releves" element={<RelevesPage />} />
        <Route path="/admin/paiements" element={<PaiementsPage />} />
        <Route path="/admin/vacations" element={<VacationsPage />} />
        <Route path="/admin/transactions" element={<TransactionsPage />} />
        <Route path="/admin/frais" element={<FraisPage />} />
        <Route path="/admin/schedule" element={<SchedulePage />} />
      </Routes>
    </BrowserRouter>
  )
}
