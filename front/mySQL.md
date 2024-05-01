<!-- 20240429 -->

#### JOIN 관련 수업내용
# join문 사용 시 주의할 점
# 양쪽 테이블에 같은 이름으로 모두 있는 정보는
# 어느 테이블 소속 정보인지 모른다. 어느테이블의 컬럼인지 명시해 줘야한다.
use market_db;
SELECT buy.mem_id, prod_name, addr, price, amount FROM buy
INNER JOIN member
ON buy.mem_id = member.mem_id;

-- use market_db;
# mysql은 직접적인 outer join 명령은 없습니다.
# 그래서 left outer join과 right outer join의 합집합으로
# 해당 데이터를 만듭니다.
-- SELECT * FROM buy
-- LEFT OUTER JOIN member
-- ON buy.mem_id = member.mem_id
-- union # 합집합이란 의미
-- SELECT * FROM BUY
-- RIGHT OUTER JOIN member
-- on buy.mem_id = member.mem_id;

<!-- // -->
셀프조인(SELF JOIN)
# INNER JOIN 문으로 담당자와 담당자 보스데이터에 대하여
# 테이블을 묶습니다. 그 후 담당자 데이터를 WHERE 조건을 걸어서
# 묶여있는 그 담당자의 상사 데이터와 그 사람의 전화번호를 불럽니다.
SELECT A.emp '직원', B.emp '직속상사', B.phone '직속상관 번호'
FROM emp_table A
INNER JOIN emp_table B
ON A.manager = B.emp
WHERE A.EMP = '경리부장';


PK: PRIMARY KEY,
NN: NOT NULL, (비어있으면 안됨)
UQ: UNIQUE (유일한 값이어야 함)
UN: UNSIGNED (마이너스 값 없음 - 키, 무게 같은거)
AI: AUTO INCREMENT (자동으로 숫자 추가해서 값 달아주는 기능)

B: BINARY DATA(이진데이터, 0,1)
ZF: ZERO FILL (0으로 채우기);
G : GENAERATED (수식 등으로 인해서 자동으로 생성되는 컬럼)

<!-- // -->
EMP2 스키마에 EMP, DEPT 테이블이 있습니다.
EMP는 근로자 정보 테이블이고
DEPT 는 부서관련 정보 테이블입니다.

1. 근로자 정보 테이블에서 사번, 이름, 월급을 출력해주세요.
--> 
USE EMP2;
SELECT empno, ename, sal FROM emp;

2. 1문제의 답에서 EMPNO, ENAME 같이 제목이 달리면 못알아 보니까
EMPNO는 "사번", ENAME은 "직원이름", SAL "월급" FROM EMP;
SELECT empno "사번", ename "직원이름", sal "월급" FROM emp;

3. 회사가 대박나서 월급의 1.5배 성과급을 준다합니다.
근로자 정보테이블(EMP)에서 사번, 이름, 성과급 정보를 출력해주세요.
성과급 정보는 "성과급" 이라고 컬럼 이름을 바꿔주세요
--> SELECT empno "사번", ename "직원이름", sal "월급", sal * 1.5 "성과급" FROM emp2.emp;

4. EMP 테이블에서 직업출력 시 중복값을 제거하고 출력했으면 좋겠습니다.
USE EMP2;
SELECT DISTINCT job FROM emp;

5. 4번 결과를 오름차순 정렬, 내림차순 정렬로 각각 정렬해주세요.
SELECT DISTINCT job FROM emp order by job desc; // 내림차순
SELECT DISTINCT job FROM emp order by job asc; // 오름차순

6. 3번 문제의 성과급을 오름차순으로 정렬해주세요.
SELECT empno "사번", ename "직원이름", sal "월급", sal * 1.5 "성과급" FROM emp ORDER BY 성과급 ASC;

7. EMP 테이블 정보를 이름(ENAME), 부서코드(DEPTNO), 월급(SAL) 정보를 열람해주시는데, 부서번호를 먼저 오름차순으로 정렬해주시고
부서번호 정렬 기준 후에 월급정보를 내림차순으로 정렬해주세요.
USE EMP2;
SELECT * FROM emp;
SELECT ename, deptno, sal FROM emp ORDER BY deptno asc, sal desc;

