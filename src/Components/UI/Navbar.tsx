import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { yariga } from "../../assets";
import Link from "next/link";
import { ProfileButton, SearchInput } from ".";
import useUiStore from "../../Store/UiStore";

export const Navbar = () => {
	const { toggleSidebarOpen } = useUiStore();
	return (
		<AppBar
			position="fixed"
			sx={{
				backgroundColor: "#FCFCFC",
				zIndex: (theme) => theme.zIndex.drawer + 1,
			}}
		>
			<Toolbar>
				<IconButton
					onClick={() => toggleSidebarOpen(true)}
					color="primary"
					size="large"
					edge="start"
					aria-label="menu"
				>
					<MenuIcon />
				</IconButton>

				<Box mr={11}>
					<Link href={"/"}>
						<Image src={yariga as string} alt="Logo" />
					</Link>
				</Box>

				<SearchInput />
				<Box flexGrow={1} />
				<Box>
					<ProfileButton />
				</Box>
			</Toolbar>
		</AppBar>
	);
};
