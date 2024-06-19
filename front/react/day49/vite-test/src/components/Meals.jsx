import { useState, useEffect } from "react";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";
import MealItem from "./MealItem.jsx";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

if (isLoading) {
  return <p className="center"> 식사데이터 로딩중...</p>
}

if (error) {
  return <Error title="식사데이터 로딩에 실패하였습니다" message={error} />
}



  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
