import React from 'react'
import ProfileCard from './ProfileCard.jsx'

const ProfileSelector = () => {

    const profiles = [
    { id: '1', name: 'Lucas', image: 'https://occ-0-7180-1740.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXHTJntA_317MnwyfnBwo0J496EfxBdfUWo34eImPANmYvUrujpSs5wDBB616vW31s7Tf_I-lSDwwghkXus4oCYqarD52juPOQ.png?r=4e1' },
    { id: '2', name: 'Ruben', image: 'https://occ-0-7180-1740.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTjKpSHNJgtX1GcGPMPH-6gq2R4IGhT-CvzMo2hFJKNTN6Ri5c9A9ihIa1ASs_--Trss_AQCjSrggt26CosxJWQVoX7rgibDgA.png?r=87b' },
    { id: '3', name: 'Carlitos', image: 'https://occ-0-7180-1740.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeNuT5xg7rYKjLAkTXdCiaZeFXWONGdWXKV6ZmGDMQFuvfuGSd2zeKl5WAU8dKl4hv5Tk7V544sTfUp21najYTOqJr-y872HyA.png?r=3e2' },
    { id: '4', name: 'Maldonado', image: 'https://occ-0-7180-1740.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABVFHTYjLF5VJPEdARSL-YtVOa9yxMBi1WH3Mf0Grvh5y-jTHAOUzQPD-KgnPLu4p_eTj8m0XdYuAiI3_Dmn6S3D1KoavflpkNA.png?r=c10' },
  ]

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-black/90 text-white'>

      <h1 className='text-2xl font-bold mb-6' >¿Quién está viendo ahora?</h1>
      {/* contededor de cards */}
      <div className='flex flex-wrap gap-6 justify-center mx-10'>
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} id={profile.id} name={profile.name} image={profile.image} />
        ))}

        {/* add profile component */}
        <div className='flex flex-col items-center cursor-pointer'>
          <div className='w-24 h-24 flex items-center justify-center bg-gray-700 rounded-lg shadow-md'>
            <span className='text-4xl font-bold' >+</span>
          </div>
          <p className='mt-2 text-sm font-semibold'>Agregar perfil</p>
        </div>

      </div>

      <button className='mt-8 px-6 py-2 font-semibold bg-gray-800 hover:bg-gray-700 rounded-lg'>
        Administrar perfiles
      </button>

    </div>
  )
}

export default ProfileSelector