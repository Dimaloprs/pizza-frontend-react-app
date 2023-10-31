import React, { useState } from 'react';
import cls from './ListBySort.module.scss';
import { ListBySortProps } from './ListBySortProps';

const ListBySort: React.FC<ListBySortProps> = ({
	giveSelectCategories,
	closeListBySort,
	selectCategories,
}) => {
	const typeSort: string[] = ['популярности', 'цене', 'алфавиту'];
	const [selectedType, setSelectedType] = useState<string>(selectCategories);
	const newSelectedType = (event: React.MouseEvent<HTMLLIElement>): void => {
		const categories: string = event.currentTarget.textContent!;
		setSelectedType(categories);
	};

	return (
		<ul className={cls.ListBySort}>
			{typeSort.map((categories, key) => (
				<li
					className={
						selectedType === categories ? cls.orange : cls.white
					}
					onClick={event => {
						newSelectedType(event);
						giveSelectCategories(categories);
						closeListBySort();
					}}
					key={key}
				>
					{categories}
				</li>
			))}
		</ul>
	);
};

export default ListBySort;
