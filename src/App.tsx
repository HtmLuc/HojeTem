import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/home'
import SobreEvento from './pages/sobreEvento'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-evento" element={<SobreEvento />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
