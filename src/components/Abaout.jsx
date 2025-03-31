import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()

  return (
    <div className="bg-gray-800 text-gray-200 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6 text-purple-400">Sobre nosotros</h1>
      <button
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition duration-300"
        onClick={() => navigate(-1)}
      >
        volver a la ruta anterior
      </button>
    </div>
  )
}