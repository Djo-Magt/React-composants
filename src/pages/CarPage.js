import CarForm from "../components/cars/CarForm"
import CarList from "../components/cars/CarList"
import CarSearch from "../components/cars/CarSearch"
import CarValue from "../components/cars/CarValue"
import "../index.css"



function CarPage() {
    return(
        <div className="container is-fluid">
            <CarForm/>
            <CarSearch/>
            <CarList/>
            <CarValue/>
        </div>

    )
}

export default CarPage