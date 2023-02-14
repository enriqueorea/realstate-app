import { Typography, Box, Stack } from "@mui/material";
import { type NextPage } from "next";
import {
	PieChart,
	PropertyReferrals,
	TotalRevenue,
} from "../Components/charts";
import { DashboardLayout } from "../Components/Layout";

const Home: NextPage = () => {
	return (
		<DashboardLayout titlePage="Dashboard">
			<Typography
				sx={{
					fontWeight: "bold",
					fontSize: "25px",
					mt: "28px",
					mb: "20px",
				}}
				component={"h1"}
				variant="h1"
			>
				Dashboard
			</Typography>
			<Box display={"flex"} flexWrap={"wrap"} gap={4}>
				<PieChart
					title="Properties for sale"
					value={685}
					series={[72, 25]}
					colors={["#475be8", "#e4e8ef"]}
				/>
				<PieChart
					title="Properties for rent"
					value={485}
					series={[60, 45]}
					colors={["#478be8", "#e4o8ef"]}
				/>
				<PieChart
					title="Total Customers"
					value={300}
					series={[75, 25]}
					colors={["#495be8", "#e9e8ef"]}
				/>
				<PieChart
					title="Total Cities"
					value={44}
					series={[72, 25]}
					colors={["#675be8", "#e9e8ef"]}
				/>
			</Box>
			<Stack
				mt={"25px"}
				gap="20px"
				width="100%"
				direction={{ xs: "column", lg: "row" }}
			>
				<TotalRevenue />
				<PropertyReferrals />
			</Stack>
		</DashboardLayout>
	);
};

export default Home;
