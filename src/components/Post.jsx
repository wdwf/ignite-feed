import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/expo-starter.png" />
                    <div className={styles.authorInfo}>
                        <strong>Cyber Dev</strong>
                        <span>Fullstack Developer</span>
                    </div>
                </div>

                <time title="11 de Maio ás 08:13h" dateTime="2024-05-11 08:13:38">Publicado a 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="">👉 cyber.design/doctorcare</a></p>

                <p><a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe seu comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className='styled.commentList'>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}
