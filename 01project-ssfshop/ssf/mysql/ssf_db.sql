show databases;
create database shopping_mall;
USE shopping_mall;


-- 관리자 테이블
CREATE TABLE admins ( -- 관리자 정보를 저장하는 테이블 생성
    id INT AUTO_INCREMENT PRIMARY KEY, -- 고유한 관리자 ID (자동 증가, 기본 키)
    username VARCHAR(50) UNIQUE NOT NULL, -- 관리자 계정의 사용자명 (고유, 필수 입력)
    email VARCHAR(100) UNIQUE NOT NULL, -- 관리자 이메일 (고유, 필수 입력)
    password VARCHAR(255) NOT NULL, -- 관리자 비밀번호 (암호화된 형태로 저장)
    role ENUM('super_admin', 'product_manager') NOT NULL, -- 관리자 역할 (super_admin: 전체 관리, product_manager: 상품 관리)
    is_active BOOLEAN DEFAULT TRUE, -- 관리자 계정 활성화 여부 (기본값: 활성 상태)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- 계정 생성 시간 (자동 기록)
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 계정 정보 수정 시간 (수정될 때마다 자동 갱신)
);

-- 관리자 데이터 삽입 
INSERT INTO admins (username, email, password, role, is_active) VALUES
('superadmin', 'superadmin@google.com', 'superadmin123', 'super_admin', TRUE),
('manager1', 'manager1@naver.com', 'manager1123', 'product_manager', TRUE),
('manager2', 'manager2@daum.com', 'manager2123', 'product_manager', TRUE);
select * from admins;
-- DELETE FROM admins WHERE username IN ('superadmin', 'manager1', 'manager2');

-- 관리자 권한 테이블
CREATE TABLE admin_permissions ( -- 관리자별 권한을 저장하는 테이블 생성
    id INT AUTO_INCREMENT PRIMARY KEY, -- 고유한 권한 ID (자동 증가, 기본 키)
    admin_id INT NOT NULL, -- 권한을 가진 관리자 ID (외래 키)
    permission ENUM('manage_customers', 'manage_orders', 'manage_products') NOT NULL, -- 권한 유형 (고객 관리, 주문 관리, 상품 관리)
    FOREIGN KEY (admin_id) REFERENCES admins(id) ON DELETE CASCADE -- 해당 관리자가 삭제되면 관련 권한도 자동 삭제
);

-- super_admin은 모든 권한 보유
INSERT INTO admin_permissions (admin_id, permission) VALUES
(1, 'manage_customers'),
(1, 'manage_orders'),
(1, 'manage_products');

-- product_manager는 상품 관리만 가능
INSERT INTO admin_permissions (admin_id, permission) VALUES
(2, 'manage_products'),
(3, 'manage_products');
select * from admin_permissions;
-- 고객 테이블 (super_admin만 접근 가능)
CREATE TABLE customers ( -- 회원(고객) 정보를 저장하는 테이블 생성
    id INT PRIMARY KEY, -- 고유한 고객 ID (기본 키, JSON에서 직접 부여)
    username VARCHAR(50) UNIQUE NOT NULL, -- 고객의 사용자명 (고유, 필수 입력)
    email VARCHAR(100) UNIQUE NOT NULL, -- 고객의 이메일 (고유, 필수 입력)
    phone VARCHAR(20) NOT NULL, -- 고객의 전화번호 (필수 입력)
    name VARCHAR(100) NOT NULL, -- 고객의 실제 이름 (필수 입력)
    password VARCHAR(255) NOT NULL, -- 고객의 비밀번호 (암호화된 형태로 저장)
    address VARCHAR(255) NOT NULL DEFAULT '', -- 기본 주소 (필수 입력, 기본값은 빈 문자열)
    additional_address VARCHAR(255) DEFAULT NULL, -- 추가 주소 (선택 입력, 기본값 NULL)
    birth_date DATE, -- 고객의 생년월일 (선택 입력)
    status JSON default null, -- 고객 상태 정보 (예: ["Active", "Suspended"], JSON 형식)
    gender JSON default null, -- 고객 성별 정보 (예: ["Male"], ["Female"], JSON 형식)
    membership_level ENUM('Bronze', 'Silver', 'Gold', 'Platinum') DEFAULT 'Silver', -- 회원 등급 (기본값: Silver)
    loyalty_points INT DEFAULT 0, -- 고객의 적립 포인트 (기본값: 0)
    last_login DATETIME, -- 마지막 로그인 시간 (선택 입력)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- 계정 생성 시간 (자동 기록)
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 계정 정보 수정 시간 (수정될 때마다 자동 갱신)
);

