import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'

function BoardContent() {
  return (
    <Box sx={{
      height: (theme) => theme.trello.boardContentHeight,
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976b2'),
      width: '100%',
      p: '10px 0'
    }}>
      <ListColumns />
    </Box>
  )
}

export default BoardContent
