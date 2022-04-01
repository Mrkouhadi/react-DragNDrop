import React, { useState } from 'react'
import DraggableImg from './DraggableImg';
import { useDrop } from 'react-dnd'

const imgs = [
    {id:0, url:'https://picsum.photos/id/44/400/300'},
    {id:1, url:'https://picsum.photos/id/111/400/300'},
    {id:2, url:'https://picsum.photos/id/122/400/300'},
    {id:3, url:'https://picsum.photos/id/309/400/300'},
    {id:4, url:'https://picsum.photos/id/139/400/300'},
];

const DragNDrop = () => {
    const [board, setBoard] = useState([])

    const addImgToBoard = ID =>{
        const newItem = imgs.filter(img => img.id === ID)[0];
        setBoard(board => [
            ...board,
            newItem
        ]);
    }
    const [{isOver}, drop] = useDrop(() => ({
        accept:'image',
        drop:item=> addImgToBoard(item.id),
        collect:(monitor) =>({
            isOver:!!monitor.isOver(),
        })
      }))
  return (
    <>
        <div className='imgs'  >
            {
                imgs.map(img =>(
                    <DraggableImg url={img.url} key={img.id} id={img.id}/>
                ))
            }  
                
        </div>
        <div className='board' ref={drop}>
                {
                    board.map(img =>(
                        <DraggableImg url={img.url} key={img.id} id={img.id}/>
                    ))
                }
                {board.length}
        </div>
    </>
  )
}

export default DragNDrop