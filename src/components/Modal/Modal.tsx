import * as React from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Fade from "@mui/material/Fade";
import type { ComponentWithChildren } from "types";

export type ModalComponentProps = {
	open: boolean;
	onClose: () => void;
	title: string;
};

const ModalComponent = ({
	title,
	open,
	onClose,
	children,
}: ComponentWithChildren<ModalComponentProps>) => (
	<Dialog
		data-test-id="dialog"
		open={open}
		onClose={onClose}
		BackdropComponent={Backdrop}
		BackdropProps={{
			timeout: 500,
		}}
	>
		<Fade in={open}>
			<Box>
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="flex-start"
				>
					<DialogTitle>{title}</DialogTitle>
					<IconButton
						aria-label="close"
						data-test-id="dialog-close"
						onClick={onClose}
					>
						<CloseIcon />
					</IconButton>
				</Box>
				<DialogContent>{children}</DialogContent>
			</Box>
		</Fade>
	</Dialog>
);

export default ModalComponent;
