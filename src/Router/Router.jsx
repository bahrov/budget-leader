import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Dashboard from '../screens/Dashboard'
import Home from '../screens/Home'
import Support from '../screens/Support'
import About from '../screens/About'
import Settings from '../screens/Settings'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="support" element={<Support />} />
        <Route path="about" element={<About />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router