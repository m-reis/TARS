import { ReactNode } from "react";

export interface DrawerComponentsProps {
  open: boolean;
  toggleDrawer?: () => void;
  handleDrawerClose?: () => void;
  children?: ReactNode;
}