# Components Document
## ComponentList
- SHeader
- SMainContainer
- SFooter
- SLoadingOverLay
- SApiMessageOverLay
- SButton
- SCheckBox
- SCard
- SCardTitle
- STabBox
- STab
- STabList

---

### SHeader
#### About
ヘッダーを表示するコンポーネント
#### Example
```
<s-header>
  ヘッダー
</s-header>
```

### SMainContainer
#### About
メインコンテンツ部分のレスポンシブ制御を行います

横幅上限を900pxに制限して中央寄せします
#### Example
```
<s-main-container>
  <div>
    <p>コンテンツ</p>
  </div>
  <div>
    <p>コンテンツ</p>
  </div>
</s-main-container>
```

### SFooter
#### About
フッターを表示するコンポーネント

画面の下部に固定して表示されます
#### Example
```
<s-footer>
  フッター
</s-footer>
```

### SLoadingOverLay
#### About
画面全体をグレー化して操作不可能にします

必要に応じてメッセージの表示が可能です
#### Props
- isShow
  - Type: Boolean
  - required: true
- message
  - Type: String
  - required: false
  - default: ''
#### Example
```
<s-loading-over-lay :is-show="true" message="メッセージ" />
```

### SApiMessageOverLay
#### About
画面全体をグレー化して操作不可能にします

APIのステータスコードを入力することで説明文を表示します

#### Props
- isShow
  - Type: Boolean
  - required: true
- statusCode
  - Type: String
  - required: false
  - default: '500'
#### Example
```
<s-api-message-over-lay :is-show="true" statusCode="404" />
```

### SCheckBox
#### About
ボタンのデザインをカスタマイズしたラップしたものです

#### Example
```
<s-button>
  ボタン
</s-button>
```

### SCheckBox
#### About
チェックボックスのデザインをカスタマイズしたラップしたものです

`v-modelを利用する事ができます`
#### Props
- name
  - Type: String
  - required: false
  - default: ''
#### Example
```
<s-check-box v-model='isCheck' name='select1'>
  選択肢1　
</s-check-box>
```

### SCard
#### About
まとめて表示する場合など、カード表示を行う事ができます
#### Example
```
<s-card>
  <p>カード</p>
  <img src='image.png'>
</s-card>
```

### SCardTitle
#### About
`SCard`コンポーネント向けです

カード上部にタイトルを表示する事ができます。
#### Example
```
<s-card>
  <s-card-title>
    カードタイトル
  </s-card-title>
  <p>カード</p>
  <img src='image.png'>
</s-card>
```

### STabBox
#### About
タブパネルのパネル部分を切り替える機能を持ったコンポーネント

slotのnameに指定したものとv-modelで与えた値が一致したものが表示されます

`v-modelを利用する事ができます`
#### Props
- tabs
  - Type: Array<{
    name: String
    key: String
  }>
  - required: false,
  - default: []
#### Example
```
const tabs = [
  {
    name: 'タブ1'
    key: 'tab1'
  },
  {
    name: 'タブ2'
    key: 'tab2'
  }
]
```
```
<s-tab-box v-model="tab" :tabs="tabs">
  <template #tab1>
    <h1>Tab1</h1>
  </template>
  <template #tab2>
    <h1>Tab2</h1>
  </template>
</s-tab-box>
```

### STab
#### About
タブパネルの切り替えボタンです

#### Props
- isActive
  - Type: Boolean
  - required: true
#### Example
```
<s-tab :is-active='false'>
  タブ1
</s-tab>
```

### STabList
#### About
タブパネルの切り替えボタンをまとめるコンポーネントです

`v-modelを利用する事ができます`
#### Props
- tabs
  - Type: Array<{
    name: String
    key: String
  }>
  - required: false,
  - default: []
#### Example
```
const tabs = [
  {
    name: 'タブ1'
    key: 'tab1'
  },
  {
    name: 'タブ2'
    key: 'tab2'
  }
]
```
```
<s-tab-list :tabs='tabs' v-model='activeTab' />
```