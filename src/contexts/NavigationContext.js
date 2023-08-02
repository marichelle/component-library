import { createContext, useContext, useEffect, useState } from 'react'

const NavigationContext = createContext()

const NavigationContextProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  const navigate = to => {
    window.history.pushState({}, '', to)
    setCurrentPath(to)
  }

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handler)

    return () => window.removeEventListener('popstate', handler)
  }, [])

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        navigate,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

const useNavigationContext = () => useContext(NavigationContext)

export { NavigationContextProvider, useNavigationContext }
