import { useNavigationContext } from '../../contexts/NavigationContext'

function Route({ children, path }) {
  const { currentPath } = useNavigationContext()

  if (path === currentPath) return children
  return null
}

export default Route
