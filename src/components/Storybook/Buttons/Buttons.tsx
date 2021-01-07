import React from 'react'
import { Button } from '../../../common/Button/Button'

export const Buttons = () => {
  return (
    <>
      Primary button
      <Button primary>Regular</Button>
      <Button primary className="hover">
        Hover
      </Button>
      <Button primary className="focus">
        Focus
      </Button>
      <Button primary className="active">
        Active
      </Button>
      <Button primary disabled>
        Disabled
      </Button>
      <Button primary isLoading>
        Loading
      </Button>
    </>
  )
}
