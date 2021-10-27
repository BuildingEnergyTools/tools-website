export type NavItem = {
  route: string;
  icon: string;
  fontAwesome?: string;
  title: string;
} | {
  route: string;
  image: string;
  alt: string;
  title: string;
};
