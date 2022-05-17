import Layout from "../components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

import Context from "../Context/Context";

function MyApp({ Component, pageProps }) {
	return (
		<Context>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Context>
	);
}

export default MyApp;
