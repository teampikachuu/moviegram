import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';

const ToWatch = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/toWatch?username=Terry', { method: 'GET' })
      .then((response) => response.json())
      .then((result) => {
        setMovies(result);
        console.log(result);
      });
  }, []);

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
          Header: 'Watched',
          columns: [
            {
              Header: 'Movie',
              accessor: 'movie',
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
    //const data = React.useMemo(() => makeData(20), [])
    const dataArray = []
  for (let obj of movies){
    dataArray.push(obj.movie_name)
  }
    return ( 
      <div>
        {/* <Table columns={columns} /> */}
        <ul>{dataArray}</ul>
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
