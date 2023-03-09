import { useState } from "react";
import { FormField } from "./FormField";

const avatarImages = ['/images/a.png', '/images/b.png', '/images/c.png']

export function AvatarFormFiled(props) {
    const [index, setIndex] = useState(0);
    props.onChange(index);

    function handlePrevious() {
        if (index <= 0) {
            setIndex(avatarImages.length - 1);
        } else {
            setIndex(index - 1);
        } 
    };

    function handleNext () {
        if (index >= avatarImages.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }   
    }
    return (
        <FormField>
            <button type="button" onClick={handlePrevious}>Previous</button>
            <img src={avatarImages[index]} alt={index} width={100} />
            <button type="button" onClick={handleNext}>Next</button>
        </FormField>
    );
}