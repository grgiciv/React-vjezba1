import { InputFormField } from "../components/InputFormField";
import { Message } from "../components/message";
import { SubmitFormField } from "../components/SubmitFormField";

export function ChatPage() {
    return(
        <div>
            Chat page
            <div className="message-list">
                <Message author="Zdenko" text="lorems pipsum "/>
                <Message author="Veljko" text="pricaj latinski da te cijeli svijet razumije"/>
            </div>
            <form>
                <InputFormField />
                <SubmitFormField label="Send"/>
            </form>
        </div>
    );
};