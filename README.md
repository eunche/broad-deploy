# 2020 멋사8기 브로드 프로젝트(배포버전)    






### 기본 설정



#### 1. 프로젝트 클론
 ```
 git clone https://github.com/eunchae619/broad-deploy.git
 ```


#### 2. 프로젝트 위치로 디렉토리 이동
```
cd broad-deploy
```


#### 3. 가상환경 셋팅
``` Python
python -m venv myvenv
source myvenv/Scripts/activate
```


#### 4. requirements.txt에 나열된 모듈들 설치
``` 
pip install -r requirements.txt
python -m pip install --upgrade pip
```


#### 5. DB 셋팅(makemigrations/migrate)
``` 
python manage.py makemigrations
python manage.py migrate
```
