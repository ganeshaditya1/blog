import { Post } from './types/Post';
import PostSynopsis from './postSynopsis';

export default function Posts( { posts }: { posts: Array<Post> } ) {
    const postSynopsises = posts.map((post) => < PostSynopsis post={ post } key={ post.title} />);
    return (<div>
        {postSynopsises}
    </div>);
}