import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { MenuMenu, MenuItem, MenuHeader, Menu, Segment, Header, List, Checkbox } from "semantic-ui-react";
import { useHistory, useLocation  } from "react-router-dom";


export default function Categories() {
  const history = useHistory();
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const categoryId = params.get("categoryId");

  //Eğer diğer kategorilere de seçim tablosu ekeyeceksen 
  //sonradan buradaki kategori değer sorgusunu kaldırıp tüm ürünlere ayrı marka tablosu yap
  //category ye göre gösterimi MenuItem'da belirle. Burada değil. (Nasıl yapacağımı unuttum :D)
  const showAutomationBrandFilter = categoryId === "1";

  const showHeatBrandFilter = categoryId === "2";

  const brandIds = params.get("brandId")
    ? params.get("brandId").split(",").map(Number)
    : [];

    const toggleBrand = (id) => {
  let updated = [...brandIds];

  if (updated.includes(id)) {
    updated = updated.filter(b => b !== id);
  } else {
    updated.push(id);
  }

  if (updated.length === 0) {
    params.delete("brandId");
  } else {
    params.set("brandId", updated.join(","));
  }

  history.push(`/products?${params.toString()}`);
  };

  return (
    <div className="desktop-only">
      <Menu vertical>
        {showAutomationBrandFilter && (
        <Segment>
          <Header as="h4">Marka</Header>

          <Segment style={{ maxHeight: "300px", overflowY: "auto" }}>
            <List relaxed >
              <List.Item><Checkbox label='Siemens' checked={brandIds.includes(1)} onChange={() => toggleBrand(1)}/></List.Item>
              <List.Item><Checkbox label='Beckhoff' checked={brandIds.includes(2)} onChange={() => toggleBrand(2)}/></List.Item>
              <List.Item><Checkbox label='Omron' checked={brandIds.includes(3)} onChange={() => toggleBrand(3)}/></List.Item>
              <List.Item><Checkbox label='LS Electric' checked={brandIds.includes(4)} onChange={() => toggleBrand(4)}/></List.Item>
              <List.Item><Checkbox label='Delta' checked={brandIds.includes(5)} onChange={() => toggleBrand(5)}/></List.Item>
              <List.Item><Checkbox label='Festo' checked={brandIds.includes(6)} onChange={() => toggleBrand(6)}/></List.Item>
              <List.Item><Checkbox label='B&R' checked={brandIds.includes(7)} onChange={() => toggleBrand(7)}/></List.Item>
              <List.Item><Checkbox label='Beijer' checked={brandIds.includes(8)} onChange={() => toggleBrand(8)}/></List.Item>
              <List.Item><Checkbox label='ABB' checked={brandIds.includes(9)} onChange={() => toggleBrand(9)}/></List.Item>
              <List.Item><Checkbox label='GMTCNT' checked={brandIds.includes(10)} onChange={() => toggleBrand(10)}/></List.Item>
              <List.Item><Checkbox label='Weidmüller' checked={brandIds.includes(11)} onChange={() => toggleBrand(11)}/></List.Item>
              <List.Item><Checkbox label='Wago' checked={brandIds.includes(12)} onChange={() => toggleBrand(12)}/></List.Item>
              <List.Item><Checkbox label='Phoenix Contact' checked={brandIds.includes(13)} onChange={() => toggleBrand(13)}/></List.Item>
              <List.Item><Checkbox label='Bosch Rexroth' checked={brandIds.includes(14)} onChange={() => toggleBrand(14)}/></List.Item>
              <List.Item><Checkbox label='Schneider Electric' checked={brandIds.includes(15)} onChange={() => toggleBrand(15)}/></List.Item>
              <List.Item><Checkbox label='Rockwell' checked={brandIds.includes(16)} onChange={() => toggleBrand(16)}/></List.Item>
              <List.Item><Checkbox label='Fatek' checked={brandIds.includes(17)} onChange={() => toggleBrand(17)}/></List.Item>
              <List.Item><Checkbox label='Panasonic' checked={brandIds.includes(18)} onChange={() => toggleBrand(18)}/></List.Item>
            </List>
          </Segment>
        </Segment>
        )}
        {showHeatBrandFilter && (
        <Segment>
          <Header as="h4">Marka</Header>

          <Segment style={{ maxHeight: "300px", overflowY: "auto" }}>
            <List relaxed >
              <List.Item><Checkbox label='Autonics' checked={brandIds.includes(19)} onChange={() => toggleBrand(19)}/></List.Item>
              <List.Item><Checkbox label='Emka' checked={brandIds.includes(20)} onChange={() => toggleBrand(20)}/></List.Item>
              <List.Item><Checkbox label='Enda' checked={brandIds.includes(21)} onChange={() => toggleBrand(21)}/></List.Item>
              <List.Item><Checkbox label='Fotek' checked={brandIds.includes(22)} onChange={() => toggleBrand(22)}/></List.Item>
              <List.Item><Checkbox label='Celduc' checked={brandIds.includes(23)} onChange={() => toggleBrand(23)}/></List.Item>
              <List.Item><Checkbox label='Gefran' checked={brandIds.includes(24)} onChange={() => toggleBrand(24)}/></List.Item>
            </List>
          </Segment>
        </Segment>
        )}
        <MenuItem>
          <MenuHeader>Endüstriyal Otomasyon</MenuHeader>

          <MenuMenu>
            <MenuItem name="Sürücüler" as={Link} to="/products?categoryId=1&subcategoryId=3">Sürücüler</MenuItem>
            <MenuItem name="PLC" as={Link} to="/products?categoryId=1&subcategoryId=1">PLC</MenuItem>
            <MenuItem name="Ekran" as={Link} to="/products?categoryId=1&subcategoryId=2">Ekran</MenuItem>
            <MenuItem name="Güç Kaynağı" as={Link} to="/products?categoryId=1&subcategoryId=4">Güç Kaynağı</MenuItem>
            <MenuItem name="Soft Starter" as={Link} to="/products?categoryId=1&subcategoryId=5">Soft Starter</MenuItem>
          </MenuMenu>
        </MenuItem>

        <MenuItem>
          <MenuHeader>Endüstriyal Isı Kontrol</MenuHeader>

          <MenuMenu>
            <MenuItem name="Termostatlar" as={Link} to="/products?categoryId=2&subcategoryId=6">Termostatlar</MenuItem>
            <MenuItem name="Power Regülatör" as={Link} to="/products?categoryId=2&subcategoryId=7">Power Regülatör</MenuItem>
            <MenuItem name="SSRler" as={Link} to="/products?categoryId=2&subcategoryId=8">SSRler</MenuItem>
            <MenuItem name="Termokupllar" as={Link} to="/products?categoryId=2&subcategoryId=9">Termokupllar</MenuItem>
          </MenuMenu>
        </MenuItem>

        <MenuItem>
          <MenuHeader>Endüstriyal Isıtma</MenuHeader>

          <MenuMenu>
            <MenuItem name="Rezistanslar" as={Link} to="/products?categoryId=3&subcategoryId=10">Rezistanslar</MenuItem>
            <MenuItem name="IR Lambalar" as={Link} to="/products?categoryId=3&subcategoryId=11">IR Lambalar</MenuItem>
            <MenuItem name="İnfrared Lambalar" as={Link} to="/products?categoryId=3&subcategoryId=12">İnfrared Lambalar</MenuItem>
            <MenuItem name="Quartz Lambalar" as={Link} to="/products?categoryId=3&subcategoryId=13">Quartz Lambalar</MenuItem>
            <MenuItem name="Seramik Yansıtıcılar" as={Link} to="/products?categoryId=3&subcategoryId=14">Seramik Yansıtıcılar</MenuItem>
          </MenuMenu>
        </MenuItem>

        <MenuItem>
          <MenuHeader>2. El Ürünler</MenuHeader>

          <MenuMenu>
            <MenuItem name="Ekran" as={Link} to="/products/secondhand">Ekran</MenuItem>
            <MenuItem name="PLC - LOGO" as={Link} to="/products/secondhand">PLC - LOGO</MenuItem>
            <MenuItem name="Sürücü" as={Link} to="/products/secondhand">Sürücü</MenuItem>
          </MenuMenu>
        </MenuItem>
      </Menu>
    </div>
  );
}
