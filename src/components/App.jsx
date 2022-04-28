import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/index.scss';
import Content from './Content';
import Header from './Header';
import NavbarComponent from './NavbarComponent';

const App = () => {
	const [showModal, setShowModal] = useState(false);
	const [blogs, setBlogs] = useState([]);
	const [message, setMessage] = useState('');

	const getBlogs = async () => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_BLOG_API}/BlogPosts`
			);
			setBlogs(res.data.resultData);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getBlogs();
	}, []);

	return (
		<>
			<NavbarComponent />
			<Header setShowModal={setShowModal} message={message} />
			<Content
				setMessage={setMessage}
				showModal={showModal}
				setShowModal={setShowModal}
				getBlogs={getBlogs}
				blogs={blogs}
			/>
		</>
	);
};

export default App;
