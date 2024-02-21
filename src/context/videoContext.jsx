import { createContext, useState } from "react";
import { categories } from "../constants";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <VideoContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </VideoContext.Provider>
  );
};
