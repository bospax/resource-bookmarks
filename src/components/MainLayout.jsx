import PostList from './PostList';

const MainLayout = () => {
	const link = '#';

	return (
		<div className="site">
			<div className="title">
				<a href={link}>Jose Pacheco Jr.</a>
				<a className="extra" href="/">
					resources
				</a>
			</div>

			<div id="home">
				<PostList />
			</div>

			<div className="footer">
				<div className="contact">
					<p>
						Jose Pacheco Jr.
						<br />
						Visit my <a href={link}>Portfolio</a>
						<br />
					</p>
				</div>
			</div>
		</div>
	);
};
export default MainLayout;
