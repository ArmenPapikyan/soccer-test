export const createStats = (type, stats) => {
    if (type === "player") {
        const arr = Object.keys(stats)
        return (
            <ul className="card-list-group">
                {arr.map((key, index, i) => {
                    return (
                        <li className="card-list" key={i}>
                            <b>{key.toUpperCase()}</b> : <span>{stats[key]}</span>
                        </li>
                    )
                })}
            </ul>
        )
    }
    if (type === "team") {
        let totalGoals = 0
        let totalAppearances = 0
        let totalTackle = 0
        stats.children.map((res) => {
            totalGoals += res.stats.goals / 2
            totalAppearances += res.stats.appearances / 2
            totalTackle += res.stats.tackle / 2
        })
        return (
            <ul className="card-list-group">
                <li className="card-list">
                    <b>GOALS</b> : <span>{totalGoals}</span>
                </li>
                <li className="card-list">
                    <b>APPEARANCES</b> : <span>{totalAppearances}</span>
                </li>
                <li className="card-list">
                    <b>TACKLE</b> : <span>{totalTackle}</span>
                </li>
            </ul>
        )
    }
}
