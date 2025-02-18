import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react'


export function Comment({ content, onDeleteComment }) {
    function handleDeleteComment(content) {
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/shadcn.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bob Bobistico</strong>
                            <time title="11 de Maio ás 08:13h" dateTime="2024-05-11 08:13:38">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={() => handleDeleteComment(content)} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}