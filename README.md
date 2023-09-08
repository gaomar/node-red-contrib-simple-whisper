[![platform](https://img.shields.io/badge/platform-Node--RED-red)](https://nodered.org)
[![npm](https://img.shields.io/npm/v/node-red-contrib-simple-whisper.svg)](https://www.npmjs.com/package/node-red-contrib-simple-whisper)
[![downloads](https://img.shields.io/npm/dt/node-red-contrib-simple-whisper.svg)](https://www.npmjs.com/package/node-red-contrib-simple-whisper)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/HaroldPetersInskipp/node-red-contrib-chatgpt/blob/main/LICENSE)

## 概要
ファイルから文字起こしを行います。

文字起こしはWhisper APIを使って行っています。

## インストール

```
npm i node-red-contrib-simple-whisper
```

or

AdminタブからInstall

## 使い方
### 入力項目

|項目|説明|
|--|--|
|OpenAI API Key|OpenAPIのAPIキーを設定します。|
|extension|ファイルの拡張子を指定します。（省略可能）|
|payload|バイナリ形式のファイルを指定します。|
|msg.file|バイナリ形式のファイルを直接指定します。（省略可能）|

### 出力項目

|項目|説明|
|--|--|
|payload|Whisperで文字起こしした結果が返ってきます。|


## LINK

* [NodeRED](https://flows.nodered.org/node/node-red-contrib-simple-whisper)
* [Libraries.io](https://libraries.io/npm/node-red-contrib-simple-whisper)
* [npm](https://www.npmjs.com/package/node-red-contrib-simple-whisper)

## release

* 2023/09/08: 初回リリース（v1.0.1）

