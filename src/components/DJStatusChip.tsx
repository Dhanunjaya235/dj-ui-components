import { FC, useMemo } from 'react';
import Chip from '@mui/material/Chip';
import { alpha } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { STATUS_COLORS } from '../constants';

const DJStatusChip: FC<{ status: string }> = ({ status }) => {
    const theme = useTheme();

    const color = useMemo(() => {
        const lowerCaseStatus = status.toLowerCase().replace(/ /g, '-');
        return STATUS_COLORS[lowerCaseStatus] || theme.palette.info.main;
    }, [status, theme.palette.info.main]);


    return (
        <Chip
            label={status}
            sx={{
                bgcolor: alpha(color, 0.1),
                color: color,
                fontWeight: 'bold',
                fontSize: '14px',
                padding: '5px 5px',
                borderRadius: '4px',
                width: 'fit-content',
            }}
            size='small'
        />
    );
};

export default DJStatusChip;
