import React, { useEffect, useState } from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Menu,
  Table,
  Image,
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  Header,
} from 'semantic-ui-react'
import ProductService from '../services/productService'
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function ProductList() {

  const location = useLocation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const categoryId = params.get("categoryId");
    const subcategoryId = params.get("subcategoryId");
    const brandId = params.get("brandId");

    const productService = new ProductService();
    productService
      .getProductsWithoutPages(categoryId, subcategoryId, brandId)
      .then(res => setProducts(res.data.data));

  }, [location.search]);

  return (
    <div >
      <div className="desktop-only">
        {/*
        <SidebarPushable as={Segment} >
              <Segment basic>
                <Segment basic> 
                  Ürün fiyatları markaların kataloglarından alınan güncel liste fiyatlarıdır. Detaylı bilgi için lütfen{" "}
                  <Link to="/contact" style={{ color: "#2185d0" }}>
                    iletişime geçin
                  </Link>
                </Segment>
              </Segment>
        </SidebarPushable> 
        */}
        <Table celled>
          <TableHeader>
            <TableRow>
              <TableHeaderCell></TableHeaderCell>
              <TableHeaderCell>Ürün Adı</TableHeaderCell>
              <TableHeaderCell>Marka</TableHeaderCell>
              <TableHeaderCell>Kategori</TableHeaderCell>
              <TableHeaderCell>Tip</TableHeaderCell>
              <TableHeaderCell>Birim Fiyatı</TableHeaderCell>
              <TableHeaderCell>Stok Adedi</TableHeaderCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products.length === 0 ? (
                <TableRow>
                  <TableCell colSpan="7" textAlign="center" style={{ padding: "30px 0" }}>
                    İkinci El Ürün Bulunmamaktadır
                  </TableCell>
                </TableRow>
              ) : (
              products.map((product)=>(
                <TableRow >
                  <TableCell style={{ width: "200px" }}>
                    <Link to={"/products/" + product.categoryName + "/" + product.productName}>
                      <Image
                        size="huge"
                        src={`https://marufotomasyon.onrender.com${product.imageUrl}`}
                        style={{
                        maxWidth: "100%",
                        maxHeight: "90px",
                        objectFit: "contain"
                        }}
                      />
                    </Link>
                  </TableCell>
                  <TableCell><Link to={"/products/" + product.categoryName + "/" + product.productName}>{product.productName}</Link></TableCell>
                  <TableCell><Link to={"/brands/" + encodeURIComponent(product.brandName)}>{product.brandName}</Link></TableCell>
                  <TableCell><Link to={"/products?categoryId=" + (product.categoryId)}>{product.categoryName}</Link></TableCell>
                  <TableCell><Link to={"/products?categoryId=" + (product.categoryId) + "&subcategoryId=" + (product.subcategoryId) }>{product.subcategoryName}</Link></TableCell>
                  <TableCell>{product.unitPrice + product.currencySymbol}</TableCell>
                  <TableCell>{product.unitsInStock}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableHeaderCell colSpan='7'>
                <Menu floated='right' pagination>
                  <MenuItem as='a' icon>
                    <Icon name='chevron left' />
                  </MenuItem>
                  <MenuItem as='a'>1</MenuItem>
                  <MenuItem as='a'>2</MenuItem>
                  <MenuItem as='a'>3</MenuItem>
                  <MenuItem as='a'>4</MenuItem>
                  <MenuItem as='a' icon>
                    <Icon name='chevron right' />
                  </MenuItem>
                </Menu>
              </TableHeaderCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <div className="mobile-only">
            {products.map((product)=>(
              <Card centered>
                <Link to={"/products/" + product.categoryName + "/" + product.productName}>
                      <Image
                        size="huge"
                        src={`http://localhost:9090${product.imageUrl}`}
                        style={{
                        maxWidth: "100%",
                        maxHeight: "1000px",
                        objectFit: "contain"
                        }}
                      />
                </Link>
                <CardContent>
                  <CardHeader><Link to={"/products/" + product.categoryName + "/" + product.productName}>{product.productName}</Link></CardHeader>
                  <CardDescription>
                    <p>
                    Marka: <Link to={"/brands/" + encodeURIComponent(product.brandName)}>{ product.brandName}</Link>
                    </p>
                    <p>
                    <Header as="h5">Kategori: </Header>{ product.categoryName}
                    </p>
                    <p>
                    <Header as="h5">Ürün tipi: </Header> { product.subcategoryName}
                    </p>
                  </CardDescription>
                </CardContent>
                <CardContent extra>
                  <Card.Header>{"Ürün Fiyatı: " + product.unitPrice + product.currencySymbol}</Card.Header>
                  <Card.Meta>{"Stok Adedi: " + product.unitsInStock}</Card.Meta>
                </CardContent>
              </Card>
              ))
            }
      </div>
    </div>
  )
}
