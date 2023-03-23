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

// export interface FormProduct {
//   date: string;
//   category: string;
//   image: string | false;
//   title: string;
//   norobot: boolean;
//   sale: string;
//   price: number;
// }

export interface State {
  text: string;
}

export interface Props {
  children?: React.ReactNode;
}
