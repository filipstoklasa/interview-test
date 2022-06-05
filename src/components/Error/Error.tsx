import { useCallback, forwardRef } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "store";
import { setError } from "store/slices/error";
import { Alert } from "components/Alert";

const ErrorComponent = () => {
	const dispatch = useDispatch();
	const { error } = useAppSelector((state) => state.error);

	const handleClose = useCallback(() => {
		dispatch(setError(null));
	}, [dispatch]);

	return <Alert error={error} handleClose={handleClose} />;
};

export default ErrorComponent;
