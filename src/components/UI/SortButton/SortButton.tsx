import React from 'react';
import { SortButtonProps } from './SortButtonProps';
import cls from './SortButton.module.scss';

const SortButton: React.FC<SortButtonProps> = ({
	children,
	isActive,
	activateButton,
}) => {
	return (
		<button
			className={isActive ? cls.btnBlack : cls.btnWhite}
			onClick={activateButton}
		>
			{children}
		</button>
	);
};

export default SortButton;
