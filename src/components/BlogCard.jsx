import React from 'react';
import { format } from 'date-fns';
import { Button, Col, Row } from 'react-bootstrap';
import avatarIcon from '../images/man.png';
import placeholderIcon from '../images/placeholder.png';

const BlogCard = ({ blog }) => {
	return (
		<div className='blog-card'>
			<Row>
				<Col xs={1}>
					<img
						src={avatarIcon}
						alt='thumbnail'
						className='blog-card-thumbnail'
					/>
				</Col>
				<Col xs={8}>
					<h5 className='mb-0'>{blog.title}</h5>
					<p className='blog-post-metadata'>
						{format(
							new Date(blog.createdAt),
							"'Posted date:' dd/MM/yyyy 'at' HH:mm "
						)}
						by Some person
					</p>
				</Col>
				<Col xs={3}>
					<div className='button-box'>
						<Button
							variant='dark'
							size='sm'
							className='blogpost-button'
						>
							Edit
						</Button>
						<Button
							variant='dark'
							size='sm'
							className='blogpost-button'
						>
							Delete
						</Button>
					</div>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<p>{blog.text}</p>
				</Col>
			</Row>
			<Row>
				<Col xs={4}></Col>
				<Col xs={5}>
					<img
						src={placeholderIcon}
						alt='placeholder'
						className='blogpost-placeholder'
					/>
					<img
						src={placeholderIcon}
						alt='placeholder'
						className='blogpost-placeholder'
					/>
					<img
						src={placeholderIcon}
						alt='placeholder'
						className='blogpost-placeholder'
					/>
				</Col>
				<Col xs={3}></Col>
			</Row>
		</div>
	);
};

export default BlogCard;
