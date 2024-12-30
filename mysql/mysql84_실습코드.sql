/*
	*데이터베이스의 테이블은 행과 열을 이용하여 데이터를 저장하는 시스템이다.

	
	SQL(Structured Query Language) :데이터 베이스에서 사용하는 구조화된 언어
		--> DBMS(DataBase Management System)에 접속하여 CRUD 작업을 수행하는 언어
    
    (1) DDL(Data Definition Language : 데이터 정의어
		- 데이터를 저장하기 위한 공간을 생성하고 관리하는 논리적인 언어
		- CREATE(데이터가 저장되는 공간), ALTER, TRUNCATE, DROP
        
	(2) DML(Data Manipulation Language) : 데이터 조작어
		- 데이터를 CRUD 작업을 수행하는 언어
        - insert(C), select(R), update(U), delete(D)
        
	(3) DCL(Data Control Language) : 데이터 제어어
		- 데이터에 접근하는 권한을 제어하는 언어
        - GRANT(부여), DEVOKE(해제)
        
	(4) DTL(Data Transaction Language) : 트랜잭션 제어어
		- 데이터베이스 작업 처리 단위인 트랜잭션을 관리하는 언어
        - commit (완료), rollback(취소), savepoint(작업구간별 저장)...
*/
/*
	데이터베이스 선택 및 조회
    show databases;  		-- 모든 데이터베이스 목록 출력
    use [선택한 데이터베이스명]; -- 사용할 데이터베이스 선택
    select database()      	-- 데이터베이스 선택
    show tables; 			-- 데이터베이스에 저장된 테이블 전체 조회
*/

show databases;
use hrdb2019;
select database(); 
show tables;

/*
	테이블 구조 확인 : DESC(DESCRIBE)
    형식 - DESC [테이블명];
*/

SHOW TABLES;
DESC DEPARTMENT;    -- Null -NO,YES(빈값이 들어갈수있는지 없는지 확인)
DESC EMPLOYEE;
DESC UNIT;
DESC VACATION;

/*
	테이블 조회(단순) : SELECT
    형식 - SELECT [컬럼리스트] FROM [테이블명];
		  SELECT [*(전체컬럼리스트)] FROM [테이블명];
*/
SHOW TABLES;
DESC EMPLOYEE;
SELECT EMP_ID, EMP_NAME FROM EMPLOYEE;
SELECT * FROM EMPLOYEE;
SELECT * FROM DEPERTMENT;


SHOW TABLES;
-- 사원테이블에서 사원아이디, 사원명, 성별, 입사일 조회
SELECT EMP_ID, EMP_NAME, GENDER, HIRE_DATE
	FROM EMPLOYEE; 

-- 사원테이블에서 사원명, 부서명, 입사일, 폰번호, 연봉조회
DESC EMPLOYEE;
SELECT EMP_NAME, DEPT_ID, PHONE, SALARY
	FROM EMPLOYEE;
    
-- 부서테이블의 모든 칼럼을 조회
SELECT * FROM DEPARTMENT;



-- [ 조회한 컬럼명을 ALIAS(별칭)으로 출력]
-- 형식 : SELECT [컬럼명 AS '별칭', 컬럼명 AS '별칭'...] FROM [테이블명];
-- 사원테이블에서 아이디, 성명, 입사일, 부서명, 연봉 이름으로 조회 컬럼을 조회

SELECT   	-- 새로데이터생성
	EMP_ID AS '아이디',
    EMP_NAME AS '성명',
    HIRE_DATE AS '입사일',
    DEPT_ID AS '부서명',
    SALARY AS '연봉'
	FROM EMPLOYEE;
    
SELECT 
	EMP_ID '사원 아이디' ,  -- AS생략가능 /''하나일경우 생략가능, 단어 두개이상일경우 사용
    EMP_NAME AS 성명,  
    HIRE_DATE AS 입사일,
    DEPT_ID AS 부서명,
    SALARY AS 연봉
	FROM EMPLOYEE;
    
    
    -- 사원테이블에서 사원명, 부서, 연봉을 조회
    -- 별칭으로 컬럼명을 수정
    -- 기존 컬럼을 이용하여 가상컬럼 생성 - 연봉 10% 인센티브 컬럼, 물리적X 
    -- 타입이 숫자인 컬럼은 수식 연산이 가능함
    DESC EMPLOYEE;  -- 구조보기
    SELECT EMP_NAME 사원명, DEPT_ID 부서, SALARY 연봉, SALARY*0.1 인센티브 
		FROM EMPLOYEE;



