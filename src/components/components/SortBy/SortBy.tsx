import React, { useState } from 'react';
import cls from './SortBy.module.scss';
import ListBySort from '../../UI/ListBySort/ListBySort';

const SortBy: React.FC = () => {
	const [isOpenList, setIsOpenList] = useState<boolean>(false);
	const [selectCategories, setSelectCategories] = useState<string>('популярности');

	const giveSelectCategories = (selectCategories: string): void => {
		setSelectCategories(selectCategories);
	};


	const closeListBySort = (): void => {
		setIsOpenList(false);
	};

	return (
		<div className={cls.sortBy}>
			{isOpenList ? (
				<img
					onClick={() => setIsOpenList(!isOpenList)}
					src='vector-up.svg'
					alt='vector'
				/>
			) : (
				<img
					onClick={() => setIsOpenList(!isOpenList)}
					src='vector-down.svg'
					alt='vector'
				/>
			)}
			<span className={cls.textBy}>Сортировка по</span>
			<span className={cls.sortCategories}>{selectCategories}</span>
			{isOpenList ? (
				<ListBySort
					closeListBySort={closeListBySort}
					giveSelectCategories={giveSelectCategories}
					selectCategories={selectCategories}
				/>
			) : null}
		</div>
	);
};

export default SortBy;
