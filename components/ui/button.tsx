import { ReactNode } from 'react';
import classes from './button.module.scss';
import Link from 'next/link';

interface Props {
    link?: string;
    onClick?: () => void;
    children: ReactNode;
    type?: "submit" | "button" | "reset"
}

export default function Button({link, children, onClick, type}: Props) {
    if (!link && (!type || type==="button") && !onClick)
        throw new Error('Set either link or onClick on the Button or set the type to "submit"');
    
    if (link) {
        return <Link href={link} className={classes.btn}>
            {children}
        </Link>;
    }

    return <button type={type || "button"} className={classes.btn} onClick={onClick}>
        {children}
    </button>;
}