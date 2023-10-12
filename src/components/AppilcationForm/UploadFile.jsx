import React, { useState } from 'react';
import * as ypu from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  Container,
  CssBaseline,
  Box,
  Typography,
  Grid,
  Link,
  Button,
  InputAdornment,
  TextField,
  FormControl,
  InputLabel,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  Select,
  FormHelperText,
  OutlinedInput,
} from '@mui/material';

const UploadFile = ({ title }) => {
  const [file, setFile] = useState();

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);
    fetch('url', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success', result);
      })
      .catch((error) => {
        console.error('ERROR: ', error);
      });
  };

  //   const { register } = useForm({
  //     resolver: yupResolver(schema),
  //   });
  return (
    <div>
      <Box
        textAlign="center"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography variant="h6" sx={{ mt: 1 }}>
          {title}
        </Typography>

        {/* <Button
          variant="contained"
          onClick={handleFile}
          sx={{
            mt: 3,
            mb: 2,
            minWidth: '200px',
            backgroundColor: '#176C3F',
          }}
        >
          Upload File
        </Button> */}
        <Button variant="contained" component="label">
          Upload File
          <input type="file" hidden onChange={handleFile} />
        </Button>
        {/* <Button variant="contained" component="label" onClick={handleUpload}>
          Upload
        </Button> */}
      </Box>
    </div>
  );
};

export default UploadFile;
