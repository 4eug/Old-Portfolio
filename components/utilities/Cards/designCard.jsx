/* eslint-disable @next/next/no-img-element */
import React from "react";
import DesignMiniCard from "../miniCards/designMiniCard";

const DesignCards = (props) => {
  const designArray = [
    { title: "Design", subtitle: "Mobile Development & Product Design", id: 1 },
    { title: "Music", subtitle: "Music & Audio", id: 2 },
    { title: "Software", subtitle: "Software Development", id: 3 },
    { title: "Dance", subtitle: "Dance & Movement", id: 4 },
  ]
  return (
    <div className="w-full px-4 py-8 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-10">
        {designArray.map((item) => (
          <DesignMiniCard
            title={item.title}
            subtitle={item.subtitle}
            key={item.id}
          />
          ))}
      </div>
    </div>
  );
};

export default DesignCards;
