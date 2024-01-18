import { Card } from '@mui/material'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Task from './Task'
import { observer } from 'mobx-react-lite'
import boardsStore from '../../../../store/boardsStore'

const getItemStyle = (draggableStyle) => {
    return {
        padding: 8,
        marginBottom: 8,
        ...draggableStyle
    }
}

const Column = ({ section }) => {
    const { currentBoardTasks } = boardsStore;

    // TODO: Move to store as "computed"
    const relevantTasksList = currentBoardTasks.find((taskList) => taskList.id === section.id);

    return (
        <div>
            {relevantTasksList?.tasks?.map((task, index) => {
                return (
                    <Draggable draggableId={task.id} key={task.id} index={index}>
                        {(provided) => (
                            <Card
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(provided.draggableProps.style)}
                            >
                                <Task task={task} />
                            </Card>
                        )}
                    </Draggable>
                )
            })}
        </div>
    )
}

export default observer(Column);