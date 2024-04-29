서버 이야기는 왜하는가?

웹사이트 잘 만들었는데 어쩌라고?
--> 다른사람이 들어가서 당신의 사이트를 보려면 당신의 사이트는 그어떤 컴퓨터에 저장되어 있어서 상대방이
인터넷으로 들어가서 봐야한다.

내가 만든 웹사이트를 저장하고 다른사람이 볼 수 있게 하는 컴퓨터 = 서버
그리고 내가 만든 사이트를 가진 컴퓨터는 고유의 주소가 있다. (모든 컴퓨터는 고유의 주소가 있다) - ip 주소

원래는 네이버든 구글이든 모든 웹사이트는
이런식으로 입력해야만 들어가진다. 예) 61.97.130.157

이런 숫자로만 이루어진 ip 주소를 사람이 알아볼 수 있는 도메인 주소로 변환해주는 과정이 있다.
이를 DNS(Domain Name Service)라고 한다.

61.97.130.157 --> google.com

만약에 온라인 게임같이 한번에 불러와야하는 데이터가 많은 경우는?
--> 이용자 컴퓨터에 사전에 필요한 파일과 프로그램을 미리 설치해둔다.

<!-- Node -->
node.js는 웹서비스의 서버 역할을 담당하는데,
node package manager 즉, NPM 이라는 패키지 모음을 제공합니다.
이 패키지 모음에는 747269개의 컨텐츠 개수에 맞는 하위 페이지 자동생성 기능,
서버 작업 시 오류 메세지 설정, 리액트 등의 프론트엔드 기능구현 툴(리액트는 node.js 패키지의 일부입니다.)
그리고 데이터 전송을 담당하는 API와 인터넷 데이터전송 및 접속과 관련된 HTTP 규격 사용 기능제공과 같은
서버와 클라이언트의 통신을 돕는 기능을 제공합니다.

서버안에 데이터베이스를 연결을 하려면 SQL 데이터 베이스와의 연결을 돕습니다.

### node.js의 특성
1. 비동기처리 기능을 지원한다.
   - 비동기처리 기능 : 특정 작업의 결과를 기다리지 않고 다른 작업이 동시에 이루어지는 기능

문제점 : 특정 작업이 완료된 이후에 움직여야하는 중요한 작업이 있는데 전부 무시하고 움직여 버린다.
ex) 데이터가 들어오지 않았음에도 먼저 출력하기 때문에 문제가 있는 것처럼 보인다.

선행작업이 완료되어야하는 후속 작업을 진행하는 부분을 명확히 파악하고 별도로 처리해줘야한다.

이 문제를 해결 할 수 있는 콜백함수가 있다.
callback, promise, async, await 등이 있다.

전부 특정 작업이 완료된 후 후속작업을 이루게 해주게 특수조건을 거는 기능들이다.

<!--  -->

모든 요청을 accept 할 수는 없다. 일반적인 웹 서버는 url 경로에 따라 다른 컨텐츠를 보여주게 되어있다.
url 경로에 따라 다른 컨텐츠로 보여주는 기능을 라우팅이라 한다.
url의 경로를 읽어서 다른 응답을 웹서비스 이용자가 볼 수 있도록 코드를 수정하겠습니다.

<!--  -->

웹 서버를 만들었고, 웹서버 내부 세부 주소에 해당하는 콘텐츠 표시법까지 배웠습니다.

리팩토링 : 동적 결과를 바꾸지 않으면서 

<!-- 2024-04-18 -->
node.js 기본으로는 웹서버를 만들 때 기능이 좀 부족하다.
미들웨어 기능이 없어서 그렇다.

미들웨어란 요청과 응답사이 데이터 혹은 특정 작업을 할 수 있도록 중간에서 매개역할을 하는 기능을 의미한다.

예를들어, 유저와 서비스업체간의 요청과 응답 처리 시, 요청이 제대로 안되면
xyz 작업을 해라, 오류 메세지를 띄워라 등 중간에서 작업하는 기능이 필수적임을 이해하면 된다.

그리고 우리가 작업한 프론트엔드 파일들 읽어들인 후에 화면에 출력해야합니다.
그런 프론트엔드 화면 구현을 돕는 기능도 모자랍니다.
그래서 나오는게 express 프레임워크입니다.

node.js 는 무료로 사용할 수 있는 외부 라이브러리(npm, node package manager)가 많습니다.

npm install express 라는 뜻은
패키지 저장소에 있는 express를 설치하라는 뜻입니다.

express를 쓰는 또다른 이유는 데이터를 전송하는 api가 내장된다.

api의 4대요소 = crud
create = 글 생성 post
read = 기존 글 읽기 get
update = 기존 글 바꾸기 set
delete = 기존 글 삭제 delete

<!--  -->
npm init -y 
node.js package 초기화 (package.json 파일 만들기)
- 웹 서비스 구축을 선언한다.

프로그램에 대한 정보를 남길 수 있고, 전체 웹서비스 시작 자바스크립트 코드가 무엇인지도 알린다.

<!--  -->
자바스크립트 비동기 처리방법
콜백:
비동기 코드를 순서대로 실행하는 부분을 처리하는 방안
실행 가능한 함수를 인풋으로 전달해서 특정 상황 발생 시 후속작업이 호출되게 하는 원리를 가지고 있다.

promise, async, await

<!-- 240419 -->
AXIOS란? (feat. Fetch API)
AXIOS는 Promise API를 활용하는 HTTP 비동기 통신 라이브러리입니다.
동기호 ㅏ처리 프라미스 기능을 활용하는 데이터전송 api 기능지원
-> 동기화 에러처리 기능이 있는 데이터 전송툴이 axios 입니다.

status 숫자에 대해 알리고자 합니다.
404 코드는 존재하지 않는다는 뜻입니다.
200이면 정상, 400이면 클라이언트 에러, 500이면 서버 에러입니다.

숫자코드를 가지고 내 서버가 어디에 문제가 있는지 알 수 있습니다.

<!-- day31 -> axios -> promise3.js -->
서버상의 배열 json 데이터의 파싱을 해보았습니다.
배열 json 데이터는 value 값 안에 json 데이터 셋이 복합적으로 들어있어서
정확한 데이터 해석(파싱)을 통해 원하는 결과를 부르는데 주의해야합니다.