-- 현재의 날짜를 조회, 컬럼명을 'DATE'로 변경
SELECT CURDATE();  
SELECT CURDATE() AS 'DATE';  -- CURDATE-->>'DATE'로 변경



show databases;  -- 모든 데이터베이스 목록을 출력
use hrdb2019;
select database();
show tables;
select * from employee;
select * from department;
select * from unit;
select * from vacation;


/*
	테이블 조회(단순) : SELECT ~ FROM ~ WHERE
    - 조건절을 추가하여 다양한 쿼리를 실행
    형식 - SELECT [컬럼리스트]
			FROM [테이블명]
            WHERE [조건절];
*/

-- 사원테이블에서 SYS 부서에 근무하는 *모든 사원을 조회
SELECT * FROM EMPLOYEE   -- SELECT DEPT_ID FROM EMPLOYEE;
	WHERE DEPT_ID ='SYS';


-- 사원 테이블에서 사원명이 '정주고'인 사원을 조회
SELECT * 
	FROM EMPLOYEE
		WHERE EMP_NAME = '정주고';
	
-- 사원테이블에서 사원아이디가 S0011 인 사원의 정보를 모두 조회
SELECT *
	FROM EMPLOYEE
		WHERE EMP_ID = 'S0011';


-- 사원테이블에서 연봉이 5800인 사원의 모든 정보 조회
SELECT *
	FROM EMPLOYEE
		WHERE SALARY = 5800;
    
-- 사원테이블에서 여성사원들의 아이디, 이름, 입사일, 이메일 정보를 조회  
SELECT EMP_ID, EMP_NAME, HIRE_DATE, EMAIL
	FROM EMPLOYEE
    WHERE GENDER = 'F';

    
-- 사원테이블에서 부서명이 SYS인 사원들의 아이디, 사원명, 입사일을 조회
SELECT EMP_ID '사원번호', EMP_NAME, HIRE_DATE
	FROM EMPLOYEE
    WHERE DEPT_ID = 'SYS';

-- WHERE절 조건에 별칭으로 조회가 가능할까요??
SELECT EMP_ID '사원번호', EMP_NAME, HIRE_DATE, DEPT_ID '부서 번호'
	FROM EMPLOYEE
		WHERE DEPT_ID = 'SYS';
		--  WHERE '부서번호' = 'SYS';
     
-- 사원테이블에서 마케팅 부서의 모든 사원 정보를 조회
SELECT *
	FROM EMPLOYEE
		WHERE DEPT_ID = 'MKT';


-- 사원테이블에서 입사일이 2014년 8월 1일인 모든 사원 조회
SELECT *
	FROM EMPLOYEE
		WHERE HIRE_DATE = '2014-08-01';  -- 표현은 문자처럼, 처리는 숫자


-- 연봉이 5000인 사원 정보 조회
SELECT *
	FROM EMPLOYEE
		WHERE SALARY = 5000;



-- SELECT * FROM EMPLOYEE;
-- NULL 타입은?? 
-- 숫자 컬럼에서는 가장 큰 숫자로 인식, 문자 컬럼에서는 
-- NULL은 논리적인 의미를 가지므로 IS 키워드를 비교 연산을 수행



-- 사원테이블에서 ENG_NAME이 NULL인 모든 사원의 정보 조회
SELECT *
	FROM EMPLOYEE
    WHERE ENG_NAME IS NULL;
		-- WHERE ENG_NAME = NULL;
    
    
-- 연봉이 정해지지 않은 모든 사원 조회
SELECT *
	FROM EMPLOYEE
		WHERE SALARY IS NULL;


-- ifnull() : NULL 값을 다른 값으로 대체해주는 함수
-- 형식 : ifnull(null포함 컬럼명, 대체할 값);
-- 컬럼리스트에서 호출
SELECT EMP_NAME, SALARY, IFNULL(SALARY, 0) AS SALARY2  -- (SALARY, 바꿀명) AS 출력되는명
	FROM EMPLOYEE;
    
    
    
