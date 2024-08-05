import React from 'react';
import Button from '../components/Button/Button';

const DeleteButton = ({ id, onDelete }) => {
  const handleClick = () => {
    console.log('Delete button');
    onDelete(id);
  };

  return (
    <Button onClick={handleClick}>
      Delete
    </Button>
  );
};

export default DeleteButton;
