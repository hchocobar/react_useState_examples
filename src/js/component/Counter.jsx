import React, { useState } from "react";

const Counter = () => {
    // Initilize a count variable at 0, the setCount function will be used to re-set the "count" value.
    const [count, setCount] = useState(0);

    return (
        <div className="input-group justify-content-center my-5">
            <span className="input-group-text">Counter</span>
            <button onClick={() => setCount(count + 1)} className="btn btn-outline-secondary" type="button">👍🏽</button>
            <button onClick={() => setCount(count - 1)} className="btn btn-outline-secondary" type="button">👎🏽</button>
            <span className="input-group-text">{count} likes</span>
        </div>
    );
};

export default Counter;