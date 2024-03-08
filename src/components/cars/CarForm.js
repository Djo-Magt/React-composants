import { useDispatch, useSelector } from "react-redux"
import { changeName, changeCost, addCar } from "../../store"


function CarForm() {

    const dispatch = useDispatch()

    const {name, cost} = useSelector((state) => {
        return {
            name: state.form.name,
            cost : state.form.cost
        };
    })

    const handleChangeName = (event) => {
        dispatch(changeName(event.target.value))
    }

    const handleChangeCost = (event) => {
        const carCost = parseInt(event.target.value) || 0;
        dispatch(changeCost(carCost));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({name: name, cost: cost}));
        
    }

    return(
        <div className="car-form panel">
            <h2>Nouvelle voiture</h2>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Nom</label>
                        <input 
                            className="input is-expanded"
                            value={name}
                            onChange={handleChangeName}
                            />
                    </div>

                    <div className="field">
                        <label className="label">Prix</label>
                        <input 
                            className="input is-expanded"
                            value={cost || ''}
                            onChange={handleChangeCost}
                            type="number"
                            />
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CarForm