import Layout from "../components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import Context from "../Context/Context";

function MyApp({ Component, pageProps }) {
	return (
		<SSRProvider>
			<Context>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Context>
		</SSRProvider>
	);
}

export default MyApp;
