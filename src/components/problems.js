import React { useState, useEffect } from "react";
import { MongoClient, ObjectID }  from "mongodb";

export const Problems = () => {
    const [problem, setProblem] = useState(null);

    const fetchProblem = async () => {
        // 
    };

    useEffect(() => {
        fetchProblem();
    }, []);

    return (

    )
}