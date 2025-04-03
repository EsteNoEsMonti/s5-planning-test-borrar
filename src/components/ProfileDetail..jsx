import { useParams, useNavigate } from "react-router-dom"
import { useProfiles } from "../contexts/ProfileContext"

export default function ProfileDetail() {
  const { id } = useParams() // explicacion abajo
  console.log('useParams -> ', useParams())
  const navigate = useNavigate()
  const { profiles } = useProfiles()

  const profile = profiles.find((p) => p.id === id)

  if (!profile) return <p>Perfil no encontrado 😢</p>

  return (
    <div className="text-center mt-10">
      <img src={profile.avatar} alt={profile.name} className="mx-auto w-32 h-32 rounded-full mb-4" />
      <h1 className="text-3xl font-bold">{profile.name}</h1>
      <p className="text-gray-400 mt-2">ID: {profile.id}</p>
      <button
        className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        onClick={() => navigate(-1)} // Regresa a la pagina anterior
      >
        Back
      </button>
    </div>
  )
}