promise에서 이행과 실패 두가지를 resolve, reject 두가지 인수로 처리하였습니다.
근데 사용자가 기다리는 상태일 경우,
promise 객체의 실행완료까지 사용자가 기다리는 상태일 수 있으니
대기 상태까지 알려주는 기능을 제공하는 것이
async, await 입니다.

aysnc 기반의 코드에서 나타나야 할 필수요소는
async로 작업요청을 했다면 작업완료 까지 기다리는 await 명령어가 필수적이다.
그래서 보통 실행하는 async, 기다리는 await, 성공 시 나타나는 try 실패시 나타나는 catch 요소가 들어간다.

nodemon이란 패키지는 일일이 서버를 꺼서 변경사항을 반영하지 않고
파일 내용이 바뀌면 바로 변경사항을 적용해주는 라이브러리이다.

npm install이라고 하면 package.json에 기록된 모든 라이브러리가 설치됩니다.
그렇게 해서 express 와 nodemon 패키지를 설치해주세요.

외부링크를 클릭했을 때
can not get /recommend 가 뜬 이유
html 문서가 api 경로를 접근하지 않고 html 파일로 들어가려고 해서
node.js의 서버는 지정도니 파일이 있는 경로 자체가 아닌 파일은
직접적으로 인식하지 못했기 때문이다.

그리고 아까 폼태그도 문제가 있었던건, 서버가 없는 프론트 시절
form 태그의 method = post 데이터 전송방식을 태그에 지정하지 않았기 때문

<!-- 20230422 -->
컨텐츠에 따라서 페이지 개수와 화면에 표시되는 컨텐츠를 위한 html 요소가 생성/삭제되어야 한다.

인터넷 기업의 비즈니스모델(BM)은 동적인 컨텐츠를 요구하는데 HTML 정적요소라면 무슨 문제가 발생하는가?
- 데이터의 개수에 맞게 페이지를 코딩해야한다.
- 데이터가 저장된 변수의 내용을 동적으로 반영하는 것은 일반적인 HMTL에서는 불가능하다.

동적 컨텐츠 처리를 하기 위한 장치가 필요한데 그게 node.js & react 입니다.

동적 컨텐츠 처리는 크게 2가지가 있습니다.
- 데이터가 들어있는 변수를 페이지 컨텐츠에 표현하는 부분
- 컨텐츠에 맞는 추가적인 웹주소(경로)를 만드는 부분이 필요하다.

promise는 함수의 단위마다 성공과 실패조건을 명시하고 요청과 응답사이의 미들웨어 기능이 없다.
그리고 이행, 실패, 대기 3가지 조건은 크게 이행과 실패로만 구분되는 특성이 있는것을 볼 수 있다.
이를 보완하려는게 async, await 이다. 서버와 클라이언트 사이마다 중간에서
특정 작업이 필요한 경우가 있는데 이를 미들웨어라고 한다.
미들웨어에 대한 작업을 가능하게 해준다.

promise와 반대되는 개념이 아니다.
실행하려는 promise 객체 앞에 async를 붙이고 await을 붙여서 객체의 실행을 기다린다.
await은 그래서 async 키워드를 사용한 함수안에서만 사용 할 수 있다.

<!--  -->
1. 정적컨텐츠에서의 풀스택
2. 동적 컨텐츠의 표현

기존의 프론트엔드에서 웹서버상으로 경로가 지정되고 데이터 기반으로 페이지가 바뀐다면 html 지금 파일은 무엇이 달라져야 하는가?
1. a 태그의 restaurants.html 과 같은 부분은 오류가 날 것이다.
   (파일이 웹서버 경로로 이동해 버려서 restaurants.html 파일로 직접 접근 할 수 없다)
2. json 파일의 정보가 들어오는 경우 프론트 페이지 상에서 구현해야한다.
   (html 파일은 정적인 속성을 가지고 있다. 기존의 html을 보완하는 프레임워크가 필요한 실정이다)

데이터가 바뀔때마다 데이터를 받는 html을 일일이 다시 코딩 할 수 없다.
이번 예제는 ejs라는 프레임워크를 소개하여 본 컨텐츠를 표현할 계획이다.

1. 웹세버에 페이지 올릴 때 html 태그 처리방식
2. html 에서 폼태그 내부 데이터 전송방식이라고 get 방식 post 방식이라 떠들었는데 그게 왜 필요했는지 확인
3. 왜 html만으로 부족했는지 확인

### ejs특징
1. html의 컴포넌트화 가능
2. 자바스크립트 변수 받을 수 있음
3. 자바스크립트 코드가 바로 사용될 수 있음

데이터 관련 작업 2파트
1. json 데이터에 사용자 폼태그 작성 데이터 저장하기 (recommend.html)
2. 저장한 데이터를 restaurant.html 화면에 표시하기
2-1. app.js 안에서 데이터를 받아와야한다.
2-2. restaurants.ejs 안에서 받아온 데이터를 자바스크립트 변수로 읽어서 화면에 표시

다이나믹 라우트 생성 (컨텐츠 데이터수에 맞는 url 생성)
http://localhost:3000/restaurants/r1

<!-- 20240423 -->
동적경로 & 오름차순, 내림차순 컨텐츠 정렬을 구현하기
1. 하위페이지 생성


코드 리팩토링, 즉 데이터 처리관련 코드를 별도의 폴더에 두어 화면 구현관련 코드, 데이터 json 파일 처리 관련코드 두 파트로 나누는 작업을 하려고합니다.

백엔드 관련 함수가 fm으로 가면 (요청, 응답) = (req, res) 외에
(에러, 요청, 응답, 다음작업) = (error, req, res, next) 총 4가지 경우의 값을 입력받는다.
function(error, req, res, next)
이 다음작업의 의미는 요청과 응답사이의 중간작업을 의미하며 이를 미들웨어라 한다.
그래서 오류, 요청, 응답, 미들웨어 처리 총 4가지의 작업을 입력받게 되는 것이다.

