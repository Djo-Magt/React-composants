import Route from "./components/Route"
import AccordionPage from './pages/AccordionPage';
import DropDownPage from './pages/DropDownPage';
import Sidebar from "./components/SideBar";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
import MoviePage from "./pages/MoviePage";
import CarPage from "./pages/CarPage";





function App () {
    return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
        <Sidebar/>
        <div className="col-span-5">
            <Route path="/accordion">
                <AccordionPage/>
            </Route>
            <Route path="/">
                <DropDownPage/>
            </Route>
            <Route path="/buttons">
                <ButtonPage/>
            </Route>
            <Route path="/modal">
                <ModalPage/>
            </Route>
            <Route path="/table">
                <TablePage/>
            </Route>
            <Route path="/counter">
                <CounterPage/>
            </Route>
            <Route path="/list">
                <MoviePage/>
            </Route>
            <Route path="/cars">
                <CarPage/>
            </Route>
  
        </div>
    </div>
)}

export default App