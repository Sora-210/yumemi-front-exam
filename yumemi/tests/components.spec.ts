import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { describe, expect, test } from 'vitest'

import SHeader from '../components/SHeader.vue'
import SMainContainer from '../components/SMainContainer.vue'
import SFooter from '../components/SFooter.vue'
import SButton from '../components/SButton.vue'
import SCheckBox from '../components/SCheckBox.vue'
import SCard from '../components/SCard.vue'
import SCardTitle from '../components/SCardTitle.vue'
import STabBox from '../components/STabBox.vue'
import STab from '../components/STab.vue'
import STabList from '../components/STabList.vue'
import SApiMessageOverLay from '../components/SApiMessageOverLay.vue'

describe('SHeader', () => {
  test('slotが正しく表示される', () => {
    const wrapper = mount(SHeader, {
      slots: {
        default: 'ヘッダー',
      },
    })
    expect(wrapper.find('.title').text()).toBe('ヘッダー')
  })
})

describe('SMainContainer', () => {
  test('slotが正しく表示される', () => {
    const wrapper = mount(SMainContainer, {
      slots: {
        default:
          '<p class="content1">コンテンツ1</p><p class="content2">コンテンツ2</p>',
      },
    })
    expect(wrapper.find('.content1').text()).toBe('コンテンツ1')
    expect(wrapper.find('.content2').text()).toBe('コンテンツ2')
  })
})

describe('SFooter', () => {
  test('slotが正しく表示される', () => {
    const wrapper = mount(SFooter, {
      slots: {
        default: 'フッター',
      },
    })
    expect(wrapper.find('span').text()).toBe('フッター')
  })
})

describe('SButton', () => {
  test('slotが正しく表示される', () => {
    const wrapper = mount(SButton, {
      slots: {
        default: 'ボタン',
      },
    })
    expect(wrapper.find('button').text()).toBe('ボタン')
  })
})

describe('SCheckBox', () => {
  test('slotが正しく表示される', () => {
    const wrapper = mount(SCheckBox, {
      props: {
        name: 'select1',
      },
      slots: {
        default: '選択肢1',
      },
    })
    expect(wrapper.find('label').text()).toContain('選択肢1')
  })

  test('nameが正しく設定されている', () => {
    const wrapper = mount(SCheckBox, {
      props: {
        name: 'select1',
      },
      slots: {
        default: '選択肢1',
      },
    })
    expect(wrapper.find('label').element.getAttribute('name')).toBe('select1')
    expect(
      wrapper.find('input[type=checkbox]').element.getAttribute('name')
    ).toBe('select1')
  })

  test('チェックボタンが正しく動作する', async () => {
    const wrapper = mount(SCheckBox, {
      props: {
        name: 'select1',
      },
      slots: {
        default: '選択肢1',
      },
    })
    await wrapper.find('input[type=checkbox]').setValue(true)
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy()
    expect(wrapper.emitted()['update:modelValue'][0]).toStrictEqual([true])
  })
})

describe('SCard', () => {
  test('slotが正しく表示される', () => {
    const wrapper = mount(SCard, {
      slots: {
        default:
          '<p class="content1">コンテンツ1</p><p class="content2">コンテンツ2</p>',
      },
    })
    expect(wrapper.find('.content1').text()).toBe('コンテンツ1')
    expect(wrapper.find('.content2').text()).toBe('コンテンツ2')
  })
})

describe('SCardTitle', () => {
  test('slotが正しく表示される', () => {
    const wrapper = mount(SCardTitle, {
      slots: {
        default: 'カードタイトル',
      },
    })
    expect(wrapper.find('h6').text()).toBe('カードタイトル')
  })
})

