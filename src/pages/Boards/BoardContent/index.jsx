import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={{
      height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} -  ${theme.trello.boardBarHeight})`,
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976b2'),
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    }}>
      Content
    </Box>
  )
}

export default BoardContent
