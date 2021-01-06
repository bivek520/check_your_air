import React from 'react';

const Select = ({ name, label, options, error, ...rest }) => {
	console.log('this is the label, name', label);
	return (
		<div className='form-group'>
			<label htmlFor={name}>
				<h4 className='selectLabel'>Select one of the {label} </h4>
			</label>
			<select name={name} id={name} {...rest} className='form-select'>
				<option value='' />
				{options.map((option) => (
					<option key={option._id} value={option._id}>
						{option.name}
					</option>
				))}
			</select>
			{error && <div className='alert alert-danger'>{error}</div>}
		</div>
	);
};

export default Select;
