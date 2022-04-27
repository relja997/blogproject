import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BlogCard from './BlogCard';

const BlogCardList = ({ blogs }) => {
	return blogs.map(blog => {
		return (
			<div key={blog.id}>
				<Row>
					<Col>
						<BlogCard blog={blog} />
					</Col>
				</Row>
			</div>
		);
	});
};

export default BlogCardList;
