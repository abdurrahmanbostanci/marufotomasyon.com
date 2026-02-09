import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  Comment,
  CommentAction,
  CommentActions,
  CommentAuthor,
  CommentAvatar,
  CommentContent,
  CommentGroup,
  CommentMetadata,
  CommentText,
  Form,
  FormTextArea,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Image,
  Placeholder,
  PlaceholderImage,
  PlaceholderLine,
  Rating,
  Segment,
  SidebarPushable,
  Tab,
  TabPane,
} from "semantic-ui-react";
import ProductService from "../services/productService";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ProductDetail() {
  let { name } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let productService = new ProductService();

    setLoading(true);

    productService
      .getByProductName(name)
      .then((result) => {
        const data = result.data.data[0];
        setProduct(data);

        if (data) {
          document.title = `${data.brandName} ${data.productName} Fiyatı ve Özellikleri | Maruf Otomasyon`;
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      document.title =
        "Maruf Otomasyon | Endüstriyal Otomasyon ve Isı Kontrol Sistemleri";
    };
    // eslint-disable-next-line
  }, [name]);

  const panes = [
    {
      menuItem: "Ürün Hakkında",
      render: () => (
        <TabPane style={{ textAlign: "left" }}>
          <p style={{ whiteSpace: "pre-line" }}>{product.description}</p>
        </TabPane>
      ),
    },
    {
      menuItem: "Yorumlar",
      render: () => (
        <TabPane>
          <CommentGroup style={{ textAlign: "left" }}>
            <Comment>
              <CommentAvatar src="/images/matt.jpg" />
              <CommentContent>
                <CommentAuthor as="a">Matt</CommentAuthor>
                <CommentMetadata>
                  <div>Today at 5:42PM</div>
                </CommentMetadata>
                <CommentText>Güzel ürün teşekkürler.</CommentText>
                <CommentActions>
                  <CommentAction>Reply</CommentAction>
                </CommentActions>
              </CommentContent>
            </Comment>

            <Comment>
              <CommentAvatar src="/images/elliot.jpg" />
              <CommentContent>
                <CommentAuthor as="a">Elliot Fu</CommentAuthor>
                <CommentMetadata>
                  <div>Yesterday at 12:30AM</div>
                </CommentMetadata>
                <CommentText>
                  <p>
                    Satın alım sürecinde oldukça cana yakın ve profesyonel bir
                    tavır takınıyorlar. Teşekkürler!
                  </p>
                </CommentText>
                <CommentActions>
                  <CommentAction>Reply</CommentAction>
                </CommentActions>
              </CommentContent>
              <CommentGroup>
                <Comment>
                  <CommentAvatar src="/images/jenny.jpg" />
                  <CommentContent>
                    <CommentAuthor as="a">Jenny Hess</CommentAuthor>
                    <CommentMetadata>
                      <div>Just now</div>
                    </CommentMetadata>
                    <CommentText>Elliot sen her zaman haklısın :)</CommentText>
                    <CommentActions>
                      <CommentAction>Reply</CommentAction>
                    </CommentActions>
                  </CommentContent>
                </Comment>
              </CommentGroup>
            </Comment>

            <Comment>
              <CommentAvatar src="/images/joe.jpg" />
              <CommentContent>
                <CommentAuthor as="a">Joe Henderson</CommentAuthor>
                <CommentMetadata>
                  <div>5 days ago</div>
                </CommentMetadata>
                <CommentText>
                  Kargo elime çok kısa bir sürede ulaştı
                </CommentText>
                <CommentActions>
                  <CommentAction>Reply</CommentAction>
                </CommentActions>
              </CommentContent>
            </Comment>

            <Form reply>
              <FormTextArea />
              <Button
                content="Add Reply"
                labelPosition="left"
                icon="edit"
                primary
              />
            </Form>
          </CommentGroup>
        </TabPane>
      ),
    },
  ];

  return (
    <div
      style={{
        width: "auto",
        maxWidth: "800px",
        margin: "0 auto",
        position: "relative",
        paddingBottom: "100px",
      }}
    >
      <Grid>
        <GridColumn mobile={16} tablet={8} computer={10}>
          <SidebarPushable as={Segment}>
            <Segment
              basic
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "500px",
              }}
            >
              {loading && (
                <Placeholder style={{ height: 400, width: 400 }}>
                  <PlaceholderImage />
                </Placeholder>
              )}
              {!loading &&
                product &&
                (product.imageUrl === null ? (
                  <Zoom>
                    <Image
                      size="huge"
                      src="/images/microsoft-clippy.jpg"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "600px",
                        objectFit: "contain",
                        cursor: "zoom-in",
                      }}
                    />
                  </Zoom>
                ) : (
                  <Zoom>
                    <Image
                      size="huge"
                      src={`https://marufotomasyon.onrender.com${product.imageUrl}`}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "400px",
                        objectFit: "contain",
                      }}
                    />
                  </Zoom>
                ))}
            </Segment>
          </SidebarPushable>
        </GridColumn>

        <GridColumn mobile={16} tablet={8} computer={6}>
          <Card centered>
            <Card.Content>
              {loading && (
                <Placeholder>
                  <PlaceholderLine />
                </Placeholder>
              )}
              {!loading && <Card.Header>{product.productName}</Card.Header>}
              <Rating icon="star" defaultRating={4} maxRating={5} size="tiny" />
            </Card.Content>
            <Card.Content>
              <p>
                Marka:
                {loading && (
                  <Placeholder>
                    <PlaceholderLine />
                  </Placeholder>
                )}
                {!loading && (
                  <Link to={"/brands/" + encodeURIComponent(product.brandName)}>
                    {" "}
                    {product.brandName}
                  </Link>
                )}
              </p>
              <p>
                <Header as="h5">Kategori: </Header>
                {loading && (
                  <Placeholder>
                    <PlaceholderLine />
                  </Placeholder>
                )}
                {!loading && product.categoryName}
              </p>
              <p>
                <Header as="h5">Ürün tipi: </Header>
                {loading && (
                  <Placeholder>
                    <PlaceholderLine />
                  </Placeholder>
                )}
                {!loading && product.subcategoryName}
              </p>
            </Card.Content>
            <Card.Content>
              <Card.Header>
                {loading && (
                  <Placeholder>
                    <PlaceholderLine />
                  </Placeholder>
                )}
                {!loading &&
                  "Ürün Fiyatı: " + product.unitPrice + product.currencySymbol}
              </Card.Header>
              <Card.Meta>
                {loading && (
                  <Placeholder>
                    <PlaceholderLine />
                  </Placeholder>
                )}
                {!loading && "Stok Adedi: " + product.unitsInStock}
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button fluid basic color="olive" content="Sepete Ekle" />
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="red">
                  Favorilere Ekle
                </Button>
                <Button basic color="grey">
                  Yer İşareti Ekle
                </Button>
              </div>
            </Card.Content>
          </Card>
        </GridColumn>

        <GridRow>
          <GridColumn width={16}>
            {/*<Tab panes={panes} />*/}
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
