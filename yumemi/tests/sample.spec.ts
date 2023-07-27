import { setup } from '@nuxt/test-utils'
import { describe, expect, test } from 'vitest'

describe('sample', async () => {
  await setup({})

  test('True', () => {
    const text = 'test text'
    expect(text).toEqual('test text')
  })

  test('False', () => {
    const text = 'test text'
    expect(text).not.toEqual('text test')
    // idやclassの文字も含めて反応
  })
})
