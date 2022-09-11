import PropTypes from 'prop-types';
import css from './EventCard.module.css';
import { FaMapMarkedAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import { iconSize } from 'constants';
import {formatEventDuration, formatEventStart} from 'utils'

export const EventCard = ({ name, location, speaker, type, start, end }) => {
    
    const formattedStartTime = formatEventStart(start)
    const duration = formatEventDuration(start, end)
    return (
        <div className={css.event}>
            <h2 className={css.title}>{name}</h2>
            <p className={css.info}>
                <FaMapMarkedAlt className={ css.icon}  size={iconSize.sm}/>
                {location}
            </p>
            <p className={css.info}>
                <FaUserAlt className={ css.icon} size={iconSize.sm}/>
                {speaker}
            </p>
            <p className={css.info}>
                <FaCalendarAlt className={ css.icon} size={iconSize.sm}/>
                {formattedStartTime}
            </p>
            <p className={css.info}>
                <FaClock className={ css.icon} size={iconSize.sm}/>
                {duration}
            </p>
            <span className={`${css.chip} ${css[type]}`}>{type}</span> 
        </div>
    );
}

EventCard.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
}