<!-- 20240430 -->
-- SELECT * FROM emp2.emp;
-- SELECT ENAME, JOB, SAL FROM emp WHERE SAL >= 3000;

# 이름이 SCOTT인 사원의 (emp 테이블 안 자료)
# 이름, 월급, 직업, 입사일, 부서 번호를 출력하라
SELECT ENAME, SAL, JOB, HIREDATE, DEPTNO FROM emp WHERE ENAME = 'SCOTT';

# 데이터를 집계 할 때 일부데이터가 null 일 때
# 직원별로 월급 + 커미션을 합산한 총 보수를 뽑고 싶을 때
# 모든 빈 데이터가 틀린건 아니다, 커미션 데이터가 없는 사람은
# 커미션을 받지 않는 조건으로 입사했다고 가정
# 비어있는 커미션 데이터 자체를 수정해선 안돼
# 단, 커미션 데이터가 없는 사람은 커미션 제외한 월급이 총 보수라 가정
-- SELECT ename, sal+ifnull(comm, 0), job, hiredate, deptno from EMP;

# 오라클에선 nvl 함수, mysql에선 ifnull 함수로 문제해결 가능
# 센스 퀴즈 : 저기서 null 일으키지 않고 커미션 null 알아내는 법
-- SELECT ename, sal+ifnull(comm, 0.0001), job, hiredate, deptno from EMP;

# sal 컬럼은 월급 데이터라는걸 알았다.
# 연봉이 20000 이상인 사원들의 이름과 연봉을 출력하라
-- SELECT ENAME, SAL*12 FROM emp WHERE SAL * 12 >= 20000;

# 직업이 SALESMAN이 아닌 직원들의
# 이름과 부서번호, 직업을 출력하라
-- SELECT ENAME, JOB, DEPTNO FROM EMP WHERE JOB != "SALESMAN";

-- SELECT ENAME, SAL FROM EMP WHERE SAL 1000 BETWEEN 3000;

# Q. 월급이 1000에서 3000 사이가 아닌 사원들의 이름과 월급을 출력하라
-- SELECT ENAME, SAL FROM emp WHERE (SAL < 1000 OR SAL > 3000);

# 이름의 첫 글자가 S로 시작하는 사원들의 이름과 월급을 출력하라
SELECT ENAME, SAL FROM emp WHERE ENAME LIKE "S%";

# 이름의 끝 글자가 T로 끝나는 사원들의 이름과 월급을 출력하라
SELECT ENAME, SAL FROM emp WHERE ENAME LIKE "%T";

# 이름에 A를 포함하고 있는 사원들의 이름을 출력하라
SELECT ename, sal FROM emp WHERE ename LIKE "%A%";

# 이름의 두 번째 철자가 M인 사원의 이름과 월급을 출력하라
SELECT ename, sal FROM emp WHERE ename LIKE "_m%";
# 이름의 세 번째 철자가 M인 사원의 이름과 월급을 출력하라
SELECT ename, sal FROM emp WHERE ename LIKE "__m%";

# 직업이 SALESMAN, ANALYST, MANAGER 인 사원들의 이름, 월급, 직업을 출력하라
SELECT ename, job, sal FROM emp WHERE job IN ("SALESMAN", "ANALYST", "MANAGER");

# 직업이 SALESMAN, ANALYST, MANAGER 이 아닌 사원들의 이름, 월급, 직업을 출력하라
SELECT ename, job, sal FROM emp WHERE job NOT IN ("SALESMAN", "ANALYST", "MANAGER");

<!-- 20240501 -->
# 사원테이블에서 최대 월급을 출력하라
SELECT job, max(SAL)
FROM EMP
WHERE job
IN ("SALESMAN");

# WHERE 와 HAVING 사용법 정리
# WHERE 는 HAVING 과 달리 그룹화 전에 조건이 처리가 된다.
# 일반적으로 GROUP BY에서 WHERE 말고 HAVING을 권장하는 이유는
# WHERE 절에서는 집계함수를 못씁니다.
# 집계함수 : WHERE sum(price * amount) > 1000;
# 단순 카테고리 추출은 WHERE가 허용됩니다
# WHERE job = "salesman";
# 조건을 통한 분류는 그래서 HAVING 사용을 언급하였습니다.

