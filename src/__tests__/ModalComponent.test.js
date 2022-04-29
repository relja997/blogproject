import 'regenerator-runtime/runtime';
import ModalComponent from '../components/ModalComponent';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';

test('shoult render modalcomponent', () => {
	render(
		<ModalComponent
			showModal={true}
			setShowModal={() => {}}
			getBlogs={() => {}}
			setMessage={() => {}}
			categories={[]}
		/>
	);

	const modalTitle = screen.getByText('Add/Edit blog post');
	expect(modalTitle).toBeInTheDocument();
	const titleInput = screen.getByPlaceholderText(
		/enter blogpost title here/i
	);
	expect(titleInput).toBeInTheDocument();
	const textInput = screen.getByPlaceholderText(
		/enter blogpost content here/i
	);
	expect(textInput).toBeInTheDocument();

	const postButton = screen.getByText('Post');
	expect(postButton).toBeInTheDocument();
	const cancelButton = screen.getByText('Cancel');
	expect(cancelButton).toBeInTheDocument();
});

test('should type in fields', () => {
	render(
		<ModalComponent
			showModal={true}
			setShowModal={() => {}}
			getBlogs={() => {}}
			setMessage={() => {}}
			categories={[]}
		/>
	);

	const titleInput = screen.getByPlaceholderText(
		/enter blogpost title here/i
	);
	const textInput = screen.getByPlaceholderText(
		/enter blogpost content here/i
	);
	fireEvent.click(titleInput);
	fireEvent.change(titleInput, { target: { value: 'Novi post' } });
	expect(titleInput.value).toBe('Novi post');
	fireEvent.click(textInput);
	fireEvent.change(textInput, { target: { value: 'Ovo je novi post' } });
	expect(textInput.value).toBe('Ovo je novi post');

	const postButton = screen.getByText('Post');
	fireEvent.click(postButton);
});
