import { Field } from 'formik'
import FeatherIcon from 'feather-icons-react'
import Card from '../Card'
const useLabelText = (str) => {
  // adding space between strings
  const result = str.replace(/([A-Z])/g, ' $1')

  // converting first character to uppercase and join it to the final string
  const final = result.charAt(0).toUpperCase() + result.slice(1)

  return final // "My Name"
}

const FormField = ({
  fieldName,
  inputClassName = '',
  as,
  children,
  icon = '',
  value,
}) => {
  const labelText = useLabelText(fieldName)
  const type =
    ['password', 'email'].find((e) => e === fieldName.toLowerCase()) || 'text'
  const className = `w-full text-sm rounded-lg bg-transparent-900 ${inputClassName}`
  return (
    <Card className="my-2 px-0.75 py-2">
      <label className="text-light-900 text-xs">{labelText}</label>
      {as === 'select' ? (
        <Field name={fieldName} as={as} required className={className}>
          {children}
        </Field>
      ) : (
        <div className="">
          {!value ? (
            <Field
              name={fieldName}
              placeholder={fieldName}
              type={type}
              required
              className={className}
            />
          ) : (
            <input value={value} disabled className="w-full bg-light-100" />
          )}
        </div>
      )}
    </Card>
  )
}

export default FormField
