import axios from "axios";

export default class BrandService{
    getByBrandName(brandName){
        return axios.get("https://marufotomasyon.onrender.com/api/brands/getByBrandName?brandName="+ brandName)
    }

}