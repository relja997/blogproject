import axios from 'axios';
import { useState } from 'react';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const NavbarComponent = ({ setFilteredBlogs }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = async e => {
		e.preventDefault();
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_BLOG_API}/BlogPosts/Search`,
				{
					params: {
						term: searchTerm,
					},
				}
			);
			const filtered = res.data.resultData;
			setFilteredBlogs(filtered);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Navbar expand='md' bg='dark' variant='dark'>
			<Navbar.Brand
				href='#home'
				onClick={e => {
					e.preventDefault();
					location.reload();
				}}
			>
				My blog
			</Navbar.Brand>
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='ms-auto'>
					<Form
						className='d-flex'
						onSubmit={e => {
							handleSearch(e);
						}}
					>
						<FormControl
							type='search'
							placeholder='Search'
							className='me-2'
							aria-label='Search'
							value={searchTerm}
							onChange={e => {
								setSearchTerm(e.target.value);
							}}
						/>
					</Form>
					<Nav.Link href='#'>Link 1</Nav.Link>
					<Nav.Link href='#'>Link 2</Nav.Link>
					<Nav.Link href='#'>Link 3</Nav.Link>
					<Nav.Link href='#'>My profile</Nav.Link>
					<Nav.Link href='#'>Logout</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
		</Navbar>
	);
	{
		/* <Navbar bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand href='#'></Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav>
						<Form className='d-flex'>
							<FormControl
								type='search'
								placeholder='Search'
								className='me-2'
								aria-label='Search'
							/>
						</Form>
						<Nav.Link href='#'>Link 1</Nav.Link>
						<Nav.Link href='#'>Link 2</Nav.Link>
						<Nav.Link href='#'>Link 3</Nav.Link>
						<Nav.Link href='#'>My profile</Nav.Link>
						<Nav.Link href='#'>Logout</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar> */
	}
};

export default NavbarComponent;
