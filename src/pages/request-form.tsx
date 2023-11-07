import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Form from '../components/form';
import { useGetForm } from '../hooks/query';
import { useAppDispatch } from '../hooks/store';
import { Output } from '../store/interface';
import { setOutput } from '../store/slice/output';

const RequestFormPage = () => {
  const [searchParams] = useSearchParams();
  const { data, isSuccess } = useGetForm(searchParams.get('id') as string, {
    enabled: !!searchParams.get('id'),
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formElements = form.elements as HTMLFormControlsCollection;

    const output: Output = {
      id: Number(searchParams.get('id') as string),
      items: [],
    };

    for (const element of formElements) {
      if (element instanceof HTMLSelectElement) {
        const answer = data?.items
          .find((item) => item.itemId === Number(element.name))
          ?.options.find((option) => option.id === Number(element.value))?.text;

        if (answer === undefined) {
          alert('값을 입력해주세요!');
          return;
        }

        output.items.push({
          id: Number(element.name),
          answer,
        });
      }

      if (element instanceof HTMLInputElement) {
        const answer = data?.items
          .find((item) => item.itemId === Number(element.name))
          ?.options.find((option) => option.id === Number(element.value))?.text;

        if (answer === undefined) {
          alert('값을 입력해주세요!');
          return;
        }

        if (element.checked) {
          if (output.items.find((item) => item.id === Number(element.name))) {
            output.items.find(
              (item) => item.id === Number(element.name),
            )!.answer += `,${answer}`;
          } else {
            output.items.push({
              id: Number(element.name),
              answer,
            });
          }
        }
      }
    }

    dispatch(setOutput(output));
    navigate('/output');
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col h-full w-full p-8">
        <h1 className="text-4xl font-extrabold">{data.title}</h1>
        <Form className="mt-3" items={data.items} onSubmit={onSubmit} />
      </div>
    );
  }

  return null;
};

export default RequestFormPage;