다음엔 코드 최적화를 해봅시다. 지금부터 apps.js를 30초간 보고 무엇을 개선 할 수 있을지 생각해보세요.

폼태그를 만들고 데이터가 들어올 수 있게 method 

<!-- 20240424 -->
오늘은 어제 시작지점에서 완성까지
1. 다이나믹 라우트 - 데이터의 길이만큼 새로운 url 주소를 자동생성하여 데이터에 맞는 세부 url을 찍어냅니다.
1-1) app.js 콜론 사용해서 데이터의 길이만큼 url이 나오는 기능을 구현한다.
1-2) restaurant-detail 페이지를 만든다.
1-3) 세부페이지 버튼의 링크를 바꿔서 restaurants 페이지 코드를 수정한다.
1-4) head.ejs의 css 링크를 수정한다.

2. 데이터읽기 - 만든 url 주소에 맞는 id 값을 json 데이터에 등록해줍니다. url 값과 json 데이터 상의 id를 기준으로 일치하는 데이터에 일치하는 컨텐츠를 뿌려줘야합니다.
2-1) restaurants.json 가서 id 키값을 달아줘야한다.
2-2) restaurant-detail 페이지에 데이터를 받을 변수를 설정합니다.
2-2-1) restaurants.json에 있는 데이터를 띄우기 위해서 keys 값을 달아준다.
2-3) restaurants.ejs 가서 r1으로 하드코딩된 id값을 json 데이터에 받을 수 있게 코딩을 고치도록한다.
2-4) uuid 패키지 설치하기 npm i uuid
2-5) app.js 가서 페이지에 줄 데이터를 만든다.
2-6) includes/restaurants/restaurant-item.ejs 파일을 만든다.

3. id 생성 - uuid 라는 패키지를 소개했습니다
랜덤 알파벳과 숫자의 조합으로 세부 url 주소를 자동으로 만들어줍니다.
4. 404 에러 페이지 구현 - 인터넷 유저가 없는 주소를 잘못 입력한 경우 존재하지 않는 페이지라고 알려주기.
5. 500 에러 페이지 구현 - 데이터 변수 오류 등으로 들어올게 안들어오는 등, 서버 관련 코딩이 잘못되었을 때 오류 구현
6. 코드 최적화 - 코드 재사용을 위한 컴포넌트화 개념 사용해서 한 파일의 내용이 너무 길어지지 않게하기
6-1) 데이터 관련 코딩을 util 이라는 폴더에 별도 파일을 만들어 둡니다.
6-1-1) util/restaurant-data.js 파일을 만듭니다.
6-1-2) 
6-2) 별도 파일안에 json 데이터 처리 코드를 넣고 app.js 는 그 파일을 불러서 작업합니다.
6-3) app.js에 너무 많은 내용이 들어가지 않게하고 json 데이터 처리 코드는 향후에 재사용 할 수 있도록 만듭니다.
6-4) app.js 안에서 만든거 쓰려면 패키지처럼 읽어들이는 과정이 있어야합니다.
6-5) 읽어들인 파일 내 함수를 적용할 때 반드시 하나씩 적용하면서 결과를 검증한 후에 진행해야합니다. 결과확인 없는 코드 적용은 디버그에 치명적입니다.

7. express 라우터 소개 - 경로에 따른 화면 표시 코딩이 여기저기 다른폴더로 재분배된다면?
7-1) app.js 파일 내부가 여전히 너무 큽니다. 세부경로 정보가 있는 코딩을 분산해서 배치하고자 합니다. 이를 위해 패키지 하나 더 소개하고자 합니다.
7-2) express 의 router 기능을 이용해서 데이터 전송이 필요한 restaurant
8. 원하는 id 값 구현 함수코딩 - 네이버 웹툰처럼 내가 url을 주는 방법은 없을지 실습합니다.
세부주소를 내가 원하는 대로
급히 만든 함수는 두가지 특성이 있다.
8-1) 함수를 쓸 때마다 값이 증가해야하기 때문에 (auto_increment기능)
   함수안에 함수가 있는 구조
8-2) 함수의 사용여부와 관계없이 '즉시' 실행되어야 한다 (즉시실행함수)
9. 데이터 정렬하기 - 오름차순 내림차순
html의 폼태그는 method="get"

routes 폴더 이름은 바뀌면 안됩니다.
몇몇 하위 폴더 친구들은 이름이 바뀌면 인식이 안됩니다.
vscode 상의 색이 바뀌는 폴더들은 사연이 있는 친구들입니다.

<!-- 20240425 -->
server: mysql 그 자체 ( 커맨드라인으로 일일이 명령어를 쳐야한다. )
workbench: sql 화면 보여주면서 작업을 가능하게 합니다.
samples and examples: 실습할 샘플 데이터를 제공해줍니다.
documentation: 메뉴얼입니다.

sql을 하는 이유
sql같은 프로그램을 DBMS(Data Base Management System) 이라합니다.

DBMS 중에 테이블간 연계가 가능한 것을 관계형 DBMS라 합니다. mySQL은 관계형 DBMS

<!--  -->
TABLE안의 KEY 값을 이용해서 다른 테이블 간의 "관계" 를 설명할 수 있는것을 관계형 데이터베이스라고 한다.
사번정보가 존재하는 데이텀나 합치기 등 각종 데이터간의 "관계"를 설명하는것이 핵심이다.

모든 정보를 한테이블에 때려 넣으면 데이터 테이블 내 빈값이 너무 늘어난다.

테이블 내 일부 정보만 필요한 데이터가 빈공간을 차지한다.
-> 데이터의 0값은 하드 디스크의 공간을 낭비한다.
-> 느려진다.

SQL 데이터 설계의 목표가 가능하면 빈공간 차지하는 잉여데이터값의 최소화
회원테이블, 직원테이블, 구매테이블, 물품테이블 같이 테이블 정보를 나눠서
필요한 내용을 필요한 만큼의 공간에 집어넣는게 핵심

<!--  -->
좌측 하단의 schemas 탭 클릭 후 빈공간에 대고 create schema
테이블 데이터가 소속될 schema를 생성
shop_db라고 입력하고 선택옵션은 utf8mb4

