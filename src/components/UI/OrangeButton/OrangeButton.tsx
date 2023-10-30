import React from 'react';
import { OrangeButtonProps } from './OrangeButtonProps';
import cls from './OrangeButton.module.scss';


const OrangeButton: React.FC<OrangeButtonProps> = ({ children }) => {
	return (
		<button className={cls.button}>
			{ children }
		</button>
	);
};

export default OrangeButton;
