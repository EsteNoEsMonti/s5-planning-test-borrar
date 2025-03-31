import { Outlet, Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <h1 className="text-4xl font-bold text-green-400 mb-4">Dashboard</h1>
      <div>
        <Link to="users" className="text-green-300 hover:underline mb-2 mx-2">Users</Link>
        <Link to="settings" className="text-green-300 hover:underline mb-2 mx-2">Settings</Link>
      </div>
      <Outlet /> {/* Acá se muestran las rutas hijas */}
    </div>
  )
}