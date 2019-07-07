import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function Shop() {
  useEffect(() => {
    fetchFacts();
  }, [])

  const [facts, setFacts] = useState([]);

  const fetchFacts = async () => {
    const data = await fetch("http://cat-fact.herokuapp.com/facts");
    const facts = await data.json();

    console.log(facts);
    setFacts(facts.all);
  }

  return (
    <div>
      <h1>Facts page</h1>
      {
        facts.map(fact => (
          <div key={fact._id}>
            <h3>{fact.text}</h3>
            <h5>{ fact.user ? `${fact.user.name.first} ${fact.user.name.last}` : "Unknown User"}</h5>
            <h5>Upvotes: { fact.upvotes}</h5>
            <h5><Link to={`/facts/${fact._id}`}>View More Details</Link></h5>
          </div>
        ))
      }
    </div>
  );
}

export default Shop;
