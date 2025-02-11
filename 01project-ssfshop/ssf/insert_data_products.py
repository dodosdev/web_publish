import json
import mysql.connector

# MySQL 연결 설정
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="mysql1234",
    database="shopping_mall"
)
cursor = db.cursor()

# JSON 데이터 (복사해서 붙여넣기)
json_data = """
[
    {
        "id": 1001,
        "category": "아우터",
        "sub_category": "코트",
        "name": "Trendy Long Wool Coat",
        "color": [
            "Navy",
            "White",
            "Red",
            "Brown",
            "Black"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://example.com/images/product_1_1.jpg",
            "https://example.com/images/product_1_2.jpg",
            "https://example.com/images/product_1_3.jpg",
            "https://example.com/images/product_1_4.jpg",
            "https://example.com/images/product_1_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 117204,
        "discount_rate": 13,
        "discounted_price": 101967,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1002,
        "category": "아우터",
        "sub_category": "코트",
        "name": "Prestige Long Wool Coat",
        "color": [
            "Navy",
            "Black",
            "White"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://example.com/images/product_2_1.jpg",
            "https://example.com/images/product_2_2.jpg",
            "https://example.com/images/product_2_3.jpg",
            "https://example.com/images/product_2_4.jpg",
            "https://example.com/images/product_2_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 145248,
        "discount_rate": 22,
        "discounted_price": 113293,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1003,
        "category": "아우터",
        "sub_category": "블레이저",
        "name": "Sophisticated Sleek Office Blazer",
        "color": [
            "Red",
            "White",
            "LightGray",
            "Brown"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://example.com/images/product_3_1.jpg",
            "https://example.com/images/product_3_2.jpg",
            "https://example.com/images/product_3_3.jpg",
            "https://example.com/images/product_3_4.jpg",
            "https://example.com/images/product_3_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 247190,
        "discount_rate": 14,
        "discounted_price": 212583,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1004,
        "category": "아우터",
        "sub_category": "재킷",
        "name": "Chic Urban Blazer",
        "color": [
            "Yellow",
            "Brown",
            "Red"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://example.com/images/product_4_1.jpg",
            "https://example.com/images/product_4_2.jpg",
            "https://example.com/images/product_4_3.jpg",
            "https://example.com/images/product_4_4.jpg",
            "https://example.com/images/product_4_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 170527,
        "discount_rate": 25,
        "discounted_price": 127895,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1005,
        "category": "아우터",
        "sub_category": "재킷",
        "name": "Urban Luxury Biker Jacket",
        "color": [
            "Red",
            "White",
            "Brown",
            "Yellow",
            "LightGray"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://example.com/images/product_5_1.jpg",
            "https://example.com/images/product_5_2.jpg",
            "https://example.com/images/product_5_3.jpg",
            "https://example.com/images/product_5_4.jpg",
            "https://example.com/images/product_5_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 210354,
        "discount_rate": 18,
        "discounted_price": 172490,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1006,
        "category": "아우터",
        "sub_category": "코트",
        "name": "Chic Cashmere Wool Coat",
        "color": [
            "Brown",
            "Navy",
            "Black",
            "LightGray",
            "Red"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://example.com/images/product_6_1.jpg",
            "https://example.com/images/product_6_2.jpg",
            "https://example.com/images/product_6_3.jpg",
            "https://example.com/images/product_6_4.jpg",
            "https://example.com/images/product_6_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 199155,
        "discount_rate": 20,
        "discounted_price": 159324,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1007,
        "category": "아우터",
        "sub_category": "코트",
        "name": "Modern Cashmere Wool Coat",
        "color": [
            "Black",
            "Navy",
            "White",
            "Brown",
            "Red"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://example.com/images/product_7_1.jpg",
            "https://example.com/images/product_7_2.jpg",
            "https://example.com/images/product_7_3.jpg",
            "https://example.com/images/product_7_4.jpg",
            "https://example.com/images/product_7_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 101616,
        "discount_rate": 16,
        "discounted_price": 85357,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1008,
        "category": "아우터",
        "sub_category": "패딩",
        "name": "Premium Winter Quilted Jacket",
        "color": [
            "LightGray",
            "Yellow",
            "Brown",
            "Black",
            "White"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://example.com/images/product_8_1.jpg",
            "https://example.com/images/product_8_2.jpg",
            "https://example.com/images/product_8_3.jpg",
            "https://example.com/images/product_8_4.jpg",
            "https://example.com/images/product_8_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 187448,
        "discount_rate": 10,
        "discounted_price": 168703,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1009,
        "category": "아우터",
        "sub_category": "코트",
        "name": "Metropolitan Classic Overcoat",
        "color": [
            "Red",
            "Brown",
            "Yellow",
            "LightGray",
            "White"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://example.com/images/product_9_1.jpg",
            "https://example.com/images/product_9_2.jpg",
            "https://example.com/images/product_9_3.jpg",
            "https://example.com/images/product_9_4.jpg",
            "https://example.com/images/product_9_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 226505,
        "discount_rate": 16,
        "discounted_price": 190264,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1010,
        "category": "아우터",
        "sub_category": "재킷",
        "name": "Sleek Tailored Blazer Jacket",
        "color": [
            "Red",
            "LightGray",
            "Brown",
            "Navy"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://example.com/images/product_10_1.jpg",
            "https://example.com/images/product_10_2.jpg",
            "https://example.com/images/product_10_3.jpg",
            "https://example.com/images/product_10_4.jpg",
            "https://example.com/images/product_10_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 139381,
        "discount_rate": 11,
        "discounted_price": 124049,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1011,
        "category": "상의",
        "sub_category": "스웨터",
        "name": "Elegant Chic Soft Sweater",
        "color": [
            "White",
            "Brown",
            "Navy",
            "Red",
            "LightGray"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://example.com/images/product_11_1.jpg",
            "https://example.com/images/product_11_2.jpg",
            "https://example.com/images/product_11_3.jpg",
            "https://example.com/images/product_11_4.jpg",
            "https://example.com/images/product_11_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 208754,
        "discount_rate": 17,
        "discounted_price": 173265,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1012,
        "category": "상의",
        "sub_category": "니트",
        "name": "Timeless Sophisticated Mock Neck Knit",
        "color": [
            "Red",
            "Black",
            "White"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://example.com/images/product_12_1.jpg",
            "https://example.com/images/product_12_2.jpg",
            "https://example.com/images/product_12_3.jpg",
            "https://example.com/images/product_12_4.jpg",
            "https://example.com/images/product_12_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 179404,
        "discount_rate": 25,
        "discounted_price": 134553,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1013,
        "category": "상의",
        "sub_category": "스웨터",
        "name": "Avant-Garde Chic Soft Sweater",
        "color": [
            "Brown",
            "Red",
            "LightGray",
            "Yellow"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://example.com/images/product_13_1.jpg",
            "https://example.com/images/product_13_2.jpg",
            "https://example.com/images/product_13_3.jpg",
            "https://example.com/images/product_13_4.jpg",
            "https://example.com/images/product_13_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 288067,
        "discount_rate": 24,
        "discounted_price": 218930,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1014,
        "category": "상의",
        "sub_category": "티셔츠",
        "name": "Luxury Refined Urban Tee",
        "color": [
            "White",
            "Black",
            "Yellow",
            "LightGray",
            "Red"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://example.com/images/product_14_1.jpg",
            "https://example.com/images/product_14_2.jpg",
            "https://example.com/images/product_14_3.jpg",
            "https://example.com/images/product_14_4.jpg",
            "https://example.com/images/product_14_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 259821,
        "discount_rate": 16,
        "discounted_price": 218249,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1015,
        "category": "상의",
        "sub_category": "티셔츠",
        "name": "Sophisticated Premium Graphic Tee",
        "color": [
            "LightGray",
            "Navy",
            "Yellow"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://example.com/images/product_15_1.jpg",
            "https://example.com/images/product_15_2.jpg",
            "https://example.com/images/product_15_3.jpg",
            "https://example.com/images/product_15_4.jpg",
            "https://example.com/images/product_15_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 286007,
        "discount_rate": 13,
        "discounted_price": 248826,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1016,
        "category": "상의",
        "sub_category": "블라우스",
        "name": "Prestige Minimalist Satin Blouse",
        "color": [
            "Yellow",
            "Black",
            "White",
            "Brown"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://example.com/images/product_16_1.jpg",
            "https://example.com/images/product_16_2.jpg",
            "https://example.com/images/product_16_3.jpg",
            "https://example.com/images/product_16_4.jpg",
            "https://example.com/images/product_16_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 240095,
        "discount_rate": 23,
        "discounted_price": 184873,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1017,
        "category": "상의",
        "sub_category": "블라우스",
        "name": "Metropolitan Sophisticated Silk Blouse",
        "color": [
            "White",
            "Red",
            "LightGray",
            "Brown"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://example.com/images/product_17_1.jpg",
            "https://example.com/images/product_17_2.jpg",
            "https://example.com/images/product_17_3.jpg",
            "https://example.com/images/product_17_4.jpg",
            "https://example.com/images/product_17_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 292728,
        "discount_rate": 21,
        "discounted_price": 231255,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1018,
        "category": "상의",
        "sub_category": "셔츠",
        "name": "Chic Classic Dress Shirt",
        "color": [
            "Red",
            "Yellow",
            "LightGray",
            "Brown"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://example.com/images/product_18_1.jpg",
            "https://example.com/images/product_18_2.jpg",
            "https://example.com/images/product_18_3.jpg",
            "https://example.com/images/product_18_4.jpg",
            "https://example.com/images/product_18_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 287024,
        "discount_rate": 17,
        "discounted_price": 238229,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1019,
        "category": "상의",
        "sub_category": "블라우스",
        "name": "Trendy Modern Flared Blouse",
        "color": [
            "Navy",
            "Brown",
            "White"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://example.com/images/product_19_1.jpg",
            "https://example.com/images/product_19_2.jpg",
            "https://example.com/images/product_19_3.jpg",
            "https://example.com/images/product_19_4.jpg",
            "https://example.com/images/product_19_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 141512,
        "discount_rate": 21,
        "discounted_price": 111794,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1020,
        "category": "상의",
        "sub_category": "니트",
        "name": "Sleek Luxury Wool Knit Sweater",
        "color": [
            "Black",
            "Navy",
            "Yellow",
            "Red"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://example.com/images/product_20_1.jpg",
            "https://example.com/images/product_20_2.jpg",
            "https://example.com/images/product_20_3.jpg",
            "https://example.com/images/product_20_4.jpg",
            "https://example.com/images/product_20_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 146466,
        "discount_rate": 11,
        "discounted_price": 130354,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1021,
        "category": "상의",
        "sub_category": "니트",
        "name": "Elite Luxury Wool Knit Sweater",
        "color": [
            "Brown",
            "Navy",
            "LightGray",
            "Black"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/CGCG/25/01/16/GM0025011602857_0_THNAIL_ORGINL_20250120143623169.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/CGCG/25/01/16/GM0025011602857_1_THNAIL_ORGINL_20250120143623169.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/CGCG/25/01/16/GM0025011602857_2_THNAIL_ORGINL_20250120143623169.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/CGCG/25/01/16/GM0025011602857_3_THNAIL_ORGINL_20250120143623169.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 132137,
        "discount_rate": 16,
        "discounted_price": 110995,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1022,
        "category": "상의",
        "sub_category": "셔츠",
        "name": "Avant-Garde Elegant Silk Shirt",
        "color": [
            "Red",
            "Black",
            "Brown"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/25/01/14/GM0025011482635_0_THNAIL_ORGINL_20250116143629530.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/25/01/14/GM0025011482635_1_THNAIL_ORGINL_20250116143629530.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/25/01/14/GM0025011482635_2_THNAIL_ORGINL_20250116143629530.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/25/01/14/GM0025011482635_3_THNAIL_ORGINL_20250116143629530.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/25/01/14/GM0025011482635_4_THNAIL_ORGINL_20250116143629530.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 238483,
        "discount_rate": 20,
        "discounted_price": 190786,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1023,
        "category": "상의",
        "sub_category": "티셔츠",
        "name": "Prestige Slim-Fit Trendy Tee",
        "color": [
            "Brown",
            "Black",
            "Navy",
            "Yellow",
            "White"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/24/10/28/GM0024102881872_0_THNAIL_ORGINL_20241118165113022.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/24/10/28/GM0024102881872_1_THNAIL_ORGINL_20241118165113022.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/24/10/28/GM0024102881872_2_THNAIL_ORGINL_20241118165113022.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/24/10/28/GM0024102881872_0_THNAIL_ORGINL_20241030150903196.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/24/10/28/GM0024102881872_1_THNAIL_ORGINL_20241030150903196.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 150877,
        "discount_rate": 16,
        "discounted_price": 126736,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1024,
        "category": "상의",
        "sub_category": "티셔츠",
        "name": "Luxury Luxury Cotton Basic Tee",
        "color": [
            "Navy",
            "Black",
            "Red",
            "Brown",
            "LightGray"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/MCBR/24/12/23/GM0024122398658_0_THNAIL_ORGINL_20250110144017063.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/MCBR/24/12/23/GM0024122398658_2_THNAIL_ORGINL_20250110144017063.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/MCBR/24/12/23/GM0024122398658_4_THNAIL_ORGINL_20250110144017063.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/MCBR/24/12/23/GM0024122398658_0_THNAIL_ORGINL_20241227193508376.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/MCBR/24/12/23/GM0024122398658_1_THNAIL_ORGINL_20241227193508376.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 292051,
        "discount_rate": 18,
        "discounted_price": 239481,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1025,
        "category": "상의",
        "sub_category": "니트",
        "name": "Metropolitan Luxury Wool Knit Sweater",
        "color": [
            "Black",
            "Yellow",
            "Red"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "image": [
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/25/01/02/GP2N25010294589_0_THNAIL_ORGINL_20250116101553550.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/25/01/02/GP2N25010294589_1_THNAIL_ORGINL_20250103115400944.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/25/01/02/GP2N25010294589_2_THNAIL_ORGINL_20250103115400944.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/25/01/02/GP2N25010294589_3_THNAIL_ORGINL_20250103115400944.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/25/01/02/GP2N25010294589_4_THNAIL_ORGINL_20250103115400944.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 225782,
        "discount_rate": 10,
        "discounted_price": 203203,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1026,
        "category": "하의",
        "sub_category": "조거팬츠",
        "name": "Fashionable Urban Relaxed Joggers",
        "color": [
            "LightGray",
            "White",
            "Yellow"
        ],
        "size": [
            "28",
            "30",
            "32",
            "34"
        ],
        "image": [
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/25/02/03/GRK025020308847_0_ORGINL_20250203113958825.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/25/02/03/GRK025020308847_1_ORGINL_20250203113958825.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/25/02/03/GRK025020308847_2_ORGINL_20250203113958825.jpg"

        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 224805,
        "discount_rate": 22,
        "discounted_price": 175347,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1027,
        "category": "하의",
        "sub_category": "스커트",
        "name": "Avant-Garde Minimalist Chic Skirt",
        "color": [
            "White",
            "Brown",
            "Black",
            "Yellow",
            "LightGray"
        ],
        "size": [
            "28",
            "30",
            "32",
            "34"
        ],
        "image": [
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/8SBR/24/12/11/GM0024121142036_0_THNAIL_ORGINL_20241231105416614.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/8SBR/24/12/11/GM0024121142036_1_THNAIL_ORGINL_20241231105416614.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/8SBR/24/12/11/GM0024121142036_2_THNAIL_ORGINL_20241231105416614.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/8SBR/24/12/11/GM0024121142036_4_THNAIL_ORGINL_20241231105416614.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/8SBR/24/12/11/GM0024121142036_5_THNAIL_ORGINL_20241231105416614.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 219098,
        "discount_rate": 13,
        "discounted_price": 190615,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1028,
        "category": "하의",
        "sub_category": "청바지",
        "name": "Luxury Timeless Skinny Denim Jeans",
        "color": [
            "Red",
            "Brown",
            "Black"
        ],
        "size": [
            "28",
            "30",
            "32",
            "34"
        ],
        "image": [
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/8SBR/24/08/19/GM0024081968891_0_THNAIL_ORGINL_20240912182649129.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/8SBR/24/08/19/GM0024081968891_1_THNAIL_ORGINL_20240912182649129.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/8SBR/24/08/19/GM0024081968891_2_THNAIL_ORGINL_20240912182649129.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/8SBR/24/08/19/GM0024081968891_4_THNAIL_ORGINL_20240912182649129.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/8SBR/24/08/19/GM0024081968891_5_THNAIL_ORGINL_20240912182649129.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 274950,
        "discount_rate": 19,
        "discounted_price": 222709,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1029,
        "category": "하의",
        "sub_category": "슬랙스",
        "name": "Sophisticated Tailored Slim-Fit Trousers",
        "color": [
            "Yellow",
            "Black",
            "LightGray",
            "Red"
        ],
        "size": [
            "28",
            "30",
            "32",
            "34"
        ],
        "image": [
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/24/09/09/GRCV24090907706_0_ORGINL_20240909143837074.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/24/09/09/GRCV24090907706_1_ORGINL_20240909143837074.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/24/09/09/GRCV24090907706_2_ORGINL_20240909143837074.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/24/09/09/GRCV24090907706_3_ORGINL_20240909143837074.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 244226,
        "discount_rate": 22,
        "discounted_price": 190496,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1030,
        "category": "하의",
        "sub_category": "와이드팬츠",
        "name": "Sleek Modern Relaxed Wide Pants",
        "color": [
            "White",
            "LightGray",
            "Black"
        ],
        "size": [
            "28",
            "30",
            "32",
            "34"
        ],
        "image": [
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/24/12/24/GQZR24122412102_0_ORGINL_20241224125431693.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/24/12/24/GQZR24122412102_1_ORGINL_20241224125431693.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/24/12/24/GQZR24122412102_2_ORGINL_20241224125431693.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/24/12/24/GQZR24122412102_3_ORGINL_20241224125431693.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/24/12/24/GQZR24122412102_4_ORGINL_20241224125431693.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 294298,
        "discount_rate": 20,
        "discounted_price": 235438,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1031,
        "category": "하의",
        "sub_category": "와이드팬츠",
        "name": "Modern High-Waist Flowy Pants",
        "color": [
            "Red",
            "Black",
            "LightGray",
            "White"
        ],
        "size": [
            "28",
            "30",
            "32",
            "34"
        ],
        "image": [
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/LUXR/B2/41/21/GQC9B24121856298_0_ORGINL_20241218230704735.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/LUXR/B2/41/21/GQC9B24121856298_1_ORGINL_20241218230704735.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/LUXR/B2/41/21/GQC9B24121856298_2_ORGINL_20241218230704735.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/LUXR/B2/41/21/GQC9B24121856298_3_ORGINL_20241218230704735.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 279120,
        "discount_rate": 17,
        "discounted_price": 231669,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1032,
        "category": "하의",
        "sub_category": "조거팬츠",
        "name": "Refined Casual Athletic Joggers",
        "color": [
            "Red",
            "Navy",
            "LightGray",
            "Yellow"
        ],
        "size": [
            "28",
            "30",
            "32",
            "34"
        ],
        "image": [
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/25/01/02/GQ6425010291806_0_ORGINL_20250102131703733.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/25/01/02/GQ6425010291806_1_ORGINL_20250102131703733.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/25/01/02/GQ6425010291806_2_ORGINL_20250102131703733.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 108973,
        "discount_rate": 22,
        "discounted_price": 84998,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1033,
        "category": "하의",
        "sub_category": "청바지",
        "name": "Contemporary Premium Wide-Leg Jeans",
        "color": [
            "Navy",
            "White",
            "Brown",
            "Red",
            "Yellow"
        ],
        "size": [
            "28",
            "30",
            "32",
            "34"
        ],
        "image": [
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/BPBR/24/12/27/GM0024122749754_0_THNAIL_ORGINL_20241231121143304.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/BPBR/24/12/27/GM0024122749754_1_THNAIL_ORGINL_20241231121143304.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/BPBR/24/12/27/GM0024122749754_2_THNAIL_ORGINL_20241231121143304.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/BPBR/24/12/27/GM0024122749754_3_THNAIL_ORGINL_20241231121143304.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/BPBR/24/12/27/GM0024122749754_4_THNAIL_ORGINL_20241231121143304.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 105692,
        "discount_rate": 24,
        "discounted_price": 80325,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1034,
        "category": "하의",
        "sub_category": "슬랙스",
        "name": "Sleek Luxury High-Waist Trousers",
        "color": [
            "Yellow",
            "LightGray",
            "Brown",
            "Black",
            "Navy"
        ],
        "size": [
            "28",
            "30",
            "32",
            "34"
        ],
        "image": [
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/MCBR/24/12/23/GM0024122398665_0_THNAIL_ORGINL_20250206184228379.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/MCBR/24/12/23/GM0024122398665_1_THNAIL_ORGINL_20250206184228379.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/MCBR/24/12/23/GM0024122398665_2_THNAIL_ORGINL_20250206184228379.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/MCBR/24/12/23/GM0024122398665_3_THNAIL_ORGINL_20250206184228379.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/MCBR/24/12/23/GM0024122398665_5_THNAIL_ORGINL_20250206184228379.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 296666,
        "discount_rate": 10,
        "discounted_price": 266999,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1035,
        "category": "하의",
        "sub_category": "와이드팬츠",
        "name": "Minimal Luxury Palazzo Trousers",
        "color": [
            "Yellow",
            "Navy",
            "White",
            "LightGray"
        ],
        "size": [
            "28",
            "30",
            "32",
            "34"
        ],
        "image": [
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/D2/50/12/GPFVD25012033915_0_ORGINL_20250120151338078.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/D2/50/12/GPFVD25012033915_1_ORGINL_20250120151338078.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/D2/50/12/GPFVD25012033915_2_ORGINL_20250120151338078.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/D2/50/12/GPFVD25012033915_3_ORGINL_20250120151338078.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/D2/50/12/GPFVD25012033915_4_ORGINL_20250120151338078.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 122477,
        "discount_rate": 24,
        "discounted_price": 93082,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1036,
        "category": "하의",
        "sub_category": "청바지",
        "name": "Avant-Garde Timeless Skinny Denim Jeans",
        "color": [
            "Red",
            "Navy",
            "White"
        ],
        "size": [
            "28",
            "30",
            "32",
            "34"
        ],
        "image": [
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/24/07/11/GM0024071185525_0_THNAIL_ORGINL_20240913141318649.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/24/07/11/GM0024071185525_1_THNAIL_ORGINL_20240913141318649.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/24/07/11/GM0024071185525_2_THNAIL_ORGINL_20240913141318649.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/MCBR/24/07/11/GM0024071185525_0_THNAIL_ORGINL_20240712123425438.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/MCBR/24/07/11/GM0024071185525_1_THNAIL_ORGINL_20240712123425438.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 113245,
        "discount_rate": 15,
        "discounted_price": 96258,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1037,
        "category": "하의",
        "sub_category": "조거팬츠",
        "name": "Refined Urban Relaxed Joggers",
        "color": [
            "Red",
            "LightGray",
            "Navy"
        ],
        "size": [
            "28",
            "30",
            "32",
            "34"
        ],
        "image": [
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/24/12/19/GRHV24121975966_0_THNAIL_ORGINL_20241219120057119.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/24/12/19/GRHV24121975966_1_THNAIL_ORGINL_20241219120057119.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/24/12/19/GRHV24121975966_2_THNAIL_ORGINL_20241219120057119.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/24/12/19/GRHV24121975966_11_THNAIL_ORGINL_20241219120057119.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ORBR/24/12/19/GRHV24121975966_12_THNAIL_ORGINL_20241219120057119.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 123553,
        "discount_rate": 14,
        "discounted_price": 106255,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1038,
        "category": "하의",
        "sub_category": "스커트",
        "name": "Sophisticated Refined Timeless Skirt",
        "color": [
            "Navy",
            "Brown",
            "Yellow",
            "Red",
            "Black"
        ],
        "size": [
            "28",
            "30",
            "32",
            "34"
        ],
        "image": [
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/MCBR/25/01/16/GM0025011602258_0_THNAIL_ORGINL_20250122182416884.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/MCBR/25/01/16/GM0025011602258_1_THNAIL_ORGINL_20250122182416884.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/MCBR/25/01/16/GM0025011602258_2_THNAIL_ORGINL_20250122182416884.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/MCBR/25/01/16/GM0025011602258_0_THNAIL_ORGINL_20250120113805756.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/MCBR/25/01/16/GM0025011602258_1_THNAIL_ORGINL_20250120113805756.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 198799,
        "discount_rate": 21,
        "discounted_price": 157051,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1039,
        "category": "하의",
        "sub_category": "청바지",
        "name": "Sleek Premium Wide-Leg Jeans",
        "color": [
            "Brown",
            "White",
            "LightGray",
            "Navy"
        ],
        "size": [
            "28",
            "30",
            "32",
            "34"
        ],
        "image": [
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/25/01/13/GM0025011375658_0_THNAIL_ORGINL_20250115180340574.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/25/01/13/GM0025011375658_1_THNAIL_ORGINL_20250115180340574.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/25/01/13/GM0025011375658_2_THNAIL_ORGINL_20250115180340574.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/25/01/13/GM0025011375658_3_THNAIL_ORGINL_20250115180340574.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/25/01/13/GM0025011375658_4_THNAIL_ORGINL_20250115180340574.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 204530,
        "discount_rate": 10,
        "discounted_price": 184077,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1040,
        "category": "하의",
        "sub_category": "슬랙스",
        "name": "Modern Luxury High-Waist Trousers",
        "color": [
            "Red",
            "Navy",
            "Yellow"
        ],
        "size": [
            "28",
            "30",
            "32",
            "34"
        ],
        "image": [
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/24/11/29/GM0024112972322_0_THNAIL_ORGINL_20250206184727215.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/24/11/29/GM0024112972322_1_THNAIL_ORGINL_20250206184727215.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/24/11/29/GM0024112972322_2_THNAIL_ORGINL_20250206184727215.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/24/11/29/GM0024112972322_0_THNAIL_ORGINL_20241205112242177.jpg",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/ECBR/24/11/29/GM0024112972322_1_THNAIL_ORGINL_20241205112242177.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 267997,
        "discount_rate": 10,
        "discounted_price": 241197,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1041,
        "category": "신발",
        "sub_category": "로퍼",
        "name": "Avant-Garde Timeless Penny Loafers",
        "color": [
            "Yellow",
            "Brown",
            "Black",
            "White"
        ],
        "size": [
            "230",
            "235",
            "240",
            "245",
            "250",
            "255",
            "260"
        ],
        "image": [
            "https://example.com/images/product_41_1.jpg",
            "https://example.com/images/product_41_2.jpg",
            "https://example.com/images/product_41_3.jpg",
            "https://example.com/images/product_41_4.jpg",
            "https://example.com/images/product_41_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 247073,
        "discount_rate": 23,
        "discounted_price": 190246,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1042,
        "category": "신발",
        "sub_category": "부츠",
        "name": "Contemporary Modern Heeled Boots",
        "color": [
            "Black",
            "White",
            "LightGray",
            "Yellow"
        ],
        "size": [
            "230",
            "235",
            "240",
            "245",
            "250",
            "255",
            "260"
        ],
        "image": [
            "https://example.com/images/product_42_1.jpg",
            "https://example.com/images/product_42_2.jpg",
            "https://example.com/images/product_42_3.jpg",
            "https://example.com/images/product_42_4.jpg",
            "https://example.com/images/product_42_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 256737,
        "discount_rate": 17,
        "discounted_price": 213091,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1043,
        "category": "신발",
        "sub_category": "로퍼",
        "name": "Fashionable Elegant Classic Leather Loafers",
        "color": [
            "Black",
            "LightGray",
            "White",
            "Red"
        ],
        "size": [
            "230",
            "235",
            "240",
            "245",
            "250",
            "255",
            "260"
        ],
        "image": [
            "https://example.com/images/product_43_1.jpg",
            "https://example.com/images/product_43_2.jpg",
            "https://example.com/images/product_43_3.jpg",
            "https://example.com/images/product_43_4.jpg",
            "https://example.com/images/product_43_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 271749,
        "discount_rate": 18,
        "discounted_price": 222834,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1044,
        "category": "신발",
        "sub_category": "스니커즈",
        "name": "Elegant Luxury Low-Top Sneakers",
        "color": [
            "Red",
            "Brown",
            "Yellow"
        ],
        "size": [
            "230",
            "235",
            "240",
            "245",
            "250",
            "255",
            "260"
        ],
        "image": [
            "https://example.com/images/product_44_1.jpg",
            "https://example.com/images/product_44_2.jpg",
            "https://example.com/images/product_44_3.jpg",
            "https://example.com/images/product_44_4.jpg",
            "https://example.com/images/product_44_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 208678,
        "discount_rate": 16,
        "discounted_price": 175289,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1045,
        "category": "신발",
        "sub_category": "로퍼",
        "name": "Sleek Elegant Classic Leather Loafers",
        "color": [
            "LightGray",
            "Black",
            "Brown"
        ],
        "size": [
            "230",
            "235",
            "240",
            "245",
            "250",
            "255",
            "260"
        ],
        "image": [
            "https://example.com/images/product_45_1.jpg",
            "https://example.com/images/product_45_2.jpg",
            "https://example.com/images/product_45_3.jpg",
            "https://example.com/images/product_45_4.jpg",
            "https://example.com/images/product_45_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 140501,
        "discount_rate": 18,
        "discounted_price": 115210,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1046,
        "category": "신발",
        "sub_category": "힐",
        "name": "Premium Minimalist Pointed Heels",
        "color": [
            "Brown",
            "White",
            "Navy",
            "LightGray",
            "Yellow"
        ],
        "size": [
            "230",
            "235",
            "240",
            "245",
            "250",
            "255",
            "260"
        ],
        "image": [
            "https://example.com/images/product_46_1.jpg",
            "https://example.com/images/product_46_2.jpg",
            "https://example.com/images/product_46_3.jpg",
            "https://example.com/images/product_46_4.jpg",
            "https://example.com/images/product_46_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 138360,
        "discount_rate": 24,
        "discounted_price": 105153,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1047,
        "category": "신발",
        "sub_category": "힐",
        "name": "Chic Timeless Elegant Kitten Heels",
        "color": [
            "White",
            "LightGray",
            "Yellow"
        ],
        "size": [
            "230",
            "235",
            "240",
            "245",
            "250",
            "255",
            "260"
        ],
        "image": [
            "https://example.com/images/product_47_1.jpg",
            "https://example.com/images/product_47_2.jpg",
            "https://example.com/images/product_47_3.jpg",
            "https://example.com/images/product_47_4.jpg",
            "https://example.com/images/product_47_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 183262,
        "discount_rate": 17,
        "discounted_price": 152107,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1048,
        "category": "신발",
        "sub_category": "샌들",
        "name": "Elegant Timeless Luxury Sandals",
        "color": [
            "Black",
            "White",
            "Red",
            "Brown"
        ],
        "size": [
            "230",
            "235",
            "240",
            "245",
            "250",
            "255",
            "260"
        ],
        "image": [
            "https://example.com/images/product_48_1.jpg",
            "https://example.com/images/product_48_2.jpg",
            "https://example.com/images/product_48_3.jpg",
            "https://example.com/images/product_48_4.jpg",
            "https://example.com/images/product_48_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 279540,
        "discount_rate": 21,
        "discounted_price": 220836,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1049,
        "category": "신발",
        "sub_category": "로퍼",
        "name": "Minimal Timeless Penny Loafers",
        "color": [
            "Navy",
            "Yellow",
            "Red",
            "White",
            "Black"
        ],
        "size": [
            "230",
            "235",
            "240",
            "245",
            "250",
            "255",
            "260"
        ],
        "image": [
            "https://example.com/images/product_49_1.jpg",
            "https://example.com/images/product_49_2.jpg",
            "https://example.com/images/product_49_3.jpg",
            "https://example.com/images/product_49_4.jpg",
            "https://example.com/images/product_49_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 232027,
        "discount_rate": 14,
        "discounted_price": 199543,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    },
    {
        "id": 1050,
        "category": "신발",
        "sub_category": "로퍼",
        "name": "Urban Timeless Penny Loafers",
        "color": [
            "White",
            "Black",
            "Yellow"
        ],
        "size": [
            "230",
            "235",
            "240",
            "245",
            "250",
            "255",
            "260"
        ],
        "image": [
            "https://example.com/images/product_50_1.jpg",
            "https://example.com/images/product_50_2.jpg",
            "https://example.com/images/product_50_3.jpg",
            "https://example.com/images/product_50_4.jpg",
            "https://example.com/images/product_50_5.jpg"
        ],
        "likes": 0,
        "cart_count": 0,
        "star": "0.0",
        "stock": 50,
        "original_price": 124074,
        "discount_rate": 18,
        "discounted_price": 101740,
        "created_at": "2025-02-07 03:12:30",
        "updated_at": "2025-02-07 03:12:30"
    }
]
"""

