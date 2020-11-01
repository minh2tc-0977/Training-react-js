import React from "react";

function Textarea(props) {
    const {
        label,
        labelClass,
        name,
        value,
        className,
        handleChange,
        rows,
    } = props;

    return (
        <div className="form-group row">
            <label className={labelClass}>{label}</label>
            <textarea
                onChange={handleChange}
                name={name}
                value={value}
                className={className}
                rows={rows}
            />
        </div>
    );
}

export default Textarea
