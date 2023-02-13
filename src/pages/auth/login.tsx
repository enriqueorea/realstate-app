import { Box, Container } from "@mui/material";
import type {
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from "next";
import { getServerSession } from "next-auth";
import { getProviders, signIn } from "next-auth/react";

import { authOptions } from "../../server/auth";

import { yariga } from "../../assets";
import Image from "next/image";

const SignInPage = ({
	providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<Box
			component={"div"}
			sx={{
				backgroundColor: "#FCFCFC",
			}}
		>
			<Container
				component={"main"}
				maxWidth='xs'
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					height: "100vh",
					justifyContent: "center",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<div className="mb-10">
						<Image src={yariga as string} alt="Yariga Logo" />
					</div>
					{Object.values(providers).map((provider) => (
						<div className="my-4" key={provider.name}>
							<button
								className="max-w-[320px] rounded-2xl shadow-md h-14 flex items-center justify-center bg-[#F5F5F5] text-[#333333] font-bold text-lg px-8 border border-gray-500"
								onClick={() => signIn(provider.id)}
							>
								Sign in with {provider.name}
							</button>
						</div>
					))}
				</Box>
			</Container>
		</Box>
	);
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getServerSession(context.req, context.res, authOptions);

	if (session) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	const providers = await getProviders();
	return {
		props: {
			providers: providers ?? [],
		},
	};
}

export default SignInPage;
