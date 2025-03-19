import { Button, ButtonProps } from "@mui/material";
import { FC, ReactNode } from "react";

interface DJButtonProps {
    children: ReactNode;
}
const DJButton: FC<ButtonProps & DJButtonProps> = ({ children, sx, ...props }) => {
    return <Button
        sx={
            {
                ...((props.color === "error" || props.color === "success") ? {} : props.variant === "text" ? ({
                    color: '#394253',
                }) : props.variant == "outlined" ? ({
                    color: '#394253',
                    borderColor: '#394253',
                }) : ({
                    backgroundColor: '#394253',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#394253',
                    },

                })),
                textTransform: 'none',
                height: '32px !important',
                ...sx
            }
        } disableElevation {...props}>{children}</Button>
}

export default DJButton;