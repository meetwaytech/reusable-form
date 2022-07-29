import React from 'react'
import { useForm } from 'react-hook-form'

const ReusableForm = ({ template }) => {
  let { register, handleSubmit, watch, formState: { errors } } = useForm()

  let { header, fields } = template


  const onSubmit = (values) => {
    console.log(values)
  }

  const renderField = (fields) => {
    return fields.map((field)=>{
    let {title,type,name,validationProps}=field;

    switch(type){
      case 'text':
        return(
          <div key={name} className='input-container'>
            <label htmlFor={name}>{title}</label>
            <input id={name} type='text' {...register(name, validationProps )} />
            {errors[name] && <span className='error-text'>{errors[name]['message']}</span>}
          </div>
        )
        case 'number':
          return(
            <div key={name} className='input-container'>
              <label htmlFor={name}>{title}</label>
              <input id={name} type='number' {...register(name, validationProps )} />
              {errors[name] && <span className='error-text'>{errors[name]['message']}</span>}
            </div>
          )
          case 'email':
            return(
              <div key={name} className='input-container'>
                <label htmlFor={name}>{title}</label>
                <input id={name} type='email' {...register(name, validationProps )} />
                {errors[name] && <span className='error-text'>{errors[name]['message']}</span>}
              </div>
            )
    }

 
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>{header} </h1>
        {
          renderField(fields)
        }
        <button type='submit'>submit</button>
      </form>
    </>
  )
}

export default ReusableForm