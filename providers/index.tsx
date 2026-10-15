import React, { Children } from 'react'
import Clientprovider from './client.provider'
import AuthProvider from './auth.provider'

const Providers = ({children}:Readonly<{children:React.ReactNode}>) => {
  return (
    <Clientprovider>
        <AuthProvider>
            {children}
        </AuthProvider>
    </Clientprovider>
    
  )
}

export default Providers