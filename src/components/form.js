import React from "react"
import './form.css'
class Form extends React.Component {

    minDate = new Date().toISOString().slice(0, 10)


    state = {
        taskContent: "",
        checked: false,
        date: this.minDate,
        error: false,
    }

    handleChange = e => {
        const value = e.target.value
        const type = e.target.type
        if (type === 'text') {
            this.setState({
                taskContent: value
            })
        } else if (type === 'checkbox') {
            this.setState({
                checked: !this.state.checked
            })
        } else if (type === 'date') {
            this.setState({
                date: value
            })
        }
    }

    handleSubmit = e => {
        const { taskContent, checked, date } = this.state
        e.preventDefault()
        if (taskContent.length > 3) {
            const taskAdded = this.props.addTask(taskContent, checked, date)
            if (taskAdded) {
                this.setState({
                    taskContent: "",
                    checked: false,
                    date: this.minDate,
                    error: false,
                })
            }
        }
        else {
            this.setState({
                error: true
            })
        }

    }
    render() {
        let maxDate = this.minDate.slice(0, 4) * 1 + 1
        maxDate = maxDate + "-12-30"
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="main--inputs">
                    <label>
                        <input
                            type="text"
                            placeholder="Enter new task"
                            className="form--task__content"
                            value={this.state.taskContent}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        <button className="form--button">Add new task</button>
                    </label>
                </div>

                <div className="form--additional__informations">
                    <label>
                        <input
                            type="checkbox"
                            id="form--checkbox"
                            className="form--checkbox"
                            checked={this.state.checked}
                            onChange={this.handleChange}
                        />
                        <span
                            htmlFor="form--checkbox" className="form--additional--informations__checkbox"
                        >
                            Whether this task is important
                        </span>
                    </label>

                    <label>
                        <input
                            type="date"
                            id="form--date"
                            value={this.state.date}
                            onChange={this.handleChange}
                            min={this.minDate}
                            max={maxDate}
                        />
                        <span
                            htmlFor="form--date" className="form--additional--informations__date"
                        >
                            Enter when it should be done
                        </span>
                    </label>
                    {this.state.error ? <span style={{ color: 'red' }}>Task must be at least 3 characters long</span> : null}
                </div>




            </form >
        )
    }
}

export default Form