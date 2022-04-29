import 'regenerator-runtime/runtime';
import NavbarComponent from '../components/NavbarComponent';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import 'jest-location-mock';

test('should render navbar', () => {
	render(<NavbarComponent setFilteredBlogs={() => {}} />);
	const myBlog = screen.getByText(/my blog/i);
	expect(myBlog).toBeInTheDocument();
	fireEvent.click(myBlog);
	const searchBar = screen.getByPlaceholderText('Search');
	expect(searchBar).toBeInTheDocument();
	const link1 = screen.getByText(/Link 1/i);
	expect(link1).toBeInTheDocument();
	const link2 = screen.getByText(/Link 2/i);
	expect(link2).toBeInTheDocument();
	const link3 = screen.getByText(/Link 3/i);
	expect(link3).toBeInTheDocument();
	const myProfile = screen.getByText(/My profile/i);
	expect(myProfile).toBeInTheDocument();
	const logout = screen.getByText(/Logout/i);
	expect(logout).toBeInTheDocument();
});

test('should type in searchBar', () => {
	render(<NavbarComponent setFilteredBlogs={() => {}} />);
	const searchBar = screen.getByPlaceholderText('Search');
	fireEvent.click(searchBar);
	fireEvent.change(searchBar, { target: { value: 'Post' } });
	expect(searchBar.value).toBe('Post');
	fireEvent.keyPress(searchBar, {
		key: 'Enter',
		code: 'Enter',
		charCode: 13,
	});
});
