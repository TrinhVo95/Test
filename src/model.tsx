import { ReactNode } from "react";

export interface GridLayoutColumn {
    title?: string | ReactNode;
    key?: string;
    split?: "horizontal" | "vertical"; 
  sizes?: Array<string | number>;
    children?: GridLayoutColumn;

}
export interface GridLayoutItems {
    column: GridLayoutColumn;
    onChangeSize?: (sizes: Array<string | number>) => void;
}

export interface GridLayout {
    width: number | string;
    height: number | string;
    layout: GridLayoutColumn;
    onChange?: (sizes: Record<string, { width: number; height: number }>) => void;
}






// const GridLayoutCol = ({ datas, width, height }: any) => {
    // const [sizes, setSizes] = useState(calculateLayoutSize(width, height, datas));
 
 //    const renderChild = ({sizes}:any) => {
 // console.log(sizes);
 // return (
 //   <div style={{border:'1px solid'}}>
 //     {sizes.hight}
 //   </div>
 // )
 //    }
     // console.log(sizes)
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
  
  
   //            return (
         
   //         <section key={data.id} style={{...layout,display:'flex',flexDirection: 'column',marginTop:`${data.marginTop}`}}>
   //           {renderChild(data.children)}
            
   //         </section>
       
           
   //       );
   //            }
       
      
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
 
//    return( 
//    <>
 
//  tfjyftjfytuj
 
 
//    </>)
//  };