import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BlogCardList from './BlogCardList';
import ModalComponent from './ModalComponent';

const Content = ({ showModal, setShowModal, getBlogs, blogs, setMessage }) => {
	return (
		<>
			<ModalComponent
				showModal={showModal}
				setShowModal={setShowModal}
				getBlogs={getBlogs}
				setMessage={setMessage}
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
					/>
				</Col>
			</Row>
		</>
	);
};

export default Content;
