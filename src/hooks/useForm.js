import { useState, useEffect } from 'react'

const useForm = (callback, validate) => {
  const [ isSubmitting, setSubmitting ] = useState(false)

  const [ values, setValues ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const [ errors, setErrors ] = useState({})

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors, isSubmitting, callback])

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value 
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setErrors(validate(values))
    setSubmitting(true)
  }

  return { handleChange, values, handleSubmit, errors }
}

export default useForm