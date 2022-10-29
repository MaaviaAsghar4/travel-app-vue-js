export interface IDestination {
  name: string;
  slug: string;
  image: string;
  id: number;
  description: string;
  experiences: {
    name: string;
    slug: string;
    image: string;
    description: string;
  }[];
}
