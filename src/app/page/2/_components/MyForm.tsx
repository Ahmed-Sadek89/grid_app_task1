"use client";
import { DragDropContext, Draggable, Droppable, DropResult } from '@hello-pangea/dnd';
import React from 'react';


const initialItems = ["dog","parrot", "cat"];

const MyForm = () => {
    const [items, setItems] = React.useState(initialItems);

    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result;

        // Dropped outside the list
        if (!destination) {
            return;
        }

        // If the item is dropped in the same place
        if (destination.index === source.index) {
            return;
        }

        const updatedItems = Array.from(items);
        // Move the item within the array
        const [movedItem] = updatedItems.splice(source.index, 1);
        updatedItems.splice(destination.index, 0, movedItem);
        setItems(updatedItems);
        console.log({ items, updatedItems })
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppableItems">
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        style={{
                            marginTop: '16px',
                            padding: '16px',
                            background: '#f0f0f0',
                            borderRadius: '4px',
                        }}
                    >
                        <h2>Available Items</h2>
                        {items.map((item, index) => (
                            <Draggable key={index} draggableId={item} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                            ...provided.draggableProps.style,
                                            padding: '8px',
                                            margin: '4px 0',
                                            background: '#fff',
                                            borderRadius: '4px',
                                            boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                                        }}
                                    >
                                        {item}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default MyForm;
