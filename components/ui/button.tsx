import { ReactNode } from 'react';
import classes from './button.module.scss';
import Link from 'next/link';

interface Props {
    link?: string;
    onClick?: () => void;
    children: ReactNode
}

export default function Button({link, children, onClick}: Props) {
    if (!link && !onClick)
        throw new Error('Set either link or onClick on the Button, both cant be left');
    
    if (link) {
        return <Link href={link} className={classes.btn}>
            {children}
        </Link>;
    }

    return <button className={classes.btn} onClick={onClick}>
        {children}
    </button>;
}