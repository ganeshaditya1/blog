import { Post } from '@/models/Post';
import PostSynopsis from './postSynopsis';

export default function Posts( { posts }: { posts: Array<Post> } ) {
    const postSynopsises = posts
        .filter((post) => post.published)
        .sort((post1, post2) => post2.createdAt.getTime() - post1.createdAt.getTime())
        .map((post) => < PostSynopsis post={ post } key={ post.title} />);
    return (<div className="mt-[20px]">
        {postSynopsises}
    </div>);
}