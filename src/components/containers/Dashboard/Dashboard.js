import { observer } from 'mobx-react-lite'
import React from 'react'
import boardsStore from '../../../store/boardsStore'
import { Box } from '@mui/system';
import { DragDropContext } from 'react-beautiful-dnd';
import { Grid, Paper, Typography } from '@mui/material';
import Column from './components/Column';
import { StrictModeDroppable } from '../../../hooks/droppableHook';


const getListStyle = (isDraggingOver) => {
    return {
        backgroundColor: isDraggingOver ? 'lightblue' : 'lightgray',
        padding: 8,
        minHeight: 500
    }
}

const Dashboard = () => {
    const { boards, activeBoard, moveTask } = boardsStore;

    if (!activeBoard) {
        return <p>No active board!</p>
    }

    const onDragEnd = (event) => {
        const { source, destination, draggableId: taskId } = event;

        moveTask(taskId, source, destination);
    };

    return (
        <Box p={2}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Grid container spacing={3}>
                    {activeBoard.sections.map(section => {
                        return (
                            <Grid item key={section.id} xs>
                                <Paper>
                                    <Box p={1} display="flex" alignItems="center" justifyContent="center">
                                        <Typography variant="h5">{section.title}</Typography>
                                    </Box>
                                    <StrictModeDroppable droppableId={section.id}>
                                        {(provided, snapshot) => (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={getListStyle(snapshot.isDraggingOver)}
                                            >
                                                <Column section={section} />
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </StrictModeDroppable>
                                </Paper>
                            </Grid>
                        )
                    })}
                </Grid>
            </DragDropContext>
        </Box>
    )
}

export default observer(Dashboard);