import React, { Component } from 'react';
import './FormItem.css';
import NameInput from '../inputs/NameInput';
import PriceInput from '../inputs/PriceInput';
import DateInput from '../inputs/DateInput';
import SelectInput from '../inputs/SelectInput';
import CheckInput from '../inputs/CheckInput';
import RadioInput from '../inputs/RadioInput';
import FileInput from '../inputs/FileInput';

export default class FormItem extends Component {
  dateInput: React.RefObject<HTMLInputElement> = React.createRef();
  selectInput: React.RefObject<HTMLSelectElement> = React.createRef();
  fileInput: React.RefObject<HTMLInputElement> = React.createRef();
  nameInput: React.RefObject<HTMLInputElement> = React.createRef();
  checkInput: React.RefObject<HTMLInputElement> = React.createRef();
  radioInputYes: React.RefObject<HTMLInputElement> = React.createRef();
  radioInputNo: React.RefObject<HTMLInputElement> = React.createRef();
  priceInput: React.RefObject<HTMLInputElement> = React.createRef();

  addCardBtn = () => {
    this.nameInput.current?.value;
    this.priceInput.current?.value;
    this.dateInput.current?.value;
    this.selectInput.current?.value;
    this.radioInputYes.current?.value;
    this.radioInputNo.current?.value;
    this.fileInput.current?.value;
    this.checkInput.current?.value;
    console.log(this.nameInput.current?.value);
    console.log(this.priceInput.current?.value);
    console.log(this.dateInput.current?.value);
    console.log(this.selectInput.current?.value);
    console.log(
      this.radioInputYes.current?.checked
        ? this.radioInputYes.current?.value
        : this.radioInputNo.current?.value
    );
    console.log(this.fileInput.current?.value);
    console.log('checkbox', this.checkInput.current?.checked);
  };

  render(): React.ReactNode {
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
