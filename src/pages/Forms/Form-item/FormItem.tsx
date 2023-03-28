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
