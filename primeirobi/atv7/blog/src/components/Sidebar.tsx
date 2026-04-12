import PostRelatedCard from "./PostRelatedCard";
import './styles/Sidebar.css'

interface PostRelated {
    title: string;
    imageUrl: string;
}

interface SidebarProps {
    relatedPosts: PostRelated[];
}

export default function Sidebar({ relatedPosts }: SidebarProps) {
    return (
        <aside className="aside">
            {relatedPosts.map((post, index) => (
                <PostRelatedCard key={index} title={post.title} imageUrl={post.imageUrl} />
            ))}
        </aside>
    )
}