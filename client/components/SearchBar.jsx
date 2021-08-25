import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchBar = () => {
  const [myOptions, setMyOptions] = useState([]);

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
          if(!myOptions.includes(res.results[i].title)) 
          myOptions.push(res.results[i].title);
        }
        setMyOptions(myOptions);
      });
  };

  return (
    <div style={{ marginLeft: '40%', marginTop: '60px' }}>
      <h3>Search for Movie</h3>
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        selectOnFocus
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={(event) => getDataFromAPI(event.target.value)}
            variant="outlined"
            label="Search Box"
          />
        )}
      />
    </div>
  );
};

export default SearchBar;
