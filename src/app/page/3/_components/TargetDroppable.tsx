"use client"
import { ItemPage3 } from '@/types'
import { Draggable, Droppable } from '@hello-pangea/dnd'

type props = {
    droppableId: string,
    droppableElements: ItemPage3[],
    droppableTitle: string
}
const TargetDroppable = ({ droppableId, droppableElements, droppableTitle }: props) => {
    return (
        <Droppable droppableId={droppableId}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className='bg-custom-sky-blue3 rounded-xl p-4'
                >
                    <h2 className='text-custom-black1 text-xl text-center pb-2'>{droppableTitle}</h2>
                    <div className='space-y-2'>
                        {droppableElements.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className='w-full bg-custom-sky-blue2 py-2 px-4 rounded-md shadow-xl text-white'
                                        style={{
                                            ...provided.draggableProps.style,
                                        }}
                                    >
                                        {item.content}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

export default TargetDroppable