select * from customers;
-- 상품 테이블 (모든 관리자 접근 가능)
CREATE TABLE products ( -- 상품 정보를 저장하는 테이블 생성
    id INT PRIMARY KEY, -- 고유한 상품 ID (기본 키, JSON에서 직접 부여)
    category VARCHAR(50), -- 상품의 주요 카테고리 (예: 아우터, 상의, 하의, 신발 등)
    sub_category VARCHAR(50), -- 상품의 하위 카테고리 (예: 코트, 블라우스, 슬랙스, 샌들 등)
    name VARCHAR(255), -- 상품 이름 (최대 255자)
    color JSON DEFAULT NULL, -- 상품의 색상 정보 (JSON 배열 형식, 예: ["Red", "Black", "White"])
    size JSON DEFAULT NULL, -- 상품의 사이즈 정보 (JSON 배열 형식, 예: ["S", "M", "L", "XL"])
    image JSON DEFAULT NULL, -- 상품 이미지 URL 리스트 (JSON 배열 형식, 최대 5개 저장 가능)
    likes INT DEFAULT 0, -- 상품이 받은 좋아요 수 (기본값: 0)
    cart_count INT DEFAULT 0, -- 상품이 장바구니에 담긴 횟수 (기본값: 0)
    star DECIMAL(2,1) CHECK (star >= 0 AND star <= 5), -- 상품 평점 (0~5점 사이, 소수점 한 자리)
    stock INT NOT NULL DEFAULT 0, -- 상품 재고 수량 (기본값: 0, 0이면 품절)
    original_price INT NOT NULL, -- 상품 원래 가격 (필수 입력)
    discount_rate INT DEFAULT 0, -- 할인율 (기본값: 0, 최대 100%까지 가능)
    discounted_price INT NOT NULL, -- 할인 적용된 최종 가격 (필수 입력)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- 상품 등록 시간 (자동 기록)
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 상품 정보 수정 시간 (수정될 때마다 자동 갱신)
);

select * from products;
-- DELETE FROM products WHERE id BETWEEN 1001 AND 1050;


-- 관리자별 상품 접근 권한 테이블
CREATE TABLE admin_product_access ( -- 관리자가 특정 상품을 관리할 수 있도록 설정하는 테이블 생성
    id INT AUTO_INCREMENT PRIMARY KEY, -- 고유한 접근 ID (자동 증가, 기본 키)
    admin_id INT NOT NULL, -- 상품을 관리하는 관리자 ID (외래 키)
    product_id INT NOT NULL, -- 관리 대상 상품 ID (외래 키)
    FOREIGN KEY (admin_id) REFERENCES admins(id) ON DELETE CASCADE, -- 관리자가 삭제되면 해당 관리 기록도 삭제
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE -- 상품이 삭제되면 해당 관리 기록도 삭제
);
select * from admin_product_access;
-- 장바구니 테이블
CREATE TABLE cart ( -- 고객의 장바구니 정보를 저장하는 테이블 생성
    id INT PRIMARY KEY, -- 고유한 장바구니 ID (기본 키, JSON에서 직접 부여)
    customer_id INT NOT NULL, -- 장바구니를 사용하는 고객 ID (외래 키)
    product_id INT NOT NULL, -- 장바구니에 담긴 상품 ID (외래 키)
    quantity INT NOT NULL DEFAULT 1, -- 장바구니에 담은 상품 수량 (기본값: 1)
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- 상품이 장바구니에 추가된 시간 (자동 기록)
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE, -- 고객이 삭제되면 해당 장바구니 항목도 삭제
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE -- 상품이 삭제되면 장바구니에서 해당 상품도 삭제
);


-- 좋아요 테이블
CREATE TABLE favorites ( -- 고객이 좋아요(찜)한 상품 정보를 저장하는 테이블 생성
    id INT PRIMARY KEY, -- 고유한 좋아요 ID (기본 키, JSON에서 직접 부여)
    customer_id INT NOT NULL, -- 좋아요를 누른 고객 ID (외래 키)
    product_id INT NOT NULL, -- 좋아요한 상품 ID (외래 키)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- 좋아요를 누른 시간 (자동 기록)
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE, -- 고객이 삭제되면 해당 좋아요 기록도 삭제
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE -- 상품이 삭제되면 좋아요 기록도 삭제
);


