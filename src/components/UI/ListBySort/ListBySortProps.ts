import { HTMLAttributes } from "react";

export interface ListBySortProps extends HTMLAttributes<HTMLUListElement> {
    giveSelectCategories: (selectCategories: string) => void;
    closeListBySort: () => void;
    selectCategories: string;
}