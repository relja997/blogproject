import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import BlogCardList from './BlogCardList';
import EditModal from './EditModal';
import ModalComponent from './ModalComponent';

const Content = ({
	showModal,
	setShowModal,
	getBlogs,
	blogs,
	setMessage,
	showEditModal,
	setShowEditModal,
}) => {
	const [titleVal, setTitleVal] = useState('');
	const [textVal, setTextVal] = useState('');
	const [idVal, setIdVal] = useState(0);
	const [categoryVal, setCategoryVal] = useState(0);
	return (
		<>
			<ModalComponent
				showModal={showModal}
				setShowModal={setShowModal}
				getBlogs={getBlogs}
				setMessage={setMessage}
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
						<li>
							<a href='#'>Category 1</a>
						</li>
						<li>
							<a href='#'>Category 2</a>
						</li>
						<li>
							<a href='#'>Category 3</a>
						</li>
					</ul>
				</Col>
				<Col xs={12} md={10}>
					<BlogCardList
						blogs={blogs}
						setMessage={setMessage}
						getBlogs={getBlogs}
						setShowEditModal={setShowEditModal}
						setTitleVal={setTitleVal}
						setTextVal={setTextVal}
						setIdVal={setIdVal}
						setCategoryVal={setCategoryVal}
					/>
				</Col>
			</Row>
		</>
	);
};

export default Content;
