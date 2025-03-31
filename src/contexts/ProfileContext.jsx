// 📁 src/context/ProfileContext.jsx
import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"

const ProfileContext = createContext()

export const useProfiles = () => useContext(ProfileContext)

const API = "https://67e8bd1920e3af747c41de76.mockapi.io/api/v1/profiles"

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProfiles = async () => {
    try {
      const { data } = await axios.get(API)
      setProfiles(data)
    } catch (error) {
      console.error("Error al traer perfiles", error)
    } finally {
      setLoading(false)
    }
  }

  const addProfile = async (profile) => {
    const { data } = await axios.post(API, profile)
    setProfiles((prev) => [...prev, data])
  }

  const deleteProfile = async (id) => {
    await axios.delete(`${API}/${id}`)
    setProfiles((prev) => prev.filter((p) => p.id !== id))
  }

  const updateProfile = async (id, updatedData) => {
    const { data } = await axios.put(`${API}/${id}`, updatedData)
    setProfiles((prev) => prev.map((p) => (p.id === id ? data : p)))
  }

  useEffect(() => {
    fetchProfiles()
  }, [])

  return (
    <ProfileContext.Provider
      value={{ profiles, loading, addProfile, deleteProfile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  )

}
