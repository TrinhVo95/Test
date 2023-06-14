import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import "./App.css";
import GridLayoutCol from "./components/GridLayoutCol";



const App = () => {


 
//   const datas = {
//     split: 'vertical', // vertical horizontial
//     children:[
 
//   {
//     id:'1',
//     size: 200,
//     title: 'col1',  
//   },
//   {
//     id:'2',
//     title: 'col2',
   
//     // children:[
//     //   { id:'2.1',
//     //    title: 'col2.1',
//     //     height:'200px',
//     //     marginTop:'10px'
//     //   },
//     //     { id:'2.2',
//     //    title: 'col2.2',
//     //     height:100,
//     //     marginTop:'10px'
//     //   },
//     //    { id:'2.3',
//     //    title: 'col2.3',
//     //     // height:'50px',
//     //     marginTop:'10px'
//     //   },
//     //   { id:'2.4',
//     //   title: 'col2.4',
//     //    // height:'auto',
//     //    marginTop:'10px'
//     //  }
//     //  ]
      
//   },


// ]}

const datas = {
  split: 'horizontal', // vertical horizontial
  children:[

{
  id:'1',
  size: 200,
  title: 'col1',  
},
{
  id:'2',
  title: 'col2',   
},
{
  id:'3',
  title: 'col3',   
},

]}



  return (
   
  
 <GridLayoutCol  datas={datas} width={400} height={500} />
 
   
      /* <div className="container" id="container">
        <div className="item" id="item1">
          1
        </div>
                <div
          ref={resizeRef}
          className="vertical"
          id="vertical"
          onMouseDown={handleMoveDown}
          style={{
            cursor: "col-resize",
          }}
        ></div>
        <div className="item">2</div>
      </div> */
   
   
    
  );
};

export default App;
