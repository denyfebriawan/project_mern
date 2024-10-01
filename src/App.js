import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the course" },
    { id: "cg2", text: "Learn all about the course main topic" },
    { id: "cg3", text: "Help other students in the course Q&amp;A" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal)); //Jika data baru perlu data dari state sebelumnya
  };

  return (
    // <div className="course-goals">
    //   <h2>MERN</h2>
    //   <NewGoal onAddGoal={addNewGoalHandler}/>
    //   <GoalList goals={courseGoals}/>
    // </div>

    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
