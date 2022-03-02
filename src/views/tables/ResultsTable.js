import { useState } from 'react';
import { Button, GridHeader, GridData } from '../../shared/fragments/index';
import './Tables.css';

export default function ResultsTable(props){
    const { state: [state, setState] } = {state: useState({}), ...(props.state)};

    const checkFavorites = () => {
        if (state.favorites.find(fv => fv.id === props.data.id))
            setState({...state, msg: 'pokemon has already been added to your '});
        else
            setState({...state, favorites: [...state.favorites, props.data]})
    }

    return (
        <div className='section'>
            <Button label='add to favorites' onClick={checkFavorites} />
            <div className='grid search' aria-label='search grid'>
                <GridHeader />
                <div aria-label='pokemon name' title={props.data.name}>{props.data.name}</div>
                <GridData data={props.data} />
            </div>
        </div>
    )
}