# WHERE 로 카테고리 조건 처리하고 GROUP BY로 그룹화해서 HAVING으로 다시한번 조건처리는 가능합니다.
# SQL 실행순서 측면에서 그룹화 전에 조건이 처리되므로 조건식, 연산
# 수리적인 작업에서 논리적인 충돌이 발생하기 때문이다.
# 지금 예제의 WHERE 는 단순 카테고리 분류이므로
# 그룹화전에 조건이 처리되어도 무방하므로 예제가 잘 돌았다.
# 그런데 비교식과 같은 수리연산은 실행순서에 따라 성립 할 수 없는 경우가
# 생기기 때문에 이전 예제의 GROUP BY 이후 WHERE의 사용이 되지 않았다.

# 직업 별 최소 월급을 뽑아주세요
-- SELECT job, min(sal)
-- FROM emp
-- GROUP BY job 
-- ORDER BY min(sal) desc;

# 직업과 직업별 토탈 월급을 출력하는데 직업별 토탈 월급이 높은것 부터 출력하시오.
-- SELECT job, sum(sal) FROM emp GROUP BY job ORDER BY sum(sal) desc;

# 직업과 직업별 토탈 월급을 출력하는데
# 직업별 토탈 월급이 4000 이상인 것만 출력하는 경우
-- SELECT JOB, SUM(SAL)
-- FROM emp
-- GROUP BY JOB
-- HAVING SUM(SAL) >= 4000;

# 직업과 직업별 토탈 월급을 출력하는데
# 직업에서 SALESMAN은 제외하고,
# 직업별 토탈 월급이 4000 이상인 사원들만 출력하시오.
-- SELECT JOB, SUM(SAL) FROM EMP WHERE NOT JOB = "SALESMAN" GROUP BY JOB HAVING SUM(SAL) >= 4000;

# emp 테이블에서 null 값이 있는 데이터행의 개수를 출력해 주세요
# emp 테이블 안을 보니
# 모든 null 값이 있는 행 ㅔㄷ이터는 comm 컬럼이 null 이드라
# comm 컬럼이 null 인 친구만 찾아서 개수를 세면 된다.
# null은 null에 직접 개수를 셀 수 없는 문제가 있다.
# 모든 데이터가 존재하는 아무 컬럼에서 데이터 개수를 세고
# 그 데이터 개수에서 comm이 null 인 친구를 걸러내면 된다
SELECT COUNT(ename)
FROM emp
WHERE comm is null;

-- sqldb에서 userid가 jyp 인 친구의 모든 기록을 모든 테이블에 대해 뽑아주세요.(구매 기록과 배송정보를 모두 불러오고 싶습니다.)
-- use sqldb;
-- SELECT * FROM buytbl
-- INNER JOIN usertbl
-- ON buytbl.userID = usertbl.userid
-- WHERE buytbl.userid = 'JYP';

-- 한번이라도 물건을 구매한 사람들을 모두 찾아서 감사쿠폰을 뿌리고 싶습니다.
-- 한번이라도 물건을 구매한 사람들을 찾아주세요
-- SELECT distinct u.userid, u.name, u.addr
-- FROM usertbl u
-- INNER JOIN buytbl b
-- ON u.userid = b.userid
-- ORDER BY u.userid;

-- 위 정답을 적당히 써서 한번도 물건을 구매하지 않은 사람들을 찾아주세요.
-- 서브쿼리
-- 아래 쿼리문으로 실행하면 두가지 이슈로 인해 에러가 난다.
-- 1. != 사인은 단일값을 비교하는데 구매한 적이 있는 사람데이터 값은
-- 복수이기 때문이다. 그래서 != 말고 not in 그룹값으로 처리가 필요하다.
-- 2. 서브쿼리 결과 비교 시 서브쿼리 결과는 비교 구문 데이터와
-- 일치가 필요하다. 근데 userid외에 name, addr까지 들어와서
-- 비교가 되지 않는다.
SELECT userid, name, addr
FROM usertbl
WHERE userid NOT IN (SELECT distinct u.userid
FROM usertbl u
INNER JOIN buytbl b
ON u.userid = b.userid
ORDER BY u.userid);