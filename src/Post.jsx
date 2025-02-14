export function Post(props) {
    return (
        <div>
            <h3>Post</h3>
            <h4>{props.author}</h4>
            <p>{props.content}</p>
        </div>
    )
}
