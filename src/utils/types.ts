export interface IMenuItem {
    id: number;
    title: string;
    links: { linkId: number; text: string; href: string }[];
  }
  