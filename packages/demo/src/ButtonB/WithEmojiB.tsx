import React from 'react'
import { Button } from '@storybook/react/demo'

export default function WithEmojiB() {
  return (
    <Button onClick={() => console.log('EmojiB button clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  )
}
