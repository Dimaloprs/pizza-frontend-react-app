import React from 'react';
import './assets/styles/App.scss';
import Header from './components/layouts/Header/Header';
import OrangeButton from './components/UI/OrangeButton/OrangeButton';

const App: React.FC = () => {
	return (
		<div className='App'>
			<Header>
				<OrangeButton>
					<span className='cost'>520 ₽</span>
					<div className='line'></div>
					<img className='basket' src='basket.svg' alt='Корзина' />
					<span className='numberGoods'>3</span>
				</OrangeButton>
			</Header>
		</div>
	);
};

export default App;
