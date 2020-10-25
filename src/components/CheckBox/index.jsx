import React from "react";

function CheckBox(props) {
    const {
        label,
        labelClass,
        name,
        className,
        handleChange,
        data,
        inputClassName,
    } = props;

    return (
        <div className="form-group row">
            <label className={labelClass}>{label}</label>
            <div clas="col-sm-8 row">
            {data.map((item) => {

                return (
                    <div
                        className={className}
                        key={item.id}
                    >
                        <input
                            onChange={handleChange}
                            value={JSON.stringify(item)}
                            name={name}
                            type="checkbox"
                            className={inputClassName}
                            id={item.name}
                        />
                        <label
                            className="custom-control-label"
                            htmlFor={item.name}
                        >
                        {item.name}
                        </label>
                    </div>
                );
            })}
            </div>
        </div>
    );
}

export default CheckBox
