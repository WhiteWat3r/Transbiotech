export interface IMenuItem {
    id: number;
    title: string;
    links: { linkId: number; text: string; href: string }[];
  }
  
  export interface IAdvantage {
    id: number;
    title: string;
    text?: JSX.Element;
  }