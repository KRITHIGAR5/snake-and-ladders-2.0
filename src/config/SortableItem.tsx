import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

// Define the prop type for SortableItemProps
interface SortableItemProps {
  value: any; // Make sure 'value' is defined in your props
}

// Use SortableElement to make SortableItem sortable
const SortableItem: React.FC<SortableItemProps> = ({ value }) => {
  return <li>{value}</li>;
}

export default SortableElement(SortableItem);
