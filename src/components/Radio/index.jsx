import React from "react";

function Radio(props) {
    const {
        label,
        labelClass,
        name,
        className,
        inputClassName,
        handleChange,
        data,
    } = props;

    return (
        <div className="form-group row">
            <label className={labelClass}>{label}</label>
            {
            data.map((item) => {
                return (
                    <div className={className} key={item.id}>
                        <input
                            onChange={handleChange}
                            value={item.name}
                            type="radio"
                            name={name}
                            id={item.name}
                            className={inputClassName}
                        />
                        <label className="custom-control-label" htmlFor={item.name}>
                        {item.name}
                        </label>
                    </div>
                );
            })
            }
        </div>
    );
}

export default Radio
