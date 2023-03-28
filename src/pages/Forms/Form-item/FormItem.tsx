import './FormItem.css';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { NameInput } from '../inputs/NameInput';
import { PriceInput } from '../inputs/PriceInput';
import { DateInput } from '../inputs/DateInput';
import { SelectInput } from '../inputs/SelectInput';
import { CheckInput } from '../inputs/CheckInput';
import { RadioInput } from '../inputs/RadioInput';
import { FileInput } from '../inputs/FileInput';
import { FormProduct } from '../Forms';

// interface Props {
//   updateCards: (card: FormProduct) => void;
// }

// interface State {
//   nameValid: boolean;
//   priceValid: boolean;
//   dateValid: boolean;
//   fileValid: boolean;
//   checkValid: boolean;
//   formValid: boolean;
// }

interface ComponentProps {
  updateCards: React.Dispatch<React.SetStateAction<FormProduct[]>>;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FormInputs {
  date: string;
  category: string;
  image: FileList;
  title: string;
  norobot: boolean;
  sale: string;
  price: string;
}

export const FormItem = (props: ComponentProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const card = {
      date: data.date,
      category: data.category,
      image: URL.createObjectURL(data.image[0]),
      title: data.title,
      norobot: data.norobot,
      sale: data.sale,
      price: data.price,
    };

    props.updateCards((cards) => [...cards, card]);
    props.closeModal(true);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form__title">Enter your details</h2>
      <div className="field">
        Name product: <NameInput register={register} errors={errors} />
      </div>
      <div className="field">
        Price: <PriceInput register={register} errors={errors} />
      </div>
      <div className="field">
        Publication date: <DateInput register={register} errors={errors} />
      </div>
      <div className="field">
        Choice category: <SelectInput register={register} />
      </div>
      <div className="field">
        You are a man? <CheckInput register={register} errors={errors} />
      </div>
      <div className="field">
        <span>Sale:</span>
        <RadioInput register={register} />
      </div>
      <div className="field">
        Upload image: <FileInput register={register} errors={errors} />
      </div>
      <button className="form__btn" type="submit">
        add card
      </button>
    </form>
  );
};

// export default class FormItem extends Component<Props, State> {
//   dateInput: React.RefObject<HTMLInputElement> = React.createRef();
//   selectInput: React.RefObject<HTMLSelectElement> = React.createRef();
//   fileInput: React.RefObject<HTMLInputElement> = React.createRef();
//   nameInput: React.RefObject<HTMLInputElement> = React.createRef();
//   checkInput: React.RefObject<HTMLInputElement> = React.createRef();
//   radioInputYes: React.RefObject<HTMLInputElement> = React.createRef();
//   radioInputNo: React.RefObject<HTMLInputElement> = React.createRef();
//   priceInput: React.RefObject<HTMLInputElement> = React.createRef();

//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       nameValid: true,
//       priceValid: true,
//       dateValid: true,
//       fileValid: true,
//       checkValid: true,
//       formValid: true,
//     };
//   }

//   nameValidation = async () => {
//     this.nameInput.current?.value.length === 0
//       ? this.setState({ nameValid: false })
//       : this.setState({ nameValid: true });
//   };

//   priceValidation = async () => {
//     this.priceInput.current?.value.length === 0
//       ? this.setState({ priceValid: false })
//       : this.setState({ priceValid: true });
//   };

//   dateValidation = async () => {
//     this.dateInput.current?.value.length === 0
//       ? this.setState({ dateValid: false })
//       : this.setState({ dateValid: true });
//   };

//   fileValidation = async () => {
//     this.fileInput.current?.files?.length === 0
//       ? this.setState({ fileValid: false })
//       : this.setState({ fileValid: true });
//   };

//   checkValidation = async () => {
//     !this.checkInput.current?.checked
//       ? this.setState({ checkValid: false })
//       : this.setState({ checkValid: true });
//   };

//   formValidation = async () => {
//     await this.nameValidation();
//     await this.priceValidation();
//     await this.dateValidation();
//     await this.fileValidation();
//     await this.checkValidation();

//     if (
//       !this.state.nameValid ||
//       !this.state.priceValid ||
//       !this.state.dateValid ||
//       !this.state.fileValid ||
//       !this.state.checkValid
//     ) {
//       this.setState({ formValid: false });
//     } else {
//       this.setState({ formValid: true });
//     }
//   };

//   newCard = () => {
//     const card = {
//       date: this.dateInput.current?.value as string,
//       category: this.selectInput.current?.value as string,
//       image:
//         this.fileInput.current !== null &&
//         this.fileInput.current.files !== null &&
//         URL.createObjectURL(this.fileInput.current.files[0]),
//       title: this.nameInput.current?.value as string,
//       norobot: this.checkInput.current?.checked as boolean,
//       sale: this.radioInputYes.current?.checked
//         ? (this.radioInputYes.current?.value as string)
//         : (this.radioInputNo.current?.value as string),
//       price: this.priceInput.current?.value as string,
//     };

//     this.props.updateCards(card);
//   };

//   addCardBtn = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     await this.formValidation();

//     if (this.state.formValid) {
//       this.newCard();
//       (event.target as HTMLFormElement).reset();
//     }
//   };

//   render() {
//     return (
//       <form className="form" onSubmit={this.addCardBtn}>
//         <h2 className="form__title">Enter your details</h2>
//         <div className="field">
//           Name product: <NameInput input={this.nameInput} isValid={this.state.nameValid} />
//         </div>
//         <div className="field">
//           Price: <PriceInput input={this.priceInput} isValid={this.state.priceValid} />
//         </div>
//         <div className="field">
//           Publication date: <DateInput input={this.dateInput} isValid={this.state.dateValid} />
//         </div>
//         <div className="field">
//           Choice category: <SelectInput input={this.selectInput} />
//         </div>
//         <div className="field">
//           You are a man? <CheckInput input={this.checkInput} isValid={this.state.checkValid} />
//         </div>
//         <div className="field">
//           <span>Sale:</span>
//           <RadioInput inputYes={this.radioInputYes} inputNo={this.radioInputNo} />
//         </div>
//         <div className="field">
//           Upload image: <FileInput input={this.fileInput} isValid={this.state.fileValid} />
//         </div>
//         <button className="form__btn" type="submit">
//           add card
//         </button>
//       </form>
//     );
//   }
// }
