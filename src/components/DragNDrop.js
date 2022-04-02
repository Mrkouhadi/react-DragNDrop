import React, { useState } from 'react'
import DraggableImg from './DraggableImg';
import { useDrop } from 'react-dnd'
import imgs from '../imgDATA';

const DragNDrop = () => {
    const [board, setBoard] = useState([]);

    let ids = [];

    const addImgToBoard = ID =>{
        const newItem = imgs.filter(img => img.id === ID)[0];
        if(!ids.includes(ID)){
            setBoard(board => [
                ...board,
                newItem
            ]);
           return ids = [...ids, ID];
        };
    }

    const [{isOver}, drop] = useDrop(() => ({
        accept:'image',
        drop:item=> addImgToBoard(item.id),
        collect:(monitor) =>({
            isOver:!!monitor.isOver(),
        }),
      }));

  return (
    <>
        <div className='imgs'>
            {
                imgs.map(img =>(
                    <DraggableImg url={img.url} key={img.id} id={img.id}/>
                ))
            }
        </div>
        <div className='board' ref={drop} style={{backgroundColor:isOver ? "#c0c0c0" : "#FFC0CB"}}>
                {
                    board.map(img =>(
                        <DraggableImg url={img.url} key={img.id} id={img.id}/>
                    ))
                }
        </div>
    </>
  )
}

export default DragNDrop