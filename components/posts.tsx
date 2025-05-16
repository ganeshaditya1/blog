import { Post } from './types/Post';
import PostSynopsis from './postSynopsis';

export default function Posts( { posts }: { posts: Array<Post> } ) {
    const postSynopsises = posts.map((post) => < PostSynopsis post={ post } />);
    return (<div>
        {postSynopsises}
    </div>);
}