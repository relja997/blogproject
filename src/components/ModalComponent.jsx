import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import InputTextField from './InputTextField';

const ModalComponent = ({ showModal, setShowModal }) => {
	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	return (
		<>
			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add/Edit blog post</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<InputTextField />
				</Modal.Body>
				<Modal.Footer>
					<Button variant='dark' onClick={handleClose}>
						Post
					</Button>
					<Button
						variant='secondary'
						onClick={handleClose}
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
