import Route from './components/Route/Route'
import SideBar from './components/SideBar/SideBar'
import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'
import CounterPage from './pages/CounterPage'
import DropdownPage from './pages/DropdownPage'
import ModalPage from './pages/ModalPage'
import TablePage from './pages/TablePage'

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
        <Route path="/counter">
          <CounterPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
      </main>
    </div>
  )
}

export default App
