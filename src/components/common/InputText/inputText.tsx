import React from 'react'
import Form from 'react-bootstrap/Form'

interface InputProps {
  className: string
  type: string
  controlId?: string
  placeholder: string
  label: string
  required?: boolean
  feedBack?: string
  value?: string
  prefix?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputText = ({
  className,
  type,
  controlId,
  placeholder,
  label,
  required,
  feedBack,
  onChange,
  value,
  prefix
}: InputProps) => {
  return (
    <Form.Group className={className} controlId={controlId}>
      <Form.Label>{label}</Form.Label>

      <Form.Control
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
        prefix={prefix}
      />

      <Form.Control.Feedback type="invalid">{feedBack}</Form.Control.Feedback>
    </Form.Group>
  )
}

export default InputText
