import json
import mysql.connector
from datetime import datetime

# MySQL 연결 설정
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="mysql1234",
    database="shopping_mall"
)
cursor = db.cursor()

# JSON 데이터 (복사/붙여넣기 방식)
json_data = """
[
    {
        "id": 1,
        "username": "dxzf76",
        "email": "dxzf76@naver.com",
        "phone": "010-4392-1342",
        "name": "임영수",
        "password": "inrqeqs4",
        "address": "울산광역시 은평구 청담로 29길 32",
        "additional_address": null,
        "birth_date": "1979-07-23",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Bronze",
        "loyalty_points": 231,
        "last_login": "2025-11-22 13:19:20",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 2,
        "username": "myw020",
        "email": "myw020@gmail.com",
        "phone": "010-2652-9186",
        "name": "강지호",
        "password": "qymovk4d",
        "address": "인천광역시 노원구 올림픽대로 5길 31",
        "additional_address": null,
        "birth_date": "1998-08-22",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Silver",
        "loyalty_points": 175,
        "last_login": "2025-06-25 02:59:01",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 3,
        "username": "2sn116",
        "email": "2sn116@naver.com",
        "phone": "010-6724-2669",
        "name": "윤민윤",
        "password": "qh53g3j7",
        "address": "대구광역시 노원구 올림픽대로 60길 40",
        "additional_address": null,
        "birth_date": "2000-12-27",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Bronze",
        "loyalty_points": 788,
        "last_login": "2025-02-19 03:13:01",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 4,
        "username": "utr182",
        "email": "utr182@daum.net",
        "phone": "010-4664-2308",
        "name": "장지혁",
        "password": "23n3wz7y",
        "address": "대구광역시 노원구 압구정로 79길 9",
        "additional_address": null,
        "birth_date": "1983-06-20",
        "status": [
            "Active"
        ],
        "gender": [
            "Female"
        ],
        "membership_level": "Platinum",
        "loyalty_points": 69,
        "last_login": "2025-09-09 10:30:13",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 5,
        "username": "h26i64",
        "email": "h26i64@daum.net",
        "phone": "010-7445-8764",
        "name": "장서진",
        "password": "c9bwyd8y",
        "address": "광주광역시 노원구 신촌로 46길 33",
        "additional_address": null,
        "birth_date": "1979-03-24",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Silver",
        "loyalty_points": 889,
        "last_login": "2025-01-05 16:16:37",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 6,
        "username": "ae5f15",
        "email": "ae5f15@gmail.com",
        "phone": "010-1218-9106",
        "name": "최지진",
        "password": "7ldq83nv",
        "address": "인천광역시 노원구 올림픽대로 13길 31",
        "additional_address": null,
        "birth_date": "1975-05-13",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Platinum",
        "loyalty_points": 534,
        "last_login": "2025-10-05 10:59:05",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 7,
        "username": "pxst87",
        "email": "pxst87@daum.net",
        "phone": "010-3255-9306",
        "name": "김석진",
        "password": "ur7s96kq",
        "address": "대구광역시 성북구 올림픽대로 53길 7",
        "additional_address": null,
        "birth_date": "1980-10-12",
        "status": [
            "Active"
        ],
        "gender": [
            "Female"
        ],
        "membership_level": "Platinum",
        "loyalty_points": 762,
        "last_login": "2025-10-01 13:17:52",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 8,
        "username": "p3ib33",
        "email": "p3ib33@gmail.com",
        "phone": "010-9881-6201",
        "name": "최경희",
        "password": "ksz6icl8",
        "address": "부산광역시 노원구 압구정로 100길 2",
        "additional_address": null,
        "birth_date": "1991-09-06",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Bronze",
        "loyalty_points": 442,
        "last_login": "2025-11-14 07:44:36",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 9,
        "username": "w2yr48",
        "email": "w2yr48@naver.com",
        "phone": "010-8989-4366",
        "name": "정훈아",
        "password": "d95wn2jh",
        "address": "인천광역시 서초구 종로 39길 14",
        "additional_address": null,
        "birth_date": "2000-02-07",
        "status": [
            "Active"
        ],
        "gender": [
            "Female"
        ],
        "membership_level": "Platinum",
        "loyalty_points": 548,
        "last_login": "2025-11-05 10:08:57",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 10,
        "username": "9ltt74",
        "email": "9ltt74@naver.com",
        "phone": "010-4874-3961",
        "name": "조민호",
        "password": "jigopjyu",
        "address": "대전광역시 종로구 충무로 15길 32",
        "additional_address": null,
        "birth_date": "1979-03-22",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Platinum",
        "loyalty_points": 472,
        "last_login": "2025-02-12 01:39:34",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 11,
        "username": "77yn67",
        "email": "77yn67@naver.com",
        "phone": "010-7628-1554",
        "name": "윤현희",
        "password": "p6xe5nok",
        "address": "대구광역시 서초구 청담로 91길 34",
        "additional_address": null,
        "birth_date": "1970-04-26",
        "status": [
            "Active"
        ],
        "gender": [
            "Female"
        ],
        "membership_level": "Platinum",
        "loyalty_points": 362,
        "last_login": "2025-11-03 06:42:05",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 12,
        "username": "wmi798",
        "email": "wmi798@naver.com",
        "phone": "010-8060-6210",
        "name": "조훈윤",
        "password": "uuodjrfr",
        "address": "울산광역시 송파구 종로 51길 9",
        "additional_address": null,
        "birth_date": "1995-10-11",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Silver",
        "loyalty_points": 813,
        "last_login": "2025-12-06 02:27:51",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 13,
        "username": "sb8638",
        "email": "sb8638@naver.com",
        "phone": "010-4882-3828",
        "name": "조석윤",
        "password": "3vxdz2bc",
        "address": "부산광역시 성북구 청담로 52길 23",
        "additional_address": null,
        "birth_date": "1984-09-23",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Bronze",
        "loyalty_points": 611,
        "last_login": "2025-04-01 21:28:12",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 14,
        "username": "vzid12",
        "email": "vzid12@gmail.com",
        "phone": "010-2302-3831",
        "name": "장서희",
        "password": "krxa9gt4",
        "address": "대전광역시 동작구 한강대로 77길 1",
        "additional_address": null,
        "birth_date": "1995-11-16",
        "status": [
            "Active"
        ],
        "gender": [
            "Female"
        ],
        "membership_level": "Silver",
        "loyalty_points": 379,
        "last_login": "2025-02-09 11:17:35",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 15,
        "username": "defm80",
        "email": "defm80@daum.net",
        "phone": "010-8801-6921",
        "name": "정서호",
        "password": "7xzutmyn",
        "address": "대전광역시 성북구 한강대로 74길 34",
        "additional_address": null,
        "birth_date": "1971-06-24",
        "status": [
            "Active"
        ],
        "gender": [
            "Female"
        ],
        "membership_level": "Bronze",
        "loyalty_points": 753,
        "last_login": "2025-10-17 10:44:15",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 16,
        "username": "wmfb89",
        "email": "wmfb89@naver.com",
        "phone": "010-7524-3398",
        "name": "임경희",
        "password": "gjhm3u2m",
        "address": "인천광역시 종로구 종로 61길 25",
        "additional_address": null,
        "birth_date": "1989-10-21",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Bronze",
        "loyalty_points": 438,
        "last_login": "2025-12-16 23:53:01",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 17,
        "username": "dbkk52",
        "email": "dbkk52@naver.com",
        "phone": "010-6766-6993",
        "name": "조우윤",
        "password": "rv4wqhe5",
        "address": "인천광역시 송파구 신촌로 77길 42",
        "additional_address": null,
        "birth_date": "1999-10-24",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Silver",
        "loyalty_points": 566,
        "last_login": "2025-05-16 05:07:37",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 18,
        "username": "ysy289",
        "email": "ysy289@naver.com",
        "phone": "010-3532-6062",
        "name": "최우희",
        "password": "wehyyc3n",
        "address": "울산광역시 강남구 한강대로 21길 20",
        "additional_address": null,
        "birth_date": "1997-04-18",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Platinum",
        "loyalty_points": 180,
        "last_login": "2025-08-12 19:46:40",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 19,
        "username": "ivin51",
        "email": "ivin51@naver.com",
        "phone": "010-4711-2642",
        "name": "박경빈",
        "password": "g0z08k22",
        "address": "인천광역시 송파구 테헤란로 45길 23",
        "additional_address": null,
        "birth_date": "2004-02-25",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Bronze",
        "loyalty_points": 224,
        "last_login": "2025-09-14 22:01:35",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 20,
        "username": "6coz23",
        "email": "6coz23@gmail.com",
        "phone": "010-3282-6258",
        "name": "강훈호",
        "password": "s6poisco",
        "address": "대구광역시 강남구 압구정로 61길 21",
        "additional_address": null,
        "birth_date": "1972-05-03",
        "status": [
            "Active"
        ],
        "gender": [
            "Female"
        ],
        "membership_level": "Platinum",
        "loyalty_points": 779,
        "last_login": "2025-05-10 17:38:49",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 21,
        "username": "ypti82",
        "email": "ypti82@naver.com",
        "phone": "010-3846-2681",
        "name": "이서혁",
        "password": "5ogmofom",
        "address": "대전광역시 성북구 압구정로 22길 43",
        "additional_address": null,
        "birth_date": "1973-07-27",
        "status": [
            "Active"
        ],
        "gender": [
            "Female"
        ],
        "membership_level": "Bronze",
        "loyalty_points": 234,
        "last_login": "2025-05-09 06:23:36",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 22,
        "username": "7xep37",
        "email": "7xep37@naver.com",
        "phone": "010-3971-8286",
        "name": "임민수",
        "password": "r39nh9me",
        "address": "인천광역시 중구 홍대로 87길 27",
        "additional_address": null,
        "birth_date": "1979-09-19",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Bronze",
        "loyalty_points": 625,
        "last_login": "2025-03-07 16:16:15",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 23,
        "username": "800i83",
        "email": "800i83@daum.net",
        "phone": "010-8011-5193",
        "name": "임석희",
        "password": "dkwg7ahz",
        "address": "대전광역시 동작구 충무로 1길 49",
        "additional_address": null,
        "birth_date": "1994-10-16",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Platinum",
        "loyalty_points": 429,
        "last_login": "2025-01-12 13:30:23",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 24,
        "username": "g5tl07",
        "email": "g5tl07@gmail.com",
        "phone": "010-7596-6947",
        "name": "임훈준",
        "password": "i8nai077",
        "address": "서울특별시 강남구 충무로 34길 7",
        "additional_address": null,
        "birth_date": "1989-07-03",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Platinum",
        "loyalty_points": 354,
        "last_login": "2025-10-05 17:08:56",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 25,
        "username": "tbxc49",
        "email": "tbxc49@naver.com",
        "phone": "010-4989-8470",
        "name": "장영진",
        "password": "hjjl16su",
        "address": "부산광역시 성북구 충무로 51길 48",
        "additional_address": null,
        "birth_date": "1989-09-02",
        "status": [
            "Active"
        ],
        "gender": [
            "Female"
        ],
        "membership_level": "Silver",
        "loyalty_points": 766,
        "last_login": "2025-01-13 23:40:24",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 26,
        "username": "tdux92",
        "email": "tdux92@gmail.com",
        "phone": "010-3498-7790",
        "name": "박현호",
        "password": "3p8ve5p2",
        "address": "대구광역시 노원구 종로 95길 37",
        "additional_address": null,
        "birth_date": "1996-04-13",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Silver",
        "loyalty_points": 776,
        "last_login": "2025-04-11 14:22:54",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 27,
        "username": "8izw99",
        "email": "8izw99@naver.com",
        "phone": "010-8596-6719",
        "name": "윤영희",
        "password": "0jjqxxju",
        "address": "광주광역시 송파구 종로 89길 25",
        "additional_address": null,
        "birth_date": "2002-11-13",
        "status": [
            "Active"
        ],
        "gender": [
            "Female"
        ],
        "membership_level": "Platinum",
        "loyalty_points": 118,
        "last_login": "2025-05-11 16:17:47",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 28,
        "username": "snxb71",
        "email": "snxb71@gmail.com",
        "phone": "010-3914-9935",
        "name": "박경진",
        "password": "71lfw943",
        "address": "부산광역시 중구 홍대로 57길 22",
        "additional_address": null,
        "birth_date": "1993-05-11",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Gold",
        "loyalty_points": 538,
        "last_login": "2025-01-03 22:01:54",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 29,
        "username": "9k7q44",
        "email": "9k7q44@daum.net",
        "phone": "010-7573-3115",
        "name": "임영연",
        "password": "2p9znye2",
        "address": "대전광역시 마포구 올림픽대로 61길 41",
        "additional_address": null,
        "birth_date": "1981-11-24",
        "status": [
            "Active"
        ],
        "gender": [
            "Female"
        ],
        "membership_level": "Platinum",
        "loyalty_points": 524,
        "last_login": "2025-05-07 01:20:30",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 30,
        "username": "kuap04",
        "email": "kuap04@naver.com",
        "phone": "010-9243-3387",
        "name": "조민준",
        "password": "iruwwezw",
        "address": "광주광역시 강남구 올림픽대로 55길 12",
        "additional_address": null,
        "birth_date": "2003-03-13",
        "status": [
            "Active"
        ],
        "gender": [
            "Female"
        ],
        "membership_level": "Bronze",
        "loyalty_points": 915,
        "last_login": "2025-02-03 03:00:19",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 31,
        "username": "xcpr65",
        "email": "xcpr65@naver.com",
        "phone": "010-8053-3809",
        "name": "김지혁",
        "password": "xo3v115h",
        "address": "인천광역시 강남구 종로 33길 42",
        "additional_address": null,
        "birth_date": "2003-10-12",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Bronze",
        "loyalty_points": 995,
        "last_login": "2025-04-06 15:31:14",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 32,
        "username": "vxzf57",
        "email": "vxzf57@daum.net",
        "phone": "010-5929-8978",
        "name": "최훈아",
        "password": "yc7uygjq",
        "address": "대전광역시 종로구 강남대로 87길 46",
        "additional_address": null,
        "birth_date": "1989-01-08",
        "status": [
            "Active"
        ],
        "gender": [
            "Female"
        ],
        "membership_level": "Platinum",
        "loyalty_points": 688,
        "last_login": "2025-04-08 14:49:52",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 33,
        "username": "dacv10",
        "email": "dacv10@daum.net",
        "phone": "010-9652-8131",
        "name": "조현호",
        "password": "0o3x1lzn",
        "address": "광주광역시 은평구 테헤란로 43길 11",
        "additional_address": null,
        "birth_date": "1976-10-01",
        "status": [
            "Active"
        ],
        "gender": [
            "Female"
        ],
        "membership_level": "Bronze",
        "loyalty_points": 651,
        "last_login": "2025-12-14 15:44:54",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 34,
        "username": "mjg717",
        "email": "mjg717@gmail.com",
        "phone": "010-2323-7998",
        "name": "김서희",
        "password": "jd9xgaaf",
        "address": "부산광역시 은평구 올림픽대로 49길 3",
        "additional_address": null,
        "birth_date": "1992-10-01",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Silver",
        "loyalty_points": 37,
        "last_login": "2025-11-01 05:52:04",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 35,
        "username": "1uwv78",
        "email": "1uwv78@daum.net",
        "phone": "010-2291-8767",
        "name": "윤민희",
        "password": "xxmknf7g",
        "address": "부산광역시 종로구 한강대로 65길 30",
        "additional_address": null,
        "birth_date": "2003-10-13",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Silver",
        "loyalty_points": 239,
        "last_login": "2025-12-20 21:29:25",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 36,
        "username": "aown00",
        "email": "aown00@naver.com",
        "phone": "010-9231-8840",
        "name": "김진희",
        "password": "b3e2zzb8",
        "address": "대구광역시 동작구 종로 53길 30",
        "additional_address": null,
        "birth_date": "2004-10-22",
        "status": [
            "Active"
        ],
        "gender": [
            "Female"
        ],
        "membership_level": "Platinum",
        "loyalty_points": 71,
        "last_login": "2025-08-22 00:28:21",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 37,
        "username": "y25v31",
        "email": "y25v31@naver.com",
        "phone": "010-4426-7113",
        "name": "임진준",
        "password": "dv2hj35m",
        "address": "인천광역시 종로구 신촌로 27길 46",
        "additional_address": null,
        "birth_date": "2002-04-24",
        "status": [
            "Active"
        ],
        "gender": [
            "Female"
        ],
        "membership_level": "Silver",
        "loyalty_points": 327,
        "last_login": "2025-05-23 21:48:29",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 38,
        "username": "zswm42",
        "email": "zswm42@gmail.com",
        "phone": "010-2611-8143",
        "name": "정우윤",
        "password": "xfscogmx",
        "address": "대전광역시 종로구 종로 56길 25",
        "additional_address": null,
        "birth_date": "1974-10-03",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Gold",
        "loyalty_points": 704,
        "last_login": "2025-07-15 09:52:23",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 39,
        "username": "ct1m50",
        "email": "ct1m50@naver.com",
        "phone": "010-9224-3380",
        "name": "박지준",
        "password": "359j0z46",
        "address": "인천광역시 송파구 테헤란로 91길 13",
        "additional_address": null,
        "birth_date": "1992-01-18",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Platinum",
        "loyalty_points": 935,
        "last_login": "2025-04-20 17:03:32",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    },
    {
        "id": 40,
        "username": "dgkl38",
        "email": "dgkl38@naver.com",
        "phone": "010-2254-1385",
        "name": "정현준",
        "password": "e0rwk9k5",
        "address": "울산광역시 동작구 홍대로 12길 21",
        "additional_address": null,
        "birth_date": "1984-02-01",
        "status": [
            "Active"
        ],
        "gender": [
            "Male"
        ],
        "membership_level": "Bronze",
        "loyalty_points": 769,
        "last_login": "2025-12-12 18:11:58",
        "created_at": "2025-02-07T03:12:30.000Z",
        "updated_at": "2025-02-07T03:12:30.000Z"
    }
]
"""

# JSON 데이터 변환
customers = json.loads(json_data)

# 고객 데이터 삽입
for customer in customers:
    # ISO 8601 형식의 날짜를 MySQL DATETIME 형식으로 변환
    created_at = datetime.strptime(customer["created_at"], "%Y-%m-%dT%H:%M:%S.%fZ").strftime("%Y-%m-%d %H:%M:%S")
    updated_at = datetime.strptime(customer["updated_at"], "%Y-%m-%dT%H:%M:%S.%fZ").strftime("%Y-%m-%d %H:%M:%S")

    cursor.execute("""
        INSERT INTO customers (id, username, email, phone, name, password, address, birth_date, membership_level, last_login, created_at, updated_at)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """, (
        customer["id"], customer["username"], customer["email"], customer["phone"], 
        customer["name"], customer["password"], customer["address"], 
        customer["birth_date"], customer["membership_level"], 
        customer["last_login"], created_at, updated_at
    ))

# 변경사항 저장
db.commit()

# 연결 닫기
cursor.close()
db.close()

print("✅ 고객 데이터 삽입 완료!")
