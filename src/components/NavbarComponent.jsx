import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const NavbarComponent = () => {
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
