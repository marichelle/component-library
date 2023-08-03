import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'

import Table from '../Table/Table'

const getIcon = (label, sortBy, sortOrder) =>
  sortBy === label && sortOrder === 'asc' ? (
    <div className="flex flex-col">
      <ChevronUpIcon className="w-4 h-4 -m-1" />
      <ChevronDownIcon className="w-4 h-4 -m-1 text-white group-hover:text-gray-200" />
    </div>
  ) : sortBy === label && sortOrder === 'desc' ? (
    <div className="flex flex-col">
      <ChevronUpIcon className="w-4 h-4 -m-1 text-white group-hover:text-gray-200" />
      <ChevronDownIcon className="w-4 h-4 -m-1" />
    </div>
  ) : (
    <div className="flex flex-col">
      <ChevronUpIcon className="w-4 h-4 -m-1" />
      <ChevronDownIcon className="w-4 h-4 -m-1" />
    </div>
  )

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
    } else {
      setSortOrder('asc')
    }

    setSortBy(label)
  }

  // if sortable column exists, define sortable header
  const updatedConfig = config.map(column =>
    column.sortValue
      ? {
          ...column,
          header: () => (
            <th className="p-3 group hover:bg-gray-200">
              <button
                className="flex items-center"
                onClick={() => handleClick(column.label)}
              >
                <span className="mr-2">{column.label}</span>
                {getIcon(column.label, sortBy, sortOrder)}
              </button>
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
