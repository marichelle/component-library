import cn from 'classnames'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const chevronClassName = cn('w-5', 'h-5', 'transition-all', {
    'rotate-180': isOpen,
  })

  const handleOptionClick = option => {
    onChange(option)
    toggle()
  }

  const toggle = () => setIsOpen(prevState => !prevState)

  return (
    <div className="p-2 text-lg">
      <button
        className="flex items-center justify-between w-full px-4 py-3 bg-blue-500 font-semibold text-white"
        onClick={toggle}
      >
        <span>{value?.label || 'Select...'}</span>
        <ChevronDownIcon className={chevronClassName} />
      </button>
      {isOpen && (
        <div className="bg-blue-200">
          {options.map(option => {
            const { label, value } = option
            return (
              <button
                key={value}
                className="w-full px-4 py-3 text-left hover:bg-blue-500 hover:text-white"
                onClick={() => handleOptionClick(option)}
              >
                {label}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  selected: PropTypes.object,
  onSelect: PropTypes.func,
}

export default Dropdown
