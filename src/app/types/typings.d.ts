declare module "*.module.scss";
declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}
declare module "*.png"
declare module "*.jpeg"

declare const __IS_DEV__ : boolean;