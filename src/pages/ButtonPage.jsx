import { BellIcon } from '@heroicons/react/24/solid'
import { BellAlertIcon } from '@heroicons/react/24/outline'

import Button from '../components/Button/Button'

function ButtonPage() {
  const handleClick = () => console.log('button click')

  return (
    <>
      <div className="flex flex-row">
        <Button variation="primary" onClick={handleClick}>
          <BellIcon className="w-4 h-4" />
          Primary
        </Button>
        <Button variation="primary" rounded>
          <BellIcon className="w-4 h-4" />
          Primary
        </Button>
        <Button variation="primary" outline>
          <BellAlertIcon className="w-4 h-4" />
          Primary
        </Button>
        <Button variation="primary" outline rounded>
          <BellAlertIcon className="w-4 h-4" />
          Primary
        </Button>
      </div>
      <div className="flex flex-row">
        <Button variation="success">Success</Button>
        <Button variation="success" rounded>
          Success
        </Button>
        <Button variation="success" outline>
          Success
        </Button>
        <Button variation="success" outline rounded>
          Success
        </Button>
      </div>
      <div className="flex flex-row">
        <Button variation="warning">Warning</Button>
        <Button variation="warning" rounded>
          Warning
        </Button>
        <Button variation="warning" outline>
          Warning
        </Button>
        <Button variation="warning" outline rounded>
          Warning
        </Button>
      </div>
      <div className="flex flex-row">
        <Button variation="danger">Danger</Button>
        <Button variation="danger" rounded>
          Danger
        </Button>
        <Button variation="danger" outline>
          Danger
        </Button>
        <Button variation="danger" outline rounded>
          Danger
        </Button>
      </div>
      <div className="flex flex-row">
        <Button variation="neutral">Neutral</Button>
        <Button variation="neutral" rounded>
          Neutral
        </Button>
        <Button variation="neutral" outline>
          Neutral
        </Button>
        <Button variation="neutral" outline rounded>
          Neutral
        </Button>
      </div>
    </>
  )
}

export default ButtonPage
