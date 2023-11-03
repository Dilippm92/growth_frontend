import React, { useState, useEffect } from 'react';
import {fetchData,updateFavorite,deleteItem} from "../api/api"
import "../App.css"

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleFavorite = (item) => {
    updateFavorite(item._id)
      .then((response) => {
        console.log(response);
        setData((prevData) =>
          prevData.map((prevItem) =>
            prevItem._id === item._id ? { ...prevItem, isFavorite: !item.isFavorite } : prevItem
          )
        );
      })
      .catch((error) => {
        console.error('Error updating favorite status:', error);
      });
  };
   const handleDelete = (item) => {
    deleteItem(item._id)
      .then((response) => {
        console.log(response);
        setData((prevData) => prevData.filter((prevItem) => prevItem._id !== item._id));
        
      })
      .catch((error) => {
        console.error('Error deleting item:', error);
      });
  };
  return (
    <div>
      <h1 className="table-heading">Results</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Domain Name</th>
            <th>Word Count</th>
            <th>Favorite</th>
            <th>Media-Links</th>
            <th>Web Links</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index +1}</td>
              <td>{item.url}</td>
              <td>{item.wordCount}</td>
              <td>{item.isFavorite ? 'Yes' : 'No'}</td>
              <td>
                {item.mediaLinks.map((link, i) => (
                  <div key={i}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      Media {i + 1}
                    </a>
                  </div>
                ))}
              </td>
              <td>
                {item.webLinks.map((link, i) => (
                  <div key={i}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      Web {i + 1}
                    </a>
                  </div>
                ))}
              </td>
              <td>
              <button
  onClick={() => handleFavorite(item)}
  style={{ backgroundColor: item.isFavorite ? 'red' : 'green',  }}
>
  {item.isFavorite ? 'Not Favorite' : 'Favorite'}
</button>
                <button onClick={() => handleDelete(item)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
