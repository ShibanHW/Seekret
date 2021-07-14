import { useState } from 'react';
import { Autocomplete, createFilterOptions } from '@material-ui/lab';
import { TextField } from '@material-ui/core';

const OPTIONS_LIMIT = 3;
const filter = createFilterOptions();

export const Dropdown = ({options, onSelectedOption}) => {
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [selectedOptions,setSelectedOptions] = useState([]);

    const onChange = (event, newInput) => {
        setInputValue(newInput);
    }

    const handleSelect = (event, newValue) => {
        if(!newValue) return;

        let valueToAdd = newValue;
        if (typeof newValue === 'string') {
            valueToAdd = { title: newValue };
           
        } else if (newValue && newValue.inputValue) {
            // Create a new value from the input
            valueToAdd = { title: newValue.inputValue };
        }
        
        setValue({...valueToAdd});
        options.push({...valueToAdd});
        setSelectedOptions([...selectedOptions, valueToAdd]);
        onSelectedOption({...valueToAdd});
    }

    const filterOptions = (options, params) => {
        const filtered = filter(options, params);

        // Suggest to create a new option
        if (inputValue !== '') {
          filtered.unshift({
            inputValue: inputValue,
            title: `create ${inputValue}`,
          });
        }

        return filtered.slice(0, OPTIONS_LIMIT);
    }

    const getOptionTitle = (option) => {
        //if(!option) return '';

        // Value selected with enter, right from the input
        if (typeof option === 'string') {
            return option;
          }
          // Add new option created 
          if (option.inputValue) {
            return option.inputValue;
          }

          if (option.title) {
            return option.title;
          }

          return 'cant get a title';
    }

  return (
      <div>
        {selectedOptions.map((option)=>{
            const title = getOptionTitle(option);
        return <p key={title} id={title}>{title}</p>
        })}
        <Autocomplete
        value={value}
        inputValue={inputValue}
        options={options}
        onChange={handleSelect}
        onInputChange={onChange}
        filterOptions={filterOptions}
        getOptionLabel={getOptionTitle}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(option) => option.title}
        renderInput={(params) => (
            <TextField {...params} label="add or search option" variant="outlined" />
        )}
        style={{height: '100%',padding: '10%'}}
        />
    </div>
  );
}

export default Dropdown;