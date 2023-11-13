import { useState } from "react"

export const AgregarTarea = () => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(evento.target.value)
    }
    return (
        <input type="text" 
            placeholder="Ingresa el valor"
            value={inputValue}
            onChange={onInputChange}
        />
    )
}