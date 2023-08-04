import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'

import Table from '../Table/Table'
import useSort from '../../hooks/useSort'

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
  const { config, data } = props
  const { setSortColumn, sortBy, sortOrder, sortedData } = useSort(config, data)

  // if sortable column exists, define sortable header
  const updatedConfig = config.map(column =>
    column.sortValue
      ? {
          ...column,
          header: () => (
            <th className="p-3 group hover:bg-gray-200">
              <button
                className="flex items-center"
                onClick={() => setSortColumn(column.label)}
              >
                <span className="mr-2">{column.label}</span>
                {getIcon(column.label, sortBy, sortOrder)}
              </button>
            </th>
          ),
        }
      : column
  )

  return <Table {...props} config={updatedConfig} data={sortedData} />
}

export default SortableTable
