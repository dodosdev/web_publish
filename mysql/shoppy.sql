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

USE HRDB2019;
SELECT * FROM INFORMATION_SCHEMA.TABLES 
	WHERE TABLE_NAME LIKE 'SHOPPY%';
    
-- SHOPPY_PRODUCT
use hrdb2019;
drop table shoppy_product;
CREATE TABLE SHOPPY_PRODUCT(
	PID		INT 	PRIMARY KEY		AUTO_INCREMENT,
    PNAME 	VARCHAR(50)		NOT NULL,
    PRICE 	INT,
    DESCRIPTION		VARCHAR(200),
    UPLOAD_FILE		json,
    SOURCE_FILE		json,
    PDATE			DATETIME
);

DESC SHOPPY_PRODUCT;
SELECT * FROM SHOPPY_PRODUCT;

SET SQL_SAFE_UPDATES = 0;   -- 해제: 0, 설정: 1
delete from shoppy_product;
commit;
select * from shoppy_product;
select source_file from shoppy_product;

--
select  pid,
		pname as name,
		price,
		description as info,
		concat('http://localhost:9000/', upload_file->>'$[0]') as image,
		source_file,
		pdate
from shoppy_product;

-- http://localhost:9000/["upload_files\\1739163158340-849078071-1.webp", "upload_files\\1739163158340-911632745-2.webp", "upload_files\\1739163158340-462908659-3.webp", "upload_files\\1739163158341-81325715-4.webp", "upload_files\\1739163158342-709014159-5.webp", "upload_files\\1739163158342-110372512-6.webp", "upload_files\\1739163158342-207791282-7.webp"]
--
-- http://localhost:9000/upload_files\\1739163158340-849078071-1.webp

delete from shoppy_product where pid in (6, 7, 8);
select * from shoppy_product;
commit;

--
use hrdb2019;
select database();
select * from shoppy_product;
desc shoppy_product;

select  pid,
		pname,
        price,
        description,
        upload_file as uploadFile, 
        source_file as sourceFile,
        pdate,
        concat('http://localhost:9000/',upload_file->>'$[0]') as image,
        json_array(
			concat('http://localhost:9000/',upload_file->>'$[0]'),
            concat('http://localhost:9000/',upload_file->>'$[1]'),
            concat('http://localhost:9000/',upload_file->>'$[2]')
        ) as imgList,
        json_arrayagg(
			concat('http://localhost:9000/', jt.filename)
        ) as detailImgList
from shoppy_product,
	 json_table(shoppy_product.upload_file,'$[*]' 
				columns( filename  varchar(100) path '$' ) ) as jt
where pid = 4;  


--
select  pid,
                pname as name,
                price,
                description as info,
                upload_file as uploadFile, 
                source_file as sourceFile,
                pdate,
                concat('http://localhost:9000/',upload_file->>'$[0]') as image,
                json_array(
                    concat('http://localhost:9000/',upload_file->>'$[0]'),
                    concat('http://localhost:9000/',upload_file->>'$[1]'),
                    concat('http://localhost:9000/',upload_file->>'$[2]')
                ) as imgList,
                json_arrayagg(
                            concat('http://localhost:9000/', jt.filename)
                        ) as detailImgList
        from shoppy_product,
            json_table(shoppy_product.upload_file,'$[*]' 
                            columns( filename  varchar(100) path '$' ) ) as jt
        where pid = 3 
        group by pid;

-- 
use hrdb2019;
select database();
select * from shoppy_product;

-- pid, pname, price, description, upload_file 0번지 이미지
select  pid,
		pname,
        price,
        description,
        concat('http://localhost:9000/',upload_file->>'$[0]') as image
from shoppy_product
where pid in (4, 4);      


-- 
show tables; 
select * from shoppy_member;
select * from shoppy_product;
-- 어떤 회원(pk:id)이 어떤 상품(pk:pid)을 장바구니에 넣었는지 명확, 간단하게!!

-- shoppy_cart 
-- 컬럼리스트 : cid(pk), id(shoppy_member:fk), pid(shoppy_product:fk), size, qty, cdate(장바구니 등록날짜)
desc shoppy_member;
desc shoppy_product;

CREATE TABLE SHOPPY_CART(
	CID		INT			PRIMARY KEY		AUTO_INCREMENT,
    SIZE	VARCHAR(10)	NOT NULL,
    QTY		INT			NOT NULL,
    CDATE	DATETIME,
    ID		VARCHAR(30)	NOT NULL,
    PID		INT			NOT NULL,
    CONSTRAINT FK_ID_SHOPPY_MEMBER_ID	FOREIGN KEY(ID)
					REFERENCES SHOPPY_MEMBER(ID),
	CONSTRAINT FK_PID_SHOPPY_PRODUCT_PID FOREIGN KEY(PID)
					REFERENCES SHOPPY_PRODUCT(PID)
);
SHOW TABLES;
DESC SHOPPY_CART;
SELECT * FROM SHOPPY_CART;
truncate table shoppy_cart;
select * from shoppy_member;

SELECT * FROM SHOPPY_CART;

truncate table shoppy_cart;

--
select * from shoppy_cart; 

insert into shoppy_cart(size, qty, cdate, id, pid)
	values('XS', 2, now(), 'test2', 10);

select * from shoppy_product where pid=3; 

-- shoppy_cart, shoppy_member, shoppy_product 조인
select  sc.cid,
		sc.size,
        sc.qty,
        sm.zipcode,
        sm.address,
        sp.pid,
        sp.pname,
        sp.price,
        sp.description as info,
        concat('http://localhost:9000/', sp.upload_file->>'$[0]') as image
	from shoppy_cart sc,
		 shoppy_member sm,
         shoppy_product sp
	where sc.id = sm.id 
			and sc.pid = sp.pid
            and sm.id = 'test1'
    ;
   















