import './styles/ArticleCard.css'

interface ArticleCardProps {
    title: string,
    date: string,
    content: string[],
    imageUrl: string,
}


export default function ArticleCard({ title, date, content, imageUrl }: ArticleCardProps) {
    return (
        <article className='article-card'>
            <h2>{title}</h2>
            <time dateTime="2025-08-15">{date}</time>
            <p>{content[0]}</p>
            <p>{content[1]}</p>
            <figure>                                                                                                                                     
                <img src={imageUrl} />
            </figure>
        </article>
    )
}