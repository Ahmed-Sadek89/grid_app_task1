"use client"
import { ItemPage3 } from '@/types'
import { Draggable, Droppable } from '@hello-pangea/dnd'

const MainDroppable = ({ items }: { items: ItemPage3[] }) => {
    return (
        <Droppable droppableId="droppableItems">
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className='p-3 bg-center bg-cover rounded-lg'
                    style={{
                        backgroundImage: "url('/q3_bg.svg')",
                    }}
                >
                    <div className='border-dashed border-2 border-custom-blue rounded-lg py-6 px-3 space-y-2'>
                        <h2 className="text-2xl text-custom-black1 pb-2">الكلمات</h2>
                        {items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className='w-2/3 bg-custom-sky-blue2 py-2 px-4 rounded-md shadow-xl text-white'
                                        style={{
                                            ...provided.draggableProps.style,
                                        }}
                                    >
                                        {item.content}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                </div>
            )}
        </Droppable>
    )
}

export default MainDroppable
