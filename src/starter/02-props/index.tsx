import { type PropsWithChildren } from "react";

// type ComponentProps = {
//   name:string,
//   id:number, 
//   children?: React.ReactNode
// }

type ComponentProps = PropsWithChildren<{
  name: string;
  id: number;
}>;

function Component(props: ComponentProps) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>ID: {props.id}</h2>
      {props.children}
    </div>
  );
}
export default Component;
