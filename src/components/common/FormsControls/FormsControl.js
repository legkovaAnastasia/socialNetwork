import React from 'react';
import styles from './FormsControl.module.css';

const FormControl = ({input, meta, child, ...props}) => { //props теперь содержат все, кроме инпута и меты. рест оператор
    const hasError = meta.error && meta.touched;

    return (         
        <div className={(hasError? styles.error : '')}>
            <div>
            {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {         
        const {input, meta, child, ...restProps} = props;
        return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const Input = (props) => { 
    const {input, meta, child, ...restProps} = props;
        return <FormControl {...props}><input {...input} {...restProps} /></FormControl>  
}