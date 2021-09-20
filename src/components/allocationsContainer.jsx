import { useDispatch, useSelector } from "react-redux";
import { AmountPicker } from "./amountPicker";
import styled from "styled-components";
import { reset } from "../reducers/allocationsReducer";

const RemainingAmount = styled.span`
	color: ${(p) => (p.amount <= 0 ? "palevioletred" : "#2C962C")};
`;

const ResetButton = styled.span`
	padding: 1em;
	margin-bottom: 5px;
	color: cornflowerblue;
	cursor: pointer;
`;

const BottomSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1em;
`;

const AllocationsContainer = () => {
	const { funds, balance, total } = useSelector((state) => state.allocations);
	const dispatch = useDispatch();
	return (
		<>
			<div stye={{ padding: "1em" }}>
				<h3>
					Funds Remaining: <RemainingAmount amount={balance}>${balance}</RemainingAmount>
				</h3>
				{funds.map((f) => (
					<AmountPicker key={f.id} index={f.id} />
				))}
			</div>
			<BottomSection>
				<ResetButton onClick={() => dispatch(reset())}>Reset Allocations</ResetButton>

				<h2 style={{ padding: "1em", textAlign: "right" }}>
					<strong>Total Allocated: {`$${1000 * total}`}</strong>
				</h2>
			</BottomSection>
		</>
	);
};

export { AllocationsContainer };
