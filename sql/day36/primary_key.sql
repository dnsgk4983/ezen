# primary key 안의 auto increment 기능 설명
use market_db;
DROP TABLE IF EXISTS hongong1;
# toy_id, toy_name, age 컬럼이 있는 hongong1 테이블을 만듭니다.
CREATE TABLE hongong1 (toy_id INT AUTO_INCREMENT PRIMARY KEY, toy_name CHAR(4), age INT);

INSERT INTO hongong1 VALUES (NULL, '안녕', 25);
INSERT INTO hongong1 VALUES (NULL, '이젠', 29);
INSERT INTO hongong1 VALUES (NULL, '더조은', 28);