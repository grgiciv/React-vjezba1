import { useState } from "react";
import { SignInPage } from "./pages/SignInPage";
import { ChatPage } from "./pages/ChatPage";
import { Counter } from "./components/Counter";



function App() {
  const [ username, setUsername ] = useState('');
  const [avatar, setAvatarIndex] = useState(0);
  
  function handleSubmit(user){
    setUsername(user.username);
    setAvatarIndex(user.avatarIndex)
  };
  return (
    <div>
      <Counter initialValue={2} step={1.2334} precision={2} />
      {username === '' && <SignInPage onSubmit={handleSubmit} />}
      {username !== '' && <ChatPage username={username} avatarIndex={avatar}/>}
    </div>
  );
}

export default App;
