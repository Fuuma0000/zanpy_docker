-- 作成データベースの指定
use zanpy;

-- エリア（ereas）
CREATE TABLE areas(
    area_id int(4) PRIMARY KEY AUTO_INCREMENT,
    area_name varchar(50) NOT NULL
);

-- 種族（types）
CREATE TABLE types(
    type_id int(4) PRIMARY KEY AUTO_INCREMENT,
    type_cate varchar(50) NOT NULL
);

-- 状態（statuses）
CREATE TABLE statuses(
    status_id int(4) PRIMARY KEY AUTO_INCREMENT,
    status_situ varchar(20) NOT NULL
);

-- ユーザ表（users）
CREATE TABLE users(
    user_id varchar(5) PRIMARY KEY,
    password varchar(128) NOT NULL CHECK,
    first_name varchar(20) NOT NULL,
    last_name varchar(20) NOT NULL,
    area_id int(4) NOT NULL,
    FOREIGN KEY(area_id) REFERENCES areas(area_id)
);

-- 動物（animals）
CREATE TABLE animals(
    ani_id int(4) PRIMARY KEY,
    area_id int(4) NOT NULL,
    ani_name varchar(20) NOT NULL,
    ani_type int(4) NOT NULL,
    status_id int(4),
    FOREIGN KEY(area_id) REFERENCES areas(area_id),
    FOREIGN KEY(ani_type) REFERENCES types(type_id),
    FOREIGN KEY(status_id) REFERENCES statuses(status_id)
);

-- メモ（memos）
CREATE TABLE memos(
    memo_id int(4) PRIMARY KEY AUTO_INCREMENT,
    ani_id int(4) NOT NULL,
    memo_text varchar(255) NOT NULL,
    time datetime NOT NULL,
    FOREIGN KEY(ani_id) REFERENCES animals(ani_id)
);
