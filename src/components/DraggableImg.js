import React from 'react'
import { useDrag } from 'react-dnd'

const DraggableImg = ({url, id}) => {
    const [{isDragging}, drag] = useDrag(()=>({
        type:'image',
        item:{  // we can more things into the item object
            id:id
        }, 
        collect:(monitor) =>({
            isDragging:!!monitor.isDragging(),
        })
    }));


  return <img className='img' src={url}
              style={{opacity:isDragging ? .2: 1}}
              ref={drag}
         />
}

export default DraggableImg