import { useEffect, useState } from "react";
import Counter from "./Counter";

function CounterGroup(props) {
    const [counterList, setCounterList] = useState([]);

    useEffect(() => {
        const counterList = new Array(props.size).fill(Date.now);
        setCounterList(counterList);
    }, [props.size]);

    function updateSum(value) {
        props.updateSum(value);
    }

    return (
        <div>
            {
                counterList.map((item, index) => (
                    <Counter key={item + index} updateSum={updateSum}></Counter>
                ))
            }
        </div>
    );
}

export default CounterGroup;