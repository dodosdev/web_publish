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




-- 제품 상세 정보 조회
select pid,
	   pname,
       price,
       description,
       upload_file,
       source_file,
       pdata,
       concat('http://localhost:9000/', uploade_file->>'$[0]')as image
from shoppy_product
where pid = 1;

      select pid,
                pname as name,
                price,
                description as info,
                concat('http://localhost:9000/', upload_file->> '$[0]') as image,
                source_file,
                pdata
        from shoppy_product;



      select pid,
                pname,
                price,
                description,
                UPLOAD_FILE,
                source_file,
                pdata,
                concat('http://localhost:9000/', upload_file->>'$[0]') as image,
                json_array (
					concat('http://localhost:9000/', upload_file->>'$[0]'),
                    concat('http://localhost:9000/', upload_file->>'$[1]'),
                    concat('http://localhost:9000/', upload_file->>'$[2]')
                ) as imgList,
                json_arrayagg(
					concat('http://localhost:9000', jt.filename)
                ) as detailImagList 					 -- json_array(0, 1, 2 번지의 이미지를 가져와서 베열객체로 생성하는 함수) as imgList
        from shoppy_product, 
			  json_table (shoppy_product.upload_file, '$[*]'
						columns (filename  varchar(100) path '$' ) ) as jt
        where pid = 1;
		select upload_file from shoppy_product;
	
        desc shoppy_product;
        
-- 			["upload_files\\1739239666777-707520522-1.jpg",
-- 		   "upload_files\\1739239666784-381137757-1.webp", 
-- 		   "upload_files\\1739239666784-755817781-2.jpg", 
-- 		   "upload_files\\1739239666789-745872869-2.webp", 
-- 		   "upload_files\\1739239666789-382947697-3.jpg"]



use hrdb2019;
select database();
select * from shoppy_product;

-- pid, pname, price, description, upload_file 0번지 이미지

/**
 * 장바구니 상품 정보 조회
 */
select pid,
		pname,
        price,
        description,
        concat('http://localhost:9000/', upload_file->> '$[0]') as image
from shoppy_product
where pid in (?, ?, ?);


         select pid,
                    pname,
                    price,
                    description,
                    concat('http://localhost:9000/', upload_file->> '$[0]') as image
            from shoppy_product
            where pid in (1);
            
            

-- 
show tables;
select * from shoppy_member;
select * from shoppy_product;
-- 어떤 회원(pk:id)이 어떤 상품(pk:pid)을 장바구니에 넣었는지 명확, 간단하게!!


-- shoppy_cart
-- 컬럼리스트 : cid(pk), id(shoppy_member: fk), pid(shoppy_product: fk), size, qty, cdate(장바구니 등록날짜)
desc shoppy_member;
desc shoppy_product;

CREATE TABLE SHOPPY_CART(
	CID    INT          PRIMARY KEY   AUTO_INCREMENT,
    SIZE   VARCHAR(10)  NOT NULL,
    QTY    INT          NOT NULL,
    CDATE  DATETIME,
    ID     VARCHAR(30)  NOT NULL,
    PID    INT          NOT NULL,
    CONSTRAINT  FK_ID_SHOPPY_MEMBER_ID   FOREIGN KEY(ID)
						REFERENCES SHOPPY_MEMBER(ID),
	CONSTRAINT FK_PID_SHOPPY_PRODUCT_PID  FOREIGN KEY(PID)
						REFERENCES SHOPPY_PRODUCT(PID)
				
);
SHOW TABLES;
DESC SHOPPY_CART;
SELECT * FROM SHOPPY_CART;

