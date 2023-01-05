import { Box, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

function Skills() {

    const skills = [
        'POO', 
        'BD Relacional', 
        'html', 
        'css', 
        'javascript', 
        'react', 
        'node', 
        'c#', 
        'entityFramework', 
        'sql']

    return (
        <Box>
            <List>
                <ListItem>
                    {skills.map((skill) =>{
                        return <ListItemText
                        primary={skill}
                    />
                    })}
                </ListItem>
            </List>
        </Box>
    )
}

export default Skills