## AWS

### Region

在 AWS 裡，每個 Region 之間的距離很遠，在設計上完全獨立，有不同的計價方式，且在不同的 Region 傳輸資料是需要額外付費的。AWS 很多服務必須綁定在單一個 Region，且不會自動把那些資源在不同的 Region 間複製。

### Availability Zone

每個 Region 都有數個可獨立運作的 Availability Zone，一個 Region 中的每個 Availability Zone 分散在不同的地理位置，並以高速網路連接。在 AWS 進行部署時，可以將伺服器部署在同一個 Region 中的多個 AZ，或是在一個 AZ 掛了的時候移動到另一個 AZ，提升可用性。

### Local Zone

一個 Region 底下可能還有 Local Zone，如東京底下有臺北，如果希望在臺灣的客戶可以有更低的延遲，就可以啟用 Local Zone，當然也是要額外付費的。

### Wavelength Zone

5G 邊緣運算用，降低 5G 使用者的延遲

### Region 怎麼選

選擇 Region 可能需考慮的因素：

- 目標客群所在位置，可選擇與目標客群較近的 Region
- 不同 Region 的價格差異
- Region 所在地或目標客群所屬區域的法規
- Region 所在地是否有其他需要避開的因素，如戰爭、政治因素等

例如目標客群在臺灣，用量大，且無預算限制，Region 可以選東京，再加個臺北的 Local Zone；用量較小就不要啟用 Local Zone，Region 一樣設東京，畢竟臺北沒有較小的執行個體，預算不夠的話當然也可以選比較便宜的 Region。
