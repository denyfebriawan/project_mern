import React from "react";

import GoalList from "./components/GoalList";

const App = () => {

  const courseGoals = [
    {id:'cg1', text: 'Finish the course'},
    {id:'cg2', text: 'Learn all about the course main topic'},
    {id:'cg3', text: 'Help other students in the course Q&amp;A'}
  ];

  return (
    <div className="course-goals">
      <h2>MERN</h2>
      <GoalList goals={courseGoals}/>
    </div>
  )
}

export default App;
