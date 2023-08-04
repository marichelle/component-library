import { useState } from 'react'

function useSort(config, data) {
  const [sortBy, setSortBy] = useState(null)
  const [sortOrder, setSortOrder] = useState(null)

  // make a copy of the "data" prop
  let sortedData = [...data]

  const setSortColumn = label => {
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

  return {
    sortBy,
    sortOrder,
    sortedData,
    setSortColumn,
  }
}

export default useSort
