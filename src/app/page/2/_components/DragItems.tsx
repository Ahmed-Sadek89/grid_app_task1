import { dragedItemsPage2 } from '@/types'
import { Draggable, DroppableProvided } from '@hello-pangea/dnd'
import React from 'react'

type props = {
    items: dragedItemsPage2[],
    isSuccess: boolean | null,
    provided: DroppableProvided
}
const DragItems = ({ items, isSuccess, provided }: props) => {
    return (
        <div className='border-dashed border-2 border-custom-blue rounded-lg p-6 space-y-5'>
            {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className='bg-custom-sky-blue2 p-4 rounded-md shadow-xl flex items-center gap-x-3'
                        >
                            <span className='text-white text-xl'>{item.option}</span>
                            {
                                isSuccess !== null &&
                                <span className='text-yellow-300 italic text-xl'>{item.rank}</span>
                            }
                        </div>
                    )}
                </Draggable>
            ))}
            {provided.placeholder}
        </div>
    )
}

export default DragItems
