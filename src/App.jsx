import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-container">
        <header className="header">
          <h1 className="logo">My Favorite Scenery</h1>
          <nav className="nav">
            <h3>about</h3>
            <h3>all picture</h3>
          </nav>
        </header>
        
        {/* コンテンツエリア - 黒背景 */}
        <main className="content-area">
          <h2>Welcome to My Gallery</h2>
          <p>ここにコンテンツを追加できます。背景は黒になっています。</p>
        </main>
      </div>
    </>
  )
}

export default App