
import React from 'react'
import NavBar from '@/components/NavBar'
import { menuItems } from '@/constant/menu';
import StartMenu from '@/components/StartMenu'


function page() {
  return (
    <div>
      <NavBar/>
     {/* Pass menuItems as a prop to the StarterMenu component */}
     <StarterMenu menuItems={menuItems} />
        <StartMenu/>
    </div>
  )
}

export default page