from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
import pandas as pd
import matplotlib.pyplot as plt
from konlpy.tag import Okt
from wordcloud import WordCloud
from collections import Counter

okt = Okt()

driver = webdriver.Chrome()
driver.get("https://www.youtube.com/results?search_query=%EB%89%B4%EC%A7%84%EC%8A%A4")

while True:
    before_scroll_height = driver.execute_script(
        "return document.documentElement.scrollHeight"
    )
    driver.execute_script(
        "window.scrollTo(0, document.documentElement.scrollHeight)"
    )
    time.sleep(2)
    after_scroll_height = driver.execute_script(
        "return document.documentElement.scrollHeight"
    )
    time.sleep(2)
    if before_scroll_height == after_scroll_height:
        break

time.sleep(10)

titles = driver.find_elements(By.XPATH, '//*[@id="video-title"]')
name2 = []
print("영상개수", len(titles))
for title in titles:
    print(title.text)
    name2.append(title.text)

# 제목에서 키워드만을 뽑습니다. 키워드를 저장할 리스트 변수를 선언합니다.
word_list = []
# 제목 문장에서 단어별로 꺼내서 명사와 형용사인 경우 word_list에 저장합니다.
for ii in name2:
    for word, tag in okt.pos(ii):
        if tag in ['Noun', 'Adjective']:
            word_list.append(word)
# 키워드가 저장된 word_list에서 단어수를 셉니다.
word_list_count = Counter(word_list)
# wordcloud 데이터 시각화 툴을 실행합니다.
wc = WordCloud(font_path='malgun', width=400, height=400)
# 단어 출현 개수를 기준으로 wordcloud 만들기
result = wc.generate_from_frequencies(word_list_count)
plt.axis('off')
plt.imshow(result)
wc.to_file('youtube777.png')

# name2 변수안의 영상이름에 대한 컬럼 제목을 만들겠습니다.
name_title = {
    "video_title" : name2
}

# 판다스에서 변수데이터를 읽습니다.
df = pd.DataFrame(name_title)
# 읽은 데이터를 csv방식으로 저장합니다.
df.to_csv("youtube.csv", encoding="utf-8-sig")