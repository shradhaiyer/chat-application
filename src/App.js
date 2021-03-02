import  { ChatEngine } from 'react-chat-engine';
import ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
const App = () => {
  if(!localStorage.getItem('username'))
    return <LoginForm/>
  return (
    <ChatEngine
        height="100vh"
        projectID="c126f945-012f-41ea-bb8a-b47152439e7e"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed ={
          (chatAppProps)=> <ChatFeed  {...chatAppProps} />
        }
    />
  )
}

export default App;
