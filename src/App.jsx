import SideBar from './components/SideBar/SideBar'
import { useNavigationContext } from './contexts/NavigationContext'
import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'
import DropdownPage from './pages/DropdownPage'

function App() {
  const { currentPath } = useNavigationContext()

  return (
    <div className="flex p-8">
      {/* Static sidebar for desktop */}
      <div className="grid grid-cols-1 w-72">
        <SideBar />
      </div>

      <main className="w-full">
        {currentPath === '/accordion' && <AccordionPage />}
        {currentPath === '/buttons' && <ButtonPage />}
        {currentPath === '/dropdown' && <DropdownPage />}
      </main>
    </div>
  )
}

export default App
