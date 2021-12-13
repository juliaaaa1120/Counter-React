import { useEffect, useState } from "react";

function CounterGroupSum(props) {
    const [sum, setSum] = useState(0);

    useEffect(() => {
        setSum(props.sum);
    }, [props.sum]);

    return (
        <div>
            <span>Sum: {sum}</span>
        </div>
    );
}

export default CounterGroupSum;