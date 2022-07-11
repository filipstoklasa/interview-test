import { useCallback } from "react";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useAppSelector } from "store";
import { Modal } from "components/Modal";
import { DetailCard } from "components/DetailCard";
import { resetModalYear } from "store/slices/modal";
import { apiNumbers } from "store/api";


const Fact = ({ year }: { year: string }) => {
	const { isLoading, data, isError } = apiNumbers.useGetYearFactQuery(year)

	return (
		<>
			{isLoading ? (
				<Box display="flex" justifyContent="center" alignSelf="center">
					<CircularProgress data-test-id="spinner" />
				</Box>
			) : (
				<Box data-test-id={`dialog-${year}-content`}>
					{data && <Typography component="p">{data}</Typography>}
					{isError && <Typography component="p">We are sorry, but we could not find the fact you were searching for.</Typography>}
				</Box>
			)}
		</>
	)
}

const DetailModal = () => {
	const dispatch = useDispatch();
	const year = useAppSelector((state) => state.modal.year)


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
				{year && <Fact year={year} />}
			</DetailCard>
		</Modal>
	);
};

export default DetailModal;
