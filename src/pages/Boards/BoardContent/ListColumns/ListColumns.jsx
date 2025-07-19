import Box from '@mui/material/Box'
import Column from './Column/Column'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { Button } from '@mui/material'

function ListColumns({ columns }) {
  return (
    <Box sx={{
      bgcolor: 'inherit',
      width: '100%',
      height: '100%',
      display: 'flex',
      overflowX: 'auto',
      overflowY: 'hidden',
      '&::-webkit-scrollbar-track': { m: 2 }
    }}>
      {columns.map((column) => <Column key={column._id} column={column} />)}
      {/* Add new column */}
      <Box sx={{
        mx: 2,
        minWidth: '200px',
        maxWidth: '200px',
        height: 'fit-content',
        borderRadiusL: '6px',
        bgcolor: '#ffffff3d'
      }}>
        <Button
          startIcon={<NoteAddIcon />}
          sx={{
            color: 'white',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1
          }}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns
