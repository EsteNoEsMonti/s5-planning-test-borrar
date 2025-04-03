import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useProfiles } from "../contexts/ProfileContext"

export default function ProfileCreate() {
  const [name, setName] = useState("")
  const [avatar, setAvatar] = useState("")
  const [error, setError] = useState("")

  const { addProfile } = useProfiles()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (name.trim() === "" || avatar.trim() === "") {
      return setError("Todos los campos son obligatorios")
    }

    try {
      await addProfile({ name, avatar })
      navigate("/profiles") // o navigate("/profiles") si tenés una ruta con la lista
    } catch (err) {
      setError("Ocurrió un error al crear el perfil")
      console.error(err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="max-w-md w-full bg-gray-800 p-6 rounded">
        <h2 className="text-2xl font-bold text-white mb-4">Crear nuevo perfil</h2>
        {error && <p className="text-red-400 mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="text"
            placeholder="URL del avatar"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">
            Crear perfil
          </button>
          <button onClick={() => navigate('/profiles')} className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">
            Volver a la lista de perfiles
          </button>
        </form>
      </div>
    </div>
  )
}
