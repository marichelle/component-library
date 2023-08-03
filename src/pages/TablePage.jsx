import SortableTable from '../components/SortableTable/SortableTable'

const configFruits = [
  {
    label: 'Fruits',
    render: fruit => fruit.name,
    sortValue: fruit => fruit.name,
  },
  {
    label: 'Color',
    render: fruit => <div className={`p-3 m-2 ${fruit.color}`}></div>,
  },
  {
    label: 'Score',
    /* header: () => (
      <th>
        <div className="flex">
          <span>Score</span>
          <button onClick={() => console.log('sort by column')}>
            <ChevronUpDownIcon className="w-6 h-6" />
          </button>
        </div>
      </th>
    ), */
    render: fruit => fruit.score,
    sortValue: fruit => fruit.score,
  },
]

const fruits = [
  {
    id: 1,
    name: 'Orange',
    color: 'bg-orange-500',
    score: 5,
  },
  {
    id: 2,
    name: 'Apple',
    color: 'bg-red-500',
    score: 3,
  },
  {
    id: 3,
    name: 'Banana',
    color: 'bg-yellow-400',
    score: 1,
  },
  {
    id: 4,
    name: 'Lime',
    color: 'bg-green-400',
    score: 4,
  },
]

function TablePage() {
  return (
    <div className="flex gap-6 w-fit">
      <SortableTable
        config={configFruits}
        data={fruits}
        keyFn={fruit => fruit.name}
      />
    </div>
  )
}

export default TablePage
