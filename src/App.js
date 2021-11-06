import { useEffect, useState } from "react";
import style from "./App.module.css";

function App() {
  const [meals, setMeals] = useState(
    !localStorage.getItem("meals") ? 34 : localStorage.getItem("meals")
  );

  useEffect(() => {
    if (!localStorage.getItem("meals")) {
      localStorage.setItem("meals", 34);
      setMeals(34);
    }
  }, []);

  const decrementMeal = () => {
    setMeals(meals - 1);
    localStorage.setItem("meals", meals - 1);
  };

  return (
    <div className={style.container}>
      <h1 className={style.logo}>Meal tracker</h1>
      <h1 className={style.header}>{meals}</h1>
      <button className={style.button} onClick={decrementMeal}>
        Decrement a meal
      </button>
    </div>
  );
}

export default App;
