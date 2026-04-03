import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppShell from '@/components/layout/AppShell'
import Home from '@/pages/Home'
import About from '@/pages/About'
import History from '@/pages/History'
import Pipeline from '@/pages/Pipeline'
import DidntMatch from '@/pages/DidntMatch'
import Directory from '@/pages/Directory'
import Mentor from '@/pages/Mentor'
import Resources from '@/pages/Resources'
import Events from '@/pages/Events'
import Spotlight from '@/pages/Spotlight'
import Culture from '@/pages/Culture'
import Sponsors from '@/pages/Sponsors'
import Join from '@/pages/Join'
import Contact from '@/pages/Contact'
import Admin from '@/pages/admin/Dashboard'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="/didnt-match" element={<DidntMatch />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/events" element={<Events />} />
          <Route path="/spotlight" element={<Spotlight />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
