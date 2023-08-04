import classNames from 'classnames'

import { useNavigationContext } from '../../contexts/NavigationContext'
import Link from '../Link/Link'

const navigation = [
  {
    name: 'Accordion',
    path: '/',
  },
  {
    name: 'Buttons',
    path: '/buttons',
  },
  {
    name: 'Counter',
    path: '/counter',
  },
  {
    name: 'Dropdown',
    path: '/dropdown',
  },
  {
    name: 'Modal',
    path: '/modal',
  },
  {
    name: 'Table',
    path: '/table',
  },
]

function SideBar() {
  const { currentPath } = useNavigationContext()

  return (
    <nav className="flex flex-col flex-1">
      {navigation.map(({ name, path }) => {
        return (
          <Link
            key={name}
            to={path}
            className={classNames(
              currentPath === path ? 'border-indigo-700' : 'border-white',
              'my-2 pl-4 py-2 text-indigo-700 text-xl leading-6 font-semibold border-l-4'
            )}
          >
            {name}
          </Link>
        )
      })}
    </nav>
  )
}

export default SideBar
