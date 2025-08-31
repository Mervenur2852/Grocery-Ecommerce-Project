import React, { FC } from 'react'

const Footer :FC = () => {
  return (
    <div className='bg-green-900 text-center p-6 text-white text-sm'>
       Manav Market | &copy; {new Date().getFullYear()} Tüm hakları saklıdır.
    </div>
  )
}

export default Footer 
