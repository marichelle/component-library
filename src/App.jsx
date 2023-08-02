import Route from './components/Route/Route'
import SideBar from './components/SideBar/SideBar'
import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'
import DropdownPage from './pages/DropdownPage'

function App() {
  return (
    <div className="flex p-8">
      {/* Static sidebar for desktop */}
      <div className="grid grid-cols-1 w-72">
        <SideBar />
      </div>

      <main className="w-full py-3">
        <Route path="/">
          <AccordionPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
      </main>
    </div>
  )
}

export default App
