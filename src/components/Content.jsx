import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BlogCard from './BlogCard';
import ModalComponent from './ModalComponent';

const Content = ({ showModal, setShowModal }) => {
	return (
		<>
			<ModalComponent showModal={showModal} setShowModal={setShowModal} />
			<Row>
				<Col md={2} className='blog-categories'>
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
				<Col md={10}>
					<Row>
						<Col>
							<BlogCard />
						</Col>
					</Row>
					<Row>
						<Col>
							<BlogCard />
						</Col>
					</Row>
					<Row>
						<Col>
							<BlogCard />
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
};

export default Content;
