import { useState } from "react"

export const useForm = () => {
    
    const [formValue, setFormValue] = useState('');

    const handleInputChange = ({ target }) => {

        setFormValue( target.value );
    }

    const reset = () => {

        setFormValue('');
    }

    return [
        formValue,
        handleInputChange,
        reset
    ]

}
