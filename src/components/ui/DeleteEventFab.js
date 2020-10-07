import React from 'react'
import { useDispatch } from 'react-redux';
import { eventStartDeleted } from '../../actions/events';

export const DeleteEventFab = () => {

  const dispatch = useDispatch()
  const handleClickDelete = () => {
    dispatch ( eventStartDeleted() )
  }

  return (
    <button
      onClick={handleClickDelete}
      className='btn btn-danger fab-danger'
    >
      <i className='fas fa-trash'></i>
      <span> Borrar Evento</span>
    </button>
  )
}
