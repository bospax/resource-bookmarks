import Post from './Post';
import PostData from '../data/bookmarks';

const PostList = () => {
	return (
		<>
			{PostData.map((post, index) => (
				<Post key={index} post={post} />
			))}
		</>
	);
};

export default PostList;
