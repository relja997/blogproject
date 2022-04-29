import { useState } from 'react';
import axios from 'axios';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import InputTextArea from './InputTextArea';
import InputTextField from './InputTextField';

const ModalComponent = ({
	showModal,
	setShowModal,
	getBlogs,
	setMessage,
	categories,
}) => {
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');

	const handlePost = async () => {
		if (text === '' || title === '') {
			setMessage(
				<Alert
					variant='danger'
					onClose={() => {
						setMessage('');
					}}
					dismissible
				>
					Both fields are required
				</Alert>
			);
			setShowModal(false);
			return;
		}
		let res;
		const category = Math.floor(Math.random() * 5) + 1;

		if (!categories.includes(category)) {
			try {
				const res = await axios.post(
					`${process.env.REACT_APP_BLOG_API}/Category`,
					{
						id: category,
						name: category.toString(),
					}
				);
			} catch (error) {
				console.log(error);
			}
		}
		try {
			res = await axios.post(
				`${process.env.REACT_APP_BLOG_API}/BlogPosts`,
				{
					id: category,
					title: title,
					text: text,
					categoryId: category,
				}
			);
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
		await getBlogs();
		if (res?.status >= 200 && res?.status <= 300) {
			setMessage(
				<Alert
					variant='success'
					onClose={() => {
						setMessage('');
					}}
					dismissible
				>
					Successfully added new blog post
				</Alert>
			);
		}
		setTitle('');
		setText('');
		setShowModal(false);
	};

	return (
		<>
			<Modal
				show={showModal}
				onHide={() => {
					setShowModal(false);
				}}
			>
				<Modal.Header closeButton>
					<Modal.Title>Add/Edit blog post</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<InputTextField
							title='Title'
							msg='Enter blogpost title here'
							val={title}
							setVal={setTitle}
						/>
						<InputTextArea
							title='Text'
							msg='Enter blogpost content here'
							val={text}
							setVal={setText}
						/>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant='dark'
						onClick={handlePost}
						className='post-button'
					>
						Post
					</Button>
					<Button
						variant='secondary'
						onClick={() => {
							setShowModal(false);
						}}
						className='cancel-button'
					>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default ModalComponent;
