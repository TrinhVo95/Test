
const calculateSize = (
  obj: any,
  data: any,
  parentWidth: number,
  parentHeight: number
) => {
  if (data.children) {
    let obj = {};
    let autoSum = 0;
    let childrenSizes = data.children.map(
      (child: any) => {
        if (child.size) return child.size;
        autoSum += 1;
        return 'auto';

      }
    );
    // console.log(childrenSizes, autoSum);
    if (data.split === "vertical") {
      const restSize = childrenSizes.reduce(
        (result: number, item: any) =>
          item !== "auto" ? result - item : result,
        parentHeight
      );
    //   console.log("restSize", restSize);
      const autoSize = restSize / autoSum;
      childrenSizes = childrenSizes.map((child: any) => child === 'auto' ? autoSize : child)
    } else {
      let restSize = childrenSizes.reduce(
        (result: number, item: any) =>
          item !== "auto" ? result - item : result,
        parentWidth
      );
      const autoSize = restSize/autoSum;
      childrenSizes = childrenSizes.map((child:any)=> child === 'auto' ? autoSize : child)
    }
    console.log(childrenSizes);
  }

  
};

const renderItem = (data:any) => {

//  data.map((item:any)=> {
//     if(data.children)
//     return (
//         <div>
//         {renderItem(data.children)}
//         </div>
//     )
//  }
// )

}

export const calculateLayoutSize = (
  maxWidth: number,
  maxHeight: number,
  layout: any
) => {
 
  calculateSize({}, layout, maxWidth, maxHeight);
};

export default calculateLayoutSize;
