import { Box, Typography, Stack } from "@mui/material";

import { propertyReferralsInfo } from "../../constants";

const ProgressBar = ({
	title,
	percentage,
	color,
}: {
	title: string;
	percentage: number;
	color: string;
}) => {
	return (
		<Box width={"100%"}>
			<Stack
				direction={"row"}
				alignItems={"center"}
				justifyContent={"space-between"}
				mb={"10px"}
			>
				<Typography fontSize={"16px"} fontWeight={600} color="text.primary">
					{title}
				</Typography>
				<Typography fontSize={16} fontWeight={600} color="text.primary">
					{percentage}%
				</Typography>
			</Stack>
			<Box
				width={"100%"}
				height={"10px"}
				bgcolor={"#e4e8ef"}
				borderRadius={"10px"}
				display={"flex"}
				alignItems={"center"}
			>
				<Box
					width={`${percentage}%`}
					height={"10px"}
					bgcolor={color}
					borderRadius={"10px"}
				/>
			</Box>
		</Box>
	);
};

export const PropertyReferrals = () => {
	return (
		<Box
			p={4}
			flex={1}
			bgcolor={"#fcfcfc"}
			id="chart"
			minWidth={490}
			borderRadius={"15px"}
			display={"flex"}
			flexDirection={"column"}
		>
			<Typography fontSize={18} fontWeight={600} color="text.primary">
				Property Referrals
			</Typography>
			<Stack my={"20px"} direction={"row"} gap={4} flexWrap={"wrap"}>
				{propertyReferralsInfo.map((info) => (
					<ProgressBar key={info.title} {...info} />
				))}
			</Stack>
		</Box>
	);
};
