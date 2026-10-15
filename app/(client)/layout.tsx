import Footer from '@/components/layout/client/footer'
import NavBar from '@/components/layout/client/nav'
import React from 'react'

const ClientLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
        <NavBar />
        <section className='min-h-[80vh] relative top-16 z-50 bg-white backdrop-blur-4xl'>
          {children}
        </section>
        <Footer />
    </main>
  )
}

export default ClientLayout

//layout vanne file jaile ni kun route paxi ko pages harule tyo layout lai share garnu parne xa,tyo folder bhitra layout vanne file banaumu paryo