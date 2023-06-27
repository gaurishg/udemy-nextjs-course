import { DataModel } from "@/dummy-data";
import EventItem from "./event-item";
import classes from './event-list.module.scss';

interface Props {
    items: DataModel[]
}

export default function EventList({ items }: Props) {
    return <ul className={classes.list}>
        {items.map(event => <EventItem key={event.id} {...event}/>)}
    </ul>;
}