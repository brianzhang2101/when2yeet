import React from 'react';
import TextField from '@material-ui/core/TextField';

interface details {
    label: string,
    helperText?: string,
    required: boolean,
    multiline?: boolean,
    rows?: number,
    rowsMax?: number
}

function Input(props: details) {
    return (
    <div>
      <form>
      <TextField {...props}/>
      </form>
    </div>
    );
}

export default Input;