import "../styles/SubmitFormField.css"

export function SubmitFormField (props) {
    return (
        <div className="submit-form-filed">
            <button type="submit">{props.label}</button>
        </div>
    );
};