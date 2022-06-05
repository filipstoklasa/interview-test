import { useCallback } from "react";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useAppSelector } from "store";
import { Modal } from "components/Modal";
import { DetailCard } from "components/DetailCard";
import { resetModalYear } from "store/slices/modal";

const DetailModal = () => {
	const dispatch = useDispatch();
	const { loading, year, fact, error } = useAppSelector((state) => state.modal);

	const onCancelModal = useCallback(() => {
		dispatch(resetModalYear());
	}, [dispatch]);

	return (
		<Modal
			open={!!year}
			title={`Fact for year ${year ?? ""}`}
			onClose={onCancelModal}
		>
			<DetailCard>
				{loading ? (
					<Box display="flex" justifyContent="center" alignSelf="center">
						<CircularProgress data-test-id="spinner" />
					</Box>
				) : (
					<Box data-test-id={`dialog-${year}-content`}>
						{fact && <Typography component="p">{fact}</Typography>}
						{error && <Typography component="p">{error}</Typography>}
					</Box>
				)}
			</DetailCard>
		</Modal>
	);
};

export default DetailModal;
