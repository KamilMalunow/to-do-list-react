import './task.css'

const task = props => {
    const style = { color: 'red' }
    const { text, date, important, id, finishDate } = props.task

    if (props.task.active) {
        return (
            <li>
                <div className='task'>
                    <button className='button' onClick={() => props.changeDoneStatus(id)}>Done</button>
                    <button className='button' onClick={() => props.deleteTask(id)}>Delete</button>
                    <strong style={important ? style : null}>{text} </strong><span className='task--content'>- to do on {date}</span>

                </div>
            </li>
        )
    } else {
        const finish = new Date(finishDate).toLocaleString()
        return (
            <li>
                <div className='task'>
                    <button className='button' onClick={() => props.deleteTask(id)}>Delete</button>
                    <strong style={important ? style : null}>{text}</strong>
                    <span className='task--content'> - to do on {date} <em>Completed at {finish}</em></span>

                </div>
            </li>
        )
    }

}
export default task;