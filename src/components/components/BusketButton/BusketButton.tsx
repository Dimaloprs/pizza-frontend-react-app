import React from 'react';
import { OrangeButtonProps } from './BusketButtonProps';
import cls from './BusketButton.module.scss';


const BasketButton: React.FC<OrangeButtonProps> = ({ children }) => {
	return (
		<button className={cls.button}>
			{ children }
		</button>
	);
};

export default BasketButton;
