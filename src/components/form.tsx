import React, { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { FormType } from '../remotes/enum';
import { Item } from '../remotes/interface';
import Button from './button';
import Checkbox from './checkbox';
import Select from './select';

interface Props extends React.ComponentProps<'form'> {
  items: Item[];
}

const Form = ({ items, className, ...props }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);

  useEffect(() => {
    if (step === items.length - 1) {
      setIsLastStep(true);
    } else {
      setIsLastStep(false);
    }
  }, [step, items.length]);

  const onClickNext = () => {
    if (formRef.current === null) {
      return;
    }

    const form = formRef.current;
    const formData = new FormData(form);
    const currentItemId = items[step].itemId;

    if (formData.get(String(currentItemId)) === null) {
      alert('값을 입력해주세요!');
      return;
    }

    setStep((prev) => prev + 1);
  };

  const onClickPrev = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <form
      ref={formRef}
      className={twMerge('flex flex-col h-full w-full', className)}
      {...props}
    >
      <h1 className="text-2xl font-bold">{items[step].title}</h1>
      {items.map((item, index) => {
        if (item.formType === FormType.Select) {
          return (
            <Select
              options={item.options}
              itemId={item.itemId}
              className={`mt-6 ${index !== step && 'hidden'}`}
              key={`form-${item.itemId}`}
            />
          );
        }

        if (item.formType === FormType.Checkbox) {
          return (
            <div
              className={`mt-6 ${index !== step && 'hidden'}`}
              key={`form-${item.itemId}`}
            >
              {item.options.map((option) => (
                <Checkbox
                  option={option}
                  itemId={item.itemId}
                  key={`checkbox-${option.id}`}
                />
              ))}
            </div>
          );
        }

        return null;
      })}
      <div className="flex gap-4 mt-6">
        {step !== 0 && (
          <Button className="w-fit" type="button" onClick={onClickPrev}>
            이전
          </Button>
        )}
        {isLastStep ? (
          <Button className="w-fit" type="submit">
            제출
          </Button>
        ) : (
          <Button className="w-fit" type="button" onClick={onClickNext}>
            다음
          </Button>
        )}
      </div>
    </form>
  );
};

export default Form;
