import { Form } from 'react-bootstrap';

const InputTextField = ({ title, msg, val, setVal }) => {
	return (
		<>
			<Form.Label htmlFor='inputTitle'>{title}</Form.Label>
			<Form.Control
				type='text'
				id='inputTitle'
				placeholder={msg}
				value={val}
				onChange={e => {
					setVal(e.target.value);
				}}
				autoFocus
				required
			/>
		</>
	);
};

export default InputTextField;
