import React from "react";
import './../styles/App.css';

const App = () => {
  const relatives = [
    "Uncle John",
    "Aunt Mary",
    "Cousin David",
    "Grandma Smith",
    "Grandpa Wilson",
    "Sister Emily",
    "Brother Michael"
  ];

  return (
    <div>
      {/* Do not remove the main div */}
      <h2>Diwali Relative Visit List</h2>
      <ol key="relativeList" className="relative-list">
        {relatives.map((relative, index) => (
          <li 
            key={`relativeListItem${index + 1}`}
            className="relative-item"
          >
            {relative}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default App;