# JSON 파싱
products = json.loads(json_data, strict=False)  # JSON 제어 문자 허용

# 중복 방지를 위한 세트
existing_product_ids = set()

# 상품 데이터 삽입
for product in products:
    product_id = int(product["id"])  # ID를 정수로 변환

    # 중복된 product_id 방지
    if product_id in existing_product_ids:
        continue  # 중복이면 삽입하지 않음

    # 중복이 없으면 추가
    existing_product_ids.add(product_id)

    cursor.execute("""
        INSERT INTO products (
            id, category, sub_category, name, color, size, image, likes, cart_count, star, 
            stock, original_price, discount_rate, discounted_price, created_at, updated_at
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """, (
        product_id, 
        product["category"], 
        product["sub_category"], 
        product["name"], 
        json.dumps(product["color"]),  # JSON 저장
        json.dumps(product["size"]),   # JSON 저장
        json.dumps(product["image"]),  # JSON 저장
        product["likes"], 
        product["cart_count"], 
        product["star"], 
        product["stock"], 
        product["original_price"], 
        product["discount_rate"], 
        product["discounted_price"], 
        product["created_at"], 
        product["updated_at"]
    ))

# 변경사항 저장
db.commit()

# 연결 닫기
cursor.close()
db.close()

print("상품 데이터 삽입 완료! ✅")
