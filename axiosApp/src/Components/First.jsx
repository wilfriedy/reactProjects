import React, { useEffect } from "react";
import axios from "axios";

const url = "https://course-api.com/react-store-products";

function First() {
  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  });
  return <div></div>;
}

export default First;
