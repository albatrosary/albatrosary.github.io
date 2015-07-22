# albatrosary.github.io

[![Join the chat at https://gitter.im/albatrosary/albatrosary.github.io](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/albatrosary/albatrosary.github.io?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

### github pages を作成

username.github.io リポジトリを作成する

#### http でアクセスする

http://username.github.io/

#### https でアクセスする

https://username.github.io/

### index.htmlの作成

```html
<html>
  <head>
  	<title>Hello World</title>
  </head>
  <body>
    <script>

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    // 登録成功
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    // 登録失敗 :(
    console.log('ServiceWorker registration failed: ', err);
  });
}
    </script>
  </body>
</html>
```

### http でアクセスする

http://username.github.io/

### https でアクセスする

https://username.github.io/

### index.htmlと同じディレクトリに sw.js を配置する

### http でアクセスする

http://username.github.io/

### https でアクセスする

https://username.github.io/

### サービスワーカーを確認する

chrome://inspect/#service-workers

### サンプル

https://github.com/mdn/sw-test
