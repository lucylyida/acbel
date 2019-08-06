import React from 'react'
import Select from 'react-select'

const KmSelector = (props) => {
    const { style, optionLabel,options,placeholder,onChange,className } = props
    const userStyle = style === undefined ? {} : style
    const customStyles = {
        container: (base, state) => ({
            ...base,
            width: userStyle.width === undefined ? 250 : userStyle.width,
        }),
        control: (base, state) => ({
            ...base,
            background: userStyle.background,
            cursor: 'pointer',
            padding: 0,
            fontSize:15,
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
            background: state.isSelected ? userStyle.optionbg : null,
            fontSize:15,
            color:style=== undefined ? null : style.color,
        }),
        singleValue: (base, state) => ({
            ...base,
            color: userStyle.color
        }),
    };

    return (
        <Select
            options={options}
            getOptionLabel={option => option[optionLabel]}
            placeholder={placeholder}
            onChange={onChange}
            isClearable
            className={className}
            classNamePrefix="name-select"
            styles={customStyles}
        />
    )
}

export default KmSelector;
