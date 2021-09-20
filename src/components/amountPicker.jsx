import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updatedFund } from "../reducers/allocationsReducer";
import { SliderComponent } from "./slider";

const PickerStyled = styled.div`
	background-color: #fff;
	padding: 1em;
	display: flex;
	justify-content: space-between;
	margin: 10px 0 30px 0;
	max-height: 50px;
`;

const AmountPicker = ({ index }) => {
	const { total, funds } = useSelector((state) => state.allocations);
	const dispatch = useDispatch();
	const { name, percentage } = funds[index - 1];

	const onAllocationChange = (amount) => {
		dispatch(updatedFund({ idx: index, percentage: amount }));
	};

	const showDollarAmount = (percent) => `$${1000 * percent}`;

	return (
		<PickerStyled>
			<div>{name}</div>
			<div style={{ width: "75%" }}>
				<SliderComponent
					onNumChange={onAllocationChange}
					allocationPercentage={percentage}
					total={total}
				/>
			</div>

			<div> {showDollarAmount(percentage)} </div>
		</PickerStyled>
	);
};

export { AmountPicker };
