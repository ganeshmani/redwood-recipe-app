import { useEffect } from 'react'
import { navigate, routes } from '@redwoodjs/router'

import NavbarLayout from '../../layouts/NavbarLayout'
import RecipesCell from '../../components/RecipesCell/RecipesCell'
const HomePage = () => {
  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (!token) {
      navigate(routes.login())
    }
  }, [])

  return (
    <NavbarLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ml-10 mt-10">
        <div className="flex flex-wrap">
          <RecipesCell />
        </div>
      </div>
      {/* <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ml-10 mt-10"></div> */}
    </NavbarLayout>
  )
}

export default HomePage
