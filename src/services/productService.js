import axios from "axios";

export default class ProductService {

  getProducts(categoryId, subcategoryId, brandId, page = 0, size = 20) {
    return axios.get("https://marufotomasyon.onrender.com/api/products/getall", {
      params: {
        categoryId: categoryId || undefined,
        subcategoryId: subcategoryId || undefined,
        brandId: brandId?.length ? brandId : undefined,
        page,
        size
      }
    });
  }

  getProductsWithoutPages(categoryId, subcategoryId, brandId) {
    let url = "https://marufotomasyon.onrender.com/api/products/getallwithoutpages";

    const params = [];

    if (categoryId) params.push(`categoryId=${categoryId}`);
    if (subcategoryId) params.push(`subcategoryId=${subcategoryId}`);
    if (brandId) params.push(`brandId=${brandId}`);

    if (params.length > 0) {
      url += "?" + params.join("&");
    }

    console.log("REQUEST URL:", url); // debug için

    return axios.get(url);
  }


  getProductsByNames(categoryName, subcategoryName, brandName) {
    let url = "https://marufotomasyon.onrender.com/api/products/getallbyname";

    const params = [];

    if (categoryName) params.push(`categoryName=${categoryName}`);
    if (subcategoryName) params.push(`subcategoryName=${subcategoryName}`);
    if (brandName) params.push(`brandName=${brandName}`);

    if (params.length > 0) {
      url += "?" + params.join("&");
    }

    console.log("REQUEST URL:", url); // debug için

    return axios.get(url);
  }


  getByProductName(productName){
    return axios.get("https://marufotomasyon.onrender.com/api/products/getByProductName?productName="+ productName)
  }

}