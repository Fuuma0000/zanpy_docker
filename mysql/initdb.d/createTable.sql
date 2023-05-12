-- 作成データベースの指定
use zanpy;

-- エリア（ereas）
create table areas(
    area_id int(4) PRIMARY KEY,
    area_name varchar(255) NOT NULL
);

-- 種族（types）
create table types(
    type_id int(4) PRIMARY KEY,
    type_cate varchar(255) NOT NULL
);

-- 状態（statuses）
create table statuses(
    status_id int(4) PRIMARY KEY,
    status_situ varchar(20) NOT NULL
);

-- ユーザ表（users）
create table users(
    user_id varchar(5),
    password varchar(128) NOT NULL,
    first_name varchar(20) NOT NULL,
    last_name varchar(20) NOT NULL,
    area_id int(4) NOT NULL,
    PRIMARY KEY(user_id),
    FOREIGN KEY(area_id) REFERENCES areas(area_id)
);

-- 動物（animals）
create table animals(
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
create table memos(
    memo_id int(4) PRIMARY KEY,
    ani_id int(4) NOT NULL,
    memo_text text NOT NULL,
    time datetime NOT NULL,
    FOREIGN KEY(ani_id) REFERENCES animals(ani_id)
);
