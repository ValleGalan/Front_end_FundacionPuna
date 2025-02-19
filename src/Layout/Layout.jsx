import AppSidebar from '@/components/AppSidebar'
import Footer from '@/components/Footer'
import Topbar from '@/components/Topbar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {

    return (
        <SidebarProvider>
            <Topbar  />
             
               {/* Muestra Topbar solo en pantallas medianas y grandes */}
               <div className="hidden md:block">
                    <Topbar />
                </div>

                {/* Muestra AppSidebar solo en pantallas pequeñas */}
                <div className="md:hidden">
                    <AppSidebar />
                </div>
                
            <main className='w-full'>
            
                <div className='w-full min-h-[calc(100vh-45px)] '> 
                    <Outlet/>
                </div>
                <Footer />
            </main>
        </SidebarProvider>
    )
}

export default Layout