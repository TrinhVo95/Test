import React, { useState } from "react";
import calculateLayoutSize from "../helpers/calculateLayoutSize";

const GridLayoutCol = ({ datas, width, height }: any) => {
  const [sizes, setSizes] = useState(calculateLayoutSize(width, height, datas));
  console.log(sizes);

  const renderItem = (sizes: any) => {
    let keys = Object.keys(sizes);
    return (
      <>
        {keys.map((item) => {
          return (
            <>
              <div
                key={sizes[item].id}
                style={{
                  width: `${sizes[item].width}px`,
                  border: "1px solid red",
                  height: `${sizes[item].height}px`,
                }}
              >
                {sizes[item].title}
              </div>
            
            </>
          );
        })}
      </>
    );
  };

  return (
    <div style={{ display: "flex", border: "1px solid", width, height }}>
      {renderItem(sizes)}
    </div>
  );
};

export default GridLayoutCol;
