import React from 'react'

const ProfileCard = ({ id, name, image }) => {

  return (
    <div className='flex flex-col items-center cursor-pointer transition-transform hover:scale-105'>
      <img
        src={image}
        alt='profile'
        className='w-24 h-24 rounded-lg shadow-md'
      />
      <p className='mt-2 text-white text-sm font-semibold'>{id} - {name}</p>
    </div>
  )
}

export default ProfileCard