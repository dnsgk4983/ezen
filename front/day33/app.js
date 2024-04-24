const fs = require("fs");
const path = require("path");

const express = require("express");
const uuid = require("uuid");
// 아까만든 파일을 등록합니다
const resData = require("./util/restaurant-data");

const app = express();
const router = express.Router();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/restaurants", function (req, res) {
  // 쿼리 데이터의 순서를 저장합니다
  let order = req.query.order;
  // 'desc' = 내림차 순으로 다음순번의 기본값을 세팅해 둡니다
  let nextOrder = "desc";

  // 혹시라도 오름차순도 내림차순도 아닌 경우엔 오름차순으로 정해 둡니다
  if (order !== "asc" && order !== "desc") {
    order = "asc";
  }
  // 현재 내림차순으로 정해져 있다면 다음번엔 오름차순입니다
  if (order === "desc") {
    nextOrder = "asc";
  }

  const storedRestaurants = resData.getStoredRestaurants();
  // 읽어들인 json데이터가 잇는 storedRestaurants를 sort명령어로 정렬합니다
  storedRestaurants.sort(function (resA, resB) {
    if (
      // 오름차순이 기준인데 a이름이 b이름보다 크면 순서를 바꿔서 오름차순으로 만들어 주세요
      (order === "asc" && resA.name > resB.name) ||
      // 내림차순이 기준인데 a이름이 b이름보다 작으면 순서를 바꿔서 내림차순으로 만들어 주세요
      (order === "desc" && resB.name > resA.name)
    ) {
      return 1;
    }
    return -1;
  });

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
    nextOrder: nextOrder,
  });
});

// 음식점 상세 정보를 보여주는 라우트
app.get("/restaurants/:id", function (req, res) {
  // 요청 URL에서 음식점 ID를 가져옵니다.
  const restaurantId = req.params.id;
  // resData에 저장된 자바스크립트 파일에서 getStoredRestaurants 함수를 꺼내씁니다
  const storedRestaurants = resData.getStoredRestaurants();

  // 저장된 음식점 목록을 반복하면서 요청된 음식점 ID와 일치하는 음식점을 찾습니다.
  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantId) {
      // 일치하는 음식점이 있으면 해당 음식점 정보를 렌더링합니다.
      return res.render("restaurant-detail", { restaurant: restaurant });
    }
  }
  // 저장된 음식점 목록이 없다면? 아까 만든 404페이지를 띄운다
  res.render("404");
});

// 음식점 추천 폼을 보여주는 라우트
app.get("/recommend", function (req, res) {
  // 추천 폼을 렌더링합니다.
  res.render("recommend");
});

// 새 음식점을 추천하는 POST 요청 핸들러
app.post("/recommend", function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4();
  // resData에 저장된 자바스크립트 파일에서 getStoredRestaurants 함수를 꺼내씁니다
  const restaurants = resData.getStoredRestaurants();

  restaurants.push(restaurant);

  resData.storeRestaurants(restaurants);

  res.redirect("/confirm");
});

app.get("/confirm", function (req, res) {
  res.render("confirm");
});

app.get("/about", function (req, res) {
  res.render("about");
});

// 등록된 경로가 없는경우 404페이지 표시하기
app.use(function (req, res) {
  res.render("404");
});

app.use(function (error, req, res, next) {
  res.render("500");
});

app.listen(3000);
