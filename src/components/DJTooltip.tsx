/* eslint-disable @typescript-eslint/no-unused-vars */
import { Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import { styled } from '@mui/material/styles';
interface DJTooltipProps {
    color?: string;
    backgroundColor?: string;
}
const DJTooltip = styled(({ className, color, backgroundColor, ...props }: TooltipProps & DJTooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme, color, backgroundColor }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: color ?? theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: backgroundColor ?? theme.palette.common.black,
        maxWidth: 'none'
    },
}));

export default DJTooltip;
