-- create table hongong1 (toy_id int, toy_name char(4), age int);
-- create table hongong1 (toy_id int primary key, toy_name char(4), age int);
-- create table hongong1 (toy_id int auto_increment primary key, toy_name char(4), age int);
use market_db;
drop table if exists hongong1;
create table hongong1 (toy_id int auto_increment primary key, toy_name char(4), age int);
insert into hongong1  values (null, '안녕', 25);
insert into hongong1  values (null, '너냐', 25);
insert into hongong1  values (null, '백앤드', 25);
# 현재 아이디 몇번까지 만들어져서 들어갔나 체크하는 쿼리문
# select last_insert_id();
# 삼성전기애들은 1000부터 시작하면서 41씩 증가
select last_insert_id();
alter table hongong1 auto_increment=100;
# 데이디 넣을 때마다 auto_increment가 증가분 결정 쿼리문
set @@auto_incremet_increment = 41;
insert into hongong1 values (null, '백앤드', 21);
insert into hongong1 values (null, '백앤드', 21);