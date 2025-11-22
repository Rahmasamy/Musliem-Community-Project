// src/hooks/useField.ts
import { useState } from "react";
export const useField = (initialValue = "") => {
    const [value, setValue] = useState(initialValue);
    const [touched, setTouched] = useState(false);
    const onChange = (e) => setValue(e.target.value);
    const onBlur = () => setTouched(true);
    return { value, onChange, onBlur, touched };
};
