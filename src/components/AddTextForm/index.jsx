'use client';
import { useForm } from 'react-hook-form';
import addText from '../actions/addText';

export function AddTextForm() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async data => {
    await addText(data.message);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea {...register('message')} placeholder="Your text…"/>
      <button type="submit">Add Text</button>
    </form>
  );
}
