show databases;
use admin_db;
use customer_db;
use products_db;
show tables;
select * from customers;
CREATE DATABASE admin_db;
USE admin_db;
show tables;
CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('super_admin', 'product_manager') NOT NULL
);

CREATE TABLE admin_permissions (
    admin_id INT,
    permission ENUM('manage_users', 'manage_products', 'view_orders', 'edit_discounts', 'access_reports') NOT NULL,
    FOREIGN KEY (admin_id) REFERENCES admins(id) ON DELETE CASCADE
);
INSERT INTO admins (username, email, password, role) VALUES
('superadmin', 'superadmin@example.com', 'hashed_password_1', 'super_admin'),
('manager', 'manager@example.com', 'hashed_password_2', 'product_manager');
-- 관리자 테이블  
INSERT INTO admin_permissions (admin_id, permission) VALUES
-- super_admin은 모든 권한을 가짐
(1, 'manage_users'),
(1, 'manage_products'),
(1, 'view_orders'),
(1, 'edit_discounts'),
(1, 'access_reports'),

-- product_manager는 상품 및 할인 관리 권한만 가짐
(2, 'manage_products'),
(2, 'edit_discounts');
--  특정 관리자가 로그인할 때 아이디와 비밀번호 확인을 위한 SQL 쿼리
SELECT * FROM admins WHERE username = 'superadmin' AND password = 'hashed_password_1';

SELECT a.username, p.permission
FROM admins a
JOIN admin_permissions p ON a.id = p.admin_id
WHERE a.username = 'superadmin';

select * from admin_permissions;

-- 고객 테이블

CREATE DATABASE customer_db;
USE customer_db;
CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    birth_date DATE,
    membership_level ENUM('Silver', 'Gold', 'Platinum') DEFAULT 'Silver',
    last_login DATETIME
);
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    product_id INT,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    quantity INT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);
CREATE TABLE cart (
    customer_id INT,
    product_id INT,
    quantity INT DEFAULT 1,
    PRIMARY KEY (customer_id, product_id),
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);
CREATE TABLE favorites (
    customer_id INT,
    product_id INT,
    PRIMARY KEY (customer_id, product_id),
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);

select * from customers;

CREATE DATABASE products_db;
USE products_db;


CREATE TABLE products (
    id INT PRIMARY KEY,
    category VARCHAR(50),
    sub_category VARCHAR(50),
    name VARCHAR(255),
    color JSON,
    size JSON,
    image VARCHAR(255),
    likes INT,
    cart_count INT,
    star DECIMAL(2,1),
    original_price INT,
    discount_rate INT,
    discounted_price INT,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
select * from products where category = 'Bottoms';
drop table products;
