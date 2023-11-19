# 套件
backtrader[plotting]
django
yfinance
pip install backtesting


# 開發流程
安裝必要套件
撰寫回測邏輯
建立API端點
設置API路由
使用postman測試API

# backtrader回測說明
1. 建立策略
2. 添加數據源
3. 配置回測引擎
4. 執行回測與分析可視化
5. 優化策略找到最佳參數

# django說明
1. 用戶身分驗證系統-django.contrib.auth
2. 權限管理-

# server design


# run server
pip install django
django-admin startproject mysite
python manage.py migrate
python manage.py runserver

## create app
python manage.py startapp backtest
urls.py
config
## create db
python manage.py migrate
## create model
models.py
class = table
setting config
python manage.py makemigrations backtest
查看DB table
python manage.py sqlmigrate backtest 0001
模型更改步驟
1. 更改model.py
2. python manage.py makemigrations
3. python manage.py migrate

# API
開啟shell使用python操作DB
python manage.py shell
```
from django.utils import timezone
q = Question(question_text="What's new?", pub_date=timezone.now())
q.save()
q.id
q.question_text
q.question_text = "What's up?"
q.save()
```

# create superuser
```
python manage.py createsuperuser
admin
admin.site.register(Table)
```
