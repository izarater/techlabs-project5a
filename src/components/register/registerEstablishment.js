import React from 'react';

import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';

const registerEstablishment = () => {
  const dispatch = useDispatch()
  
  const { register, handleSubmit, errors } = useForm();
  return <div></div>;
};

export default registerEstablishment;
