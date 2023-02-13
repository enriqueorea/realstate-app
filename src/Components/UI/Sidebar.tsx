import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Box,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { sidebarLinks } from "../../constants";

import useUiStore from "../../Store/UiStore";
import { SideBarLink } from "./SideBarLink";

const drawerWidth = 250;

export const Sidebar = () => {
	const { isSidebarOpen, toggleSidebarOpen } = useUiStore();

	const { pathname } = useRouter();

	useEffect(() => {
		//set sidebar open if screen size is greater than 600px
		if (window.innerWidth > 600) {
			console.log("window.innerWidth > 600");
			toggleSidebarOpen(true);
		}
	}, []);

	return (
		<Drawer
			open={isSidebarOpen}
			variant="persistent"
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				["& .MuiDrawer-paper"]: { width: drawerWidth, boxSizing: "border-box" },
			}}
		>
			<Toolbar />
			<Box sx={{ overflow: "auto", px: "16px" }}>
				<List sx={{ pt: "25px" }}>
					{sidebarLinks.map((link) => (
						<SideBarLink
							key={link.title}
							title={link.title}
							Icon={link.icon}
							path={link.path}
						/>
					))}
				</List>
			</Box>
		</Drawer>
	);
};
