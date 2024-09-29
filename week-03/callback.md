## callback.js 說明

### JavaScript 中的 callback function

callback function，簡單來說，就是作為參數傳遞給另一個函式來執行的函式。舉例來說，以下程式碼中的 `B` 就是一個 callback function：

```js
function A(n, callback) {
  console.log(callback(n));
}

function B(n) {
  return n + 1;
}

A(3, B);
```

在 C 語言，可以透過傳遞 function pointer 來實作；而 JavaScript 由於在設計上參考了 Scheme，一種函數式程式語言，因此和其他函數式程式語言一樣，可以直接傳遞函式本身，而那個函式也可以是匿名函式，如 callback.js 內，直接把 `function() {}` 包進 `doJob()` 裡面，以及把 `() => {}` 包進 `setTimeout()` 裡面。

### 非同步~~遠距~~的 JavaScript

JavaScript 有很多非同步的函式，如 `setTimeout()` 就是一例，在執行到非同步的函式時，不會先等到函式執行完後才繼續執行，所以連續接兩個 `setTimeout()`，一個等 2 秒，一個等 1 秒，第二個反而會比較早執行完。

JavaScript 非同步的性質非常適合用在瀏覽器這種 event-driven 的使用情境，伺服器也是差不多的情況，所以 js 其實很適合寫伺服器。

### 如何解決 `setTimeout()` 的同步問題

作業是先花一秒的時間刷牙，再花三秒吃早餐，再花一秒寫功課。但如果不另外做處理的話就會變成過一秒後刷牙、寫功課同時完成，再過兩秒吃完早餐。

要解決這個問題，最暴力的方法是直接累加等待時間，如 callback0.js，執行結果如下：

```
開始工作 at 2024-09-29T16:40:13.415Z
完成工作 刷牙 at 2024-09-29T16:40:14.458Z
完成工作 吃早餐 at 2024-09-29T16:40:17.456Z
完成工作 寫功課 at 2024-09-29T16:40:18.456Z
```

當然這不是我們要的，~~而且吃早餐的時間其實略低於 3 秒~~。`setTimeout()` 的設計是時間到了之後再執行 callback function，因此可以在 callback function 裡面再呼叫 `setTimeout()`，就可以在第一次的等待時間到後再進行第二次的等待，如 callback.js，執行結果：

```
開始工作 at 2024-09-29T16:51:17.566Z
完成工作 刷牙 at 2024-09-29T16:51:18.581Z
完成工作 吃早餐 at 2024-09-29T16:51:21.587Z
完成工作 寫功課 at 2024-09-29T16:51:22.589Z
```

但如果包了太多 `setTimeout()`，程式會很難閱讀，這種情況可以用 Promise 解決。
