import React from 'react';
import TextField from '@material-ui/core/TextField';

interface IProps {
  label: string,
  helperText?: string,
  required: boolean,
  multiline?: boolean,
  rows?: number,
  rowsMax?: number,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  name: string
}

function Input(props: IProps) {
  return (
    <div>
      <form>
        <TextField {...props} name={props.name} onChange={props.handleChange} />
      </form>
    </div>
  );
}

export default Input;