import { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import InputTextArea from './InputTextArea';
import InputTextField from './InputTextField';

const EditModal = ({
	showEditModal,
	setShowEditModal,
	getBlogs,
	setMessage,
	titleVal,
	textVal,
	idVal,
	categoryVal,
}) => {
	const [title, setTitle] = useState(titleVal);
	const [text, setText] = useState(textVal);
	const [id, setId] = useState(idVal);
	const [category, setCategory] = useState(categoryVal);

	const handleEdit = async () => {
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
			setShowEditModal(false);
			return;
		}
		try {
			const res = await axios({
				method: 'put',
				url: `${process.env.REACT_APP_BLOG_API}/BlogPosts/${id}`,
				data: {
					id: id,
					title: title,
					text: text,
					categoryId: category,
				},
			});
			setMessage(
				<Alert
					variant='success'
					onClose={() => {
						setMessage('');
					}}
					dismissible
				>
					Successfully updated blog post
				</Alert>
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
					Error when updating blog post
				</Alert>
			);
		}
		getBlogs();
		setShowEditModal(false);
	};

	useEffect(() => {
		setTitle(titleVal);
		setText(textVal);
		setId(idVal);
		setCategory(categoryVal);
	}, [showEditModal]);

	return (
		<>
			<Modal
				show={showEditModal}
				onHide={() => {
					setShowEditModal(false);
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
						onClick={handleEdit}
						className='post-button'
					>
						Update
					</Button>
					<Button
						variant='secondary'
						onClick={() => {
							setShowEditModal(false);
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

export default EditModal;
