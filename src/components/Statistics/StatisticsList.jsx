
export const StatisticsList = ({label,percentage,id}) => {
    return ( <li className="item">
      <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
    </li>
    )
}

StatisticsList.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.numbers.isRequired,
}
    