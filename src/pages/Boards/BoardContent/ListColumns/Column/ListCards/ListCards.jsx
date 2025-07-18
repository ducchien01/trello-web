import React from 'react'
import Card from './Card/Card'
import Box from '@mui/material/Box'

function ListCard() {
  return (
    <Box sx={{
      p: '0 5px',
      m: '0 5px',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      overflowX: 'hidden',
      overflowY: 'auto',
      maxHeight: (theme) => `calc(
      ${theme.trello.boardContentHeight} - 
      ${theme.spacing(5)} -
      ${theme.trello.columnHeaderHeight} -
      ${theme.trello.columnFooterHeight}
    )`,
      '&::-webkit-scrollbar': {
        width: '8px',
        height: '8px'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ced0ca',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#bfc2cf',
      }
    }}>
      <Card />
    </Box>
  )
}

export default ListCard
