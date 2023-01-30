import React from 'react'

export default function MySelect({options,defaultValue,value,onChangeSelect}) {
  return (
    <select 
        value={value}
        onChange={e=>onChangeSelect(e.target.value)}    
    >
        <option value="" disabled>{defaultValue}</option>
        {options.map(option=>
            <option value={option.value} key={option.value}>
                {option.name}
            </option>
        )}
    </select>
  )
}
