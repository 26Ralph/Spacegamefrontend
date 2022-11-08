import { useEffect, useState } from "react";
import deleteHighScore from "../api/deleteHighScore";
import getHighScores from "../api/getHighScores";

import axios from "axios";
/**
 * React hook that fetchs the data from server
 * @returns
 */
export default function useAllHighScores() {
  const [allScores, setAllScores] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);

  // only run once
  useEffect(() => {
    console.log("test");
    /**
     * Fetch all score data
     */
    async function fetchData() {
      try {
        const data = await getHighScores();
        console.log("success");
        console.log(data);
        setAllScores(data.data.payload);
      } catch (e) {
        console.log(e);
      }
    }

    // call method
    fetchData();
  }, []);

  // makes api req to delete
  const deleteScore = async (id) => {
    try {
      setIsDeleting(true);
      await deleteHighScore(id);
      setAllScores(allScores.filter((score) => score._id !== id));
      console.log("success, we delete the score");
      setIsDeleting(false);
    } catch (e) {
      console.log(e);
      setIsDeleting(false);
    }
  };

  const updateScore = async (id) => {
    const newScore = prompt("Enter New Score: ");
    const newName = prompt("Enter New Name: ");

    try {
      axios.put("http://localhost:4200/update-score", {
      score: newScore, username: newName, _id: id
    })
    .then(() => {
      // new element created
      setAllScores(allScores.map((value) => {
        // if the element has the id wanting to update, get a  new obj
        return ( value._id === id ? {_id: id, score: newScore, username: newName} :  value)
      }))
      })
    } catch (e) {
      console.log(e);

    }
  }

  return {
    allScores,
    deleteScore,
    isDeleting,
    updateScore

  };
}
