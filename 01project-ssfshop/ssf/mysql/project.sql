CREATE DATABASE products;
use products;
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
    discounted_price INT
);

show tables;
select * from products 
where category = 'Tops';