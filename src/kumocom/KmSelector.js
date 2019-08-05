import React from 'react'
import Select from 'react-select'

const KmSelector = (props) => {
    const { style, optionLabel } = props
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
            padding: 1,
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
        }),
        singleValue: (base, state) => ({
            ...base,
            color: userStyle.color
        }),
    };

    return (
        <Select
            options={props.options}
            getOptionLabel={option => option[optionLabel]}
            placeholder={props.placeholder}
            onChange={props.onChange}
            isClearable
            className={props.className}
            classNamePrefix="name-select"
            styles={customStyles}
        />
    )
}

export default KmSelector;
