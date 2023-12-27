import React, { useState, useEffect } from "react";
import { MongoClient } from "mongodb";

const TimerButton = () => {
  const [problem, setProblem] = useState(null);

  const fetchProblem = async () => {
    const client = new MongoClient("mongodb://localhost:27017");
    await client.connect();

    const db = client.db("code-time");

    const collection = db.collection("problems");

    const query = {};
    const options = {};

    const cursor = await collection.find(query, options);
    const problemsArray = await cursor.toArray();

    const randomProblem = problemsArray[Math.floor(Math.random() * problemsArray.length)];

    setProblem(randomProblem);
  };

  useEffect(() => {
    fetchProblem();
  }, []);

  return (
    <div>
      <button onClick={fetchProblem}>Get Problem</button>
      <div id="problem-container">
        {problem && (
          <div>
            <h3>{problem.title}</h3>
            <p>{problem.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimerButton;