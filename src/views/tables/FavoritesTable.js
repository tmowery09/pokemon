import { useState } from 'react';
import Modal from '../../shared/modal/Modal.js';
import { Button, GridData } from '../../shared/fragments/index';
import './Tables.css';

const ModalWrapper = (props) => {
    const { state: [state, setState] } = {state: useState({}), ...(props.state)};
    return(
        <div>
            <div className='scrim'></div>
            <Modal
                key={props.obj.id} 
                data={props.obj} 
                state={{ state: [state, setState] }}/>
        </div>
    )
}

export default function FavoritesTable(props){
    const { state: [state, setState] } = {state: useState({}), ...(props.state)};

    return (
        <>
            <div className='css-link' onClick={() => setState({...state, show: {id: props.obj.id, isShown: !state.show.isShown}})}>
                <span aria-label='pokemon name' title={props.obj.name}>{props.obj.name}</span>
                {state.show.isShown && state.show.id == props.obj.id &&
                    <ModalWrapper
                        obj={props.obj} 
                        state={{ state: [state, setState] }}
                        onClick={() => setState({...state, show: {id: props.obj.id, isShown: false }})}></ModalWrapper>
                }
            </div>
            <GridData data={props.obj}/>
            <Button label='remove' onClick={() =>{ if (window.confirm('are you sure you want to remove this pokemon?')) setState({...state, favorites: state.favorites.filter(fav => fav != props.obj)})}} />
        </>
    )
}