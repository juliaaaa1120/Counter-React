import { useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";
import CounterGroupSum from "./CounterGroupSum";

function MultiCounter() {
    const [size, setSize] = useState(0);
    const [sum, setSum] = useState(0);

    function updateCounterSize(size) {
        setSize(size);
        if (size === 0) {
            setSum(0);
        }
    }

    function increaseCounterSum() {
        setSum(sum + 1);
    }

    function decreaseCounterSum() {
        setSum(sum - 1);
    }

    return (
        <>
        <CounterSizeGenerator updateSize={updateCounterSize}></CounterSizeGenerator>
        <CounterGroupSum sum={sum}></CounterGroupSum>
        <CounterGroup size={size} increaseSum={increaseCounterSum} decreaseSum={decreaseCounterSum}></CounterGroup>
        </>
    );
}

export default MultiCounter;