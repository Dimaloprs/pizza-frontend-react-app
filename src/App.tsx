import React from 'react';
import './assets/styles/App.scss';
import Header from './components/layouts/Header/Header';
import BasketButton from './components/components/BusketButton/BusketButton';
import SortButton from './components/UI/SortButton/SortButton';
import ListSort from './components/components/SortByType/ListSort';
import SortBy from './components/components/SortBy/SortBy';

const App: React.FC = () => {
	return (
		<div className='App'>
			<Header>
				<BasketButton >
					<span className='cost'>520 ₽</span>
					<div className='line'></div>
					<img className='basket' src='basket.svg' alt='Корзина' />
					<span className='numberGoods'>3</span>
				</BasketButton>
			</Header>
			<div className='filtration'>
				<ListSort/>
				<SortBy/>
			</div>
		</div>
	);
};

export default App;
