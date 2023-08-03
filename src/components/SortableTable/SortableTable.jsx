import { useState } from 'react'
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronUpDownIcon,
} from '@heroicons/react/24/solid'

import Table from '../Table/Table'

function SortableTable(props) {
  const [sortBy, setSortBy] = useState(null)
  const [sortOrder, setSortOrder] = useState(null)
  const { config, data } = props

  // make a copy of the "data" prop
  let sortedData = [...data]

  const handleClick = label => {
    if (sortBy === label) {
      setSortOrder(prevSort => {
        switch (prevSort) {
          case 'asc':
            return 'desc'
          case 'desc':
            return null
          default:
            return 'asc'
        }
      })
    } else setSortOrder('asc')

    setSortBy(label)
  }

  const updatedConfig = config.map(column =>
    column.sortValue
      ? {
          ...column,
          header: () => (
            <th>
              <div className="flex">
                <span className="mr-2">{column.label}</span>
                <button onClick={() => handleClick(column.label)}>
                  {sortBy === column.label && sortOrder === 'asc' ? (
                    <ChevronUpIcon className="w-4 h-4" />
                  ) : sortBy === column.label && sortOrder === 'desc' ? (
                    <ChevronDownIcon className="w-4 h-4" />
                  ) : (
                    <ChevronUpDownIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </th>
          ),
        }
      : column
  )

  // only sort data if sortBy && sortOrder are not null
  if (sortBy || sortOrder) {
    // find the correct sortValue function and use it for sorting
    const { sortValue } = config.find(column => column.label === sortBy)

    sortedData.sort((a, b) => {
      const valueA = sortValue(a)
      const valueB = sortValue(b)
      const sortOrderMultiplier =
        sortOrder === 'asc' ? 1 : sortOrder === 'desc' ? -1 : 0

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * sortOrderMultiplier
      } else {
        return (valueA - valueB) * sortOrderMultiplier
      }
    })
  }

  return <Table {...props} config={updatedConfig} data={sortedData} />
}

export default SortableTable
