export const validateString = (
	value: unknown,
	maxLength: number
): value is string => {
	if (!value || typeof value !== 'string' || value.length > maxLength) {
		return false;
	}

	return true;
};

//  Error handling helper function
export const getErrorMessage = (error: unknown) => {
	let message: string;
	if (error instanceof Error) {
		message = error.message;
	} else if (error && typeof error === 'object' && 'message' in error) {
		message = String(error.message);
	} else if (typeof error === 'string') {
		message = error;
	} else {
		message = 'Something went wrong';
	}
	return message;
};
