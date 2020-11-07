import 'semantic-ui-css/semantic.min.css';
import '../styles/tailwind.css';
import Layout from '@components/Layout';
import Store from '../store/useCart';

function App({ Component, pageProps }) {
  //Providers -Context Theme - Data
  //Layout
  // props adicionales
  return (
    <Store>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Store>
  );
}
export default App;
