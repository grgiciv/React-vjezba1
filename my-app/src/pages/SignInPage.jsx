import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { RandomNameButton } from "../components/RandomNameButton";
import { SubmitFormField } from "../components/SubmitFormField";

export function SignInPage(props) {
    /* ovo je isti zapis kao const [formState, setFormState] = useState('');
    const stateArray = useState('');
    const formState = stateArray[0];
    const setFormState = stateArray[1]; */
    const [formState, setFormState] = useState('');

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
                    <RandomNameButton onRandomName={handleUserNameChange}/>
                    <SubmitFormField label="Sign in"/>
                </form>
            </div>
        </div>
    );
};