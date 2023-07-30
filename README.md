# Yumemi-CodingTest(2023/07)
## About
株式会社ゆめみのフロントエンジニア本選考として設定されているコーディングテスト提出リポジトリです。

## Develope Rule
#### Issue Name
開発を行う際はIssueを立てて作業すること

Issueの名前は`[<prefix>] <概要>`とする

`例: [feature] ボタンコンポーネントの作成`

##### Prefix
- fueture
新機能やリファクタリング
- hotfix
バグ修正

#### Branch Name
Issueを建てた内容の開発を行う際は`dev`ブランチからそれぞれのブランチを作成して作業する

作業が終了したらPullRequestを提出して`dev`ブランチへマージする

- main
デプロイされる本番環境用
- dev
開発用
- `<issuePrefix>/<userName>/<概要>#<IssueNumber>`
Issue作業用

#### Commit Prefix
| Name | Content |
| ---- | ------- |
| add | 機能追加 |
| update | 機能更新 |
| fix | 修正 |
| remove | 機能削除 |
| refact | リファクタリング |
| docs | ドキュメント更新 |
| test | テスト関連 |
| chore | その他 |

#### Compoment Name
コンポーネント名のprefixとして`S`をつけること

`例:SButtom`