import { useState } from 'react'
import './App.css'
import Books from './components/Books'
import Forms from './components/Forms'
import Navbar from './components/Navbar'
import {Routes , Route} from 'react-router-dom'
import PrivateAuthRoute from './routes/PrivateAuthRoute'

function App() {
  const [input, setInput] = useState('');
  const [showBook , setShowBook] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [items, setItems] = useState([]);

  console.log(input);
  // const handleSearch = (input) => {
  //   setSearchInput(input);
  //   const filteredBooks = items.filter((book) =>
  //     book.title.toLowerCase().includes(input.toLowerCase())
  //   );
  //   setFilteredItems(filteredBooks);
  // };

  return (
    <>
      <Navbar  setInput={setInput} 
      // handleSearch={handleSearch}
        />
      {/* <Books/> */}
    <Routes>
      <Route path='/' element={<Books  showBook={showBook} input={input}/>}/>
      <Route path='/form' element={
      <PrivateAuthRoute  showBook={showBook}>
        <Forms setShowBook={setShowBook} />
      </PrivateAuthRoute>
      }/>   
    </Routes>
    </>
  )
}

export default App
