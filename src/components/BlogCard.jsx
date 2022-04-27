import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import avatarIcon from '../images/man.png';
import placeholderIcon from '../images/placeholder.png';

const BlogCard = () => {
	return (
		<div className='blog-card'>
			<Row>
				<Col md={1}>
					<img
						src={avatarIcon}
						alt='thumbnail'
						className='blog-card-thumbnail'
					/>
				</Col>
				<Col md={8}>
					<h5 className='mb-0'>Blog post 1</h5>
					<p className='blog-post-metadata'>
						Date and the time of the post
					</p>
				</Col>
				<Col md={3}>
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
				<Col md={12}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quos quod expedita quisquam, perspiciatis explicabo
						soluta, eum laborum sapiente sit dolor aspernatur
						voluptates in natus voluptatibus maxime obcaecati iusto
						quaerat distinctio impedit iure ducimus ullam! Aperiam
						ex eligendi expedita ipsum cum aliquam perspiciatis
						aliquid quas, praesentium nesciunt. Atque quos
						asperiores ipsa veritatis ipsum quam obcaecati? Dolorem
						dolores sequi modi velit sed!
					</p>
				</Col>
			</Row>
			<Row>
				<Col md={4}></Col>
				<Col md={5}>
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
				<Col md={3}></Col>
			</Row>
		</div>
	);
};

export default BlogCard;
