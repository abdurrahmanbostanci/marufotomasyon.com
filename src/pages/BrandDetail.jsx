import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  Grid,
  GridColumn,
  GridRow,
  Image,
  Placeholder,
  PlaceholderImage,
  PlaceholderLine,
  Segment,
  SidebarPushable,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TabPane,
} from "semantic-ui-react";
import BrandService from "../services/brandService";
import ProductService from "../services/productService";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function BrandDetail() {
  const { name } = useParams();

  const [brand, setBrand] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const brandService = new BrandService();
    setLoading(true);

    brandService.getByBrandName(name).then((res) => {
      setBrand(res.data.data);
    });
  }, [name]);

  useEffect(() => {
    if (!brand?.brandId) return;

    const productService = new ProductService();

    productService
      .getProductsWithoutPages(null, null, brand.brandId)
      .then((res) => setProducts(res.data.data))
      .finally(() => setLoading(false));

    document.title = `${brand.brandName.toLocaleUpperCase(
      "en-EN",
    )} Markası Otomasyon Ürünleri | Maruf Otomasyon`;

    return () => {
      document.title =
        "Maruf Otomasyon | Endüstriyal Otomasyon ve Isı Kontrol Sistemleri";
    };
  }, [brand]);

  const panes = [
    {
      menuItem: `${brand?.brandName?.toLocaleUpperCase("en-EN")} Hakkında`,
      render: () => (
        <TabPane>
          <p style={{ whiteSpace: "pre-line" }}>{brand?.description}</p>
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
                minHeight: "200px",
              }}
            >
              {loading && (
                <Placeholder style={{ height: 120, width: 400 }}>
                  <PlaceholderImage />
                </Placeholder>
              )}
              {!loading && (
                <Image
                  src={`https://marufotomasyon.onrender.com${brand.brandLogoUrl}`}
                  style={{
                    maxWidth: "80%",
                    maxHeight: "120px",
                    objectFit: "contain",
                  }}
                />
              )}
            </Segment>
          </SidebarPushable>
        </GridColumn>
        <GridColumn mobile={16} tablet={8} computer={6}>
          <Card centered>
            <Card.Content>
              <Card.Header>
                {loading && (
                  <Placeholder>
                    <PlaceholderLine />
                  </Placeholder>
                )}
                {!loading && brand.brandName}
              </Card.Header>
            </Card.Content>
            <Card.Content>
              {loading && (
                <Placeholder>
                  <PlaceholderLine />
                </Placeholder>
              )}
              {!loading && "Menşei: " + brand.originCountry}
            </Card.Content>
          </Card>
        </GridColumn>
        <GridRow>
          <GridColumn width={16}>
            <GridColumn width={16}>
              <Tab panes={panes} />
            </GridColumn>
          </GridColumn>
        </GridRow>
        <div className="desktop-only">
          <GridRow>
            <GridColumn width={16}>
              <Table celled>
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell></TableHeaderCell>
                    <TableHeaderCell>Ürün Adı</TableHeaderCell>
                    <TableHeaderCell>Marka</TableHeaderCell>
                    <TableHeaderCell>Kategori</TableHeaderCell>
                    <TableHeaderCell>Tür</TableHeaderCell>
                    <TableHeaderCell>Birim Fiyatı</TableHeaderCell>
                    <TableHeaderCell>Stok Adedi</TableHeaderCell>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {products.map((product) => (
                    <TableRow>
                      <TableCell style={{ width: "200px" }}>
                        <Link
                          to={
                            "/products/" +
                            product.categoryName +
                            "/" +
                            product.productName
                          }
                        >
                          <Image
                            size="huge"
                            src={`https://marufotomasyon.onrender.com${product.imageUrl}`}
                            style={{
                              maxWidth: "100%",
                              maxHeight: "90px",
                              objectFit: "contain",
                            }}
                          />
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link
                          to={
                            "/products/" +
                            product.categoryName +
                            "/" +
                            product.productName
                          }
                        >
                          {product.productName}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link to={"/brands/" + product.brandName}>
                          {product.brandName}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link to={"/products?categoryId=" + product.categoryId}>
                          {product.categoryName}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link
                          to={
                            "/products?categoryId=" +
                            product.categoryId +
                            "&subcategoryId=" +
                            product.subcategoryId
                          }
                        >
                          {product.subcategoryName}
                        </Link>
                      </TableCell>
                      <TableCell>
                        {product.unitPrice + " " + product.currencySymbol}
                      </TableCell>
                      <TableCell>{product.unitsInStock}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </GridColumn>
          </GridRow>
        </div>
      </Grid>
    </div>
  );
}
