import React from 'react';
import { array, func, string } from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import noop from '../common/utils/noop';

export default function MySelect(props) {
  const {
    className,
    id,
    label,
    onChange,
    options,
    textAttribute,
    value,
    valueAttribute,
  } = props;

  return (
    <>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Select id={id} className={className} value={value} onChange={onChange}>
        {options.map((item, index) => (
          <MenuItem key={`option-${index}`} value={item[valueAttribute]}>
            {item[textAttribute]}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}

MySelect.propTypes = {
  className: string,
  id: string.isRequired,
  label: string,
  onChange: func,
  options: array,
  textAttribute: string,
  value: string,
  valueAttribute: string,
};

MySelect.defaultProps = {
  className: '',
  label: '',
  onChange: noop,
  options: [],
  textAttribute: 'text',
  value: '',
  valueAttribute: 'value',
};
