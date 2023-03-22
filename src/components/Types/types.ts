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

export interface FormProduct {
  id?: number;
  title: string;
  price: number;
  date: string;
  category: string;
  norobot: string;
  image: string;
  rate: number;
}
// <div className="product__rate">{this.props.product.rating.rate}⭐</div>
// text input: название товара
// text input: цена
// date input: дата публикации
// dropdown/select: выбор категории
// checkbox: Подтвердите что вы не Робот
// switcher (radio): рейтинг 1-5
// file upload (image): загрузка фото

export interface State {
  text: string;
}

export interface Props {
  children?: React.ReactNode | React.ReactChild;
}
