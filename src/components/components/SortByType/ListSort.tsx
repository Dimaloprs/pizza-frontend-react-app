import React, { useState } from 'react';
import cls from './ListSort.module.scss';
import SortButton from '../../UI/SortButton/SortButton';

const ListSort: React.FC = () => {
	const typeSort: string[] = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];
	const [activeButton, setActiveButton] = useState<string>('Все');

	const activateButton = (event: React.MouseEvent<HTMLButtonElement>): void => {
		const categories: string = event.currentTarget.textContent!;
		setActiveButton(categories);
	};

	return (
		<ul className={cls.ul}>
			{typeSort.map((categories, key) => (
				<li className={cls.li} key={key}>
					<SortButton
						activateButton={activateButton}
						isActive={activeButton === categories}
					>
						{categories}
					</SortButton>
				</li>
			))}
		</ul>
	);
};

export default ListSort;
