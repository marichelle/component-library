import { useState } from 'react'

import Dropdown from '../components/Dropdown/Dropdown'

const options = [
  { label: 'Red', value: 'red' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
]

function DropdownPage() {
  const [selected, setSelected] = useState(null)
  const handleSelect = option => setSelected(option)

  return <Dropdown options={options} value={selected} onChange={handleSelect} />
}

export default DropdownPage
