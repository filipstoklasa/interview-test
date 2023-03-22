import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface AlertComponentProps {
	error: string | null;
	handleClose: () => void;
}

const AlertComponent = ({ error, handleClose }: AlertComponentProps) => (
	<Snackbar open={!!error} onClose={handleClose} message={error}>
		<Alert elevation={6} variant="filled" severity="error">
			{error}
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleClose}
			>
				<CloseIcon fontSize="small" />
			</IconButton>
		</Alert>
	</Snackbar>
);

export default AlertComponent;
