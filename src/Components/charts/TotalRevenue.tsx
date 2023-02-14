import React from "react";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";

import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";
import { Box, Stack, Typography } from "@mui/material";
import ReactApexChart from "react-apexcharts";

export const TotalRevenue = () => {
	return (
		<Box
			p={4}
			flex={1}
			bgcolor={"#fcfcfc"}
			id="chart"
			borderRadius={"15px"}
			display={"flex"}
			flexDirection={"column"}
		>
			<Typography fontSize={18} fontWeight={600} color="text.primary">
				Total Revenue
			</Typography>
			<Stack my={"20px"} direction={"row"} gap={4} flexWrap={"wrap"}>
				<Typography fontSize={28} fontWeight={700} color="text.primary">
					$236,535
				</Typography>
				<Stack direction={"row"} alignItems={"center"} gap={3}>
					<ArrowCircleUpRoundedIcon
						sx={{ fontSize: 25, color: "primary.main" }}
					/>
					<Stack>
						<Typography fontWeight={500} fontSize={15} color="primary">
							12.5%
						</Typography>
						<Typography fontSize={"15px"} color="text.secondary">
							Than last month
						</Typography>
					</Stack>
				</Stack>
			</Stack>
			<ReactApexChart
				options={TotalRevenueOptions}
				type="bar"
				series={TotalRevenueSeries}
				height={"300px"}
			/>
		</Box>
	);
};
