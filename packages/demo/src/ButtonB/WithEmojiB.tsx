import React from 'react'
import { Button } from '@storybook/react/demo'

export default function WithEmojiB() {
  return (
    <Button onClick={() => {}}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  )
}
