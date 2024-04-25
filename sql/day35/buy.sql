-- SELECT mem_id, sum(amount) FROM market_db.buy group by mem_id;
-- SELECT * FROM market_db.buy

# 모든 구매기록에 대한 총 구매금액
-- SELECT mem_id, sum(price*amount) FROM market_db.buy group by mem_id;
# 한번 구매 시 평균 금액
-- SELECT mem_id, avg(price*amount) FROM market_db.buy group by mem_id;
-- SELECT count(*) FROM market_db.buy;

-- 특정 컬럼에서 데이터가 온전한 것만 개수를 센다.
-- 그래서 count(*) 랑 결과가 달라질수있다.
SELECT count(group_name) FROM market_db.buy;