-- ENG_NAME이 NULL인 사원들은 'SMITH' 이름으로 변경 후 조회
-- 출력되는 컬럼명은 ENG_NAME으로 변경
SELECT 
		EMP_ID,
        EMP_NAME,
        IFNULL(ENG_NAME, 'SMITHE') AS 'ENG_NAME',
        HIRE_DATE
	FROM EMPLOYEE;
    
    
    
-- 사원의 아이디, 사원명, 입사일, 퇴사일을 조회
SELECT 
		EMP_ID, 
		EMP_NAME, 
		HIRE_DATE,
		IFNULL(RETIRE_DATE, CURDATE()) AS RETIRE_DATE
		FROM EMPLOYEE;
        
-- 현재 근무중인 사원인 퇴사일에 현재의 날짜를 출력해주세요.

/*
	DISTINCT : 데이터 중복 배제, 중복된 데이터 하나만 출력
    형식 - SELECT [DISTINCT 컬럼리스트 (중복데이터포함)]
    FROM[테이블명]
    WHERE[조건절]
*/

-- 사원테이블의 부서 컬럼을 조회
SELECT DISTINCT DEPT_ID
	FROM EMPLOYEE;

SELECT DISTINCT EMP_ID, DEPT_ID
	FROM EMPLOYEE;  
    
/*
	ORDER BY : 데이터 정렬(오름차순, 내림차순)
    형식: SELECT ~
		FROM ~
		WHERE ~
		ORDER BY [ASC/DESC] 컬럼리스트
		ORDER BY [ASC/DESC] 컬럼리스트
**/

-- 사원아이디, 사원명, 입사일, 연봉을 조회
-- 사원아이디 기준 오름차순으로 정렬
SELECT EMP_ID, EMP_NAME, HIRE_DATE, SALARY
	FROM EMPLOYEE
    ORDER BY EMP_ID DESC;
    
-- 사원아이디 기준 오름차순, 입사일 기준 내림차순
SELECT EMP_ID, EMP_NAME, HIRE_DATE, SALARY
	FROM EMPLOYEE
    ORDER BY EMP_ID ASC, HIRE_DATE DESC;
    
-- 급여를 기준으로 오름차순 정렬 후 조회
SELECT *
	FROM EMPLOYEE
    ORDER BY SALARY ASC;
    
-- SELECT DATABASE(); 데이터가있는지확인

-- ENG_NANE이 정해지지 않은 사원들을 최근 입사한 순서대로 조회
SELECT *
	FROM EMPLOYEE
    WHERE ENG_NAME IS NULL
    ORDER BY HIRE_DATE DESC;
    
-- 퇴직한 사원들을 급여가 높은 순으로 조회
SELECT *
	FROM EMPLOYEE
    WHERE RETIRE_DATE IS NOT NULL
    ORDER BY SALARY DESC;
    
-- 정보시스템 부서의 사원들 중 급여가 높은 순으로 조회
SELECT *
	FROM EMPLOYEE
	WHERE DEPT_ID = 'SYS'
	ORDER BY SALARY DESC;
    
    
-- 정보시스템 부서의 사원들 중 최근 입사일 기준, 급여가 낮은 순으로 조회
SELECT *
	FROM EMPLOYEE
    WHERE DEPT_ID ='SYS'
    ORDER BY HIRE_DATE DESC, SALARY ASC;
    
/*
	특정 범위의 데이터를 검색 : WHERE  [조건절 + 비교연산자]
    형식 - SELECT [컬럼리스트]
			FROM [테이블명]
			WHERE 컬럼명 [비교연산자 조건절]
*/

-- 사원중에서 연봉이 5000 이상인 사원들을 조회
SELECT *
	FROM EMPLOYEE
    WHERE SALARY >= 5000
    ORDER BY SALARY DESC; 
    
    
-- 입사일이 '2016년 1월 1일' 이전에 입사한 사원들 조회
-- DATE 타입은 표현은 문자처럼, 처리방식은 숫자처럼

SELECT *
	FROM EMPLOYEE
    WHERE HIRE_DATE <= '2016-01-01';  -- 2016-01-01까지보여줌


