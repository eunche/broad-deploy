# 2020 멋사8기 브로드 프로젝트(배포버전)    






### 기본 설정



#### 1. 프로젝트 다운로드
+ 프로젝트파일 압푹 풀고, 프로젝트 파일 안에서 VSCode 켜기




#### 2. 가상환경 셋팅
``` Python
python -m venv myvenv
source myvenv/Scripts/activate
```


#### 3. requirements.txt에 나열된 모듈들 설치
``` 
pip install -r requirements.txt
python -m pip install --upgrade pip
```


#### 4. 깃 설정
``` 
git init
git remote add origin https://github.com/eunchae619/broad-deploy.git
git pull origin master
git checkout -b 만들브랜치명
```
