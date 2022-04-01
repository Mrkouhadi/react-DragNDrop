import React, { useState } from 'react'
import DraggableImg from './DraggableImg';
import { useDrop } from 'react-dnd'
import imgs from '../imgDATA';


const DragNDrop = () => {
    const [board, setBoard] = useState([]);

    const addImgToBoard = ID =>{
        const newItem = imgs.find(img => img.id === ID);
        const exist = board.findIndex(img => img.id === ID);

        console.log(exist, newItem);

        if( exist === -1) {
            setBoard(board => [
                ...board,
                newItem
            ]);
        }else{
            return null;
        }
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