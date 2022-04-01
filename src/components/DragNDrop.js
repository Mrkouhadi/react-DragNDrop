import React from 'react'
import DraggableImg from './DraggableImg';

const DragNDrop = () => {
    const imgs = [
        {id:0, url:'https://picsum.photos/id/44/400/300'},
        {id:1, url:'https://picsum.photos/id/111/400/300'},
        {id:2, url:'https://picsum.photos/id/122/400/300'},
        {id:3, url:'https://picsum.photos/id/309/400/300'},
    ];

  return (
    <>
        <div className='imgs'>
            {
                imgs.map(img =>(
                    <DraggableImg url={img.url} key={img.id} id={img.id}/>
                ))
            }  
                
        </div>
        <div className='board'>
                
        </div>
    </>
  )
}

export default DragNDrop