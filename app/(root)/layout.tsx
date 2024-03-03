
import Mobilenav from '@/components/shared/Mobilenav'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='root'>
      <Sidebar/>
      <Mobilenav/>
      
        <div className="root-container">
            <div className="wraper">
            {children}
            </div>
        </div>

    </main>
  )
}

export default Layout