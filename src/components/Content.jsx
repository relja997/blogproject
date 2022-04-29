import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import BlogCardList from './BlogCardList';
import EditModal from './EditModal';
import ModalComponent from './ModalComponent';
import axios from 'axios';

const Content = ({
	showModal,
	setShowModal,
	getBlogs,
	blogs,
	setMessage,
	setCategories,
	showEditModal,
	setShowEditModal,
	categories,
	filteredBlogs,
	setFilteredBlogs,
}) => {
	const [titleVal, setTitleVal] = useState('');
	const [textVal, setTextVal] = useState('');
	const [idVal, setIdVal] = useState(0);
	const [categoryVal, setCategoryVal] = useState(0);

	useEffect(async () => {
		const arr = [];
		const res = await axios.get(
			`${process.env.REACT_APP_BLOG_API}/Category`
		);
		const cat = res.data.resultData;
		blogs.forEach(blog => {
			if (!arr.includes(blog.categoryId)) {
				arr.push(blog.categoryId);
			}
		});
		setCategories(arr);
		cat.forEach(async category => {
			if (!arr.includes(parseInt(category.name))) {
				await axios({
					method: 'delete',
					url: `${process.env.REACT_APP_BLOG_API}/Category/${category.id}`,
				});
			}
		});
	}, [blogs]);

	const handleCategorize = async category => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_BLOG_API}/BlogPosts/GetPostByCategory`,
				{
					params: {
						categoryId: category,
					},
				}
			);
			const filtered = res.data.resultData;
			setFilteredBlogs(filtered);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<ModalComponent
				showModal={showModal}
				setShowModal={setShowModal}
				getBlogs={getBlogs}
				setMessage={setMessage}
				categories={categories}
			/>
			<EditModal
				showEditModal={showEditModal}
				setShowEditModal={setShowEditModal}
				getBlogs={getBlogs}
				setMessage={setMessage}
				titleVal={titleVal}
				textVal={textVal}
				idVal={idVal}
				categoryVal={categoryVal}
			/>
			<Row>
				<Col xs={12} md={2} className='blog-categories'>
					<h5>Blog categories</h5>

					<ul>
						{categories.map(category => {
							return (
								<li key={category}>
									<a
										href='#'
										onClick={e => {
											e.preventDefault();
											handleCategorize(category);
										}}
									>
										Category {category}
									</a>
								</li>
							);
						})}
					</ul>
				</Col>
				<Col xs={12} md={10}>
					<BlogCardList
						blogs={
							filteredBlogs.length === 0 ? blogs : filteredBlogs
						}
						setMessage={setMessage}
						getBlogs={getBlogs}
						setShowEditModal={setShowEditModal}
						setTitleVal={setTitleVal}
						setTextVal={setTextVal}
						setIdVal={setIdVal}
						setCategoryVal={setCategoryVal}
						setFilteredBlogs={setFilteredBlogs}
					/>
				</Col>
			</Row>
		</>
	);
};

export default Content;
