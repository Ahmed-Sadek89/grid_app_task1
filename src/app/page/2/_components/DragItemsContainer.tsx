import { Droppable, DroppableProvided } from '@hello-pangea/dnd'
import React from 'react'
import DragItems from './DragItems'
import { dragedItemsPage2 } from '@/types'

type props = {
    items: dragedItemsPage2[],
    isSuccess: boolean | null,
}

const DragItemsContainer = ({ items, isSuccess }: props) => {
    return (
        <Droppable droppableId="droppableItems">
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className='p-3 bg-center bg-cover rounded-lg'
                    style={{
                        backgroundImage: "url('/question_bg.svg')",
                    }}
                >
                    <DragItems isSuccess={isSuccess} items={items} provided={provided} />
                </div>
            )}
        </Droppable>
    )
}

export default DragItemsContainer
