"use client";
import BtnsControl from '@/components/btns-control';
import { question } from '@/mock/page2';
import { DragDropContext, Draggable, Droppable, DropResult } from '@hello-pangea/dnd';
import React from 'react';

const MyForm = () => {
    const [items, setItems] = React.useState(question.options);

    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result;

        if (!destination || destination.index === source.index) return;

        const updatedItems = Array.from(items);
        const [movedItem] = updatedItems.splice(source.index, 1);
        updatedItems.splice(destination.index, 0, movedItem);
        setItems(updatedItems);
    };
    console.log({ items })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userAnswer = items.map(item => item.id); 

        if (userAnswer.toString() === question.answers.toString()) {
            console.log("success");
        } else {
            console.log("failed");
        }
    };
    return (
        <DragDropContext onDragEnd={onDragEnd} >
            <div className='space-y-5'>
                <h2 className="text-2xl">{question.question}</h2>
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
                            <div className='border-dashed border-2 border-custom-blue rounded-lg p-6 space-y-5'>
                                {items.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className='bg-custom-sky-blue2 p-4 rounded-md shadow-xl text-white text-xl'
                                            >
                                                {item.option}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        </div>
                    )}
                </Droppable>

                <form onSubmit={handleSubmit} onReset={() => setItems(question.options)} className='py-10'>
                    <BtnsControl />
                </form>
            </div>
        </DragDropContext>
    );
};

export default MyForm;
