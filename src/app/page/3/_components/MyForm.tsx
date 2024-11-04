"use client";
import React, { memo, useEffect } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import { initialItems } from '@/mock/page3';
import { ItemPage3 } from '@/types';
import TargetDroppable from './TargetDroppable';
import MainDroppable from './MainDroppable';
import useDragEndPage3 from '@/hook/use-drag-end-page3';
import FormControl from './FormControl';

const MyForm = () => {

    const [items, setItems] = React.useState<ItemPage3[]>(initialItems);
    const [animals, setAnimals] = React.useState<ItemPage3[]>([]);
    const [birds, setBirds] = React.useState<ItemPage3[]>([]);
    const resetResult = () => {
        setItems([...initialItems]);
        setAnimals([]);
        setBirds([]);
    }
    useEffect(() => {
        if (initialItems) {
            resetResult()
        }
    }, []);

    const onDragEnd = useDragEndPage3({
        items, setItems, animals, setAnimals, birds, setBirds
    })
    console.log({ items, animals, birds })
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='space-y-5'>
                <h2 className="text-2xl">إختر الكلمات المناسبة لكل عمود:</h2>
                <MainDroppable items={items} />
            </div>
            <br />
            <div className='grid grid-cols-2 items-start gap-x-4'>
                <TargetDroppable droppableElements={birds} droppableId='droppableBirds' droppableTitle='طيور' />
                <TargetDroppable droppableElements={animals} droppableId='droppableAnimals' droppableTitle='حيوانات' />
            </div>
            <FormControl data={{items, birds, animals}} resetResult={resetResult} />
        </DragDropContext>
    );
}

export default memo(MyForm);
