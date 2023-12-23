export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return <>{options.map(option => <button onClick={(e) => onLeaveFeedback(e)} value={option} key={option}>{name(option)}</button>) }</>
}

const name = (option) => {
   return option[0].toUpperCase() + option.slice(1, option.length)
}