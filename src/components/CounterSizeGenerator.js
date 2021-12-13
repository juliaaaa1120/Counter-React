import { useState } from "react";

function CounterSizeGenerator(props) {
    const [size, setSize] = useState(0);

    function handleChangeSize(event) {
        const sizeValue = parseInt(event.target.value);
        setSize(sizeValue);
        props.updateSize(sizeValue);
    }

    return (
        <div>
            <span>Size: </span>
            <input value={size} type="number" onChange={handleChangeSize}></input>
        </div>
    );
}

export default CounterSizeGenerator;