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