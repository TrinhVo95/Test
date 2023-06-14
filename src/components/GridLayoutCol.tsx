import React, { MouseEventHandler, useEffect, useRef } from "react";
import calculateLayoutSize from "../helpers/calculateLayoutSize";



const layout = {
  border: "1px solid",
  height: '100%',
  width: '90%',
  marginLeft:'auto',
  marginRight:'auto',

}

const GridLayoutCol = ({ datas, width, height }: any) => {
  calculateLayoutSize(width, height, datas);
  // const movingRef = useRef(false);
  // const tranformPositionRef = useRef({
  //   top: 0,
  //   left: 0,
  // });

  // const resizeRef = useRef<HTMLDivElement>(null);

  // const handleMoveDown: MouseEventHandler<HTMLDivElement> = (event) => {
  //   // console.log(111, event);
  //   // console.log(resizeRef);
  //   movingRef.current = true;
  // };

  // useEffect(() => {
  //   const handleMouseUp = () => {
  //     // console.log(movingRef);
  //     movingRef.current = false;

  //     tranformPositionRef.current = {
  //       top: 0,
  //       left: 0,
  //     };
  //     // moveResizeElement(0, 0);
     
     
  //   };
  //   const moveResizeElement = (left: number, top: number) => {
  //     if (!resizeRef.current) return;
  //     resizeRef.current.style.transform = `translate(${left}px, ${top}px)`;
     
  //   };
  //   const handleMouseMove = (event: MouseEvent) => {
  //     if (!movingRef.current) return;
  //     event.preventDefault();
  //     event.stopPropagation();
  //     tranformPositionRef.current.left += event.movementX;
  //     tranformPositionRef.current.top += event.movementY;
  //     console.log(event);

  //     moveResizeElement(0,tranformPositionRef.current.top);
  //   };
  //   document.addEventListener("mouseup", handleMouseUp);
  //   document.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     document.removeEventListener("mouseup", handleMouseUp);
  //     document.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);
  // const renderChild = (datas: any) =>
  //   datas.map((data: any, index:number) => {
  //     // console.log(data,index);
     
      
  //     if (data.children) {
  //       // const length = data.children.length
  //       const lastItem = data.children.slice(-1)[0]
  //       console.log(data.children[2]===lastItem);
    

  //   //  if (index === lastItem)
  //   //  return (
  //   //   <section style={{flex:'1'}}>
  //   //    {renderChild(lastItem.title)}
  //   //   </section>
  //   //  )
  //            return (
        
  //         <section key={data.id} style={{...layout,display:'flex',flexDirection: 'column',marginTop:`${data.marginTop}`}}>
  //           {renderChild(data.children)}
           
  //         </section>
      
          
  //       );
  //            }
      
  // //  console.log(Object.keys(data).length,data.children[2])
  
   
     
  //     return (
  //       <>
  //       <section key={data.id} style={{...layout,height:`${data.height}`,marginTop:`${data.marginTop}`}}>
  //         {data.title}
  //       </section>
  //        {/* <div
  //         ref={resizeRef}
  //         className="horizontal"
  //         id="horizontal"
  //         onMouseDown={handleMoveDown}
  //         style={{
  //           cursor: "row-resize",
  //           border:'1px solid red'
  //         }}
  //       ></div> */}
  //       </> 
        
  //     );
  //   });
  // return (

  //   <section style={{ width, height,display:'flex'}}>{renderChild(datas)}</section>
  

    
   
  // );
  return <></>
};

export default GridLayoutCol;
