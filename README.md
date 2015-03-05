# albatrosary.github.io

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
