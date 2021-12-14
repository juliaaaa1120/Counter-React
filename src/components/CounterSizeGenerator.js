import { useDispatch } from "react-redux";
import { UPDATE_SIZE, RESET_SUM } from "../constants/constants"

function CounterSizeGenerator() {
    const dispatch = useDispatch();

    function handleChangeSize(event) {
        const sizeValue = parseInt(event.target.value);
        dispatch({ type: UPDATE_SIZE, payload: sizeValue });
        dispatch({ type: RESET_SUM });
    }

    return (
        <div>
            <span>Size: </span>
            <input type="number" min="0" onChange={handleChangeSize}></input>
        </div>
    );
}

export default CounterSizeGenerator;