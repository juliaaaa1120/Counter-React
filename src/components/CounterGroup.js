import { useEffect, useState } from "react";
import Counter from "./Counter";

function CounterGroup(props) {
    const [counterList, setCounterList] = useState([]);

    useEffect(() => {
        const counterList = new Array(props.size).fill(Date.now);
        setCounterList(counterList);
    }, [props.size]);

    function increaseSum() {
        props.increaseSum();
    }

    function decreaseSum() {
        props.decreaseSum();
    }

    return (
        <div>
            {
                counterList.map((item, index) => (
                    <Counter key={item + index} increase={increaseSum} decrease={decreaseSum}></Counter>
                ))
            }
        </div>
    );
}

export default CounterGroup;