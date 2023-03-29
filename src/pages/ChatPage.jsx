import { Message } from "../components/message";
import { useState } from "react";
import { MessageForm } from "../components/MessageForm";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";


export function ChatPage() {
/*  const messageComponents = [];
        for (let i = 0; i < messages.length; i++) {
            const message = messages[i];
            messageComponents.push(<Message key={message.id} avatarIndex={message.author.avatarIndex}
                author={message.author.username} 
                text={message.text}/>);
    jedan način za prikazivanje poruka
    } */
    const [messages, setMessages] = useState([]);
    const [client, setClient] = useState(null);
    const [chatRoom, setChatRoom] = useState(null);
    const [ready, setReady] = useState(false);
    const context = useContext(AppContext);
    
    function handleSubmit(message) {
        client.publish({
            room: 'Ekipa',
            message: message,
        });
    }

    

    const messageComponents = messages.map((message) => {
        return <Message key={message.id} 
            avatarIndex={message.author.avatarIndex}
            author={message.author.username} 
            text={message.text}/>
        
    });

    useEffect(() => {
        const drone = new window.Scaledrone('obsgQphG1G8jTBG5');
  
        drone.on('open', (error) => {  //otvoren komunikacijski kanal sa scaledronom
            if (error) {
                console.log(error);
            } else{
                const room = drone.subscribe('Ekipa'); //stvorena soba pod imenom 'Ekipa'
            
            setClient(drone);
            setChatRoom(room);
        }
        });
    }, []);

    useEffect(() =>{
        if (chatRoom !== null && !ready) {
            chatRoom.on('data', (data) => {
                setMessages((messages) => {
                    return [...messages, data];
                }); 
            });

            setReady(true);
        }
    }, [chatRoom, ready]);
    

    if (!context.isSignedIn) {
        return <Navigate to="/" replace />;
    }

    return(
        <div>
            Chat page
            <button type="button" onClick={context.SignOut}>Sign out</button>
            <div className="message-list">
                {messageComponents}
            </div>
            <MessageForm onSubmit={handleSubmit}
                username={context.username}
                avatarIndex={context.avatarIndex}/>
        </div>
    );
};