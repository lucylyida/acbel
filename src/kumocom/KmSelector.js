import React from 'react'
import Select, { components } from 'react-select'

const KmSelector = (props) => {
    const { style, optionLabel, options, placeholder, onChange, className, icon,isSearch ,noMinWidth, value=null} = props
    const userStyle = style === undefined ? {} : style
    const customStyles = {
        container: (base, state) => ({
            ...base,
            width: "100%", //userStyle.width === undefined ? 250 : userStyle.width,
            minWidth: noMinWidth ? null : 100,
        }),
        control: (base, state) => ({
            ...base,
            background: userStyle.background,
            cursor: 'pointer',
            padding: 0,
            fontSize: 15,
            //boxShadow: 'none',
            //borderColor: 'none',
            '&:hover': { borderColor: userStyle.borderColor },
        }),
        valueContainer: (base, state) => ({
            ...base,
        }),
        option: (base, state) => ({
            ...base,
            cursor: 'pointer',
            background: state.isSelected ? "white" : "white",
            fontSize: 15,
            color: style === undefined ? null : style.color,
        }),
        singleValue: (base, state) => ({
            ...base,
            color: userStyle.color
        }),
        indicatorSeparator: (base, state) => ({
            ...base,
            display: userStyle.indicator === undefined ? null : userStyle.indicator
        }),
        DropdownIndicator: (base, state) => ({
            ...base,
        })
    };

    return (
        <div className="w-100">
            <Select
                value={value}
                options={options}
                getOptionLabel={option => option[optionLabel]}
                placeholder={placeholder}
                onChange={onChange}
                isClearable
                className={className}
                classNamePrefix="name-select"
                styles={customStyles}
                isSearchable={isSearch ? true : false}
                components={{
                    DropdownIndicator: (props) => {
                        return (
                            components.DropdownIndicator && (
                                <components.DropdownIndicator {...props}>
                                    {icon}
                                </components.DropdownIndicator>
                            )
                        );
                    }
                }}

            />
        </div>
    )
}

export default KmSelector;


// const DropdownIndicator = props => {
//     return (
//         components.DropdownIndicator && (
//             <components.DropdownIndicator {...props}>
//                 {/* <i class="fas fa-search"></i> */}
//                 {props.icon}
//             </components.DropdownIndicator>
//         )
//     );
// };

