import { Search } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

interface SearchTextFieldProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchComponent = ({ setSearchQuery }: SearchTextFieldProps) => {
  const [tempValue, setTempValue] = useState<string>('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchQuery(tempValue);
    }, 500);
    return () => clearTimeout(timeout);
  }, [tempValue]);

  return (
    <TextField
      id="search-pokemon"
      label="Search"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        ),
      }}
      variant="standard"
      value={tempValue}
      onChange={(e) => setTempValue(e.target.value)}
    />
  );
};

export default SearchComponent;
