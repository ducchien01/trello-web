import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sort'

import { DndContext, PointerSensor, useSensor, useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'


function BoardContent({ board }) {
  // https://docs.dndkit.com/api-documentation/sensors
  // Nếu dùng PointSensor phải kết hợp với touch-action = none ở CSS nhưng còn bug
  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } });

  // Yêu cầu chuột di chuyển 10px thì mới kích hoạt event, fix click bị gọi event
  // xử lý cảm ứng chạm
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } });
  // Nhấn giữ 250ms và dung sai cảm ứng 500px thì kích hoạt event
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } });

  // Ưu tiển sử dụng kết hợp 2 loại sensor là mouse và touch để có trải nghiệm tốt nhất trên mobile
  // const sensors = useSensors(pointerSensor)
  const sensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumns, setOrderedColumns] = useState([]);

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragEnd = (event) => {
    // console.log(event)
    const { active, over } = event

    // fix TH kéo ra ngoài id = null
    if (!over) return

    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
      const newIndex = orderedColumns.findIndex(c => c._id === over.id)

      // hàm ArrayMove của dnd-kit sắp xếp lại mảng Columns ban đầu
      // Code ArrayMove : dnd-kit/pagekages/sortable/src/utilities/arrayMove.ts
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
      // console.log("dndOrderedColumns", dndOrderedColumns)
      // console.log("dndOrderedColumnsIds", dndOrderedColumnsIds)

      setOrderedColumns(dndOrderedColumns)
    }

  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box sx={{
        height: (theme) => theme.trello.boardContentHeight,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976b2'),
        width: '100%',
        p: '10px 0'
      }}>
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  )
}

export default BoardContent
