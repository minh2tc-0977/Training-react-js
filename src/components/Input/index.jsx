import React from "react";

function Input(props) {
    const {
        label,
        labelClass,
        type,
        name,
        value,
        className,
        handleChange
    } = props;

    return (
        <div className="form-group row">
            <label className={labelClass}>{label}</label>
            <input
                onChange={handleChange}
                type={type}
                name={name}
                className={className}
                value={value}
            />
        </div>
    );
}

export default Input
