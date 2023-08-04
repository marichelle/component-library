import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/solid'

import Button from '../components/Button/Button'
import useCounter from '../hooks/useCounter'

const Counter = ({ initialCount }) => {
  const { count, handleDecrement, handleIncrement } = useCounter(initialCount)

  return (
    <div>
      <h1>Start at {initialCount}</h1>
      <h2>Count is {count}</h2>
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
    </div>
  )
}

function CounterPage() {
  return (
    <div className="flex gap-6">
      <Counter initialCount={0} />
      <Counter initialCount={5} />
    </div>
  )
}

export default CounterPage
