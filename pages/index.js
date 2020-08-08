import { Header } from 'semantic-ui-react';
import axios from 'axios';
import { API_URL } from '../utils/constants';

import { SEO } from '../components/meta';
import { ProductGallery } from '../components/product-gallery';
import { sortProducts } from '../utils/transforms';

const style = {
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
};

const Index = ({ products, pathname }) => (
  <>
    <SEO
      title="Freeform Portland"
      path={pathname}
      description="Freeform Portland Thank You gifts"
      imagePath="https://www.freeformportland.org/wp-content/themes/graphy-pro/images/freeform-portland.svg"
    />
    <Header
      as="h3"
      content="Give a Gift, Receive a Gift!"
      textAlign="center"
      style={style.h3}
    />
    <ProductGallery
      products={products}
    />
  </>
);

Index.getInitialProps = async ({ pathname }) => {
  try {
    const url = `${API_URL}/products`;
    const { data } = await axios.get(url);

    return {
      products: sortProducts(data),
      pathname,
    };
  } catch (e) {
    return { products: [], pathname };
  }
};

export default Index;
