import Task from './task.js'
import './taskList.css'
const taskList = props => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => task.active === false)

    const activeTasks = active.map(task => <Task task={task} key={task.id} changeDoneStatus={props.changeDoneStatus} deleteTask={props.deleteTask} />)

    const doneTasks = done.map(task => <Task task={task} key={task.id} deleteTask={props.deleteTask} />)

    const doneTasksCunter = doneTasks.length > 0 ? <span>({doneTasks.length})</span> : null

    return (
        <div className="taskList--layout">
            <div className='taskList--activeTasks'>
                <h2>Active Tasks</h2>
                <ul>
                    {activeTasks.length < 1 ? <span>No tasks to be performed</span> : activeTasks}
                </ul>
            </div>
            <div className='taskList--doneTasks'>
                <h2>Done Tasks {doneTasksCunter}</h2>
                {doneTasks.length > 5 ? <div className='donetasks--info'>Only last 5 tasks are displayed</div> : null}
                <ul>
                    {doneTasks.length < 1 ? <span>No completed tasks</span> : <span>{doneTasks.slice(0, 5)}</span>}
                </ul>
            </div>
        </div>
    )
}

export default taskList;