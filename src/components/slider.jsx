import { useState } from "react";
import { useSelector } from "react-redux";
import { InputNumber, Row, Col } from "antd";
import * as React from "react";
import Slider from "@mui/material/Slider";

const SliderComponent = ({ onNumChange, allocationPercentage }) => {
	const [showNumberInput, setShowNumInput] = useState(false);
	const { total } = useSelector((state) => state.allocations);

	const onChange = (val) => {
		const perc = parseValue(val) / 100;
		if (perc + total - total > 1 || (total === 1 && perc > allocationPercentage)) {
			return;
		}

		onNumChange(perc);
	};

	const parseValue = (val) => {
		return val.target ? val.target.value : val;
	};

	const onAfterChange = (val) => {
		setShowNumInput(false);
	};

	const percentageDisplay = () => +(allocationPercentage * 100).toFixed(2);
	return (
		<Row>
			<Slider min={0} max={100} onChange={onChange} value={percentageDisplay()} />
			<Col span={4}>
				{showNumberInput ? (
					<InputNumber
						min={0}
						max={100}
						style={{ margin: "0 10px" }}
						value={percentageDisplay()}
						onChange={onChange}
						onBlur={onAfterChange}
					/>
				) : (
					<span onClick={() => setShowNumInput(true)}>{`${percentageDisplay()}%`}</span>
				)}
			</Col>
		</Row>
	);
};

export { SliderComponent };
