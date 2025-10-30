import 'react'
import './general.css'

export default function Input({
  label,
  type = 'text',
  className = '',
  value,
  setValue,
  icon,
  inputAttributes = {},
}) {
  const handleInput = (e) => {
    if (typeof setValue === 'function') setValue(e.target.value)
  }

  return (
    <label className={`cg-input-wrapper ${className}`.trim()}>
      {label && <span className="cg-input-label">{label}</span>}
      <div className="cg-input-inner">
        {icon && <span className="cg-input-icon">{icon}</span>}
        <input
          className="cg-input"
          type={type}
          value={value}
          onChange={handleInput}
          {...inputAttributes}
        />
      </div>
    </label>
  )
}
