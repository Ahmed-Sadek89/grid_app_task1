import { ItemPage3 } from '@/types';
import { DropResult } from '@hello-pangea/dnd';
import React from 'react'

type props = {
    items: ItemPage3[],
    setItems: React.Dispatch<React.SetStateAction<ItemPage3[]>>,
    animals: ItemPage3[],
    setAnimals: React.Dispatch<React.SetStateAction<ItemPage3[]>>,
    birds: ItemPage3[],
    setBirds: React.Dispatch<React.SetStateAction<ItemPage3[]>>,
}
const useDragEndPage3 = ({ items, setItems, animals, setAnimals, birds, setBirds }: props) => {

    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result;

        if (!destination) return;


        let sourceList: ItemPage3[], setSourceList: React.Dispatch<React.SetStateAction<ItemPage3[]>>;
        let destList: ItemPage3[], setDestList: React.Dispatch<React.SetStateAction<ItemPage3[]>>;

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

        const [removed] = sourceList.splice(source.index, 1);

        if (source.droppableId === destination.droppableId) {
            destList.splice(destination.index, 0, removed);
            setDestList([...destList]);
        } else {
            setDestList([...destList, removed]);
            setSourceList([...sourceList]);
        }
    };
    return onDragEnd
}

export default useDragEndPage3
