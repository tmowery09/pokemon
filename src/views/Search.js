import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResultsTable from './tables/ResultsTable';
import './Search.css';

export default function Search(props) {
    const { state: [state, setState] } = {state: useState({}), ...(props.state)};
    const navigate = useNavigate();
    
    useEffect(() => {
        let message = state.favorites.length ? 'pokemon has been added to your ' : null;
        setState({...state, msg: message });
    }, [state.favorites]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = 'https://pokeapi.co/api/v2/pokemon/' + state.searchVal;

        fetch(url)
        .then((response) => response.json())
        .then((response) => handleSuccess(response))
        .catch(error => handleError(error))
    }
    
    const handleSuccess = (res) => {
       setState({...state, data: res, error: null, msg: null })
    }   
    
    const handleError = (err) => {
        console.log(err);
        setState({...state, data: null, msg: null, error: 'the search returned no results' })
     } 

    return(
        <div className='body'>
            <div className="instructions" aria-label='instructions' aria-details='search for a pokemon by name'>
                search for a pokemon by name to find out more information
            </div>
            <form onSubmit={handleSubmit}>
                <div className='input'>
                    <label htmlFor='search' className='input-label' aria-label='pokemon'> pokemon:</label>
                    <input type='text' 
                        id='search'
                        name='search'
                        autoFocus={true}
                        value={state.searchVal}
                        aria-label='pokemon search term'
                        placeholder='enter pokemon name'
                        onKeyDown={e => { if (e.key == 'Escape') setState({...state, searchVal: ''})}}
                        onChange={e => setState({...state, searchVal: e.target.value})}>
                    </input>
                    <div className='form-buttons'>
                        <button disabled={!state.searchVal} aria-label='search' title='search' className='submit' id='submit'>search</button>
                        <div className='css-link' aria-label='clear' title='clear' onClick={() => props.clear()}><span>clear</span></div>
                    </div>
                </div>
            </form>
            <div className='alert'>
                {state.msg && <span aria-label='favorites message' className='css-link'>{state.msg} <span onClick={() => navigate('/favorites')}>favorites</span></span>}
                {state.error && <span aria-errormessage={state.error} className='message'>{state.error}</span>}
            </div>
            {state.data && <ResultsTable data={state.data} state={props.state}/>}
        </div>
    )
}