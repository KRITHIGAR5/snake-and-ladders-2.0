import React from 'react';
import SortableItem from './SortableItem';
import { SortableContainer, SortableContainerProps } from 'react-sortable-hoc';

interface SortableListProps {
  items: any[]; // Replace 'any' with the correct type of your items
}

const SortableList: React.FC<SortableListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
}

export default SortableContainer<SortableListProps>(SortableList);
