import React from "react"
import s from './FormControl.module.css'


export const Textarea = ({input,meta, ...props}) => {
    const hasError = meta.touched && meta.error 
    
    return(
        <div className={s.formControl  + ' ' + (hasError ? s.err : '' )}>
                <div>
                   <textarea {...input} {...props}/>
                </div> 
                {hasError && <span>{meta.error}</span>}

        </div>
    )
}

export const Input = ({input,meta, ...props}) => {
    const hasError = meta.touched && meta.error 
    return(
        <div className={s.formControl  + ' ' + (hasError ? s.err : '' )}>
                <div>
                   <input {...input} {...props}/>
                </div> 
                {hasError && <span>{meta.error}</span>}

        </div>
    )
}

