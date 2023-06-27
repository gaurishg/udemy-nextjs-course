import { ReactNode } from 'react';
import classes from './event-content.module.css';

interface Props {
  children: ReactNode
}

function EventContent(props: Props) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
