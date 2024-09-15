.git/logs 資料夾先忽略，目前尚未理解

- blob 是一個物件，tree 是一個物件，commit 也是一個物件。
- 物件會存在 objects 裡，檔案怎麼編碼我不知道，檔名則是用 SHA-1 hash 編碼，並取前兩碼將檔案存入不同的資料夾。我們可以由 hash 值找到物件，再用 cat-file 把它印出來。
- index 檔案會記錄物件名稱、hash 值等資訊
- 檔案新增與變更時，在 git add 的時候會儲存變更的檔案，就是 blob 物件。
- git commit 後會產生 commit 和 tree 兩個物件，tree 物件記錄了那個 commit 的所有檔案，包含沒有被變更的檔案；commit 物件則記錄了 author、committer、tree、parent 等資訊。commit 是 git 版本控制的基礎，一個 commit 代表一個版本。
- git 存放庫可以有多個 branch，也是一個版本控制的方法，存放在 refs/heads 內，並指向其中一個 commit
- head 則是指目前的工作資料夾是指向哪一個 commit，git checkout 就是在移動 head，可以移動到一個 branch 或是任一個 commit（detached HEAD）。head 的資訊存在 HEAD 檔案


commit message 要怎麼寫，以及什麼時候 commit？其實我覺得和 coding style 很像，主要是看是怎樣的專案、怎樣的團隊，但還是會有共識，像是腦袋正常的人不會縮排縮三格或是往外縮（對，就是在講你，DreamBerd），commit message 以簡單明瞭、可以明顯看出改了哪裡為原則。  
至於 commit 的時間點，也是要看團隊的節奏，但原則上不要把 code 搞壞、~~以及讓 commit message 好寫~~是基本。而我最低的要求是，initial release 推出後，任何 latest release 做得到的，且沒標為棄用的功能，在 main branch 裡都不該有問題。
