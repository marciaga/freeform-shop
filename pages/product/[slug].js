import {
  Grid, Image, Button, Header, Container,
} from 'semantic-ui-react';
import Error from 'next/error';
import axios from 'axios';

import { SEO } from '../../components/meta';
import { API_URL, PRODUCT_TYPES } from '../../utils/constants';

const productDetailStyle = `
  .ui.stackable.two.column.grid {
    margin: 0;
  }
`;

const ProductDetail = (props = {}) => {
  const {
    products = [],
    pathname,
    statusCode,
    path,
  } = props;
  const product = products.length ? products[0] : {};
  const {
    productId,
    name,
    price,
    description,
    image,
    productGuid,
    productType,
    sizes,
    shippable = true,
    weight,
  } = product;

  const imageSrc = image || 'https://via.placeholder.com/300x300';

  const additionalProductAttributes = sizes && sizes.length
    ? {
      'data-item-custom1-name': 'Size',
      'data-item-custom1-options': sizes.join('|'),
    }
    : {};

  if (productType === PRODUCT_TYPES.digital) {
    additionalProductAttributes['data-item-file-guid'] = productGuid;
  }

  return (
    statusCode === 404
      ? <Error statusCode={statusCode} />
      : (
        <>
          <SEO
            title={name}
            path={pathname}
            description={`Freeform Portland merch - ${description}`}
            imagePath={imageSrc}
          />
          <Grid columns={2} stackable divided>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Image centered src={imageSrc} />
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Header as="h1">{name}</Header>
                <Container>
                  <p>{description}</p>
                  <Header as="h3">
                    {`$${price} USD`}
                  </Header>
                  <Button
                    className="snipcart-add-item"
                    data-item-id={productId}
                    data-item-name={name}
                    data-item-price={price}
                    data-item-url={path}
                    data-item-description={description}
                    data-item-shippable={shippable}
                    data-item-weight={weight}
                    color="teal"
                    content="Add to Cart"
                    size="large"
                    {...additionalProductAttributes}
                  />
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <style>{productDetailStyle}</style>
        </>
      )
  );
};

ProductDetail.getInitialProps = async ({
  asPath,
  query,
  req,
  res,
}) => {
  const path = req.url;

  try {
    const url = `${API_URL}/products/${query.slug}`;
    const { data } = await axios.get(url);

    if (typeof data === 'string') {
      throw new Error('product not found');
    }

    return {
      products: data,
      statusCode: 200,
      pathname: asPath,
      path,
    };
  } catch (e) {
    const errorCode = 404;
    res.statusCode = errorCode;

    return {
      products: [],
      statusCode: errorCode,
      pathname: '',
      path,
    };
  }
};

export default ProductDetail;
