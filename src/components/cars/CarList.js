import { useSelector, useDispatch } from "react-redux"
import { removeCar } from '../../store'


function CarList() {

    const dispatch = useDispatch();

    const { cars, name } = useSelector(({form, cars: {cars, searchTerm}}) => {
        // on remplace le {state} du useSelector par {cars: {data, searchTerm}} pour eviter d'écrire : state.cars.searchTerm
        // 
        // le cars sur lequel on filtre ci-dessous équivaut à state.cars.cars
        const filteredCars = cars.filter((car) => 
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return {
            cars: filteredCars,
            name: form.name
        }    

    })

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id))
    }

    const renderedCars = cars.map((car) => {
        // decide if car should be bold
        // state.form.name 

        // if name is present alors ....
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase())

        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {car.name} - {car.cost}€
                </p>
                <button className="button is-danger" onClick={() => handleCarDelete(car)}>
                    Delete
                </button>
            </div>
        )
    })

    return(
        <div className="car-list">
            {renderedCars}
            <hr/>
        </div>
    )
}

export default CarList