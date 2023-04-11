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
  alt_description: string | null;
  color: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    name: string | null;
    location: string | null;
  };
}

export interface ServerRespones<T> {
  total: number;
  total_pages: number;
  results: T[];
}
