import { useNavigationContext } from '../../contexts/NavigationContext'

function Link({ children, to, ...rest }) {
  const { navigate } = useNavigationContext()

  const handleClick = e => {
    e.preventDefault()
    navigate(to)
  }

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}

export default Link
