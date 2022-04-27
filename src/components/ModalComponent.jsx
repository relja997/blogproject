import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import InputTextArea from './InputTextArea';
import InputTextField from './InputTextField';

const ModalComponent = ({ showModal, setShowModal }) => {
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');

	const handlePost = () => {
		console.log(title);
		console.log(text);
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
