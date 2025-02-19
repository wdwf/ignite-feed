import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post, PostType } from "./components/Post"
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/oFhelipe.png',
      name: 'Fhelipe Rodrigues',
      role: 'Fullstack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Belezinha Pessoal 👋' },
      { type: 'paragraph', content: 'Finalmente lancei meu portifolio e ficou massinha demais. Dá uma olhada lá e me diz o que achou!!' },
      { type: 'link', content: 'https://fhelipe.dev/' }
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
      { type: 'paragraph', content: 'Fala galera!!' },
      { type: 'paragraph', content: 'Estou fazendo um negocio loco aqui aguardem novidades 🐱‍👤.' },
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
                post={post}
              />
            ))
          }
        </main>
      </div>
    </>
  )
}

export default App
