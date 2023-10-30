import { ReactNode, HTMLAttributes } from 'react'

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}