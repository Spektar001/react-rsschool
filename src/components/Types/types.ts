export interface IProduct {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface State {
  text: string;
}

export interface Props {
  children?: React.ReactNode;
}

export interface Data {
  id: string;
  likes: number;
  description: string | null;
  alt_description: string;
  color: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    name: string;
    location: string;
  };
}
