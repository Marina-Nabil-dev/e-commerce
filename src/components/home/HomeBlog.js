import React, { useState, useEffect } from "react";
import { getApiData } from "../../helpers/getApiData";
import { HomeRoutes } from "../../routes/home";

export default function HomeBlog() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await getApiData(HomeRoutes.LATEST_ARTICLES);
      setBlogs(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="container p-[100px_80px]">
      <h1 className="text-4xl text-primaryDarkest font-bold text-left mb-8">
        Latest News
      </h1>
    </div>
  );
}
