import { StatisticsList } from "components/Statistics/StatisticsList";
import PropTypes from 'prop-types';
import {Section} from '../Section/Section.styled'
import {SectionTitle,SectionList,} from './Statistics.styled'

export const Statistics = ({ title, stats }) => {
    return (
        <Section>
            {title && (<SectionTitle>{title}</SectionTitle>)}
                        
            <SectionList>
                {stats.map(({id, label,percentage}) => (
                <StatisticsList   key={id} label={label} percentage={percentage} />
                    ))}
            </SectionList>
        </Section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label:PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
  }),)
}