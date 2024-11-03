"use client";
import { question } from '@/mock/page2';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import React, { useState } from 'react';
import DragItemsContainer from './DragItemsContainer';
import FormControl from './FormControl';

const MyForm = () => {
    const [items, setItems] = React.useState(question.options);
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null)

    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result;

        if (!destination || destination.index === source.index) return;

        const updatedItems = Array.from(items);
        const [movedItem] = updatedItems.splice(source.index, 1);
        updatedItems.splice(destination.index, 0, movedItem);
        setItems(updatedItems);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='space-y-5'>
                <h2 className="text-2xl">{question.question}</h2>
                <DragItemsContainer items={items} isSuccess={isSuccess} />
                <FormControl isSuccess={isSuccess} setIsSuccess={setIsSuccess} items={items} setItems={setItems} />
            </div>
        </DragDropContext>
    );
};

export default MyForm;
