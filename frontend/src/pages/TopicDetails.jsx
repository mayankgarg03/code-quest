import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'description', headerName: 'Description', width: 130 },
  { field: 'level', headerName: 'Level', width: 130 },
  { field: 'articleLink', headerName: 'Article Link', width: 130 },
  { field: 'leetcodeLink', headerName: 'LeetCode', width: 130 },
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

const paginationModel = { page: 0, pageSize: 5 };
const TopicDetails = () => {
  const { topicId } = useParams();
  const [rows, setRows] = useState([])

  useEffect(() => {
    const formatResponse = (data) => {
      return data.map((_el, index) => {
        return {
          id: index + 1,
          articleLink: _el.articleLink,
          description: _el.description,
          level: _el.level,
          name: _el.name,
          leetcodeLink: _el.leetcodeLink,
        }
      })
    }
    const fetchProblemsByTopic = async () => {
      try {
          const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
          const response = await axios.get(`${BASE_API_URL}/api/problem/topic/${topicId}`);
          console.log("Fetched Problems By Topic:", response.data);
          const data = formatResponse(response.data)
          setRows(data)
      } catch (error) {
          console.error("Fetched Topics Error:", error.response?.data || error.message);
          alert("Fetched Topics failed. Please try again.");
      }
  }

  fetchProblemsByTopic()
  }, [])

  return (
    <div>
      <h1>Problems: </h1>
      <Paper sx={{ height: 500, width: '1200px', marginTop: '20px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
    </div>
  );
};

export default TopicDetails;
