import { useEffect, useState, useRef, useCallback } from 'react'
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'; import Fade from '@mui/material/Fade';
import type { ComponentWithChildren } from "types";

export type ModalComponentProps = {
	open: boolean;
	onClose: () => void;
	title: string;
};

const ModalComponent = ({ title, open, onClose, children, }: ComponentWithChildren<ModalComponentProps>) => {
	const timeoutRef = useRef<number>()
	const [openModal, setModalOpen] = useState(false)

	const handleCancelWithDelay = useCallback(
		() => {
			setModalOpen(false)
			timeoutRef.current = window.setTimeout(() => {
				onClose()
			}, 300)
		},
		[onClose],
	)

	useEffect(() => {
		open && setModalOpen(true)
	}, [open])

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
			}
		}
	}, [open])


	return (
		<Dialog
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			data-test-id="dialog"
			open={openModal}
			onClose={handleCancelWithDelay}
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={openModal}>
				<Box>
					<Box display="flex" justifyContent="space-between" alignItems="flex-start">
						<DialogTitle>
							{title}
						</DialogTitle>
						<IconButton
							aria-label="close"
							data-test-id="dialog-close"
							onClick={handleCancelWithDelay}
						>
							<CloseIcon />
						</IconButton>
					</Box>
					<DialogContent>
						{children}
					</DialogContent>
				</Box>
			</Fade>

		</Dialog>
	)
};

export default ModalComponent