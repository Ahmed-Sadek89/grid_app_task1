"use client";
import React from 'react';
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
} from '@hello-pangea/dnd';

interface Item {
    id: string;
    content: string;
}

const initialItems: Item[] = [
    { id: '1', content: 'Dog' },
    { id: '2', content: 'Cat' },
    { id: '3', content: 'Parrot' },
    { id: '4', content: 'Eagle' },
    { id: '5', content: 'Lion' },
    { id: '6', content: 'Sparrow' },
];

const Page = () => {
    const [items, setItems] = React.useState<Item[]>(initialItems);
    const [animals, setAnimals] = React.useState<Item[]>([]);
    const [birds, setBirds] = React.useState<Item[]>([]);

    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result;

        // Dropped outside the list
        if (!destination) {
            return;
        }

        let sourceList: Item[], setSourceList: React.Dispatch<React.SetStateAction<Item[]>>;
        let destList: Item[], setDestList: React.Dispatch<React.SetStateAction<Item[]>>;

        // Determine which list the item is being dragged from and to
        if (source.droppableId === 'droppableAnimals') {
            sourceList = animals;
            setSourceList = setAnimals;
        } else if (source.droppableId === 'droppableBirds') {
            sourceList = birds;
            setSourceList = setBirds;
        } else {
            sourceList = items;
            setSourceList = setItems;
        }

        if (destination.droppableId === 'droppableAnimals') {
            destList = animals;
            setDestList = setAnimals;
        } else if (destination.droppableId === 'droppableBirds') {
            destList = birds;
            setDestList = setBirds;
        } else {
            destList = items;
            setDestList = setItems;
        }

        const [removed] = sourceList.splice(source.index, 1); // Remove the item from the source list

        if (source.droppableId === destination.droppableId) {
            // Move within the same list
            destList.splice(destination.index, 0, removed);
            setDestList([...destList]);
        } else {
            // Move between lists
            setDestList([...destList, removed]);
            setSourceList([...sourceList]); // Update the source list
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Droppable droppableId="droppableAnimals">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            style={{
                                width: '45%',
                                padding: '16px',
                                background: '#f0f0f0',
                                borderRadius: '4px',
                            }}
                        >
                            <h2>Animals</h2>
                            {animals.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
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
                                            {item.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

                <Droppable droppableId="droppableBirds">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            style={{
                                width: '45%',
                                padding: '16px',
                                background: '#f0f0f0',
                                borderRadius: '4px',
                            }}
                        >
                            <h2>Birds</h2>
                            {birds.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
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
                                            {item.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>

            {/* Unassigned Items */}
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
                            <Draggable key={item.id} draggableId={item.id} index={index}>
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
                                        {item.content}
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
}

export default Page;
