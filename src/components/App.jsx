import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/index.scss';
import Content from './Content';
import Header from './Header';
import NavbarComponent from './NavbarComponent';

const App = () => {
	const [showModal, setShowModal] = useState(false);
	const [blogs, setBlogs] = useState([]);

	const getBlogs = async () => {
		const res = await axios.get(
			`${process.env.REACT_APP_BLOG_API}/BlogPosts`
		);
		setBlogs(res.data.resultData);
	};

	useEffect(() => {
		getBlogs();
	}, []);

	return (
		<>
			<NavbarComponent />
			<Header setShowModal={setShowModal} />
			<Content
				showModal={showModal}
				setShowModal={setShowModal}
				blogs={blogs}
			/>
		</>
	);
};

export default App;
