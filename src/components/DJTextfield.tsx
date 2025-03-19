import { TextField, TextFieldProps } from "@mui/material";
import { ChangeEvent, FC } from "react";

interface DJTextFieldProps {
    label: string;
    value: string | number;
    onChange: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;

}

type DJTextFieldProptype = Omit<TextFieldProps, 'onChange' | 'label' | 'value'> & DJTextFieldProps;

const DJTextField: FC<DJTextFieldProptype> = ({ onChange, label, value, ...props }) => {


    return <TextField onChange={(event) => {
        onChange(event);
    }} value={value} label={label} sx={{
        '& .MuiInputBase-input': {
            padding: '2px 14px',
            height: '39px'
        },
        '& .MuiFormLabel-root': {
            lineHeight: '1rem',
            height: '2rem',
            top: '-3px'
        }
    }} {...props}  ></TextField>
}


export default DJTextField;