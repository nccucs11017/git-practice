## Express 專案

### Node.js 中的 package.json

package.json 記錄了一個 Node.js 可以用的模組的基本資訊，常見的有：

- 模組名稱
- 模組版本
- 模組詳細說明
- 模組授權條款
- 可用 npm 指令
- **直接**依賴的模組

指令的使用方法：`npm run scriptName`  
例如我在裡面加了 `rickroll`，就可以輸入 `npm run rickroll` 來執行，結果如下：

```powershell
PS ...\backend> npm run rickroll

> backend@1.0.0 rickroll
> echo Never gonna give you up, && echo Never gonna let you down. && exit 1

Never gonna give you up, 
Never gonna let you down.
```

而 `test` 指令除了 `npm run test` 之外，也可以直接輸入 `npm test` 來執行。

依賴的模組的部分，分為兩種：

- dependencies：部署到**正式環境**後還需要的模組
- devDependencies：只有在**開發環境**與**測試環境**需要的模組，常見的有程式碼重新排版（美化與壓縮）、把開發用的語言編譯成執行用的語言、測試等模組

前面有提到，package.json 只會記錄**直接**依賴的模組，那麼**間接**依賴的模組呢？

### `npm install`，然後呢？

`npm install` 會先安裝**直接**依賴的模組（如果後面有加上模組名稱的話就是安裝該模組並寫入 package.json），而安裝的模組也會有 package.json，就可以依此依序把**間接**依賴的模組也安裝完畢，產生 node_modules 資料夾與 package-lock.json。

node_modules 資料夾內除了已安裝的模組之外，還有 .package-lock.json，記錄所有安裝的模組的資訊。

至於 package-lock.json 只比 node_modules/.package-lock.json 多了自身的模組資訊，不過他是在 node_modules 外，所以如果想要把這個檔案放上  GitHub，也不是不行。

### 依環境變數設定 port number 的方式

在 Node.js 中，可以用 `process.env` 取得所有環境變數。要設定環境變數，主要有兩個方法：

1. 用終端機管理，例如命令提示字元中的 `set`、PowerShell 中的 `$Env` 等
2. 用 dotenv 模組管理，把環境變數存在檔案裡面

### .gitignore

我是直接複製 [這個檔案](https://github.com/github/gitignore/blob/main/Node.gitignore)，不過大原則是：

- runtime 資料、log 不要放
- IDE、OS 生的垃圾不要放
- 一小段指令就能裝完的一堆模組不要放
- 開發、測試用資料不要放
- 編譯完的成果不要放
- 不該公開的環境變數（key 等）不要放

那什麼東西要放？

- 可正常編譯、部署的程式碼，扣掉不該公開的環境變數
- 說明文件
- 授權資訊

### CommonJS 與 ECMAScript Modules

CJS 的引入方式：`物件 = require('模組名稱')`，一次引入一整包的模組

ESM 的引入方式：`import 物件 from '模組名稱'`，引入模組預設的內容（用 `export default`），或是 `import {物件們} from '模組名稱'`，可以只引入所需要的東西（用 `export`）