-- 주문 테이블 (super_admin만 접근 가능)
CREATE TABLE orders ( -- 고객의 주문 정보를 저장하는 테이블 생성
    id INT PRIMARY KEY, -- 고유한 주문 ID (기본 키, JSON에서 직접 부여)
    customer_id INT NOT NULL, -- 주문한 고객 ID (외래 키)
    order_number VARCHAR(20) UNIQUE NOT NULL, -- 주문 번호 (날짜+고객ID 형식 등으로 고유값 지정)
    total_price INT NOT NULL, -- 주문 총 금액 (필수 입력)
    shipping_address VARCHAR(255) NOT NULL DEFAULT '', -- 배송지 주소 (기본값: 빈 문자열)
    status ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled', 'Returned') DEFAULT 'Pending', -- 주문 상태 (기본값: 'Pending')
    refund_amount INT DEFAULT 0, -- 환불 금액 (기본값: 0, 환불이 없을 경우)
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- 주문 날짜 및 시간 (자동 기록)
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE -- 고객이 삭제되면 해당 고객의 주문도 삭제
);

-- INSERT INTO orders (id, customer_id, order_number, total_price, shipping_address, status, refund_amount, order_date)
-- VALUES
-- (2001, 3, 'ORD-20250122-2001', 296818, 'Seoul, Korea', 'Returned', 94617, '2025-01-22 12:18:10'),
-- (2002, 5, 'ORD-20250130-2002', 174589, 'Busan, Korea', 'Shipped', 0, '2025-01-30 14:45:32'),
-- (2003, 2, 'ORD-20250205-2003', 119320, 'Incheon, Korea', 'Pending', 0, '2025-02-05 09:10:23');
select * from orders;
-- DELETE FROM orders WHERE id IN (2001, 2002, 2003);

-- 주문 상세 테이블
CREATE TABLE order_items ( -- 주문에 포함된 개별 상품 정보를 저장하는 테이블 생성
    id INT PRIMARY KEY, -- 고유한 주문 상세 ID (기본 키, JSON에서 직접 부여)
    order_id INT NOT NULL, -- 주문 ID (해당 상품이 포함된 주문, 외래 키)
    product_id INT NOT NULL, -- 주문한 상품 ID (외래 키)
    quantity INT NOT NULL, -- 주문한 상품 수량 (필수 입력)
    price INT NOT NULL, -- 주문 당시 상품 가격 (필수 입력, 할인 적용 후 가격 저장)
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE, -- 주문이 삭제되면 해당 주문 내역도 삭제
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE -- 상품이 삭제되면 해당 주문 내역도 삭제
);

-- 리뷰 테이블
CREATE TABLE reviews ( -- 상품 리뷰를 저장하는 테이블 생성
    id INT AUTO_INCREMENT PRIMARY KEY, -- 고유한 리뷰 ID (자동 증가)
    customer_id INT NOT NULL, -- 리뷰를 작성한 고객 ID (외래 키)
    product_id INT NOT NULL, -- 리뷰 대상 상품 ID (외래 키)
    order_id INT NOT NULL, -- 리뷰가 속한 주문 ID (외래 키)
    rating DECIMAL(2,1) CHECK (rating >= 0 AND rating <= 5), -- 별점 (0~5점, 소수점 1자리)
    review_text TEXT DEFAULT NULL, -- 리뷰 내용 (선택 입력 가능)
    status ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending', -- 리뷰 상태 (기본값: 보류)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- 리뷰 작성 시간 (자동 기록)
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- 리뷰 수정 시간 (수정될 때마다 자동 갱신)
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE, -- 고객이 삭제되면 해당 고객의 리뷰도 삭제
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE, -- 상품이 삭제되면 해당 상품의 리뷰도 삭제
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE -- 주문이 삭제되면 해당 리뷰도 삭제
);


