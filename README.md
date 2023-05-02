## 使用方式
1. 安裝pipenv
```pip install pipenv```

2. 指定python的版本
```pipenv --python 3.9``` 

3. 在pipenv中安裝requirements
``` pipenv install -r requirements.txt```

4.  如果有Pipfile的話也可以直接
```pipenv lock```

到這邊為止需要的套件就算安裝好了

## 檔案解釋
1. main.py: 負責整體程序的執行

2. SQL.py: SQL.py負責從資料庫中抓取需要的資料

3. RSI.py: 負責計算出RSI的數字並回傳

4. test.py: 預計是回測

## 預想流程圖

