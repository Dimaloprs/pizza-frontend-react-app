import React from 'react';
import { HeaderProps } from './HeaderProps';
import cls from './Header.module.scss';


const Header: React.FC<HeaderProps> = ({ children }) => {
	return (
		<div className={cls.header}>
			<div className={cls.headerWrapper}>
				<div className={cls.leftHeader}>
					<img src='logo.svg' alt='Логотип пиццерии' />
					<span>
						<h2>REACT PIZZA</h2>
						<p>самая вкусная пицца во вселенной</p>
					</span>
				</div>
				<div className={cls.rightHeader}>{ children }</div>
			</div>
			<hr />
		</div>
	);
};

export default Header;
