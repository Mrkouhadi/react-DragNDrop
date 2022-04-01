import React from 'react'
import { useDrag } from 'react-dnd'

const DraggableImg = ({url, id}) => {
    const [{isDragging}, drag] = useDrag(()=>({
        type:'image',
        collect:(monitor) =>({
            isDragging:!!monitor.isDragging(),
        })
    }));

console.log(isDragging, drag);

  return <img className='img' src={url}
              style={{border:isDragging ? "10px solid pink" : "0px"}}
              ref={drag}
         />
}

export default DraggableImg