import { useEffect, useState } from 'react'

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount)

  const handleDecrement = () => setCount(count - 1)
  const handleIncrement = () => setCount(count + 1)

  useEffect(() => {
    console.log(count)
  }, [count])

  return {
    count,
    handleDecrement,
    handleIncrement,
  }
}

export default useCounter
