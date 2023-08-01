import cn from 'classnames'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1)

  const handleClick = nextIndex =>
    setExpandedIndex(prevState => (prevState === nextIndex ? -1 : nextIndex))

  return (
    <ul>
      {items.map(({ id, label, content }, index) => {
        const isExpanded = expandedIndex === index
        const itemClassName = cn(
          {
            'border-t': index === 0,
          },
          'border-b',
          'border-x',
          'border-indigo-300'
        )
        const chevronClassName = cn('w-6', 'h-6', 'transition-all', {
          'rotate-90': !isExpanded,
        })

        return (
          <li className={itemClassName} key={id}>
            <button
              className="flex items-center justify-between w-full text-left text-xl bg-indigo-700 text-white p-2"
              onClick={() => handleClick(index)}
            >
              {label}
              <ChevronDownIcon className={chevronClassName} />
            </button>
            {isExpanded && (
              <p className="p-2 bg-indigo-50 text-indigo-900">{content}</p>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default Accordion
