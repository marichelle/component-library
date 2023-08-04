import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/solid'

import Button from '../components/Button/Button'
import { useState } from 'react'

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)
  const [valueToAdd, setValueToAdd] = useState(0)

  const handleChange = e => setValueToAdd(parseInt(e.target.value, 10) || 0)

  const handleDecrement = () => setCount(count - 1)

  const handleIncrement = () => setCount(count + 1)

  const handleSubmit = e => {
    e.preventDefault()
    setCount(prevCount => prevCount + valueToAdd)
    setValueToAdd(0)
  }

  return (
    <div>
      <h1 className="text-3xl">
        Current Count: <span className="font-semibold">{count}</span>
      </h1>
      <div className="flex flex-row">
        <Button className="w-full" onClick={handleIncrement}>
          <PlusSmallIcon className="w-7 h-7" />
          Increment
        </Button>
        <Button className="w-full" onClick={handleDecrement}>
          <MinusSmallIcon className="w-7 h-7" />
          Decrement
        </Button>
      </div>
      <br />
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="text-2xl" htmlFor="add">
          Add more
        </label>
        <input
          type="number"
          id="add"
          name="add"
          value={valueToAdd || 0}
          onChange={handleChange}
          className="p-3 mx-1 my-2 text-lg border border-gray-300 bg-gray-50"
        />
        <Button type="submit" className="max-w-fit">
          Add It!
        </Button>
      </form>
    </div>
  )
}

function CounterReducerPage() {
  return (
    <div className="flex gap-6">
      <Counter initialCount={0} />
    </div>
  )
}

export default CounterReducerPage
