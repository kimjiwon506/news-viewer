import logo from './logo.svg';
import './App.css';
import NewsList from './component/NewsList';
import Categories from './component/Categories';
import { useState,useCallback } from 'react';

function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category=>setCategory(category),[])
  return (
    <>
    <Categories category={category} onSelect={onSelect} />
    <NewsList category={category} />
    </>
  );
}

export default App;
