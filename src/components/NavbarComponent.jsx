import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const NavbarComponent = () => {
	return (
		<Navbar bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand href='#'>My blog</Navbar.Brand>
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
			</Container>
		</Navbar>
	);
};

export default NavbarComponent;
