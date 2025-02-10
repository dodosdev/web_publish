/**
	SHOPPY 테이블 정의
*/
-- shoppy_member 테이블 생성
use hrdb2019;
select database();
show tables;

-- shoppy로 시작하는 모든 테이블 조회
select * from information_schema.tables
where table_name like 'shoppy%';

--
CREATE TABLE SHOPPY_MEMBER(
	  ID					VARCHAR(30)		PRIMARY KEY,
	  PWD			  		VARCHAR(50)		NOT NULL,
	  NAME					VARCHAR(10)		NOT NULL,
	  PHONE					CHAR(13)		NOT NULL, 
	  EMAILNAME				VARCHAR(20)		NOT NULL,
	  EMAILDOMAIN			VARCHAR(20)		NOT NULL,    
	  ZIPCODE				CHAR(5),
	  ADDRESS				VARCHAR(80),
	  MDATE					DATETIME
);
desc shoppy_member;
select * from shoppy_member;

-- 'test9' 중복체크 : 결과를 count 함수로 반환
select count(id) as result from shoppy_member where id = 'test9';
-- {result: 0}


use hrdb2019;
select database();

-- login
select count(*) as result_rows from shoppy_member
	where id = 'test1' and pwd = '1111';
    
select * from shoppy_member;

select count(*) as result_rows from shoppy_member
        where id = 'test1' and pwd = '1234';


USE HRDB2019;
SELECT * FROM INFORMATION_SCHMA.TABLES
	WHERE TABLE_NAME LIKE 'SHOPPY%';
    
    
-- SHOPPY_PRODUCT
use hrd2019;
drop table shoppy_product;

CREATE TABLE SHOPPY_PRODUCT(
	PID  	INT  PRIMARY KEY   AUTO_INCREMENT,
    PNAME  	VARCHAR(50)   NOT NULL,
    PRICE  	INT,
    DESCRIPTION   	VARCHAR(200),
    UPLOAD_FILE     json,
    SOURCE_FILE     json,
    PDATA           DATETIME
);

DESC SHOPPY_PRODUCT;
SELECT * FROM SHOPPY_PRODUCT;


-- ** 자동번호 생성기 : AUTO_INCREMENT ===> 기본키

select pid,
		pname as name,
		price,
		description as info,
		concat('http://localhost:9000/', upload_file->> '$[0]') as image, -- upload_file->> '$[0]'몇번째 이미지 불러오기
		source_file,
		pdata
from shoppy_product;


-- 상품목록 삭제
SET SQL_SAFE_UPDATES = 0;  -- 해제: 0, 설정: 1
delete from shoppy_product; -- 데이터 삭제
commit;
select * from shoppy_product;
select source_file from shoppy_product;




select pid,
	pname as name,
	price,
	description as info,
	concat('http://localhost:9000/', upload_file) as image,
	source_file,
	pdata
from shoppy_product

-- http://localhost:9000/["upload_files\\1739163877917-311254750-1.webp", "upload_files\\1739163877918-341370314-2.webp", "upload_files\\1739163877920-561426472-3.webp", "upload_files\\1739163877923-831694013-4.webp", "upload_files\\1739163877924-94484003-5.webp", "upload_files\\1739163877925-530696189-6.webp", "upload_files\\1739163877926-543617020-7.webp"]
--
-- http://localhost:9000/["upload_files\\1739163877917-311254750-1.webp"


