import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

const useForm = (callback, validate) => {
  const [ isSubmitting, setSubmitting ] = useState(false)

  const [ values, setValues ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const [ errors, setErrors ] = useState({})

  const checkEmail = async email => {
    const url = process.env.REACT_APP_url_check_user
    const campaignUuid = process.env.REACT_APP_campaignUuid
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=utf-8',
      },
      url,
      data: {
        "campaignUuid": campaignUuid,
        "data": {
         "email": email,
        }
      }
    }
    try {
      return await axios(options)
    } catch (err) {
      return err.message
    }
  }

  const submit = useCallback(
    async () => {
      const url = process.env.REACT_APP_url_signup
      const campaignUuid = process.env.REACT_APP_campaignUuid
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=utf-8',
        },
        url,
        data: {
          "campaignUuid": campaignUuid,
          "data": {
            "firstName": values.firstName,
            "lastName": values.lastName,
            "email": values.email,
            "password": values.password,
          }
        }
      }
      try {
        const result = await axios(options)
        callback(result.data.message)
        return result
      } catch (err) {
        return err.message
      }
    },
    [callback, values.email, values.firstName, values.lastName, values.password],
  )
  
  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting) {
      checkEmail(values.email.trim())
          .then(result => {
            if (result.status !== 200) setErrors({ ...errors, email: 'Service error.' })
            else if (result.data.data.status === 'EXISTS') setErrors({ ...errors, email: 'The email is already registered.' })
            else submit()
          })
          .catch(err => setErrors({ ...errors, email: err.message }))
    }
  }, [errors, isSubmitting, submit, values.email])

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