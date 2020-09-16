import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createTask, deleteTask, editTask, toggleTaskDone } from './store/todos'
import Task from './Task'
import TextInput from './TextInput'

const TodoList = ({ current, entries, tasks, createTask = f => f, ...props }) => {
    const today = entries[current] || {}
    const items = today.todos || []
    const [newTask, setNewTask] = useState()
    useEffect(() => { setNewTask() }, [items])
    return (
        <div>
            {items.map(id => (
                <Task
                    onToggleDone={props.onToggleDone}
                    setContent={props.editTask}

                    onDelete={props.onDelete(current)}
                    {...tasks[id]}
                    key={id} />
            ))}
            {items.length < 5 &&
                <div>
                    <TextInput setValue={setNewTask} value={newTask} />
                    <button
                        onClick={() => { if (newTask) createTask(current, newTask) }}
                    >save</button>
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    ...state.journal,
    tasks: state.todos
})

const mapDispatchToProps = dispatch => ({
    createTask: (timestamp, content) => dispatch(createTask(timestamp, content)),
    onDelete: timestamp => id => dispatch(deleteTask(timestamp, id)),
    toggleDone: (id, done) => dispatch(toggleTaskDone(id, done)),
    editTask: (id, content) => dispatch(editTask(id, content))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
