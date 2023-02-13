import Head from "next/head";
import { type FC } from "react";
import { Navbar, Sidebar } from "../UI";

interface IProps {
	children: React.ReactNode;
	titlePage: string;
}

export const DashboardLayout: FC<IProps> = ({ children, titlePage }) => {
	return (
		<>
			<Head>
				<title>{`Yariga - ${titlePage} page`} </title>
			</Head>

			<nav>
				<Navbar />
			</nav>
			<aside>
				<Sidebar />
			</aside>
			<main>{children}</main>
		</>
	);
};
