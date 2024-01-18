import { AppBar, Toolbar, Typography, Grid } from '@mui/material'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { observer } from 'mobx-react-lite'
import React from 'react'
import boardsStore from '../../../store/boardsStore'
import { Box } from '@mui/system'
import User from '../../shared/User/User';
import usersStore from '../../../store/usersStore';

const Header = () => {
    const { activeBoard, boardsList, setActiveBoard } = boardsStore;
    const { authedUser } = usersStore;

    const handleChange = (event) => {
        setActiveBoard(event.target.value);
    }

    return (
        <AppBar position='static'>
            <Toolbar variant='dense'>
                <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item>
                        <Box display='flex' alignItems='center'>
                            <Typography variant='h6'>
                                Dashboard:
                            </Typography>
                            <FormControl variant='outlined'>
                                <Select
                                    style={{
                                        backgroundColor: '#ffffff',
                                        marginLeft: 10
                                    }}
                                    value={activeBoard.id || ''}
                                    onChange={handleChange}
                                >
                                    <MenuItem value='' disabled>
                                        -
                                    </MenuItem>
                                    {boardsList.map((board) => {
                                        return (
                                            <MenuItem key={board.id} value={board.id}>{board.title}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item>
                        <User user={authedUser} />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default observer(Header);