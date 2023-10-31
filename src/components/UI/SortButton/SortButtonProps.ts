import { HTMLAttributes, ReactNode, MouseEvent } from 'react';

export interface SortButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    isActive: boolean;
    activateButton: (event: MouseEvent<HTMLButtonElement>) => void;
}
