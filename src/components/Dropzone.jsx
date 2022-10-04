// IMPORT CORE PACKAGES
import React, { useState } from "react";
// IMPORT MUI COMPONENTS
import { DropzoneArea } from "mui-file-dropzone";
// IMPORT VARIABLES
import { DROPZONETEXT } from '../constants/variables';

const DropZoneArea = () => {
    const [, setFiles] = useState([])
    const handleChange = (file) => {
        setFiles(file);
    };

    return (
        <DropzoneArea 
            filesLimit={1}
            acceptedFiles={['image/*']}
            dropzoneText={DROPZONETEXT}
            onChange={(f) => handleChange(f)}
        />
    );
};

export default DropZoneArea;
