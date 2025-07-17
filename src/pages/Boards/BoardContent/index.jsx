import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={{
      height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} -  ${theme.trello.boardBarHeight})`,
      backgroundColor: 'primary.main'
    }}>
      Content
    </Box>
  )
}

export default BoardContent
