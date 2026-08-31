import { useState } from "react"

export const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
    const [value, setValue] = useState<boolean>(initialValue);
    const toggleValue = () =>  setValue((prev) => !prev) ;
    return [value, toggleValue ];
}