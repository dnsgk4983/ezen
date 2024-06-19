from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import pandas as pd

driver = webdriver.Chrome()
driver.get("https://comic.naver.com/webtoon")

time.sleep(5)

webtoon_titles = driver.find_elements(By.CLASS_NAME, 'text')
# 만화책 이름을 담을 리스트 변수 선언
name2 = []
for name in webtoon_titles:
    print(name.text)
    # 수집한 데이터를 1라인씩 읽어서 만화책 이름만을 name2 변수에 추가합니다.
    name2.append(name.text)
#print(len(webtoon_titles))

# 판다스에서 변수데이터를 읽습니다.
df = pd.DataFrame(name2)
# 읽은 데이터를 csv방식으로 저장합니다.
df.to_csv("result.csv", encoding="utf-8-sig")