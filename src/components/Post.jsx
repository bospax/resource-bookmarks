import PropTypes from 'prop-types';

const Post = ({ post }) => {
	return (
		<>
			<h1>{post.category}</h1>
			<ul className="posts">
				{post.content.map((item, index) => (
					<li key={index}>
						<span>{item.date_added}</span> &raquo;{' '}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={item.link}
						>
							{item.label}
						</a>
					</li>
				))}
			</ul>
		</>
	);
};

Post.propTypes = {
	post: PropTypes.shape({
		category: PropTypes.string.isRequired,
		content: PropTypes.arrayOf(
			PropTypes.shape({
				link: PropTypes.string.isRequired,
				label: PropTypes.string.isRequired,
				date_added: PropTypes.string.isRequired,
			})
		).isRequired,
	}).isRequired,
};

export default Post;
