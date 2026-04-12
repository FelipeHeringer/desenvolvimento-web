import './styles/PostRelatedCard.css'

interface PostRelatedCardProps {
    title: string,
    imageUrl: string,
}


export default function PostRelatedCard({title, imageUrl}: PostRelatedCardProps) {
    return (
        <article className='related-cards'>
            <h2>{title}</h2>
            <p>Este é um post relacionado ao artigo principal.</p>
            <figure>
                <img src={imageUrl} />
            </figure>
        </article>
    )
}