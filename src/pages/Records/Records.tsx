import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import { useEffect, useState } from 'react';
import axios from '@/utils/axios';
import { useAuth } from '@/providers/AuthProvider';
import { useTable, useSortBy, usePagination, useFilters } from 'react-table';
import { TextField } from '@mui/material';
import { DataGrid, GridColDef, GridPaginationModel, GridSortModel, GridToolbar } from '@mui/x-data-grid';
import { apiUrl } from '@/config';


function Records() {
  const { authToken } = useAuth();
  const [records, setRecords] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState<any>(10);
  const [total, setTotal] = useState(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([{ field: 'operationResponse', sort: 'asc' }]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchRecords();
  }, [page, pageSize, sortModel, search]);

  const fetchRecords = async () => {
    const sortBy = sortModel[0]?.field || 'operationResponse';
    const sortDirection = sortModel[0]?.sort || 'asc';
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    const response = await axios.get(`${apiUrl}/records/`,{
      params: {
          page: page,
          size: pageSize,
          sortBy: sortBy,
          search: search || ''
      }
  });
    setRecords(response.data.content);
    setTotal(response.data.totalElements);
  };

  const handleDelete = async (id: number) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    await axios.delete(`${apiUrl}/records/${id}`);
    fetchRecords();
  };

   const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'operationType', headerName: 'Type', width: 150 },
    { field: 'amount', headerName: 'Amount', width: 120 },
    { field: 'userBalance', headerName: 'Balance', width: 120 },
    { field: 'operationResponse', headerName: 'Operation Response', width: 150 },

    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Button variant="contained" color="secondary" onClick={() => handleDelete(params.row.id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <>
      <Meta title="Records" />
      <FullSizeCenteredFlexBox flexDirection="column">
        <Typography variant="h3">Records</Typography>

        <div style={{ height: 600, width: '100%' }}>
          <TextField
            label="Search"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginBottom: 16 }}
          />
          <DataGrid
            rows={records}
            columns={columns}
            paginationMode="server"
            pageSizeOptions={[5, 10, 20]}
            paginationModel={{ page, pageSize }}
            rowCount={total}
            onPaginationModelChange={(model: GridPaginationModel) => {
              setPage(model.page);
              setPageSize(model.pageSize);
            }}
            sortingMode="server"
            sortModel={sortModel}
            onSortModelChange={(model) => setSortModel(model)}
          />
        </div>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Records;
