from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome()
driver.get("https://www.youtube.com/")

search_input = driver.find_element(By.CSS_SELECTOR, "input#search")
search_input.send_keys("뉴진스")

time.sleep(3)

search_input.send_keys(Keys.RETURN)
time.sleep(2)

titles = driver.find_elements(By.ID, "video-title")
for title in titles:
    print(title.text)