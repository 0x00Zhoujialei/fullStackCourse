const StatisticLine = (props) => (
    <tr>
      <td>{props.text}</td>
      <td></td>
      <td>{props.value}</td>
    </tr>
)

const Statistics = (props) => {
  const total = () => props.good + props.neutral + props.bad
  const average = () =>
      (props.good - props.bad) / (total() || 1)

  const positive = () =>
      `${props.good / (total() || 1) * 100}%`

  if (total() > 0) {
    return (
        <>
          <h1>statistics</h1>
          <table>
            <tbody>
            <StatisticLine text={"good"} value={props.good}/>
            <StatisticLine text={"neutral"} value={props.neutral}/>
            <StatisticLine text={"bad"} value={props.bad}/>
            <StatisticLine text={"all"} value={total()}/>
            <StatisticLine text={"average"} value={average()}/>
            <StatisticLine text={"positive"} value={positive()}/>
            </tbody>
          </table>
        </>
    )
  } else {
    return (
        <p>No feedback given</p>
    )
  }
}

export default Statistics;