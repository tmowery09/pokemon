import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Search from './views/Search';
import Favorites from './views/Favorites';
import Header from './shared/header/Header.js';
import './App.css';

const initialState = {
  favorites: [],
  msg: null,
  searchVal: '',
  data: null,
  error: null,
  show: {
      id: null,
      isShown: false
  }
}

export default function App() {
  const [state, setState] = useState(initialState);

  const resetState = () => {
    if (window.confirm('this action will also clear your favorites list. proceed?'))
      setState(initialState);
  }

  return(
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<Search clear={resetState} state={{ state: [state, setState] }}/>}>
          <Route path='/search' element={<Search clear={resetState} state={{ state: [state, setState] }}/>}/>        
        </Route>
        <Route path='/favorites' element={<Favorites state={{ state: [state, setState] }}/>}/>
      </Routes>
    </div>
  );
}
