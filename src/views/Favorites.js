import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoritesTable from './tables/FavoritesTable';
import { Button, GridHeader } from '../shared/fragments/index';
import './Favorites.css';

export default function Favorites(props) {
    const { state: [state, setState] } = {state: useState({}), ...(props.state)};
    const navigate = useNavigate();
      
    return(
        <div>
            {state.favorites.length < 1 &&
                <div className='no-favorites' aria-label='no favorites warning'>
                    <div aria-details='no favorites found'>you don't have any favorites!</div>
                    <Button label='search for pokemon and add to favorites' onClick={() => navigate('/search')}/>
                </div>
            }
            {state.favorites.length > 0 &&
                <div className='grid favorites' aria-label='favorites grid'>
                    <GridHeader />
                    <div className='grid-header'> </div>
                    {state.favorites.map((favorite) => 
                        <FavoritesTable 
                            state={{ state: [state, setState] }}
                            obj={favorite}
                            key={favorite.id} />
                    )}
                </div>
            }
        </div>
    )
}