import React from "react";
import s from "./FormControl.module.css";

// важно раскукоживать пропсы именно так, как здесь чтобы не было ошибок, подробнее можно найти в документации
export const Textarea = ({input, meta, ...props})=>{
    let hasError = meta.touched && meta.error;
    return(
        <div className={s.formControl + " " + (hasError? s.error:" ") }>
            <textarea {...input} {...props}/>
            <br/>
            {hasError && <span> {meta.error}</span>}

        </div>
    )
}
// meta.touched - это проверка - если поле уже было тронуто и оно с ошибкой - то выводт спан


export const Input = ({input, meta, ...props})=>{
    let hasError = meta.touched && meta.error;
    return(
        <div className={s.formControl + " " + (hasError? s.error:" ") }>
            <input {...input} {...props}/>
            <br/>
            {hasError && <span> {meta.error}</span>}

        </div>
    )
}