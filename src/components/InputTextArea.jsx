import { Form } from 'react-bootstrap';

const InputTextArea = ({ title, msg, val, setVal }) => {
	return (
		<>
			<Form.Label htmlFor='inputText'>{title}</Form.Label>
			<Form.Control
				type='text'
				id='inputText'
				placeholder={msg}
				as='textarea'
				rows={3}
				value={val}
				onChange={e => {
					setVal(e.target.value);
				}}
			/>
		</>
	);
};

export default InputTextArea;
