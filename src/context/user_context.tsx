import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext("Default Value")


const initialState = {}

type CartProviderProps = {
    children: React.ReactNode
}

export const UserProvider = ({ children }: CartProviderProps) => {
  return (
    <UserContext.Provider value='user context'>{children}</UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}


