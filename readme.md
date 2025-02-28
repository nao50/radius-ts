Typescriptで書かれたRADIUSのライブラリを作成したいと考えています。
以下のライブラリを参考にし、RADIUSのRFC dictionariesファイルからRADIUSのアトリビュートを処理するコードを生成する機能と、生成されたコードと合わせて実際のRADIUSサーバ/クライアントを作るコード、exampleフォルダ配下にサーバとクライアントのコードを置くイメージです。

Go実装のRADIUSのライブラリ
https://github.com/layeh/radius

Rust実装のRADIUSのライブラリ
https://github.com/moznion/radius-rs

まずはTypescriptの周辺パッケージを決めていきたいです。

プログラミング言語：Typescript
動作環境：Linuxあるいはコンテナ上
データベース：Postgres
ORM：Prismaかdrizzleで迷っています
バンドラー：esbuildかrolldownで迷っています
リンター：Biome
テスト：vitest

まずは使うツール類についてアドバイスをください。


ありがとうございます。
動作しました。

以下の改善を全てお願いします。

1. 現状 `new RadiusServer('secret')` のようにサーバに対して1つのsecretを設定しているが、実際のユースケースではusernameのNAIやRemoteIPを見て利用者を識別し、利用するsecretをDBから引いてくるようなマルチテナントな実装が多いと思います。よって layeh/radius のように Packet に対して secret のプロパティを持った方が良いと思いますがどうでしょう。

2. 各RFCごとのアトリビュートや、コード（例えば1=Access-Requestなど）において、いわゆるマジックナンバーが多用されていると思います。わかりづらいので `https://github.com/layeh/radius/blob/master/code.go` などを参考に名称を明確にしてください。

3. `layeh/radius`も`moznion/radius-rs`もそうですが、ディクショナリーファイルから生成したコードを見ると、get/setだけでなくdeleteやgetAll相当のコードや、debug目的あるいはDBへの保存を目的としたgetStringといったコードになっていると思います。目的が間違っていなければ、私も使いたいのでコード生成のコードを修正してください。

4. 現状ipv4のみに対応していると思いますが、RFC上ipv6も許可されているのであればipv6にも対応してください。


ありがとうございます。

`src/attributes/types.ts`にアトリビュートの型を定義頂きましたが、対応するRFCが増えるたびにコーディングしてられないので、ディクショナリーファイルから自動生成するようにしてください。すなわちrfc2865から生成されたアトリビュートの型定義は`rfc2865.ts`の中に書いてください。

また、このdgram.createSocketをudp4からudp6に変更してしまうとipv4の通信ができないと思いますが、私の勘違いでしょうか？もし両方の待受が可能であればipv4/ipv6のデュアルスタックな待受で、もしデュアルスタックが出来ばければサーバー起動時に引数でipv4/ipv6どちらにするかを受け取るようにしてください。（引数が与えられない場合のデフォルトはipv4としてください）


LOG_LEVEL=debug npx ts-node --esm example/server.ts
LOG_LEVEL=debug npx ts-node --esm example/client.ts