-- 관리자 승인 요청 테이블 (super_admin만 접근 가능)
CREATE TABLE admin_approval ( -- 관리자가 승인해야 하는 요청 정보를 저장하는 테이블 생성
    id INT PRIMARY KEY, -- 고유한 승인 요청 ID (기본 키, JSON에서 직접 부여)
    request_type ENUM('Cancel', 'Return', 'Exchange', 'Refund') NOT NULL, -- 요청 유형 (주문 취소, 반품, 교환, 환불)
    order_id INT NOT NULL, -- 관련된 주문 ID (외래 키)
    customer_id INT NOT NULL, -- 요청을 한 고객 ID (외래 키)
    status ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending', -- 승인 상태 (기본값: 보류 'Pending')
    reason VARCHAR(255) DEFAULT NULL, -- 요청 사유 (선택 입력, 기본값 NULL)
    admin_id INT NOT NULL, -- 해당 요청을 처리하는 관리자 ID (외래 키)
    decision_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- 요청이 처리된 날짜 및 시간 (자동 기록)
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE, -- 주문이 삭제되면 해당 요청도 삭제
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE, -- 고객이 삭제되면 해당 요청도 삭제
    FOREIGN KEY (admin_id) REFERENCES admins(id) ON DELETE CASCADE -- 관리자가 삭제되면 해당 승인 요청도 삭제
);


-- 비회원 
CREATE TABLE guests ( -- 비회원(게스트) 정보를 저장하는 테이블 생성
    id INT PRIMARY KEY, -- 고유한 비회원 ID (기본 키, JSON에서 직접 부여)
    name VARCHAR(100) NOT NULL, -- 비회원 이름 (필수 입력)
    phone VARCHAR(20) NOT NULL, -- 비회원 전화번호 (필수 입력)
    order_number VARCHAR(20) UNIQUE NOT NULL, -- 비회원 주문 번호 (고유값, 주문 조회용)
    email VARCHAR(100) DEFAULT NULL, -- 비회원 이메일 (선택 입력)
    address VARCHAR(255) DEFAULT NULL, -- 비회원 배송 주소 (선택 입력)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- 비회원 정보 생성 시간 (자동 기록)
);

ALTER TABLE orders -- 주문 테이블에 비회원 주문을 위한 컬럼 추가
ADD COLUMN guest_id INT DEFAULT NULL, -- 비회원 주문 시 해당 guest_id 저장
ADD FOREIGN KEY (guest_id) REFERENCES guests(id) ON DELETE CASCADE; -- 비회원 정보가 삭제되면 관련 주문도 삭제

ALTER TABLE cart -- 장바구니 테이블에 비회원 장바구니 사용을 위한 컬럼 추가
ADD COLUMN guest_id INT DEFAULT NULL, -- 비회원이 장바구니를 사용할 경우 guest_id 저장
ADD FOREIGN KEY (guest_id) REFERENCES guests(id) ON DELETE CASCADE; -- 비회원 정보가 삭제되면 장바구니도 삭제

ALTER TABLE favorites -- 좋아요 테이블에 비회원 좋아요 사용을 위한 컬럼 추가
ADD COLUMN guest_id INT DEFAULT NULL, -- 비회원이 좋아요를 남길 경우 guest_id 저장
ADD FOREIGN KEY (guest_id) REFERENCES guests(id) ON DELETE CASCADE; -- 비회원 정보가 삭제되면 좋아요 기록도 삭제

CREATE TABLE admin_guest_management ( -- 관리자가 비회원 정보를 관리하는 테이블 생성
    id INT PRIMARY KEY, -- 고유한 관리 기록 ID (기본 키, JSON에서 직접 부여)
    admin_id INT NOT NULL, -- 비회원 정보를 관리한 관리자 ID (외래 키)
    guest_id INT NOT NULL, -- 관리 대상 비회원 ID (외래 키)
    action ENUM('View', 'Modify', 'Delete') NOT NULL, -- 관리자 수행 작업 유형 (조회, 수정, 삭제)
    action_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- 작업 수행 시간 (자동 기록)
    FOREIGN KEY (admin_id) REFERENCES admins(id) ON DELETE CASCADE, -- 관리자가 삭제되면 해당 기록도 삭제
    FOREIGN KEY (guest_id) REFERENCES guests(id) ON DELETE CASCADE -- 비회원 정보가 삭제되면 관련 관리 기록도 삭제
);


