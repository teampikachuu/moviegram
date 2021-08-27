import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components'

const ToWatch = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/toWatch?username=Terry', { 
      method: 'GET',
      //headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'}
     })
      .then((response) => response.json())
      .then((result) => {
        setMovies(result);
        console.log(result);
      });
  });

  // setInterval( 
  //   fetch('http://localhost:3000/api/toWatch?username=Terry', { 
  //     method: 'GET',
  //     //headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'}
  //    })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setMovies(result);
  //       console.log(result);
  //     }), 2000)

  const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

  function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    })
  
    // Render the UI for your table
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
  
  //function App() {
    const columns = React.useMemo(
      () => [
        {
          Header: 'To Watch',
          columns: [
            {
              Header: 'Movie',
              accessor: 'movie_name',
            },
            {
              Header: 'Score',
              accessor: 'score',
            }
          ],
        },
      ],
      []
    )
    //}
    //const mooovies = React.useMemo(() => movies, [])
    //const dataArray = []
    console.log('movies', movies)
    //console.log("movies", mooovies)
  // for (let obj of movies){
  //   dataArray.push(obj.movie_name)
  // }
    return ( 
      <div>
        <Styles>
          <Table columns={columns} data={movies}/>
        </Styles>
        {/* <ul>{dataArray}</ul> */}
      </div>
    )
  

  // const postDbRenderToDom = () =>
  // const dataArray = []
  // for (let obj of data){
  //   dataArray.push(obj.movie_name)
  // }
  // return (
  //   <div>
  //     <ul>{dataArray}</ul>
  //   </div>
  // );
};

export default ToWatch;
