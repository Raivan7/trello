import { CardContent, Typography } from '@mui/material'
import React from 'react'
import User from '../../../shared/User/User'
import { observer } from 'mobx-react-lite'
import usersStore from '../../../../store/usersStore'

const Task = ({ task }) => {
    const { users } = usersStore;

    // TODO: Move to store as "computed"
    const assignedUser = users.find((user) => user.id === task.assignee);

    return (
        <CardContent>
            <Typography color='textPrimary' gutterBottom style={{ fontSize: 18 }}>
                {task?.title}
            </Typography>
            <Typography color='textSecondary' gutterBottom>
                {task?.description}
            </Typography>
            <User user={assignedUser} />
        </CardContent>
    )
}

export default observer(Task);