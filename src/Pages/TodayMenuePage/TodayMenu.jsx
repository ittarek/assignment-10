import React, { useEffect, useState } from "react";
// import { FaWolfPackBattalion } from "react-icons/fa";
import ShowMenu from "./ShowMenu";

const TodayMenu = () => {
  const [menuData, setMenuData] = useState([]);
  // console.log("menu",menuData);

  useEffect(() => {
    fetch("https://b7-a10-chef-recipe-hunter-server-side-ittarek.vercel.app/todayMenu")
      .then(res=>res.json())
      .then(data =>setMenuData(data))
  }, []);
  return (
    <div>
      <h2 className="fst-italic text-info mt-5 mb-5">Today's Menu</h2>

      <div className="row">
          {
                    menuData.map(data => <ShowMenu key={data.id} data={data}></ShowMenu>)
          }
      </div>
    </div>
  );
};

export default TodayMenu;
