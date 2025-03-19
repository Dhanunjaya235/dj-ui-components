import { Chip, ChipProps } from "@mui/material";
import { forwardRef } from "react";
import DJFileIcon, { DJFileIconProps } from "./DJFileIcon";




const DJFileChip = forwardRef<HTMLDivElement, ChipProps & DJFileIconProps>(
    ({ filetype, ...props }, ref) => {
        return (
            <Chip
                {...props}
                ref={ref} // Important for Tooltip
                icon={<DJFileIcon filetype={filetype} />}
                variant="outlined"
                sx={{
                    padding: "8px 8px",
                    fontWeight: 500,
                    borderRadius: "5px",
                    fontSize: "14px",
                    color: "#394253",
                    ...props.sx,
                    maxWidth: "200px",
                }}
            />
        );
    }
);

export default DJFileChip