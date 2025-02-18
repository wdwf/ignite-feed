import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'

export function Post({ author, content, publishedAt }) {
    const [comments, setComments] = useState([
        'Post muito bacana, hein!!'
    ]);
    const [newCommentText, setNewCommentText] = useState('')


    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleNewCommentChange(event) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value)
    }

    function handleCreateComment(event) {
        event.preventDefault()
        if (!newCommentText.trim()) {
            return setNewCommentText('')
        }
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }


    function handleNewCommentInvalid(event) {
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    function deleteComment(comment) {
        const commentsWithoutDeletedOne = comments.filter(c => c !== comment)
        console.log(commentsWithoutDeletedOne);

        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeNow}
                </time>
            </header>
            <div className={styles.content}>
                {

                    content.map((line, index) => {
                        switch (line.type) {
                            case 'paragraph':
                                return <p key={index}>{line.content}</p>
                            case 'link':
                                return <a key={index} href={line.content}>{line.content}</a>
                            default:
                                return null
                        }
                    })
                }

                <p><a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a></p>
            </div>

            <form onSubmit={handleCreateComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='comment'
                    value={newCommentText}
                    placeholder='Deixe seu comentário'
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className='styled.commentList'>
                {
                    comments.map(comment => (
                        <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                    ))
                }
            </div>
        </article>
    )
}
