import React, { useState } from "react";

const options = ["Canada", "Spain", "Ukraine", "United Kindom", "United State", "Uruguay"];

function DropDownList() {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div className="container-sm">
            <div className="input-group">
                <span className="input-group-text">DropDownList</span>
                <select onChange={(e) => setSelected(e.target.value)} value={selected} class="form-select">
                    {options.map((value) => (<option value={value} key={value}>{value}</option>))}
                </select>
                <span className="input-group-text">I like {selected}</span>
            </div>
        </div>
    );
}

export default DropDownList;