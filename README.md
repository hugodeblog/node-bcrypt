# Node.jsでbcryptでパスワードをハッシュ化する

ユーザー情報などをDBに保存する場合、平文で保存したりするとよろしくないので、ハッシュ値とか何かしらのより安全な状態にして保存するようなことは多々利用例としてあるだろう。  

そんな時に簡単なハッシュ化をするためにNode.jsではbcryptが利用できるので、この使い方をテストしてみたい。

https://ja.wikipedia.org/wiki/Bcrypt　- Bcrypt

## 実行手順

```txt
$ npm run start

> node-bcrypt@1.0.0 start
> node ./crypt.mjs

bcrypt test1 start
abc123 ===> $2b$10$xQlZ0nYztUneBxPHuEgROeVA3OnCkegMRkJxCTNjA2vkEzHM7Ho6C :ハッシュ値が生成されました
abc123 <===> $2b$10$xQlZ0nYztUneBxPHuEgROeVA3OnCkegMRkJxCTNjA2vkEzHM7Ho6C　:ハッシュ的に一致します
abc1234 <===> $2b$10$xQlZ0nYztUneBxPHuEgROeVA3OnCkegMRkJxCTNjA2vkEzHM7Ho6C　:ハッシュ的に一致しません
bcrypt test2 start
abc123 ===> $2b$10$k8AXqMVGUa0QC1M6Auv1z.E6X4V/wNmwriq5k40cmggmXzafBclZC :ハッシュ値が生成されました
abc123 <===> $2b$10$k8AXqMVGUa0QC1M6Auv1z.E6X4V/wNmwriq5k40cmggmXzafBclZC　:ハッシュ的に一致します
abc1234 <===> $2b$10$k8AXqMVGUa0QC1M6Auv1z.E6X4V/wNmwriq5k40cmggmXzafBclZC　:ハッシュ的に一致しません
bcrypt test all end
```

同じパスワード"abc123"をハッシュ化しても、１度目と２度目では異なるハッシュ値になる。

そのため一致性検証にはcompare関数を利用する必要がある。