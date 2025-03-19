import { FC } from "react";

import ExcelIcon from "../assets/excel.png";
import PdfIcon from "../assets/pdf-file.png";
import WordIcon from "../assets/word.png";
import PowerPointIcon from "../assets/powerpoint.png";
import TextIcon from "../assets/txt.png";
import ImageIcon from "../assets/photo.png";
import DefaultFileIcon from "../assets/doc.png";

export interface DJFileIconProps {
    filetype: string;
}
const DJFileIcon: FC<DJFileIconProps> = ({ filetype }) => {
    let iconSrc;
    switch (filetype) {
        case "application/vnd.ms-excel":
        case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
            iconSrc = ExcelIcon;
            break;
        case "application/pdf":
            iconSrc = PdfIcon;
            break;
        case "application/msword":
        case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            iconSrc = WordIcon;
            break;
        case "application/vnd.ms-powerpoint":
        case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
            iconSrc = PowerPointIcon;
            break;
        case "text/plain":
            iconSrc = TextIcon;
            break;
        case "image/jpeg":
        case "image/png":
        case "image/gif":
            iconSrc = ImageIcon;
            break;
        default:
            iconSrc = DefaultFileIcon;
    }

    return <img src={iconSrc} alt={`${filetype} icon`} style={{ width: 22 }} />;
};

export default DJFileIcon;
