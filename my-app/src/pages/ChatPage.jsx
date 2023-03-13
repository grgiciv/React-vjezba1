import { InputFormField } from "../components/InputFormField";
import { Message } from "../components/message";
import { SubmitFormField } from "../components/SubmitFormField";
import { useState } from "react";


export function ChatPage(props) {
/*  const messageComponents = [];
        for (let i = 0; i < messages.length; i++) {
            const message = messages[i];
            messageComponents.push(<Message key={message.id} avatarIndex={message.author.avatarIndex}
                author={message.author.username} 
                text={message.text}/>);
    jedan način za prikazivanje poruka
    } */
    const [ formState, setFormState ] = useState('');
    const [messages, setMessages] = useState([]);

    function handleChange(message){
        setFormState(message);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setFormState('');
        setMessages([ ...messages, {
            id: Date.now(),
            author: {
                username: props.username,
                avatarIndex: props.avatarIndex,
            },
            text: formState,
        }]);
    }
    console.log(formState);

    const messageComponents = messages.map((message) => {
        return <Message key={message.id} 
            avatarIndex={message.author.avatarIndex}
            author={message.author.username} 
            text={message.text}/>
        
    });

    return(
        <div>
            Chat page
            <div className="message-list">
                {messageComponents}
            </div>
            <form onSubmit={handleSubmit}>
                <InputFormField label="Message" type="text" value={formState} onChange={handleChange}/>
                <SubmitFormField label="Send"/>
            </form>
        </div>
    );
};