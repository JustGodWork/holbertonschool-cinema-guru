import React from 'react'
import './general.css'

export default function SelectInput({
  label,
  options = [],
  className = '',
  value,
  setValue,
}) {
  const handleSelect = (e) => {
    if (typeof setValue === 'function') setValue(e.target.value)
  }

  return (
    <label className={`cg-select-wrapper ${className}`.trim()}>
      {label && <span className="cg-select-label">{label}</span>}
      <select className="cg-select" value={value} onChange={handleSelect}>
        {options.map((opt, idx) => {
          if (typeof opt === 'object') {
            const { value: optValue, label: optLabel, ...rest } = opt
            return (
              <option key={optValue ?? idx} value={optValue} {...rest}>
                {optLabel ?? optValue}
              </option>
            )
          }

          return (
            <option key={idx} value={opt}>
              {opt}
            </option>
          )
        })}
      </select>
    </label>
  )
}