-- 관리자와 연결된 모든 테이블 조회( 이해하기 쉽게 컬럼이 바뀔 때 그 컬럼의 이름_id로 구분함 )
SELECT 
    admins.id AS admin_id, -- 관리자 ID
    admins.username, -- 관리자 사용자명
    admins.email, -- 관리자 이메일
    admins.role, -- 관리자 역할 (super_admin 또는 product_manager)
    admins.is_active, -- 관리자 계정 활성화 여부

    admin_permissions.id AS admin_permission_id, -- 관리자 권한 ID
    admin_permissions.permission, -- 관리자 권한 종류 (manage_customers, manage_orders, manage_products)

    admin_guest_management.id AS admin_guest_management_id, -- 비회원 관리 로그 ID
    admin_guest_management.guest_id, -- 관리된 비회원 ID
    admin_guest_management.action, -- 관리자가 수행한 작업 (View, Modify, Delete)

    admin_approval.id AS admin_approval_id, -- 관리자 승인 요청 ID
    admin_approval.request_type, -- 승인 요청 유형 (Cancel, Return, Exchange, Refund)
    admin_approval.order_id, -- 관련 주문 ID
    admin_approval.status -- 승인 상태 (Pending, Approved, Rejected)
FROM admins
LEFT JOIN admin_permissions ON admins.id = admin_permissions.admin_id -- 관리자 권한 연결
LEFT JOIN admin_guest_management ON admins.id = admin_guest_management.admin_id -- 비회원 관리 로그 연결
LEFT JOIN admin_approval ON admins.id = admin_approval.admin_id; -- 관리자 승인 요청 연결

-- 고객 테이블과 연결된 모든 테이블 조회
SELECT 
    customers.id AS customer_id, -- 고객 ID
    customers.username, -- 고객 사용자명
    customers.email, -- 고객 이메일
    customers.phone, -- 고객 전화번호

    orders.id AS order_id, -- 주문 ID
    orders.order_number, -- 주문 번호
    orders.total_price, -- 주문 총 금액
    orders.status, -- 주문 상태 (Pending, Shipped, Delivered, Cancelled, Returned)

    cart.id AS cart_id, -- 장바구니 ID
    cart.product_id AS cart_product_id, -- 장바구니에 담긴 상품 ID
    cart.quantity AS cart_quantity, -- 장바구니에 담긴 수량

    favorites.id AS favorite_id, -- 좋아요 ID
    favorites.product_id AS favorite_product_id -- 고객이 좋아요한 상품 ID
FROM customers
LEFT JOIN orders ON customers.id = orders.customer_id -- 고객이 한 주문과 연결
LEFT JOIN cart ON customers.id = cart.customer_id -- 고객의 장바구니와 연결
LEFT JOIN favorites ON customers.id = favorites.customer_id; -- 고객의 좋아요와 연결


-- 상품테이블과 연결된 모든 테이블 조회
SELECT 
    products.id AS product_id, -- 상품 ID
    products.name AS product_name, -- 상품 이름
    products.category AS product_category, -- 상품 카테고리
    products.sub_category AS product_sub_category, -- 상품 하위 카테고리
    products.original_price AS product_price, -- 상품 원래 가격

    order_items.id AS order_item_id, -- 주문 상세 ID
    order_items.order_id AS order_id, -- 주문 ID (해당 상품이 속한 주문)
    order_items.quantity AS order_item_quantity, -- 주문한 상품 수량

    cart.id AS cart_id, -- 장바구니 ID
    cart.customer_id AS cart_customer_id, -- 장바구니에 담은 고객 ID (회원)
    cart.guest_id AS cart_guest_id, -- 장바구니에 담은 비회원 ID
    cart.quantity AS cart_quantity, -- 장바구니에 담긴 상품 수량

    favorites.id AS favorite_id, -- 좋아요 ID
    favorites.customer_id AS favorite_customer_id, -- 좋아요한 고객 ID (회원)
    favorites.guest_id AS favorite_guest_id -- 좋아요한 비회원 ID
FROM products
LEFT JOIN order_items ON products.id = order_items.product_id -- 상품이 포함된 주문 내역과 연결
LEFT JOIN cart ON products.id = cart.product_id -- 상품이 장바구니에 담긴 내역과 연결
LEFT JOIN favorites ON products.id = favorites.product_id; -- 상품이 좋아요된 내역과 연결
 