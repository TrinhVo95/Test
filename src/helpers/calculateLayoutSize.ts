const calculateSize = (
  sizes: any,
  data: any,
  parentWidth: number,
  parentHeight: number
) => {
  if (data.children) {
    let autoSum = 0;
    let childrenSizes = data.children.map((child: any) => {
      if (child.size) return child.size;
      autoSum += 1;
      return "auto";
    });
    if (data.split === "vertical") {
      const restSize = childrenSizes.reduce(
        (result: number, item: any) =>
          item !== "auto" ? result - item : result,
        parentHeight
      );
      const autoSize = restSize / autoSum;
      childrenSizes = childrenSizes.map((child: any) =>
        child === "auto" ? autoSize : child
      );
    } else {
      let restSize = childrenSizes.reduce(
        (result: number, item: any) =>
          item !== "auto" ? result - item : result,
        parentWidth
      );
      const autoSize = restSize / autoSum;
      childrenSizes = childrenSizes.map((child: any) =>
        child === "auto" ? autoSize : child
      );
    }
    data?.children.map((child: any, index: number) => {
      let childHeight;
      let childWidth;
      if (data.split === "vertical") {
        childWidth = parentWidth;
        childHeight = child.size || childrenSizes[index];
        child.size = childHeight;
      } else {
        childWidth = child.size || childrenSizes[index];
        childHeight = parentHeight;
        child.size = childWidth;
      }
      sizes[child.id] = {
        id: child.id,
        title: child.title,
        width: childWidth,
        height: childHeight,
      };

      calculateSize(sizes, child, childWidth, childHeight);
    });
  }
};

export const calculateLayoutSize = (
  maxWidth: number,
  maxHeight: number,
  layout: any
) => {
  const sizes: any = {};
  calculateSize(sizes, layout, maxWidth, maxHeight);
  // console.log(sizes);
  return sizes;
};

export default calculateLayoutSize;
