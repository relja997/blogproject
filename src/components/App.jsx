import { useState } from 'react';
import '../styles/index.scss';
import Content from './Content';
import Header from './Header';
import ModalComponent from './ModalComponent';
import NavbarComponent from './NavbarComponent';

const App = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<NavbarComponent />
			<Header setShowModal={setShowModal} />
			<Content showModal={showModal} setShowModal={setShowModal} />
		</>
	);
};

export default App;
