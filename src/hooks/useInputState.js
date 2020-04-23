import { useState } from 'react';

const useInputState = (initialValue) => {
	const [ value, setValue ] = useState(initialValue);

	return {
		value,
		setValue,
		reset: () => setValue(''),
		bind: {
			value,
			onChange: (event) => {
				setValue(event.target.value);
			}
		}
	};
};

export default useInputState;
