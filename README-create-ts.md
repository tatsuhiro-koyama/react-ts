# Typescript + React + Storybook

## Typescript での開発環境構築手順

### React Project 作成

```
npm install create-react-app
npm install yarn
npx create-react-app react-ts --scripts-version=react-scripts-ts
cd react-ts
yarn start
```

### Storybook Setup

- storybook install

```
npx storybook
```

- storybook 起動オプション修正

[package.json](./package.json)

```
    "storybook": "start-storybook -p 6006 -s public",
    "build-storybook": "build-storybook -s public"
```

- package.json に以下の記述を追加した後に `yarn install` を実行する

[package.json](./package.json)

```
    "@storybook/addon-storysource": "^3.4.8-alpha.8",
    "ts-loader": "^3.5.0"
```

```
yarn install
```

- storybook の起動設定を修正する

.storybook/webpack.config.js を追加する

[.storybook/webpack.config.js](./.storybook/webpack.config.js)

```
const webpack = require("webpack");
const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [/configs/, /stories/, /src/],
    loader: "ts-loader",
    options: {
      onlyCompileBundledFiles: true
    }
  });
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve("@storybook/addon-storysource/loader")],
    enforce: "pre"
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
```

- storybook 起動

```
yarn run storybook
```

## Storybook で Component の作成

### component の追加

- Button をカスタマイズした component を追加する。
  - [src/MyButton.tsx](./src/MyButton.tsx), [src/MyButton.css](src/MyButton.css) を参考に

### storybook で表示する

- stories/index.js に、以下の記述を追加する。

[stories/index.js](./stories/index.js)

```
# componentを読み込む
import MyButton from "../src/MyButton";

# componentをstorybook に表示する
storiesOf("MyButton", module).add("default", () => <MyButton />);
```

- sotrybook を起動する。

```
yarn run storybook
```

### component を組み合わせる

TODO

## その他

- anyenv install

```
git clone https://github.com/riywo/anyenv ~/.anyenv
# path 設定
echo 'export PATH="$HOME/.anyenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(anyenv init -)"' >> ~/.bashrc
exec $SHELL -l
```

- ndenv install

```
anyenv install ndenv
```

- node install

```
ndenv install v9.5.0
ndenv version
```
