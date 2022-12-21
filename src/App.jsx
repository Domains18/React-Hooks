import { Routes, Route, Link } from 'react-router-dom'
import { Nav } from './Components/Nav';
import { Home } from './Components/Home';
import { NotFound } from './Components/NotFound';
function App() {


  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/usestate" element={<UseState />} />
      <Route path="/useeffect" element={<UseEffect />} />
      <Route path="/usecontext" element={<UseContext />} />
      <Route path="/usecallback" element={<UseCallback />} />
      <Route path="/usememo" element={<UseMemo />} />
      <Route path="/useRef" element={<UseRef />} />
      <Route path="/useReducer" element={<UseReducer />} />
      <Route path="/useTransition" element={<UseTransition />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
