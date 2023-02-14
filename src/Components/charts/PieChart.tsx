import ReactApexChart from "react-apexcharts";
import { Box, Typography, Stack } from "@mui/material";
import { type FC } from "react";

import type { PieChartProps } from "../../interfaces/home";

export const PieChart: FC<PieChartProps> = ({
	title,
	value,
	colors,
	series,
}) => {
	return (
		<Box
			id="pie-chart"
			flex={1}
			display={"flex"}
			flexDirection={"row"}
			justifyContent={"space-between"}
			alignItems={"center"}
			bgcolor={"#fcfcfc"}
			pl={3.5}
			py={2}
			gap={2}
			borderRadius={"15px"}
			minHeight={"100px"}
			width="fit-content"
		>
			<Stack>
				<Typography fontSize={14} color="secondary">
					{title}
				</Typography>
				<Typography fontWeight={700} mt={1} fontSize={24} color="text.primary">
					{value}
				</Typography>
			</Stack>
			<ReactApexChart
				options={{
					chart: {
						type: "donut",
					},
					colors,
					legend: {
						show: false,
					},
					dataLabels: {
						enabled: false,
					},
				}}
				series={series}
				type="donut"
				width={"120px"}
			/>
		</Box>
	);
};