아래 명령어는 sql 쿼리문입니다.
우리가 클릭해서 정한거를 프로그램에서 sql 쿼리문으로 변환한 내용입니다.
CREATE SCHEMA `shop_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
workbench란 프로그램의 특징 : CLI(Command Line Interface)가 불편하니 GUI(Graphic User Interface)로 사용하기 위한 소프트웨어

데이터베이스의 삭제는 삭제할 DB가서 우클릭하고 DROP SCHEMA를 눌러주면 됩니다.

table 우클릭 후 create table 고르고 table name에 member라고 입력합니다.
sql은 윈도우에서 대소문자 구분을 안합니다.
운영체제별 특징
윈도우 : 구분 안한다.
맥 : 구분을 하진 않지만 대소문자 정보를 따로 저장한다.
리눅스 : 대소문자 구분을 한다.

table_name 에 member_id라 입력하고, datatype을 CHAR() 를 고른다. 그리고 CHAR(8) 이라고 정정한다.
CHAR(8) - 8글자로 이루어진 문자 데이터입니다.

pk, nn, uq, ai, un --> 데이터의 속성을 나타냅니다.
pk - primary key: 데이터 관계를 설명하는 값으로 그 데이터가 메인으로 가지는 구분자이다. 각 테이블에서 primary key는 하나만 쓸 수 있다.
     중복 및 빈 데이터를 허용하지 않는다.
     쿠팡 고객정보 테이블을 상상하자. 고객별 id가 primary key의 예시
     고객별 id 특징: 중복 허용 안함, 고유값 존재, 빈칸은 있을 수 없다.
     위 조건을 만족하는 데이터열을 primary key로 사용가능하다.

nn - not null: 빈값을 허용하지 않는다.
     pk 속성을 가지면 거의 자동으로 nn 속성을 가진다.
     기업에서는 사번, 나라에선 민증번호, 쿠팡에선 로그인 아이디 등이 좋은 primary key의 예시이다.

uq - unique: 고유값을 가진다.

pk, nn, uq
ai - auto increment : 데이터 자동증가, 유저가 따로 입력해주지 않아도 해당행에 데이터가 있다면 자동으로 값을 채워준다.
     좋은 예시는 금일 방문 손님 수 - 자동으로 손님 데이터가 들어오면 번호를 하나씩 증가시키며 번호를 매겨준다.


member_id : pk, nn id니까 고유값으로 설정
member_name : nn 이름은 동명이인 가능하지만 빈값은 허용하지 않는다
member_addr : 주소는 입력하기 싫으면 안해도 되도록

# shop_db 내부에 member라는 테이블을 만들어서
# 3개의 컬럼 생성 후
# primary key는 member_id 열이 맡는다
# 모든 테이블은 반드시 하나의 primary key 열을 가져야한다.
CREATE TABLE `shop_db`.`member` (
  `member_id` CHAR(8) NOT NULL,
  `member_name` CHAR(5) NOT NULL,
  `member_addr` CHAR(29) NULL,
  PRIMARY KEY (`member_id`));

아직 테이블 데이터를 넣지 않았기 때문에 빈 테이블로 보이게 됩니다.
테이블 내 정보를 열람하는 쿼리문입니다.
우클릭하면 쿼리를 만들어줘서 열람 할 수 있습니다.
shop_db.member --> shop_db 데이터 베이스 안에 member 테이블로 부터 모든 컬럼 정보를 보여달라
SELECT * FROM shop_db.member;
SELECT 컬럼이름 FROM 스키마.테이블 이름;

sql 주의사항 : 쿼리문 안에 마우스 드래그 된 부분이 있으면 마우스 드래그 된 코드가 부분적으로 실행된다.
              즉 코드를 잘 짜도 드래그 이상한데 해놓으면 오류난다.

쿼리문에서 schema 선택방법은 몇가지가 있다.
1. schema를 더블클릭해서 볼드 글씨가 나오면 해당 schema를 선택 한 것으로 SELECT * FROM member; 이렇게만 해도 문제가 없다.
2. use 스키마이름; 이렇게해서 스키마를 미리 선택해둔다.
3. SELECT * FROM shop_db.member; 스키마를 직접 입력한다.

fk : 다른테이블의 인덱스 값을 받아오는 데이터 매칭 시키는 역할
     foreign key 즉 외래키라고도 한다.
     외래키는 한 테이블에 여러개 있어도 된다. 다수의 테이블이 참고 할 수 있기 때문이다.
     두 테이블 외에 직원 테이블이 있고 직원의 사번이 primary key이고 그걸 받아서
     직원가에 물건을 사는 구매테이블 정보가 있다고 치자.
     그러면 아까 구매데이터 테이블이 사번을 읽는 열 정보, 즉 또다른 foreign key를 만들면 된다.

fk는 한 테이블에 여러개 있을 수 있고
데이터가 null값, 즉 존재하지 않아도 된다.

FOREIGN KEY (mem_id) REFERENCES member(mem_id)
지금 테이블의 mem_id는 옆 테이블 mem_id 정보와 매칭하여 데이터를 식별한다.
전화번호 있는 데이터만 혹은 전화번호 데이터 망가진 데이터만 선택해서 불러낼 수 있다.

sql은 상당히 오래된 소프트웨어라서 아무리 다국어 처리하고 조심해도 한글이 깨지는 경우가 많습니다.
그래서 sql을 많이 쓰는 직장은 한글 데이터를 넣지않습니다.

데이터를 선택하여 저장할 때
USE market_db -- 스키마를 선택합니다.
select 컬럼1, 컬럼2, 컬럼3 from 테이블 이름 -- 데이터 열람 방법

데이터를 *로 부르면 다 좋은데 데이터가 크면 너무 느리다.
원하는 조건만 보고싶다. 아까처럼 열 데이터는 그대로인 채로 원하는 조건만 뽑아서 보고자 한다면?

SELECT * FROM 테이블이름 where 조건열 = 원하는데이터;
그룹 멤버가 4명인 걸그룹 데이터만 추리려고 한다면?
SELECT * FROM member where mem_number = 4;
<, > 이거는 관계 연산자이고 and, or 이런건 논리연산자라 합니다.
sql은 관계연산자 논리연산자 전부 지원함
SELECT * FROM member where (height > 162 and mem_number < 5 );

날짜데이터의 경우 date() 로 감싸주시면 날짜라고 인식합니다.
SELECT * FROM member where date(debut_date) < '2015-01-01';

이렇게 입력하면 안됩니다.
SELECT * FROM member where 106 < height < 165;
(같은의미) SELECT * FROM member where height between 160 and 165;

이렇게 고쳐서 하면 됩니다.
SELECT * FROM member where 160 < height and height < 165;

에이핑크보다 키 큰 걸그룹을 뽑을 수 없나?
차은우보다 키 큰 연예인, 문제는 내가 차은우 키를 몰라
1. 에이핑크 키 데이터를 뽑는다.
SELECT height from member where mem_name = '에이핑크'; --> 164
2. 164 라고 알아냈으니 아래와 같이 쿼리문 작성
-- SELECT mem_name, height from member where height > 164

서브쿼리가 여러분의 직장 라이프를 돕습니다.
서브쿼리는 쿼리문 안에 쿼리문이란 뜻입니다.

SELECT mem_name, height from member where height > (SELECT height from member where mem_name = '에이핑크');

비즈니스에서 성과별, 실적별 나열은 order by, (순서를 매긴다)
비즈니스팀 별 총 성과급 지급액은 group by (그룹화 한다)

--> 데뷔일 순으로 나열하기
--> 2017년에 데뷔한 그룹찾기

order by 구문을 통해 키순으로 세웠다. 같은 키라면 데뷔일이 바른 선배님을 앞에 모시고 싶다면? --> 콤마찍고 그 다음 분류 순서를 주면 된다.

order by height desc, debut_date asc --> 맨 앞 기준으로 세우고 맨 앞 기준이 변하지 않는 범위에서 그 다음 기준으로 분류. 빅데이터라면 세번째 네번째 기준도 만들어 쓸 수 있다.

-- SELECT mem_id, sum(amount) FROM market_db.buy group by mem_id;
-- SELECT * FROM market_db.buy

# 모든 구매기록에 대한 총 구매금액
-- SELECT mem_id, sum(price*amount) FROM market_db.buy group by mem_id;
# 한번 구매 시 평균 금액
-- SELECT mem_id, avg(price*amount) FROM market_db.buy group by mem_id;
-- SELECT count(*) FROM market_db.buy;

-- 특정 컬럼에서 데이터가 온전한 것만 개수를 센다.
-- 그래서 count(*) 랑 결과가 달라질수있다.
SELECT count(group_name) FROM market_db.buy;

<!-- 20240426 -->
sql의 특징: 
1. 여러계정이 동시에 활동이 가능하다
그래서 sql파일을 더블클릭하면 별도의 로그인 하지 않은 계정에서 그냥 열립니다
여러분의 로그인 된 계정과 아무 상관없어짐
2. 한계정에서 여러개의 db생성가능 
market_db, shop_db 이렇게 다수의 데이터베이스 구축 가능
3. 관계형 데이터베이스: 여러개의 테이블이 지정된 관계를 가지고 데이터를 엮을 수 있다. - 직원테이블, 고객테이블, 구매기록테이블

"관계형 데이터베이스는 설계가 중요하다" 
적당한 데이터 배치와 테이블 개수 설정으로 빈 데이터 적재를 최소화 한다
테이블간의 관계는 primary key & foreign key로 연결할 데이터를 지정한다
primary key: 테이블 안에 하나만 지정가능, 중복안됨, 비어있어도 안됨
예시) 고객 아이디, 회사 사번, 민증번호

foreign key: primary key가 지정한 데이터에 대한 매칭 데이터
한 테이블에 여러개가 있을수도 있고 테이블간 교류가 없다면 foreign key는 없어도 되. 빈데이터도 허용해


다만 기 생성된 스키마를 다시 만들라 하면 오류가 나니까
이미 스키마가 존재하면 날리라고 먼저 명령해줌
DROP DATABASE IF EXISTS market_db777;
데이터 베이스(스키마) 생성은 아래와 같이 간단하다.
CREATE DATABASE market_db777;

특정 스키마의 테이블을 부르려면 스키마 지정을 해야한다.
아래처럼만 하면 오류가 나는데 이유는 어느 스키마에 소속된 member테이블인지 모르기 때문이다
CREATE TABLE member;
스키마 지정방법 3가지
1. 스키마를 더블클릭해서 볼드표시확인한다 - 이 스키마를 쓰겠다
2. use 스키마 이름  use market_db - 쿼리문으로 사용할 스키마 지정
3. 일일히 스키마 달아주기 CREATE TABLE market_db.member; 

primary key는 원칙적으로 중복되면 데이터 식별이 어려우므로
중복데이터가 없어야 하는데 같은 key값의 분 단위 데이터라고 가정해 보자

AUTO_INCREMENT는 데이터가 비지 않도록 1씩 자동으로 값을 증가시키며 데이터를 채운다. - primary key 종특 다른데이터는 비어있는게 정답인 경우가 대다수이므로 함부로 써서도 안되고 그냥 쓰지마

select 보고싶은_컬럼 이름 from 테이블_이름 where 조건
select * from member; member테이블 안에 모든 컬럼정보 출력
근데 member 테이블안에 데이터가 너무 많아서 자료의 열람조차도 시간이 너무 걸리는 경우
--> limit 5 써서 5줄까지만 나오도록 한다
select * from member limit 5;
그룹 멤버가 4명인 그룹만 나오게 하려면?
select * from member where mem_number = 4;
'where 조건' - 여기는 비교연산자(<, >) & 논리연산자(and, or) 
전부 가능. 아래 참고해서 3명이상 5명이하 결과 뽑아 보세요
select * from member where mem_number = 4;
select * from member where mem_number >= 3 and mem_number <= 5;
데뷔일이 2015년 이전인 선배가수만 모셔옴
날짜 데이터는 문자데이터 처럼 홀따옴표로 감싸주세요
select * from member where date(debut_date) < '2015-01-01';
이러시면 아니되옵니다...
select * from member where 160 < height < 165;

select * from member where 160 < height and height < 165;
서로 다른 분류기준도 동시에 사용 가능
select * from member where height < 165 and mem_number < 5;
서브쿼리: (쿼리안에 쿼리)
-->에이핑크보다 평균 키가 큰 걸그룹데이터를 알고싶다면?
1. 에이핑크 평균 키 데이터를 뽑는다
select height from member where mem_name='에이핑크'; 164
2. 164보다 키 큰 걸그룹데이터를 뽑는다
select mem_name, height from member where height > 164;
이러면 야근각인데... 한번에 하는 방법은 없을까?
서브쿼리의 핵심은 뭐다? 비교 대상의 결과데이터를 알지 못할때
--> 비교대상의 데이터값을 모르고 비교대상만을 아는경우사용
select mem_name, height from member where height >
(select height from member where mem_name='에이핑크' ) ;

order by, 정렬
group by, 그룹화
분단위로 측정하면 데이터 4800만건
시간단위로 60분 평균내서 측정하면? 4800/60 = 80만건
일단위로 활동량 데이터 평균내서 group by한다면?
80/24 = 3.xx만건
원래는 아래처럼 써야 하는데 in 구문으로 단순화 가능
select * from member where addr = '경기' or addr='전남' or addr='경남' ;
select * from member where addr in( '경기' , '전남', '경남') ;
'오'로 시작하는 걸그룹 이름을 알고 싶다면 (%는 아무데이터란 뜻)
select * from member where mem_name like '오%';
오% 오렌지캬라멜
아래코드는 되지 않습니다. 왜? like와 in 은 같이 못써요
select * from member where mem_name like in('오%', '에%');
걸그룹 이름이 '오'로 시작하거나 '에'로 시작하는 그룹찾기
select * from member where 
    mem_name like '오%' 
or mem_name like '에%';

데뷔일 기준, 내림차순으로 데이터 정리
order by debut_date 이게 데뷔일 기준으로 정렬해달란 의미
desc가 내림차순의 의미입니다
select mem_id, mem_name, debut_date 
from member order by debut_date desc;
내림차순 오름차순 설정 빼먹으면? 오름차순이 기본값이다.

데뷔일 기준, 내림차순으로 데이터 정리할때 키 164이상을 뽑고 싶다면?
select mem_id, mem_name, debut_date, height 
from member where height >= 164 
order by debut_date desc ;

-- where구문은 order by 앞으로 가야 합니다
특정 컬럼에서 중복값을 제거하고 보고싶을때?
예) 고객구매데이터에서 고객명수만 확인하고싶을 때
# 중복값을 빼고 싶을 때
-- select distinct addr from member;

합계금액 1000이상 구매자를 회원 아이디 별로 "내림차순"으로 정렬
group by, having, order by가 함께 쓰인 예제였습니다.
특징에 대해서 짚고 넘어가자면, group by등으로 집계된 결과는
where구문을 쓸 수 없습니다. where말고 같은 기능의 having을 쓰셔야 합니다. 그리고 where가 아닌 having이므로 group by 뒤에 와야 합니다
order by는 맨 나중에 위치하게 되었습니다.
데이터 집계 -> 조건을 따진 후에 (결과데이터를 결정한 후에)-> 정렬 
SELECT mem_id "회원 아이디", sum(price*amount) "총 구매금액"
FROM market_db.buy 
group by mem_id 
having sum(price*amount) > 1000
order by sum(price*amount) desc;

dump project folder --> 백업 자료가 개별 파일들로 쪼개져서 백업
self-containerd file --> 하나의 sql 파일로 백업됨
Include create schema --> 이거 클릭해두면 스키마 이름까지 만들어주고 이거 안하면 직접 스키마 이름 입력해야함.

다른 데이터 베이스의 테이블 정보도 무리없이 가져 올 수 있습니다.
insert into city_popul 
select toy_name, age
from market_db.hongong1;

데이터를 삭제 할 때 3가지 방법이 있습니다.
편의성과 성능은 반비례합니다.

<!-- 20240429 -->
데이터 설계 --> 조인
데이터 추가, 수정, 삭제 --> 중복입력이 가능
클릭 한번에 데이터가 중복이 들어오기 쉽다.

(아래는 이전에 만들려고 했던 데이터에 대한 내용이다.)
use world;
-- # 내가 원하는 정보만을 담을 테이블을 새로 만듭니다. 도시이름과 인구정보네요.
drop table if exists city_popul;
create table city_popul (city_name char(35), population int);
insert into city_popul select name population from city;

# 데이터의 수정은 동시에 진행가능합니다.
# city_name 컬럼의 new york 이란 데이터를 한글 뉴욕으로 고치고
# 인구수도 0으로 데이터의 변경이 가능하다.
-- update city_popul set city_name = '뉴욕',
-- population = 0 where city_name = 'new york';

SQL 쿼리문은 누적되어 실행된다.
마우스 드래그를 잘해서 원하는 쿼리문만 돌리던지 아니면 코멘트 처리해두던지
근데 웬만하면 데이터 생성 쿼리문은 별도의 파일에 작업하자

테이블간의 결합을 시키는 JOIN 문을 배울 때
PRIMARY KEY & FOREIGN KEY와의 관계 유형에 대해 자세히 다룰 예정
1:N 관계(1대 다) N:N관계(다대 다) 
--> IOT 장비를 채워서 분당 강아지 활동량 측정 N:N관계(다대 다)
--> GROUP BY로 데이터를 1일 데이터 등으로 변환하여 1:N 관계(1대 다)의 관계로 실무에서 처리하는 경우가 있다.

SQL 잘하면 대우가 좋다
수억줄의 데이터에 대한 관계를 설계하고, 테이블을 구성하고 데이터 속성에 따른 데이터 가공, 처리, 1:N등의 관계 변환 등, 데이터를 원하는 목적에 따라 연결해야 하므로

테이블이 복잡하면 한번에 정보를 가져 올 수 없습니다.(서브쿼리)
에이핑크보다 키 큰 사람들을 뽑고싶다. (에이핑크는 아는데 그 사람들의 키는 몰라)
1. 에이핑크의 키를 찾습니다.
SELECT height FROM member WHERE mem_name = '에이핑크'; --> 164
2. 164보다 키 큰 사람들을 불러냅니다.
SELECT mem_name, height FROM member WHERE height > 164;
일을 한번에 하고싶을때 서브쿼리 사용합니다.

실무에서 테이블간 연결이 되지 않은 사례가 있습니다. JOIN 문 등으로 일할 수 없는 경우
서브쿼리로 필요한 결과를 뽑아서 그 결과를 조건문에 걸어서 처리합니다.
SELECT mem_name, height FROM member WHERE height >
(SELECT height FROM member WHERE mem_name ='에이핑크');

데이터의 정렬 => order by,
데뷔일 기준으로 내림차순으로 정리하는 경우 (desc) 내림차순 안쓰면 오름차순이 기본 설정
order by 는 where 뒤에 와야합니다. 데이터의 맥락을 생각하시면 순서이해가 됩니다.
SELECT mem_id, mem_name, debut_date FROM member WHERE height > 164 order by debut_date desc

데이터의 집계 => group by,
개별 구매 데이터를 목적에 맞게 가공하고 싶을 때 사용한다.
고객 id 별로 개별구매 아이템 금액의 합계를 집계하고 싶을때 사용합니다.
SELECT mem_id, sum(amount) FROM market_db.buy group by mem_id;
고객 id 별로 개별구매 아이템 금액의 최대금액을 집계하고 싶을때 사용합니다.
SELECT mem_id, max(amount) FROM market_db.buy group by mem_id;
고객 id 별로 개별구매 아이템 금액의 최소금액을 집계하고 싶을때 사용합니다.
SELECT mem_id, min(amount) FROM market_db.buy group by mem_id;
고객 id 별로 개별구매 아이템 금액의 평균금액을 집계하고 싶을때 사용합니다.
SELECT mem_id, avg(amount) FROM market_db.buy group by mem_id;
고객 id 별로 개별구매 아이템 금액의 구매건수를 집계하고 싶을때 사용합니다.
SELECT mem_id, count(amount) FROM market_db.buy group by mem_id;

집계 데이터는 계산해서 집계가 가능하다 + 내가 원하는 column 이름으로 설정가능
SQL 에서 column의 이름을 지정하는 것을 별명(alias)의 사용이라 합니다.
column의 이름과 별명(alias) 사이에 콤마가 들어가지 않습니다.
SELECT mem_id "회원 아이디", sum(price * amount) "총 구매금액"
FROM market_db.buy GROUP BY mem_id;

GROUP BY로 집계 할 때 비교조건을 붙일 때 무엇을 해야하는지?
집계 할 때는 WHERE 가 안됩니다. 같은 기능을 지원하는 HAVING 구문을 사용해야 합니다.
1분 예제 : sum(price * amount) > 1000 이상인 친구에 한해서 집계 해주세요.
정답:
SELECT mem_id "회원 아이디", sum(price * amount) "총 구매금액"
FROM market_db.buy GROUP BY mem_id HAVING sum(price * amount) > 1000;

# auto_increment 기능의 시작점과 숫자 단위는 설정가능하다.
예) 특정일 이후 중간 데이터는 10000으로 시작하고 33씩 증가시켜서 구분을 하고자 할 때
ALTER TABLE hongong1 AUTO_INCREMENT = 10000;
SET @@AUTO_INCREMENT_INCREMENT=33;

데이터 생성 관련 구문은 별도의 파일에서 작업하는 것이 안전하다.

update, delete 구문은 아래 옵션이 켜져 있으면 안됩니다. 안전모드를 해제하세요.
[Edit] > [Preferences] > [SQL Editor]에서 안전모드(Safe mode)를 해제한다. --> 재시작

데이터의 삭제를 보겠습니다.

DROP TABLE IF EXISTS city_popul;
CREATE TABLE city_popul (city_name CHAR(35), population INT);
INSERT INTO city_popul SELECT NAME population FROM city;

데이터 추가 후 new로 시작하는 도시이름을 모두 열람하고 싶을 때
%와 같이 하나 이상의 아무 글자나 가리킬 수 있는 문자를 와일드카드문자라 합니다.
와일드카드 사용 시, 정확히 매치한다의 =를 쓰면 안되고 like 구문으로 대체해야합니다.
SELECT * FROM world.city_popul WHERE city_name LIKE 'new%';

위 처럼 new 로 시작하는 도시를 열람하였습니다. 이제 열람한 데이터를 삭제해 보겠습니다.
데이터 삭제는 행 전체가 삭제되므로 딱히 삭제할 컬럼 지정은 안해도 됩니다.
DELETE FROM city_popul WHERE city_name LIKE 'new%';

위 예제를 활용하여 빈값이 존재하는 데이터행을 날릴 수 있습니다.
DELETE FROM 테이블명 WHERE 컬럼 is null;
빈 값이 존재하는 데이터 행을 삭제하실 때 주의할 점은 빈값이 있는 데이터가 반드시 오류가 난 데이터는 아니라는 점 기억해주세요.

데이터 삭제방식 3가지 DELETE, DROP, TRUNCATE
예제로 봅시다. 아래의 쿼리문으로 삭제할 데이터셋을 만들어 보시죠.
use world;
DROP TABLE if EXISTS big_table1;
DROP TABLE if EXISTS big_table2;
DROP TABLE if EXISTS big_table3;
CREATE TABLE big_table1 (SELECT * FROM world.city, sakila.country);
CREATE TABLE big_table2 (SELECT * FROM world.city, sakila.country);
CREATE TABLE big_table3 (SELECT * FROM world.city, sakila.country);

위 쿼리문 입력하면 테이블 당 데이터가 44만줄 정도 나옵니다. 이유는?
--> a.k.a join문은 왜 배우는가?
--> 테이블 안의 데이터끼리 관계를 설정하지 않으면 중복을 허용하는 조합으로 데이터 생성이 된다. 즉,
4079줄의 world.city 데이터의 각 행이 109줄의 sakila.country 데이터를 전부 가지면서
109줄의 country 데이터가 4079번 반복되는 효과를 가지기 때문이다.
N:N 관계의 예시(다대 다 관계)

빅데이터의 삭제모드를 위한 아무 빅데이터셋이 필요해서 위 예시를 사용하였지만
데이터 설계의 측면에선 좋지 않은 예시이다.

데이터 삭제방식 3가지 DELETE, DROP, TRUNCATE의 적용
-- # 빈테이블 양식은 남깁니다.
-- DELETE FROM big_table1;
-- # DROP 테이블 자체가 전부 날아갑니다. - 무지성 삭제 모드이고 무지성이니까 제일 빠르다.
-- DROP TABLE big_table2;
-- # TRUNCATE는 빈 테이블 양식은 남깁니다. - WHERE 구문이 없음. 즉 조건 없이 삭제함.
-- TRUNCATE TABLE big_table3;

소프트웨어의 기능과 성능은  반비례합니다.
여러 사람의 의견을 물어서 이견없이 의견을 조율 할 때 물어보는 사람이 많을 수록 느리다.
TRUNCATE 는 WHERE 비교 구문없이 삭제한다. --> 중간에게 누구에게 묻지않고 일처리함. 빠르다.

조인은 inner join과 outer join 크게 두가지를 많이 쓴다
1. inner join (내부조인)
내부 조인은 primary key가 있는 정보에 한해서만 정보 표시
그리고 데이터는 1:n 관계로 이루어져야한다.
사번과 구매기록, 게임아이디와 게임 접속기록 등의 데이터 관계를 생각하자
결국 primary key와 다른 테이블간의 "관계" 를 타나낸다.
일대 다 관계 즉, 1:n 관계는 pk-fk 관계라고도 한다.

use market_db;
SELECT * FROM buy INNER JOIN member
ON buy.mem_id = member.mem_id;

inner join에서 *를 쓰면 양쪽 테이블의 모든 컬럼값을 가져옵니다.
pk, fk는 의미적으로 동일한 데이터입니다. 그래서 중복결과를 가져왔습니다.
그래서 join문을 할 때 일반적으로 * 말고 내가 가져오고 싶은 컬럼을 명시합니다.

1:n 관계는 설명함
n:n 관계는 무엇?
학생과 대학 동아리 관계이다. 한 학생은 여러 동아리 가입되고 한 동아리는 여러 학생을 받을 수 있다.
지금 드리는 이커머스 관련 데이터 예시로 다대다 관계를 말씀드리자면, 고객과 사용 구매플랫폼의 관계가 다대다 관계입니다.
한명의 고객은 알리, 테무, 쿠팡, 지마켓 가입가능
지마켓은 여러명의 고객 받을 수 있다.

SELECT mem_id, prod_name, addr, price, amount FROM buy
INNER JOIN member
ON buy.mem_id = member.mem_id;

join문을 쓸 때, 중복되는 컬럼 이름이 아니면 소속 테이블을 쓰지 않아도 실행은 됩니다.
근데 나중에 다른 사람은 어디 테이블 소속의 컬럼 정보인지 모른다.
어느 테이블 소속인지 전부 써두는 것이 좋다.

테이블 이름이 길 경우
쿼리문의 가독성이 떨어 질 수 있다.
테이블에 별칭을 붙일 수 있다.

SELECT B.mem_id, B.prod_name, M.addr, B.price, B.amount
FROM buy B
INNER JOIN member M
ON B.mem_id = M.mem_id;

테이블에 별칭을 붙이면 전부 다 별칭을 해야한다. 안그러면 컴퓨터가 알아보지 못한다.

INNER JOIN은 양쪽 PK, FK에 모두 정보가 있는 결과만을 줍니다.
즉, 구매한 적이 없거나 회원을 탈퇴하여 우리 DB에 아이디 정보가 없는 사람의 기록은 나오지 않습니다.

구매금액, 고객아이디와 총 매출액을 매치해보려 할 때,
INNER JOIN으로 데이터를 취합하면 어려움을 겪을 수 있습니다.

만일 고객에게 감사장을 돌리고 싶어서 구매기록의 고객아이디 리스트를 뽑고 싶다면?

외부 조인 (OUTER JOIN)
외부 조인은 크게 LEFT OUTER JOIN, RIGHT OUTER JOIN
두가지로 나뉘는데, 의미는 한쪽의 PK 혹은 매칭되는 FK에 있는 정보를 모두 뽑는다는 얘기다.
우리 예시에는 탈퇴 걸그룹의 구매데이터는 없지만 있다고 가정해보자.

SELECT B.mem_id, B.prod_name, M.addr, B.price, B.amount
FROM buy B
LEFT OUTER JOIN member M
on B.mem_id = M.mem_id;

왼쪽와 오른쪽의 순서를 아래처럼 바꿔보자 결과가 달라질 것이다.
SELECT B.mem_id, B.prod_name, M.addr, B.price, B.amount
FROM member M
LEFT OUTER JOIN buy B
on B.mem_id = M.mem_id;

알리 사장님이 오셔서 아이디만 있고 구매기록이 없는 분들을 뽑아서 쿠폰을 뿌리려합니다. 
알리 월급날 쿠폰 이벤트 대상자 데이터만 뽑으려 한다면?
WHERE B.PROD_NAME IS NULL 추가
쿠팡 사장님은 구매기록이 있는 사람만 뽑으려 한다면 NOT을 붙이면 된다.

자체조인입니다. 자기자신 테이블 값과 조인합니다.
회사의 인사조직에서 사용합니다.
예시 데이터의 EMP:담당자  MANAGER: 그 사람의 상관 PHONE: 전화번호
QUESTION: 경리부장 상관의 전화번호를 알고싶다면???
경리부장 상관의 전화번호를 알고싶다면?
데이터베이스는 당장 그 사람의 전화번호를 알고있다.
경리부장의 데이터로 그 사람의 상관 데이터인 관리이사를 알아내서
그 관리이사의 전화번호데이터에 접근해야한다.

1. 경리부장의 데이터에 접근하여 관리이사라는 상관 데이터를 입수한 후
경리부장 관리이사 2222-1
2. 관리이사 상관의 데이터와 직원관리이사 데이터를 조인시켜서 아래 정보에 접근하여
전화번호 2222를 알아낸다.

INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN,  자체조인(SELF JOIN)