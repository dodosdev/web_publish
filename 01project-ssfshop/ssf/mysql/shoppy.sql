/**
	SHOPPY 테이블 정의
*/
show databases;
-- shoppy_member 테이블 생성
use hrdb2019;
select database();
show tables;
-- shoppy로 시작하는 모든 테이블 조회
select * from information_schema.tables
	where table_name like 'shoppy%';
    
create table shoppy_member(
	id				varchar(30)		primary key,
    pwd 			varchar(50)		not null,
    name			varchar(10)		not null,
    phone 			char(13)		not null,
    emailname 		varchar(20)		not null,
    emaildomain 	varchar(20)		not null,
    zipcode 		char(5),	
    address 		varchar(80),
    mdate 			datetime		
);

desc shoppy_member;
select * from shoppy_member;
delete from shoppy_member where id = 'asdfd';

-- 'test' 중복체크 : 결과를 count 함수로 반환 - 0: 사용가능, 1: 사용불가능
select count(id) as result from shoppy_member where id = 'test9';

select * from shoppy_member;

-- login
select count(*) as result_rows from shoppy_member
	where id = 'test11' and pwd = '1111'; 
    
    
    
    
    
    
use hrdb2019;
select * from information_schema.tables
	where table_name like 'shoppy%';
    
-- shoppy_product
create table shoppy_product(
	pid 	int			primary key		auto_increment,
    pname 	varchar(50)		not null,
    price 	int,
    description		varchar(200),
    upload_file		json,
    source_file		json,
    pdate			datetime
);
desc shoppy_product;
set sql_safe_updates = 0;
delete from shoppy_product;
commit;
select * from shoppy_product;
drop table shoppy_product;
select 
            pid, pname as name,
            price, description as info,
            concat('http://localhost:9000/', upload_file->>'$[0]') as image, 
            source_file,
            pdate
        from shoppy_product;
