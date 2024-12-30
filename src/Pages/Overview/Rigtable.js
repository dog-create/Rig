import React from 'react';
import { useTable } from 'react-table';
import data from '../../Data/Overview.json';
import CircularProgress from '@mui/material/CircularProgress';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import './Rigtable.css';

const getLatestDepth = (drillingDepthArray) => {
  if (!drillingDepthArray || drillingDepthArray.length === 0) return 0;
  const latestDepth = drillingDepthArray.reduce((latest, current) => {
    return new Date(current.timestamp) > new Date(latest.timestamp) ? current : latest;
  });
  return latestDepth.depth;
};

const Rigtable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Rig ID',
        accessor: 'rig_id',
      },
      {
        Header: 'Location',
        accessor: 'location.name',
      },
      {
        Header: 'PTO Status',
        accessor: 'pto_status',
        Cell: ({ value }) => (
          <span style={{ color: value ? 'green' : 'red', fontWeight: 'bold', backgroundColor: value ? '#2c913443' : 'rgba(255, 0, 0, 0.175)', padding: '5px 10px', borderRadius: '200px' }}>
            {value ? 'Active' : 'Inactive'}
          </span>
        ),
      },
      {
        Header: 'Fuel Level',
        accessor: 'fuel_level',
        Cell: ({ value }) => (
          <div style={{ display: 'flex', alignItems: 'center', color: value < 40 ? 'red' : 'green' }}>
            <CircularProgress variant="determinate" value={value} size={24} style={{ color: value < 40 ? 'red' : 'green' }} />
            <span style={{ marginLeft: 8 }}>{`${value}%`}</span>
          </div>
        ),
      },
      {
        Header: 'Drilling Depth',
        accessor: 'drilling_depth',
        Cell: ({ value }) => `${new Intl.NumberFormat().format(getLatestDepth(value))}m`,
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (
          <span style={{ color: value ? 'green' : 'rgb(255, 231, 50)', fontWeight: 'bold', backgroundColor: value ? '#2c913443' : 'rgba(255, 231, 50, 0.222)', padding: '5px 10px', borderRadius: '200px' }}>
            {value ? 'Operational' : 'Maintenance'}
          </span>
        ),
      },
    ],
    []
  );

  const rigs = data.rigs;

  const tableInstance = useTable({ columns, data: rigs });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <TableContainer component={Paper} className='table-responsive'>
      <Table {...getTableProps()} stickyHeader>
        <TableHead className="sticky-header">
          <TableRow>
            <TableCell colSpan={6} className="text-left text-white bg-dark">Active Rigs</TableCell>
          </TableRow>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()} className='table-body'>
          {rows.map(row => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Rigtable;