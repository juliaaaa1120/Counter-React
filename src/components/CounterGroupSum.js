import { useEffect, useState } from "react";

function CounterGroupSum(props) {
    const [sum, setSum] = useState(0);

    useEffect(() => {
        setSum(props.sum)
    }, [props.sum]);

    return (
        <div>
            Sum: {sum}
        </div>
    );
}

export default CounterGroupSum;