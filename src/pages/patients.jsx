import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'components/Navbar';
import Table from 'components/Table';
//import tableRow from 'components/Table';
import 'css/bootstrap.min.css';

fetch('http://localhost:4000/allPatients')
  .then(response => response.json())
  .then((data) => {
    ReactDOM.render(<Navbar />, document.getElementById('menu'));
    ReactDOM.render(<Table border="1" tableData={data.tableData} tableHeaders={data.tableHeaders} caption="All Patients" />, document.getElementById('table'));
  });
