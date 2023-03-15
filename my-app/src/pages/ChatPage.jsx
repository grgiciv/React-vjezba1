import { Message } from "../components/message";
import { useState } from "react";
import { MessageForm } from "../components/MessageForm";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";


export function ChatPage(props) {
/*  const messageComponents = [];
        for (let i = 0; i < messages.length; i++) {
            const message = messages[i];
            messageComponents.push(<Message key={message.id} avatarIndex={message.author.avatarIndex}
                author={message.author.username} 
                text={message.text}/>);
    jedan način za prikazivanje poruka
    } */
    const [messages, setMessages] = useState([]);
    const context = useContext(AppContext);

    function handleSubmit(message) {
        setMessages([ ...messages, message]);
    }

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
            <MessageForm onSubmit={handleSubmit}
                username={props.username}
                avatarIndex={context.avatarIndex}/>
        </div>
    );
};