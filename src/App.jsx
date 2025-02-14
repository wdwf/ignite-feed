import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./Post"
import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Bob Fernandes"
            content="Texto..."
          />
        </main>
      </div>
    </>
  )
}

export default App
