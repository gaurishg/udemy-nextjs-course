import { ReactNode } from 'react';
import classes from './button.module.scss';
import Link from 'next/link';

interface Props {
    link: string;
    children: ReactNode
}

export default function Button({link, children}: Props) {
    return <Link href={link} className={classes.btn}>
        {children}
    </Link>;
}