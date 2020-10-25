import React from "react";

function Select(props) {
    const {
        label,
        labelClass,
        name,
        value,
        className,
        handleChange,
        data,
    } = props;

    return (
        <div className="form-group row">
            <label className={labelClass}>{label}</label>
            <select
                value={value}
                onChange={handleChange}
                className={className}
                name={name}
            >
                <option>Choose...</option>
                {data.map((item) => {
                    return (
                    <option
                        key={item.id}
                        value={item.name}
                    >
                        {item.name}
                    </option>
                    )
                })}
            </select>
        </div>
    );
}

export default Select
