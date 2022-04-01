import React from 'react'
import { useDrag } from 'react-dnd'

const DraggableImg = ({url, id}) => {
    const [{isDragging, drag}] = useDrag(()=>({
        type:'image',
        item:id,
        collect:(monitor) =>({
            isDragging:!!monitor.isDragging(),
        })
    }));


  return <img className='img' src={url}
              style={{border:isDragging ? "10px solid red" : "0px"}}
              ref={drag}
         />
}

export default DraggableImg