import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/index.scss';
import Content from './Content';
import Header from './Header';
import NavbarComponent from './NavbarComponent';

const App = () => {
	const [showModal, setShowModal] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);
	const [blogs, setBlogs] = useState([]);
	const [categories, setCategories] = useState([]);
	const [message, setMessage] = useState('');
	const [filteredBlogs, setFilteredBlogs] = useState([]);

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
				showEditModal={showEditModal}
				setShowEditModal={setShowEditModal}
				getBlogs={getBlogs}
				categories={categories}
				setCategories={setCategories}
				blogs={blogs}
				filteredBlogs={filteredBlogs}
				setFilteredBlogs={setFilteredBlogs}
			/>
		</>
	);
};

export default App;
