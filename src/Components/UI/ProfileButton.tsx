import {
	Box,
	Tooltip,
	IconButton,
	Avatar,
	Menu,
	MenuItem,
	Typography,
} from "@mui/material";
import { useState } from "react";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const ProfileButton = () => {
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title="Open settings">
				<IconButton
					onClick={handleOpenUserMenu}
					sx={{
						textAlign: "left",
						p: 0,
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-start",
						gap: "10px",
					}}
				>
					<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
					<Box
						sx={{ display: "flex", flexDirection: "column" }}
						component={"div"}
					>
						<Typography
							component={"p"}
							sx={{
								color: "text.primary",
								fontWeight: "600",
							}}
						>
							Enrique Orea
						</Typography>
						<Typography
							component={"span"}
							sx={{
								color: "text.secondary",
								fontWeight: "400",
								fontSize: "14px",
							}}
						>
							manager company
						</Typography>
					</Box>
				</IconButton>
			</Tooltip>
			<Menu
				sx={{ mt: "45px" }}
				id="menu-appbar"
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				{settings.map((setting) => (
					<MenuItem key={setting} onClick={handleCloseUserMenu}>
						<Typography textAlign="center">{setting}</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
};
