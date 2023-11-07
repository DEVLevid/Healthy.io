import { Input } from "@chakra-ui/react";
import './PrimaryInput.css'

interface PrymaryInputProps {
  name: string,
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  label: string,
  placeholder: string,
}

export default function PrimaryInput({
  name,
  value,
  onChange,
  label, 
  placeholder
}: PrymaryInputProps) {
  return (
    <div className="inputContainer">
    <label className="label">{label}</label>
    <Input
      variant="filled"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    </div>
  );
}