describe('STabBox', () => {
  test('選択中のパネルのみが表示される', async () => {
    const wrapper = mount(STabBox, {
      props: {
        modelValue: 'tab1',
        tabs: [
          {
            name: 'Tab1',
            key: 'tab1',
          },
          {
            name: 'Tab2',
            key: 'tab2',
          },
        ],
      },
      slots: {
        tab1: '<p>Tab1</p>',
        tab2: '<p>Tab2</p>',
      },
    })
    await nextTick()

    expect(wrapper.findAll('.box')).toHaveLength(1)
    expect(wrapper.findAll('.box').at(0)?.text()).toContain('Tab1')
  })

  test('パネルが正しく切り替わる', async () => {
    const wrapper = mount(STabBox, {
      props: {
        modelValue: 'tab1',
        tabs: [
          {
            name: 'Tab1',
            key: 'tab1',
          },
          {
            name: 'Tab2',
            key: 'tab2',
          },
        ],
      },
      slots: {
        tab1: '<p>Tab1</p>',
        tab2: '<p>Tab2</p>',
      },
    })
    await nextTick()

    await wrapper.setProps({
      modelValue: 'tab2',
      tabs: [
        {
          name: 'Tab1',
          key: 'tab1',
        },
        {
          name: 'Tab2',
          key: 'tab2',
        },
      ],
    })

    expect(wrapper.findAll('.box')).toHaveLength(1)
    expect(wrapper.findAll('.box').at(0)?.text()).toContain('Tab2')
  })
})

describe('STab', () => {
  test('slotが正しく表示される', () => {
    const wrapper = mount(STab, {
      props: {
        isActive: false,
      },
      slots: {
        default: 'Tab1',
      },
    })
    expect(wrapper.find('.tab-button').text()).toBe('Tab1')
  })

  test('正しくアクティブ状態になる', () => {
    const wrapper = mount(STab, {
      props: {
        isActive: true,
      },
      slots: {
        default: 'Tab1',
      },
    })
    expect(wrapper.classes('active')).toBe(true)
  })
})

describe('STabList', () => {
  test('タブボタンが正しく表示される', () => {
    const wrapper = mount(STabList, {
      props: {
        modelValue: 'tab1',
        tabs: [
          {
            name: 'Tab1',
            key: 'tab1',
          },
          {
            name: 'Tab2',
            key: 'tab2',
          },
        ],
      },
    })
    expect(wrapper.findAll('s-tab')).toHaveLength(2)
    expect(wrapper.findAll('s-tab').at(0)?.text()).toContain('Tab1')
    expect(wrapper.findAll('s-tab').at(1)?.text()).toContain('Tab2')
  })

  test('クリックでタブを正しく変更できる', async () => {
    const wrapper = mount(STabList, {
      props: {
        modelValue: 'tab1',
        tabs: [
          {
            name: 'Tab1',
            key: 'tab1',
          },
          {
            name: 'Tab2',
            key: 'tab2',
          },
        ],
      },
    })
    await wrapper.findAll('s-tab').at(1)?.trigger('click')
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy()
    expect(wrapper.emitted()['update:modelValue'][0]).toStrictEqual(['tab2'])
  })
})

describe('SApiMessageOverLay', () => {
  test('表示が正しく制御されている', async () => {
    const wrapper = mount(SApiMessageOverLay, {
      props: {
        isShow: true,
      },
    })
    expect(wrapper.find('.wrap-api-message').exists()).toBe(true)

    await wrapper.setProps({
      isShow: false,
    })
    expect(wrapper.find('.wrap-api-message').exists()).toBe(false)
  })

  test('メッセージが正しく切り替わっている', async () => {
    const wrapper = mount(SApiMessageOverLay, {
      props: {
        isShow: true,
      },
    })
    expect(wrapper.find('p').text()).toBe('データ取得中に問題が発生しました')

    await wrapper.setProps({
      isShow: true,
      statusCode: '429',
    })
    expect(wrapper.find('p').text()).toBe(
      'アクセスが集中しています。時間を空けて再度アクセスしてください。'
    )
  })
})
