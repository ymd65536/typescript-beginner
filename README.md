# fast_react_app_ts

Udemy 最速で学ぶTypeScript の学習記録と成果物作成

## はじめ

```bash
npx create-react-app . --template typescript
```

起動時は以下のコマンド

```bash
npm start
```

もしくは

```bash
yarn start
```

## TypeScript を 実行する(セットアップ)

```bash
npm install -g typescript ts-node
```

## TypeScript を 補完できるようにする

型定義ファイルを読み込むとTypeScriptに対応したエディターでコード補完が効くメリットもあるとのことなので
`npm install` でインストールを実行する。

```bash
npm install -g types
```

## TypeScript の実行環境構築と補完のセットアップコンフィグ

一例

```json
{
  "dependencies": {
    "typescript": "^4.6.3",
    "ts-node": "^10.7.0"
  },
  "devDependencies": {
    "@types/node": "^17.0.23"
  },
  "private": true
}
```

## TypeScript のトランスパイルの設定

TypeScriptのトランスパイルには種類がある。
そもそも、TypeScriptはJavaScriptのスーパーセットであることからコンパイラはその種類に依存する形になると思われる。
つまり、JavaScriptの仕様に合わせる形になるので`CommonJS`か`ESM`のどちらかを選ぶことができる。

設定はtsconfig.jsonで設定できる。

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "strict": true,
  }
}
```

## データ　型

文字列型:string
数値型:number
論理型:boolean
配列:[]

他の言語と比較すると数値型だけちょっと違和感があるかもしれない。  
理由：数値型というとintegerやlongがあるようなイメージがある為

## Intersection　Types

ざっくりいうと、C言語で言うところの構造体のようなもの
ただし、C言語と違うところは結合ができるというところ。

具体例

```ts

// Intersection　Typesを使うと構造体のようなものが宣言できる。
type PROFILE = {
  age:number
  city:string
}

type LOGIN = {
  username:string
  password:string
}

type USER = PROFILE & LOGIN

const userA:USER = {
  age : 28,
  city: "Tokyo",
  username: "Yamada",
  password: "11111"
}

```

## Union Types

ざっくり述べると、複数種類のデータ型を一つの変数で利用する方法
具体例

```ts
// Union Types で 論理型と数値型をつなぐと指定したデータ型以外では代入できなくなる。
let value: boolean | number;
value = 1
value = false

// 配列の場合でもUnion Typesは利用できる。
let arrayuni:(number | string)[];
arrayuni =[0,"Hello"];

```

## Literal Types

特定の文字列のみ代入を許可する。
具体例

```ts
// 特定の文字列だけ代入を許可する。
let colorName: "red" | "blue" | "yellow"
colorName = "red"

```

## typeof

宣言済の変数のデータ型を取得する。
具体例

```ts
// 既に宣言されたデータ型を取得して他の変数で利用する。
let origin:string = "Hi";
let origin2: typeof origin;
origin2 = "hello"

// typeof はオブジェクトでも利用できる。
let animal = {dog:"small dog"};
let newAnimal: typeof animal = {dog: "big dog"};

```

## keyof

キーバリュー形式のデータでキーのみを取り出しUnionTypes で取り出す。
具体例

```ts
// keyof
type KEYS ={
  primary: string;
  secondary: string;
};
let keys: keyof KEYS;
keys = "primary";
```

typeof と keyof を組み合わせるとLiteral Typesと同じことができる。
具体例

```ts
// typeof と keyof を組み合わせる
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball"
}
let keySports: keyof typeof SPORTS;
keySports = "baseball"

```

## enum

C言語でもあった列挙体もしくは列挙子  
0から採番される。

```ts
// 列挙体
enum OS {
  Windows,
  Mac,
  Linux
};
interface PC{
  id:number;
  OSType:OS;
};
const PC1:PC = {
  id:1,
  OSType:OS.Windows
};
const PC2:PC = {
  id:2,
  OSType:OS.Mac
};
const PC3:PC = {
  id:3,
  OSType:OS.Linux
};
```

## JSON型推論

JSON文字列をimportしてtypeof をするとそのJSONに合致した変数を作成する。具体例

```ts
import Data from "./data.json";

// JSON型推論
type USERS = typeof Data;

```
