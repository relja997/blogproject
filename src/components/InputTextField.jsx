import React from 'react';
import { Form } from 'react-bootstrap';

const InputTextField = () => {
	return (
		<>
			<Form>
				<Form.Label htmlFor='inputPassword5'>Title</Form.Label>
				<Form.Control
					type='text'
					id='inputTitle'
					aria-describedby='titleHelpBlock'
				/>
				<Form.Text id='titleHelpBlock' muted>
					Enter blog post title here
				</Form.Text>
			</Form>
		</>
	);
};

export default InputTextField;