-- 입사일이 '2015년 1월1일 이후이고, 급여가 6000이상인 사원들을 조회
-- AND(~이고) : 두 개의 조건이 모두 만족한 데이터만 조회
SELECT *
	FROM EMPLOYEE
    WHERE HIRE_DATE >= '2015-01-01' -- 둘중에 하나라도 조건이맞지 않으면출력이안됨
		AND SALARY >= 6000;


-- 입사일이 2015년 1월1일 이후이고, 급여가 6000이상인 사원들을 조회
-- OR(~또는) : 두 개의 조건 중 하나만 만족해도 데이터 조회 
SELECT *
	FROM EMPLOYEE
    WHERE HIRE_DATE >= '2015-01-01' -- 조건이 하나라도 맞으면 실행
		OR SALARY >= 6000;


-- 입사일이 2015년 1월1일 부터 2017년 12월31일 사이에 입사한 사원들을 모두 조회
SELECT *
	FROM EMPLOYEE
    WHERE HIRE_DATE >= '2015-01-01' 
		AND HIRE_DATE <= '2017-12-31';
    
    
-- 연봉 구간이 5000 이상 7000 미만의 사원들을 모두 조회
SELECT *
	FROM EMPLOYEE
    WHERE SALARY >= 5000 AND SALARY < 7000;
    



/*
	BETWEEN ~ AND : 특정 구간 조회시 사용
    형식 - SELECT []
			FROM []
            WHERE 컬럼명 BETWEEN [시작구간]  AND [종료구간];
**/
-- 2016년 입사자들을 조회
-- (2016-01-01 ~ 2016-12-31)
SELECT *
	FROM EMPLOYEE
	WHERE HIRE_DATE BETWEEN '2016-01-01' AND '2016-12-31';  -- BETWEEN 비교연산으로 바꿔줌

    
-- 사원아이디가 S0001, S0010, S0020 인 사원의 모든 정보를 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMP_ID = 'S0001' 
			OR EMP_ID = 'S0010'
            OR EMP_ID = 'S0020';


-- 아이디가 MKT, GEN, HRD 인 부서에 속한 모든 사원을 조회
SELECT *
	FROM EMPLOYEE
	WHERE DEPT_ID = 'MKT'
		OR DEPT_ID = 'GEN'
        OR DEPT_ID = 'HRD';
    

/** !!! 중요
	IN 연산자 : 한 컬럼에 추가되는 OR 연산식을 대체하는 IN 연산자
    형식 - SELECT [컬럼리스트]
			FROM [테이블명]
            WHERE 컬럼명 IN (조건1, 조건2, 조건3...)
*/
-- 사원아이디가 S0001, S0010, S0020 인 사원의 모든 정보를 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMP_ID IN ('S0001', 'S0010', 'S0020');
    
    
-- 부서 아이디가 MKT, GEN, HRD 인 부서에 속한 모든 사원을 조회
SELECT *
	FROM EMPLOYEE
    WHERE DEPT_ID IN ('MKT', 'GEN', 'HRD');
    
/**
	와일드 카드 문자 : 특정 문자열 검색 + LIKE
    종류 : %(전체), _(한문자)
    사용법 : LIKE 연산자와 함께 조건식을 추가하여 사용됨
	형식 - SELECT [컬럼리스트]
			FROM [테이블명]
            WHERE 컬럼명 [와이들 카드 문자를 이용한 특정문자열 검색 조건]
*/

-- 영어 이름이 'f'로 시작하는 모든 사원들을 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMP_NAME LIKE 'f%';


-- '한'씨 성을 가진 모든 사원들을 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMP_NANE LIKE '한%';
   
   
-- 이메일 주소 2번째 자리에 'a'가 들어가는 모든 사원을 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMAIL LIKE '_a%';  -- _a앞에 한글자는 아무거나 들어와도됨


-- 이메일 주소가 4자리인 모든 사원을 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMAIL LIKE '____@%';


-- 이름에 '삼'자가 들어가는 모든 사원을 조회 
SELECT * 
	FROM EMPLOYEE
    WHERE EMP_NAME LIKE '%삼%';   -- 검색어 관련리스트 출력
    




    



    
    