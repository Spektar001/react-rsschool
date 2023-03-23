import React, { Component } from 'react';
import './FormItem.css';
import NameInput from '../inputs/NameInput';
import PriceInput from '../inputs/PriceInput';
import DateInput from '../inputs/DateInput';
import SelectInput from '../inputs/SelectInput';
import CheckInput from '../inputs/CheckInput';
import RadioInput from '../inputs/RadioInput';
import FileInput from '../inputs/FileInput';
import { FormProduct } from '../Forms';

interface Props {
  updateCards: (card: FormProduct) => void;
}

export default class FormItem extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  dateInput: React.RefObject<HTMLInputElement> = React.createRef();
  selectInput: React.RefObject<HTMLSelectElement> = React.createRef();
  fileInput: React.RefObject<HTMLInputElement> = React.createRef();
  nameInput: React.RefObject<HTMLInputElement> = React.createRef();
  checkInput: React.RefObject<HTMLInputElement> = React.createRef();
  radioInputYes: React.RefObject<HTMLInputElement> = React.createRef();
  radioInputNo: React.RefObject<HTMLInputElement> = React.createRef();
  priceInput: React.RefObject<HTMLInputElement> = React.createRef();

  newCard = () => {
    const card = {
      date: this.dateInput.current?.value as string,
      category: this.selectInput.current?.value as string,
      image:
        this.fileInput.current !== null &&
        this.fileInput.current.files !== null &&
        URL.createObjectURL(this.fileInput.current.files[0]),
      title: this.nameInput.current?.value as string,
      norobot: this.checkInput.current?.checked as boolean,
      sale: this.radioInputYes.current?.checked
        ? (this.radioInputYes.current?.value as string)
        : (this.radioInputNo.current?.value as string),
      price: this.priceInput.current?.value as string,
    };

    this.props.updateCards(card);
  };

  addCardBtn = () => {
    console.log('дата:', this.dateInput.current?.value);
    console.log('категория:', this.selectInput.current?.value);
    console.log(
      'картинка:',
      this.fileInput.current !== null &&
        this.fileInput.current.files !== null &&
        URL.createObjectURL(this.fileInput.current.files[0])
    );
    console.log('название:', this.nameInput.current?.value);
    console.log('я не робот:', this.checkInput.current?.checked);
    console.log(
      'акция:',
      this.radioInputYes.current?.checked
        ? this.radioInputYes.current?.value
        : this.radioInputNo.current?.value
    );
    console.log('цена:', this.priceInput.current?.value);
    this.newCard();
  };

  render() {
    return (
      <form className="form">
        <h2 className="form__title">Enter your details</h2>
        <div className="field">
          Name product: <NameInput input={this.nameInput} />
        </div>
        <div className="field">
          Price: <PriceInput input={this.priceInput} />$
        </div>
        <div className="field">
          Publication date: <DateInput input={this.dateInput} />
        </div>
        <div className="field">
          Choice category: <SelectInput input={this.selectInput} />
        </div>
        <div className="field">
          I'm not ROBOT: <CheckInput input={this.checkInput} />
        </div>
        <div className="field">
          <span>Sale:</span>
          <RadioInput inputYes={this.radioInputYes} inputNo={this.radioInputNo} />
        </div>
        <div className="field">
          Upload image: <FileInput input={this.fileInput} />
        </div>
        <button onClick={this.addCardBtn} className="form__btn" type="button">
          add card
        </button>
      </form>
    );
  }
}
