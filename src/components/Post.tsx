import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface Author {
    name: string
    role: string
    avatarUrl: string
}
interface Content {
    type: 'paragraph' | 'link'
    content: string
}
export interface PostType {
    id: number
    author: Author
    content: Content[]
    publishedAt: Date
}

interface PostProps {
    post: PostType
}

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState([
        'Show!!!'
    ]);
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value)
    }

    function handleCreateComment(event: FormEvent) {
        event.preventDefault()
        if (!newCommentText.trim()) {
            setNewCommentText('')
            return
        }
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) { 
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    function deleteComment(comment: string) {
        const commentsWithoutDeletedOne = comments.filter(c => c !== comment)
        console.log(commentsWithoutDeletedOne);

        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeNow}
                </time>
            </header>
            <div className={styles.content}>
                {

                    post.content.map((line, index) => {
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

                <p><a href="">#novoprojeto</a></p>
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
