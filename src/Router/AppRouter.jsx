import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/Abaout'
import Dashboard from '../components/Dashboard'
import NotFound from '../components/NotFound'
import ProfileSelector from '../components/ProfileSelector'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* Rutas anidadas */}
      <Route path="/nested-route" element={<Dashboard />}>
        <Route path="users" element={<p className='text-white'>Users 🧑🏻‍💻</p>} />
        <Route path="settings" element={<p className='text-white'>Settings ⚙️</p>} />
      </Route>

      {/* Ruta para profile Selector */}
      <Route path="/profiles" element={<ProfileSelector />} />

      {/* Ruta no encontrada */}
      {/* opcion 404 poge  */}
      {/* <Route path="*" element={<p className='text-red-500'>404 - Not Found 😿</p>} /> */}
      <Route path="/not-found" element={<NotFound />} />

      {/* opcion volver al inicio  */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRouter