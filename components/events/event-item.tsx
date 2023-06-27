import { DataModel } from "@/dummy-data";
import classes from './event-item.module.scss';
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import { useRouter } from "next/router";

export default function EventItem({title, date, location, image, id}: DataModel) {
    const router = useRouter();
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return <li className={classes.item}>
        <img src={`${router.basePath}/${image}`} alt={title} />
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.date}>
                    <DateIcon />
                    <time>{humanReadableDate}</time>
                </div>
                <div className={classes.address}>
                    <AddressIcon />
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink}>
                    <span>Explore Event</span>
                    <span className={classes.icon}><ArrowRightIcon/></span>
                </Button>
            </div>
        </div>
    </li>;
}