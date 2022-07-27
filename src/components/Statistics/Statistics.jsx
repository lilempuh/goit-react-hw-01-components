

export const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>
            
            <ul className="stat-list">
                {stats.map(stat => (
                    <li key={stat.id}>
                        <StatisticsList 
                        />
                    </li>))} </ul>
        </section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    key:PropTypes.string.isRequired,