import React, {useState} from 'react';
import './Modal.css';

const ModalSection = (props) => {
    return(
        <>
            <div className="modal-section">
                <div aria-label='modal section subheader' className="modal-subheader">{props.header}</div>
                {props.data.map((a, i) => 
                    <div aria-label='modal section data' key={i}>{a[props.section].name}</div>
                )}
            </div>
        </>
    )
}

export default function Modal(props){
    const { state: [state, setState] } = {state: useState({}), ...(props.state)};

    return (
            <div className="modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div aria-label='additional info title'>additional info: {props.data.name}</div>
                    <div title='close' aria-label='close' className="close" onClick={() => setState({...state, show: {id: props.data.id, isShown: !state.show.isShown} })}><strong>x</strong></div>
                </div>
                <ModalSection section="ability" header="abilities" data={props.data.abilities}/>
                <ModalSection section="type" header="types" data={props.data.types}/>
            </div>
    )
}