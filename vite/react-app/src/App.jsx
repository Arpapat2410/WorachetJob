import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostClassComponents from './components/PostClassComponents'
import StateInClass from './components/StateInclass'
import StateInFunction from './components/StateInFunction'
import Card from './components/Card'

import Comment from './components/Comment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>React Demo</h1>


      <PostClassComponents userId="Arpapat Yipram" message="หิวมากกกกกกกกก" >
        <Comment userId="aon" message="คะน้าไก่กรอบน้าา" />
        <Comment userId="ti" message="โอเค เดี๋ยวส่งเลย" />
      </PostClassComponents>

      <StateInClass/>

      <StateInFunction/>

      <Card/>



      </div>
    </>
  );
}

export default App
