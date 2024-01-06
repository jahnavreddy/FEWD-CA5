import React, { useEffect, useState } from 'react';
import Forms from './Forms';
import Navbar from './Navbar';

export default function Books(props) {

  const [filteredItems, setFilteredItems] = useState([]);
  const [formSubmit, setFormSubmit] = useState(false);
  const {showBook , input} = props
  useEffect(() => {
    fetch('https://reactnd-books-api.udacity.com/books', {
      headers: { Authorization: 'whatever-you-want' },
    })
      .then((response) => response.json())
      .then((data) => {
        // setItems(data.books);
        setFilteredItems(data.books);
      });
  }, []);
console.log(filteredItems);
  const filteredData = filteredItems.filter(elem => elem.title.toLowerCase().includes(input.toLowerCase()))
  console.log(filteredData);


  const handleFormSubmit = () => {
    setFormSubmit(true);
  };

  // handleSearch(input);
  return (
    <div>
      {!showBook ? (
        <h1>Please  register to see the books </h1>
      ) : (
        <>
          <div className='books'>
            {filteredData.map((e, i) => (
              <div className='eachbook' key={i}> 
                <img
                  src={e.imageLinks.smallThumbnail}
                  alt=''
                  className='eachbook-image'
                />
                <h3 className='eachbook-title'>{e.title}</h3>
                {e.averageRating == null ? (
                  <p className='eachbook-rating'>4⭐</p>
                ) : (
                  <p className='eachbook-rating'>{e.averageRating}⭐</p>
                )}
                {/* <button
                  onClick={() => {
                    window.location.href = `${e.previewLink}`;
                  }}
                  className='previewBtn'
                >
                  Preview
                </button> */}
              </div>
            ))
            }
          </div>
        </>
         )}
    </div>
  );
}