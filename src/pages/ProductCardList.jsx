import React, { useEffect, useState } from "react";
import {
  TableRow,
  TableHeaderCell,
  TableFooter,
  MenuItem,
  Icon,
  Menu,
  Table,
  Image,
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  Grid,
  SidebarPushable,
  Segment,
  Placeholder,
  Item,
} from "semantic-ui-react";
import ProductService from "../services/productService";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function ProductCardList() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(20);
  const [totalPages, setTotalPages] = useState(0);

  const params = new URLSearchParams(location.search);
  const subcategoryId = params.get("subcategoryId");
  const showAutomationBrandFilter = subcategoryId === "1";

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const categoryId = params.get("categoryId");
    const subcategoryId = params.get("subcategoryId");
    const brandId = params.get("brandId");

    const productService = new ProductService();

    // geçici title
    document.title = "Yükleniyor...";

    setLoading(true);

    productService
      .getProducts(categoryId, subcategoryId, brandId, page, size)
      .then((res) => {
        const data = res.data.data;
        setProducts(data.content || []);
        setTotalPages(data.totalPages);

        // 🔥 TITLE LOGIC
        if (data.content?.length > 0) {
          if (brandId) {
            document.title = `${data.content[0].brandName} Fiyatları | Maruf Otomasyon`;
          } else if (subcategoryId) {
            document.title = `${data.content[0].subcategoryName} Fiyatları | Maruf Otomasyon`;
          } else if (categoryId) {
            document.title = `${data.content[0].categoryName} Fiyatları | Maruf Otomasyon`;
          } else {
            document.title = "Tüm Ürünler | Maruf Otomasyon";
          }
        } else {
          document.title = "Ürün Bulunamadı | Maruf Otomasyon";
        }
      })
      .finally(() => {
        setLoading(false);
      });

    // 🧹 sayfadan çıkınca
    return () => {
      document.title =
        "Maruf Otomasyon | Endüstriyal Otomasyon ve Isı Kontrol Sistemleri";
    };
  }, [location.search, page, size]);

  useEffect(() => {
    setPage(0);
    window.scrollTo({ top: 0 });
  }, [location.search]);

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [page, size]);

  return (
    <div style={{ paddingBottom: "50px" }}>
      <SidebarPushable as={Segment}>
        <Segment basic>
          <Segment basic>
            Ürün fiyatları markaların kataloglarından alınan güncel liste
            fiyatlarıdır. Detaylı bilgi için lütfen{" "}
            <Link to="/contact" style={{ color: "#2185d0" }}>
              iletişime geçin
            </Link>
          </Segment>
        </Segment>
      </SidebarPushable>
      <div>
        <Grid>
          <Grid.Row>
            {loading &&
              Array.from({ length: 8 }).map((_, i) => (
                <Grid.Column
                  key={i}
                  mobile={8}
                  tablet={8}
                  computer={4}
                  style={{ paddingBottom: "25px" }}
                >
                  <Card fluid>
                    <Placeholder>
                      <Placeholder.Image rectangular />
                    </Placeholder>

                    <Card.Content>
                      <Placeholder>
                        <Placeholder.Header>
                          <Placeholder.Line />
                          <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                          <Placeholder.Line />
                          <Placeholder.Line />
                        </Placeholder.Paragraph>
                      </Placeholder>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              ))}
            {!loading && products.length === 0 && (
              <Grid.Column width={16}>
                <SidebarPushable as={Segment}>
                  <Segment basic>
                    <Segment basic>
                      Aradığınız kategoride ürün bulunmamaktadır.
                    </Segment>
                  </Segment>
                </SidebarPushable>
              </Grid.Column>
            )}
            {!loading &&
              products.map((product) => (
                <Grid.Column
                  key={product.id}
                  mobile={8}
                  tablet={8}
                  computer={4}
                  style={{ paddingBottom: "25px" }}
                >
                  <Card
                    fluid
                    className="product-card"
                    as={Link}
                    to={
                      "/products/" +
                      encodeURIComponent(product.categoryName) +
                      "/" +
                      encodeURIComponent(product.productName)
                    }
                  >
                    <Link
                      to={
                        "/products/" +
                        encodeURIComponent(product.categoryName) +
                        "/" +
                        encodeURIComponent(product.productName)
                      }
                    >
                      <Image
                        className="product-image-wrapper"
                        src={`https://marufotomasyon.onrender.com${product.imageUrl}`}
                        style={{
                          maxWidth: "100%",
                          maxHeight: "1000px",
                          objectFit: "contain",
                        }}
                      />
                    </Link>
                    <CardContent>
                      <CardHeader>
                        <Link
                          to={
                        "/products/" +
                        encodeURIComponent(product.categoryName) +
                        "/" +
                        encodeURIComponent(product.productName)
                      }
                        >
                          {product.productName}
                        </Link>
                      </CardHeader>
                      <CardDescription>
                        <p>
                          Marka:{" "}
                          <Link
                            to={
                              "/brands/" + encodeURIComponent(product.brandName)
                            }
                          >
                            {product.brandName}
                          </Link>
                        </p>
                        {/*<p>
                            <Header as="h5">Kategori: </Header>{ product.categoryName}
                            </p>
                            <p>
                            <Header as="h5">Ürün tipi: </Header> { product.subcategoryName}
                            </p>*/}
                      </CardDescription>
                    </CardContent>
                    <CardContent extra>
                      <Card.Header>
                        {"Ürün Fiyatı: " +
                          product.unitPrice +
                          product.currencySymbol}
                      </Card.Header>
                      <Card.Meta>
                        {"Stok Adedi: " + product.unitsInStock}
                      </Card.Meta>
                    </CardContent>
                  </Card>
                </Grid.Column>
              ))}
          </Grid.Row>
        </Grid>
        {products.length > 0 && (
          <Table>
            <TableFooter>
              <TableRow>
                <TableHeaderCell colSpan="7">
                  <div className="desktop-only">
                    <Menu floated="right" pagination>
                      <MenuItem
                        icon
                        disabled={page === 0}
                        onClick={() => setPage((p) => Math.max(p - 1, 0))}
                      >
                        <Icon name="chevron left" />
                      </MenuItem>

                      {[...Array(totalPages)].map((_, i) => (
                        <MenuItem
                          key={i}
                          active={page === i}
                          onClick={() => setPage(i)}
                        >
                          {i + 1}
                        </MenuItem>
                      ))}

                      <MenuItem
                        icon
                        disabled={page === totalPages - 1}
                        onClick={() =>
                          setPage((p) => Math.min(p + 1, totalPages - 1))
                        }
                      >
                        <Icon name="chevron right" />
                      </MenuItem>
                    </Menu>
                  </div>
                  <div
                    className="mobile-only"
                    style={{ justifyContent: "space-between" }}
                  >
                    <Menu pagination>
                      <MenuItem
                        icon
                        disabled={page === 0}
                        onClick={() => setPage((p) => Math.max(p - 1, 0))}
                      >
                        <Icon name="chevron left" />
                      </MenuItem>

                      <MenuItem disabled>
                        {page + 1} / {totalPages}
                      </MenuItem>

                      <MenuItem
                        icon
                        disabled={page === totalPages - 1}
                        onClick={() =>
                          setPage((p) => Math.min(p + 1, totalPages - 1))
                        }
                      >
                        <Icon name="chevron right" />
                      </MenuItem>
                    </Menu>
                  </div>
                  <Menu secondary>
                    {[20, 40, 60].map((s) => (
                      <MenuItem
                        key={s}
                        active={size === s}
                        onClick={() => {
                          setSize(s);
                          setPage(0);
                        }}
                      >
                        {s}
                      </MenuItem>
                    ))}
                  </Menu>
                </TableHeaderCell>
              </TableRow>
            </TableFooter>
          </Table>
        )}
      </div>
      {showAutomationBrandFilter && (
        <SidebarPushable as={Segment}>
          <Segment basic>
            <Segment basic>
              <Item.Group
                divided
                style={{
                  width: "auto",
                  maxWidth: "800px",
                  margin: "0 auto",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                }}
              >
                <Item as={Link} to="/plcnedir">
                  <Item.Image src="/images/plc_kapak.png" />
                  <Item.Content verticalAlign="middle">
                    <Item.Header>
                      PLC hakkında bir makale: PLC Nedir?
                    </Item.Header>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Segment>
          </Segment>
        </SidebarPushable>
      )}
    </div>
  );
}
