import { useState } from "react";
import { Button } from "../components/Button";
import { FormField } from "../components/FormField";
import { InputFormField } from "../components/InputFormField";
import { getRandomName } from "../library/random";
import { RandomNameButton } from "../components/RandomNameButton";

export function SignInPage(props) {
    /* ovo je isti zapis kao const [formState, setFormState] = useState('');
    const stateArray = useState('');
    const formState = stateArray[0];
    const setFormState = stateArray[1]; */
    const [formState, setFormState] = useState(getRandomName());

    function handleSubmit(event){
        event.preventDefault();
        props.onSubmit(formState);
    }

    function handleUserNameChange(value){
        setFormState(value);
    }
    console.log(formState);
    return (
        <div className="sign-in-page">
            <div className="card">
                <form className="sign-in-form" onSubmit={handleSubmit}>
                    <InputFormField label="Username" type="text" onChange={handleUserNameChange} value={formState}/>
                    <FormField>
                        <RandomNameButton onRandomName={handleUserNameChange}/>
                    </FormField>
                    <FormField>
                        <Button type="submit" label="Sign in"/>
                    </FormField>
                </form>
            </div>
        </div>
    );
};