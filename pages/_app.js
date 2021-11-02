import 'semantic-ui-css/semantic.min.css';
import '../styles/globals.css';
import { Layout } from '../components/layout';

function MyApp({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
    window.location.replace('https://freeformpdx.square.site');
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
