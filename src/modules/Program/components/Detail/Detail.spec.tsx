import { DetailModal } from './index'
import { render, screen, fireEvent } from 'test/utils'

const initialState = {
	modal: {
		loading: false,
		year: '2022',
		fact: "modal fact",
		error: null
	}
}

test("modal", () => {
	render(<DetailModal />, { initialState })

	expect(screen.getByText("Fact for year " + initialState.modal.year)).toBeVisible()
	expect(screen.getByText(initialState.modal.fact)).toBeVisible()

	fireEvent.click(screen.getByTestId('CloseIcon'))

	expect(screen.queryByTestId("dialog")).not.toBeInTheDocument()

})