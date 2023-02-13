import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { type FC } from "react";

interface IProps {
	title: string;
	path: string;
	Icon: any;
}

export const SideBarLink: FC<IProps> = ({ title, path, Icon }) => {
	const { pathname } = useRouter();

	return (
		<ListItem
			sx={{
				height: "56px",
				backgroundColor: pathname === path ? "primary.main" : "transparent",
				borderRadius: "12px",
				fontWeight: 700,
				color: pathname === path ? "#fff" : "text.secondary",
				mb: "10px",
			}}
			key={title}
			disablePadding
		>
			<Link className="w-full h-full" href={path}>
				<ListItemButton
					sx={{
						height: "100%",
					}}
				>
					<ListItemIcon>
						<Icon
							sx={{
								color: pathname === path ? "#fff" : "text.secondary",
							}}
						/>
					</ListItemIcon>
					<ListItemText
						sx={{
							"& 	.MuiListItemText-primary": {
								fontWeight: 700,
							},
						}}
						primary={title}
					/>
				</ListItemButton>
			</Link>
		</ListItem>
	);
};
