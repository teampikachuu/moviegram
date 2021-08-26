import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchBar = () => {
  const [myOptions, setMyOptions] = useState([]);
  const [name, setName] = useState('');
  //const [selected, setSelected] = useState({})
  const user = "Terry"
  const getDataFromAPI = (value) => {
    console.log('value', value);
    console.log('Options Fetched from API');
   

    //api_key=fdbae0761ba6f8241b3cf31d7a03a2f9
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=fdbae0761ba6f8241b3cf31d7a03a2f9&language=en-US&page=1&include_adult=false&query=${value}`
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        for (let i = 0; i < res.results.length; i++) {
          myOptions.push(res.results[i]);
        }
        setMyOptions(myOptions);
      });
  };

  const addToWatched = () => {
    let score = prompt('Please score the movie from 1-10', "<enter score here>")
    const movieObj = myOptions.filter((option) => option.title === name)[0]
    console.log(movieObj)
    //post req
    fetch('http://localhost:3000/api/movies', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({movieName: movieObj.title, status: "watched", username: user, score: score}) // body data type must match "Content-Type" header
    });
  }

  const addToWantToWatch = () => {
    let score = prompt('Please score the movie from 1-10', "<enter score here>")
    const movieObj = myOptions.filter((option) => option.title === name)[0]
    console.log(movieObj)
    //post req
    fetch('http://localhost:3000/api/movies', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({movieName: movieObj.title, status: "unwatched", username: user, score: score}) // body data type must match "Content-Type" header
    });
  }

  const handleChange = (env) => {
    console.log(env.target.value)
    setName(env.target.value)
  }

  return (
    <div style={{ marginLeft: '40%', marginTop: '60px' }}>
      <form> 
      <h3>Search for Movie</h3>
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        selectOnFocus
        autoHighlight
        options={myOptions}
        getOptionLabel={(option) => option.title}
        onSelect={event=>handleChange(event)}
        // onChange={event => handleChange(event)} 
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={(event) => getDataFromAPI(event.target.value)}
            value={name}
            variant="outlined"
            label="Search Box"
          />
        )}
      />
      <input type="submit" value="Add to Watched" onClick={e=>{
        e.preventDefault()
        addToWatched()
        }}/>
      <input type="submit" value="Add to Want to Watch" onClick={e=>{
        e.preventDefault()
        addToWantToWatch()
        }}/>
      </form>
    </div>
  );
};

export default SearchBar;
