import { type NextPage } from "next";
import { DashboardLayout } from "../Components/Layout";

const Home: NextPage = () => {
	return (
		<DashboardLayout titlePage="Dashboard">
			<h1>Dashboard</h1>
		</DashboardLayout>
	);
};

export default Home;
