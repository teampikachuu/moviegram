import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchBar = () => {
  const [myOptions, setMyOptions] = useState([]);

  const getDataFromAPI = () => {
    console.log('Options Fetched from API');

    fetch(
      'https://api.themoviedb.org/3/movie/550?api_key=fdbae0761ba6f8241b3cf31d7a03a2f9'
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res.data);
        for (let i = 0; i < res.data.length; i++) {
          myOptions.push(res.data[i].employee_name);
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
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={getDataFromAPI}
            variant="outlined"
            label="Search Box"
          />
        )}
      />
    </div>
  );
};

export default SearchBar;
