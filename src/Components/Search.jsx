import React from "react";
import { useLocation } from "react-router-dom";
import SearchItem from "./SearchItem";

const Search = () => {
  const location = useLocation();

  const item = location?.state;


  // console.log(item);

  return (
    <div className=" my-10 flex flex-wrap justify-center gap-10">
      {item?.map((product) => {
        return (
          <SearchItem key={product.id} {...product}/>
        );
      })}
    </div>
  );
};

export default Search;
