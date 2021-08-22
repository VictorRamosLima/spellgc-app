import { forwardRef, ForwardRefRenderFunction } from 'react'

interface OptionProps {
  value: string
  label: string
}

const Option: ForwardRefRenderFunction<HTMLOptionElement, OptionProps> = (
  { value, label }, ref
): JSX.Element => {
  return (
    <option
      ref={ref}
      value={value}
      style={{ backgroundColor: '#181B23', color: 'white' }}
    >
      {label}
    </option>
  )
}

const OptionWithFowardedRef = forwardRef(Option)

export {OptionWithFowardedRef as Option}
