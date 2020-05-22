import React from 'react'
import { Button } from '@storybook/react/demo'
import logoImg from './logo.svg'

export default function WithEmojiA() {
  return (
    <div>
      <img src={logoImg} alt="" />
      <Button onClick={() => {}}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    </div>
  )
}
