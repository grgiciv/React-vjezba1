import { SignInPage } from "./pages/SignInPage";
import { ChatPage } from "./pages/ChatPage";
import { Route, Routes } from "react-router-dom";
import { FaqPage } from "./pages/FaqPages";
import {AppContext} from "./contexts/AppContext";
import {useContext} from "react";

const initialState = {
  counter: 2,
  username: 'Radagast',
};

// Funkcija koja uzima 2 parametra, initalState koje je početno stanje nad kojim će se parametar action odviti.
// Action moze biti bilo sto, u ovom slucaju je string. Pozivom funkcije reducer i passanjem argumenta 'INCREMENT' koji u sebi ima naputak
// sto treba raditi sa initialState.
function reducer(initialState, action) {
  if (action.type === 'INCREMENT') {
    return {...initialState, counter: initialState.counter + action.value} // Da nema ovog "...initialState" initialState bio bio promjenjen tako da bi se dio initalState izgubio(izgubio bi se "username" value)
  }
  if (action.type === 'DECREMENT') {
    return {...initialState, counter: initialState.counter - action.value}
  }
  return initialState;
}

const state1 = reducer(initialState, {type: 'INCREMENT', value: 2});
const state2 = reducer(state1, {type: 'DECREMENT', value: 4});
console.log('REDUCER', state1);
console.log('REDUCER', state2);

function App() {
  const context = useContext(AppContext);

  if (context.error !==null) {
    return (
    <div>
      <h1>ERROR</h1>
      <div>Something went wrong: {context.error.toString()}</div>
    </div>);
  }

  return (
      <Routes>
        <Route path="/">
          <Route index element={<SignInPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Route>
      </Routes>
  );
}

export default App;
