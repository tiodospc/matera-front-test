import { useEffect, useState } from 'react'
import GenericCard from '../common/Card/GenericCard'

const userName = localStorage.getItem('@Auth:user')
const image = localStorage.getItem('@Auth:image') || ''

const Sidebar = () => {
  return (
    <div>
      <div className="fixed h-screen left-0 top-0 w-64 bg-gray-700 text-white overflow-auto">
        <div className="flex flex-row justify-center mt-4">
          <img src={image} alt="avatar" className="rounded-full w-20 h-20" />
        </div>
        <div className="flex flex-row justify-center">
          <h1 className="text-2xl  mt-4">User: {userName}</h1>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
