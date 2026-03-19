import React from 'react'
import ReactQuill from "react-quill-new"
import "react-quill-new/dist/quill.snow.css";

const InternalNotesEditor = ({value, onChange, disabled}) => {
  return (
    <div className='h-full pb-4'>
        <ReactQuill
            theme="snow"
            value={value}
            onChange={onChange}
            readOnly={disabled}
            className="h-full"
        />
    </div>
  )
}

export default InternalNotesEditor