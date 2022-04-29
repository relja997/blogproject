import 'regenerator-runtime/runtime';
import Header from '../components/Header';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { Alert } from 'react-bootstrap';

test('should render header', () => {
	render(<Header setShowModal={() => {}} />);

	const welcomeMessage = screen.getByText(/welcome to my blog/i);
	expect(welcomeMessage).toBeInTheDocument();
	const addPostButton = screen.getByText(/add post/i);
	expect(addPostButton).toBeInTheDocument();
	fireEvent.click(addPostButton);
	const message = screen.queryByRole('alert');
	expect(message).toBeNull();
});

test('should render header with message', () => {
	render(
		<Header
			setShowModal={() => {}}
			message={
				<Alert
					variant='success'
					onClose={() => {
						setMessage('');
					}}
					dismissible
				>
					Successfully added new blog post
				</Alert>
			}
		/>
	);

	const message = screen.getByRole('alert');
	expect(message).toBeInTheDocument();
});
