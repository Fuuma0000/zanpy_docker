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
    password varchar(128) NOT NULL,
    first_name varchar(20) NOT NULL,
    last_name varchar(20) NOT NULL,
    area_id int(4) NOT NULL,
    FOREIGN KEY(area_id) REFERENCES areas(area_id)
);

-- 動物（animals）
CREATE TABLE animals(
    ani_id int(4) PRIMARY KEY AUTO_INCREMENT,
    ani_name varchar(20) NOT NULL,
    area_id int(4) NOT NULL,
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


-- エリアの追加
INSERT INTO areas (area_name)
VALUES ('マリン'), ('サバンナ'), ('ジャングル'), ('ふれあい'), ('鳥ランド');


-- 種族の追加
INSERT INTO types (type_cate)
VALUES ('イルカ'), ('シャチ'), ('キリン'), ('ライオン'), ('トラ'), ('チンパンジー'), ('うさぎ'), ('レッサーパンダ'), ('リスざる'), ('フラミンゴ'), ('ペンギン');

-- 状態の追加
INSERT INTO statuses (status_situ)
VALUES ('無事'), ('怪我'), ('脱走'), ('不明');


-- ユーザの追加
INSERT INTO users (user_id, password, first_name, last_name, area_id)
VALUES ('A1001', 'hash', '朝倉', '未来', 4), 
    ('R1001', 'hash', '田中', 'マリン', 1), 
    ('R1002', 'hash', '八木', 'ますみ', 2), 
    ('R1003', 'hash', '斎藤', 'しんじ', 3), 
    ('N1001', 'hash', '山本', 'りん', 1), 
    ('N1002', 'hash', '高橋', 'しげお', 2), 
    ('N1003', 'hash', '武山', 'こうそう', 3), 
    ('N1004', 'hash', '太田', 'ひろひさ', 3), 
    ('N1005', 'hash', '萩原', '京平', 4), 
    ('N1006', 'hash', '清野', '菜名', 5),
    ('N1007', 'hash', '小松', '菜奈', 5)
;

-- 動物の追加
INSERT INTO animals (ani_name, area_id, ani_type, status_id)
VALUES ("メルマン", 2, 3, null),
    ("くびなが", 2, 3, null),
    ("アレックス", 2, 4, null),
    ("シンバ", 2, 4, null),
    ("ドル", 1, 1, null),
    ("ミーシャ", 1, 1, null),
    ("フィン", 1, 1, null),
    ("ウィリー", 1, 2, null),
    ("ティガー", 3, 5, null),
    ("ラジャー", 3, 5, null),
    ("パン", 3, 6, null),
    ("シーザー", 3, 6, null),
    ("キャロット", 4, 7, null),
    ("ぴょんすけ", 4, 7, null),
    ("ミッフィー", 4, 7, null),
    ("ラスカル", 4, 8, null),
    ("メイ", 4, 8, null),
    ("ジュリアン", 4, 9, null),
    ("ジョージ", 4, 9, null),
    ("けんし", 5, 10, null),
    ("ドレスローザ", 5, 10, null),
    ("ベラミー", 5, 10, null),
    ("ウィージー", 5, 10, null),
    ("ぺんぺん", 5, 11, null),
    ("エリザベス", 5, 11, null)
;
