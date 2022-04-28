import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BlogCard from './BlogCard';

const BlogCardList = ({ blogs, setMessage, getBlogs }) => {
	return blogs.map((blog, i) => {
		return (
			<div key={blog.id}>
				<Row>
					<Col>
						<BlogCard
							blog={blog}
							index={i}
							setMessage={setMessage}
							getBlogs={getBlogs}
						/>
					</Col>
				</Row>
			</div>
		);
	});
};

export default BlogCardList;
