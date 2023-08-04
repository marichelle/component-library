import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/solid'

import Button from '../components/Button/Button'
import { useReducer } from 'react'

const reducer = (state, action) => {
  const { type } = action

  switch (type) {
    case 'ADD_VALUE':
      return {
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      }

    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }

    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }

    case 'SET_VALUE':
      return {
        ...state,
        valueToAdd: action.payload,
      }

    default:
      return state
  }
}

const Counter = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  })

  const { count, valueToAdd } = state

  const handleChange = e =>
    dispatch({
      type: 'SET_VALUE',
      payload: parseInt(e.target.value, 10) || 0,
    })

  const handleDecrement = () => dispatch({ type: 'DECREMENT' })

  const handleIncrement = () => dispatch({ type: 'INCREMENT' })

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: 'ADD_VALUE' })
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
