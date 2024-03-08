import Button from '../components/Button';
import { TbAdjustmentsFilled } from "react-icons/tb";
import { PiAirplaneFill } from "react-icons/pi";
import { Ri24HoursLine } from "react-icons/ri";


function ButtonPage () {
    const handleClick = () => {
    };
    return (
    <div>
        <div>
            <Button primary rounded className="mb-5" onClick={handleClick}>
                <TbAdjustmentsFilled />
                Click!
            </Button>
        </div> 
        <div>
            <Button secondary>
                 <PiAirplaneFill />
                 Buy Now!
            </Button>
        </div>
        <div>
            <Button warning>
                <Ri24HoursLine /> 
                JOOOOO!
            </Button>
        </div>
        <div>
            <Button danger rounded>Hola!</Button>
        </div>
        <div>
            <Button success outline>BOJIJ</Button>
        </div>
    </div>
    );
};

export default ButtonPage;