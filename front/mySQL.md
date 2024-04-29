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