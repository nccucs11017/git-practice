## Linux 目錄結構

- `/etc` 的 etc 就真的是那個 et cetera，原本是放不適合放在其他如 `/bin`、`/dev`、`/lib`、`/usr` 等目錄的雜物，後來主要是放設定檔，包含 `passwd`、`sudoers`、`profile` 等；`nginx.conf` 也是放在這裡
- `/var` 主要是放會常態性變動的檔案，包含 cache、**log file**，以及其他在程式運行途中產生的檔案
- `/boot` 放開機要用的檔案，包含 kernel、GRUB 等
- `$PATH` 環境變數則是在下指令的時候會從這邊的目錄中找到要下的指令並執行
- `which` 可以找出那個指令到底是哪個指令、是哪個路徑底下的指令，因為 `$PATH` 裡面的不同路徑可能會有相同名稱的執行檔

## EC2 server

Public IP: http://13.115.220.248 或是 [這個網址](http://ec2-13-115-220-248.ap-northeast-1.compute.amazonaws.com)

Instance type: 不同的 instance type 有不同的運算資源，包含不同的處理器、不同的記憶體大小，當然，還有不同的價格。

Nginx 官網的說明：

> nginx ("engine x") is an HTTP web server, reverse proxy, content cache, load balancer, TCP/UDP proxy server, and mail proxy server.

就是一個高效能的 HTTP 伺服器，支援負載平衡、反向代理等功能。

pm2 是一個 process manager，用來管理 Node.js 服務，支援開機自動啟動、有變更時自動重啟等功能。

proxy 是一種代理服務，forward proxy 可以代替 client 向 server 發出請求；reverse proxy 則是代替 server 接收來自 client 的請求。用 Nginx 來 reverse proxy 到 Express 開發的 server，可以借助 Nginx 如負載平衡等功能，也可以透過 reverse proxy 將不同的路徑給不同的 server。

Nginx 設定檔（只列出與預設不同的部分）：

```nginx
# include /etc/nginx/sites-enabled/*;
server {
  location / {
    proxy_pass http://localhost:3000;
  }
}
```

security group 就是一種防火牆的概念，定義哪些 IP 位址可以用哪些連線方式、port number 連進去，其他的都不能連進去。一般來講至少會開 SSH 連線對伺服器進行設定，如果只會在公司這種有固定 IP 的地點連進去的話，還可以對 IP 位址做限制；剩下的就是看伺服器的用途，例如 web server 就會開 HTTP 和 HTTPS。**用不到的就不要開**。

`sudo` 就是 `su` + do，`su` 可以切換為 root 或是其他使用者的權限；`sudo` 可以以 root 或是其他使用者的身分執行指令。部分指令因對系統影響較大或其他原因，需要較高的權限才能執行，此時就要用 `sudo`。

Nginx 有兩個 log 檔，分別是 `/var/log/nginx/access.log` 與 `/var/log/nginx/error.log`。前面有提到，log file 通常會放在 `/var` 裡面，在裡面找就對了。error log 同時會噴在 stderr；access log 則是會記錄每一筆 HTTP request，包含來源 IP 位址、時間、請求內容、response status code、response 大小、referer、user agent 等資訊。

### 遇到的問題

剛裝完 Nginx 後馬上執行 `nginx`，然後就噴 error，說 80 port 被佔用了，結果最後發現是 Nginx 自己==

~~另一個問題是對這個檔案的內容要怎麼編排完全沒頭緒~~

## 參考資料

### AWS 官網

- [Get started with Amazon EC2 - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html)
- [Amazon EC2 key pairs and Amazon EC2 instances - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html)
- [Connect to your Linux instance using an SSH client - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connect-linux-inst-ssh.html)
- [General connection prerequisites - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connection-prereqs-general.html)
- [Compute – Amazon EC2 Instance Types – AWS](https://aws.amazon.com/ec2/instance-types/)

### Nginx 官網

- [nginx](https://nginx.org/)
- [Beginner’s Guide](https://nginx.org/en/docs/beginners_guide.html)

### 其他

- [鳥哥](https://linux.vbird.org/linux_basic/centos7/0210filepermission.php)
- [terminology - What does etc stand for? - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/5665/what-does-etc-stand-for)
- [使用 pm2 管理 Node.js 服務](https://noob.tw/pm2/)
- [ubuntu - nginx - nginx: [emerg] bind() to [::]:80 failed (98: Address already in use) - Stack Overflow](https://stackoverflow.com/questions/14972792/nginx-nginx-emerg-bind-to-80-failed-98-address-already-in-use)
- [GitHub - nvm-sh/nvm: Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions](https://github.com/nvm-sh/nvm)
- [linguist/lib/linguist/languages.yml at main · github-linguist/linguist · GitHub](https://github.com/github-linguist/linguist/blob/main/lib/linguist/languages.yml)
