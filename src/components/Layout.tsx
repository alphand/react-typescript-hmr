
import * as React from 'react';

export interface LayoutProps { 
  children?: any 
}

export const Layout = (props: LayoutProps) => {
  return <div> 
    <h1>Layout Fin Lay me !! update 1</h1> 
    {props.children} 
  </div>;
}