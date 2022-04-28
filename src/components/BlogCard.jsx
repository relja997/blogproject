import React from 'react';
import { format } from 'date-fns';
import { Button, Col, Row, Alert, Image } from 'react-bootstrap';
import avatarIcon from '../images/man.png';
import placeholderIcon from '../images/placeholder.png';
import axios from 'axios';

const BlogCard = ({ blog, index, setMessage, getBlogs }) => {
	const handleDelete = async () => {
		try {
			const res = await axios({
				method: 'delete',
				url: `${process.env.REACT_APP_BLOG_API}/BlogPosts/${blog.id}`,
			});
			setMessage(
				<Alert
					variant='success'
					onClose={() => {
						setMessage('');
					}}
					dismissible
				>
					Successfully deleted post with id: {blog.id}
				</Alert>
			);
			getBlogs();
		} catch (err) {
			setMessage(
				<Alert
					variant='danger'
					onClose={() => {
						setMessage('');
					}}
					dismissible
				>
					Error when adding new blog post
				</Alert>
			);
		}
	};

	return (
		<div className={`blog-card ${index % 2 === 0 ? 'pair-card' : ''}`}>
			<Row>
				<Col xs={1}>
					<Image
						fluid={true}
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
							onClick={handleDelete}
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
					<Row>
						<Col>
							<Image
								fluid={true}
								src={placeholderIcon}
								alt='placeholder'
								className='blogpost-placeholder'
							/>
						</Col>
						<Col>
							<Image
								fluid={true}
								src={placeholderIcon}
								alt='placeholder'
								className='blogpost-placeholder'
							/>
						</Col>
						<Col>
							<Image
								fluid={true}
								src={placeholderIcon}
								alt='placeholder'
								className='blogpost-placeholder'
							/>
						</Col>
					</Row>
				</Col>
				<Col xs={3}></Col>
			</Row>
		</div>
	);
};

export default BlogCard;
