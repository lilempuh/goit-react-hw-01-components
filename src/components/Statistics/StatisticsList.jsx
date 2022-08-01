import PropTypes from 'prop-types';
import {SectionCard, StatisticsNameInfo} from './Statistics.styled'


export const StatisticsList = ({label,percentage}) => {
    return (
        
        <SectionCard>
      <StatisticsNameInfo>{label}</StatisticsNameInfo>
        <StatisticsNameInfo>{percentage}%</StatisticsNameInfo>
    </SectionCard>
    )
}

StatisticsList.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
   