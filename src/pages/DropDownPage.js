import DropDown from '../components/DropDown';
import { useState } from 'react';


function DropDownPage () {

    const [selection, setSelection] = useState(null);

    const handleSelect = (cleValeur) => {
        setSelection(cleValeur)
    };

    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Green', value: 'green'},
        {label: 'Blue', value: 'blue'}
    ];


    return (
        <div className="flex">
            <DropDown options={options} value={selection} onChange ={handleSelect} />
        </div>
    );
};

export default DropDownPage