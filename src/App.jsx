import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post.jsx"
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/expo-starter.png',
      name: 'Cyber Dev',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera, beleza?' },
      { type: 'paragraph', content: 'Estou fazendo um post para testar o componente de postagem.' },
      { type: 'link', content: 'post.dev/feedignite' }
    ],
    publishedAt: new Date('2025-02-17 17:23:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/shadcn.png',
      name: 'Bob Bobistico',
      role: 'Fullstack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera, beleza?' },
      { type: 'paragraph', content: 'Estou fazendo um post para testar o componente de postagem.' },
      { type: 'link', content: 'post.dev/feedignite' }
    ],
    publishedAt: new Date('2025-02-15 20:03:00')
  }
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ))
          }
        </main>
      </div>
    </>
  )
}

export default App
