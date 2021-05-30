import { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar'
import Pusher from 'pusher-js'
import axios from './axios'
function App() {
  const [messages, setMessages] = useState([])
  useEffect(()=>{
     axios.get('/messages/sync').then((res)=>{
       setMessages(res.data);
     })
  },[])
  console.log('messages :: ',messages)
  useEffect(() => {
    //from pusher application
    const pusher = new Pusher('4feab66221211bff2be6', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMsg)=> {
      setMessages([...messages,newMsg])  
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])
  return (
    <div className="app">
      <div className='app__body'>
      <Sidebar />
      <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
