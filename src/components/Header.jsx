import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Header = ({ setShowModal, message }) => {
	return (
		<>
			<Row className='mt-2'>
				<Col md={2}></Col>
				<Col sm={12} md={10}>
					<h3>Welcome to my blog</h3>
				</Col>
			</Row>
			<Row className='mt-2'>
				<Col md={2}></Col>
				<Col sm={12} md={10}>
					{message}
				</Col>
			</Row>
			<Row className='my-2'>
				<Col xs={10}></Col>
				<Col xs={2} className='column-button'>
					<Button
						variant='dark'
						size='sm'
						className='add-post-button'
						onClick={() => {
							setShowModal(true);
						}}
					>
						Add post
					</Button>
				</Col>
			</Row>
		</>
	);
};

export default Header;
