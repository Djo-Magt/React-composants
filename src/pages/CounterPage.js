import Button from '../components/Button'
import { useReducer } from 'react';
import Panel from '../components/Panel'

const SUBMIT_CHANGE = 'submit_new_count';

// state équivaut au current state de useReducer (count et valueToAdd)
// action prend l'argument que l'on passe quand on appel dispatch()
const reducer = (state, action) => {
    // le but ici est de retourner un object avec un new state puis de rerender pour que state devienne le new state

    switch (action.type) {
        case 'increment-count':
            return {
                ...state,
                count: state.count + 1
            };
        case 'decrement-count':
            return {
                ...state,
                count: state.count - 1
            };
        case 'change-value-to-add':
            return {
                ...state,
                valueToAdd: action.payload
            };

        case SUBMIT_CHANGE:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd : 0,
            };

        default:
            return state;
    }

};

function CounterPage() {

    // const[count, setCount] = useState(0);
    // const[valueToAdd, setValueToAdd] = useState(0);

    // dispatch appel reducer et permet de modifier le state
    // state équivaut à l'état actuel des valeurs que l'on pourra appeler avec state.count ou state.valueToAdd

    const [state, dispatch] = useReducer(reducer, {
        count : 0,
        valueToAdd: 0,
    })

    // exemple :    state = {count:10, valueToAdd:2}


    const increment = () => {
        dispatch({
            type: 'increment-count'
        });
    };

    const decrement = () => {
        dispatch({
            type: 'decrement-count'
        });
    };

    const handleChange = (event) => {
        // ici on met le parseInt car sinon la valuer est une string, malgrés le fait que l'input ait le type='number'
        // le '|| 0 ' sert à eviter le bug qu'on aurait si on click sur delete alors qu'on est dans l'input qui équivaut à empty string ''
        const value = parseInt(event.target.value) || 0;
        dispatch({
            type :'change-value-to-add',
            payload: value
        })
    };
    
    const handleSubmit = (event) =>{
        event.preventDefault();

        dispatch({
            type: SUBMIT_CHANGE,
        });
    }

    return (
        <Panel className="m-3">
            <h1 className='text-lg'> Count is {state.count}</h1>
            <div className='flex flex-rox'>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input 
                    onChange={handleChange}
                    // sans le || "" on a constament un 0 dans l'input 
                    value={state.valueToAdd || ""}
                    type="number" 
                    className='p-1 m-3 bg-grey-50 border border-gray-300'
                    />
                <Button>Add it!</Button>
            </form>
        </Panel>
    )
};

export default CounterPage