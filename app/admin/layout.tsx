import React from 'react'

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
        <h1>Admin layout</h1>
        {children}
    </main>
  )
}

export default AdminLayout