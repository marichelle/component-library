import cn from 'classnames'
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

import PanelButton from '../PanelButton/PanelButton'

function Dropdown({ options, value, onChange }) {
  const ref = useRef()
  const [isOpen, setIsOpen] = useState(false)
  const chevronClassName = cn('w-5', 'h-5', 'transition-all', {
    'rotate-180': isOpen,
  })
  const topPanelClassName = cn('bg-indigo-500 font-semibold text-white', {
    rounded: !isOpen,
    'rounded-t': isOpen,
  })

  const handleOptionClick = option => {
    onChange(option)
    toggle()
  }

  const toggle = () => setIsOpen(prevState => !prevState)

  useEffect(() => {
    const handler = e => {
      if (!ref.current) return
      if (!ref.current.contains(e.target)) setIsOpen(false)
    }

    document.addEventListener('click', handler, true)

    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <div className="p-2 text-lg" ref={ref}>
      <PanelButton className={topPanelClassName} onClick={toggle}>
        <span>{value?.label || 'Select...'}</span>
        <ChevronDownIcon className={chevronClassName} />
      </PanelButton>
      {isOpen && (
        <div className="bg-indigo-200 rounded-b overflow-hidden">
          {options.map(option => {
            const { label, value } = option
            return (
              <PanelButton
                className="text-indigo-700 hover:bg-indigo-500 hover:text-white"
                key={value}
                onClick={() => handleOptionClick(option)}
              >
                {label}
              </PanelButton>
            )
          })}
        </div>
      )}
    </div>
  )
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.object,
  onChange: PropTypes.func,
}

export default Dropdown
