import { MenuItem, Menu, Image, Container, Dropdown, Button, Icon, Sidebar } from 'semantic-ui-react'
import ButtonGroup from 'semantic-ui-react/dist/commonjs/elements/Button/ButtonGroup'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Navi() {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <div className="desktop-only">
            <Menu stackable borderless>
                <Container>
                    <MenuItem>
                        <Image src='/images/logo.jpg' size='medium' as={NavLink} to="/" />
                    </MenuItem>

                    <MenuItem position='right'>
                        <ButtonGroup>
                            <Button className="custom-menu" as={NavLink} to="/home" end={true}>Ana Sayfa</Button>
                            <Button className="custom-menu" as={NavLink} to="/aboutus">Hakkımızda</Button>
                            <Button className="custom-menu" as={NavLink} to="/services">Hizmetler</Button>
                            <Button className="custom-menu" as={NavLink} to="/ourprojects">Projelerimiz</Button>
                            <Button className="custom-menu" as={NavLink} to="/contact">Bize Ulaşın</Button>
                        </ButtonGroup>
                    </MenuItem>
                </Container>
            </Menu>
            <Menu className="custom-menu"  >
                <Container>
                    <MenuItem>
                        <Dropdown closeOnChange icon={null} simple text={<span style={{ fontWeight: '700' }}>Endüstriyal Otomasyon</span>}>
                            <Dropdown.Menu>
                                <Dropdown.Item name='products' as={Link} to="/products?categoryId=1&subcategoryId=3">Sürücüler</Dropdown.Item>
                                <Dropdown.Item name='products' as={Link} to="/products?categoryId=1&subcategoryId=1">PLC</Dropdown.Item>
                                <Dropdown.Item name='products' as={Link} to="/products?categoryId=1&subcategoryId=2">Ekran</Dropdown.Item>
                                <Dropdown.Item name='products' as={Link} to="/products?categoryId=1&subcategoryId=4">Güç Kaynağı</Dropdown.Item>
                                <Dropdown.Item name='products' as={Link} to="/products?categoryId=1&subcategoryId=5">Soft Starter</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </MenuItem>
                    <MenuItem>
                        <Dropdown closeOnChange icon={null} simple text={<span style={{ fontWeight: '700' }}>Endüstriyal Isı Kontrol</span>}>
                            <Dropdown.Menu>
                                <Dropdown.Item name='products' as={Link} to="/products?categoryId=2&subcategoryId=6">Termostatlar</Dropdown.Item>
                                <Dropdown.Item name='products' as={Link} to="/products?categoryId=2&subcategoryId=7">Power Regülatör</Dropdown.Item>
                                <Dropdown.Item name='products' as={Link} to="/products?categoryId=2&subcategoryId=8">SSR</Dropdown.Item>
                                <Dropdown.Item name='products' as={Link} to="/products?categoryId=2&subcategoryId=9">Termokupl</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </MenuItem>
                    <MenuItem>
                        <Dropdown closeOnChange icon={null} simple text={<span style={{ fontWeight: '700' }}>Endüstriyal Isıtma</span>}>
                            <Dropdown.Menu>
                                <Dropdown.Item name='products' as={Link} to="/products?categoryId=3&subcategoryId=10">Rezistanslar</Dropdown.Item>
                                <Dropdown.Item name='products' as={Link} to="/products?categoryId=3&subcategoryId=11">IR Lambalar</Dropdown.Item>
                                <Dropdown.Item name='products' as={Link} to="/products?categoryId=3&subcategoryId=12">İnfrared Lambalar</Dropdown.Item>
                                <Dropdown.Item name='products' as={Link} to="/products?categoryId=3&subcategoryId=13">Quartz Lambalar</Dropdown.Item>
                                <Dropdown.Item name='products' as={Link} to="/products?categoryId=3&subcategoryId=14">Seramik Yansıtıcılar</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </MenuItem>
                    <MenuItem>
                        <Dropdown closeOnChange icon={null} simple text={<span style={{ fontWeight: '700' }}>UV Kontrol</span>}>
                            <Dropdown.Menu>
                                <Dropdown.Item name='products' as={Link} to="/products?categoryId=4&subcategoryId=15">UV Lamba</Dropdown.Item>
                                <Dropdown.Item name='products' as={Link} to="/products?categoryId=4&subcategoryId=16">UV Kabin</Dropdown.Item>
                                <Dropdown.Item name='products' as={Link} to="/products?categoryId=4&subcategoryId=17">UV Kontrol Panosu</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </MenuItem>
                    <MenuItem>
                        <Dropdown closeOnChange icon={null} simple text={<span style={{ fontWeight: '700' }}>Bütün Ürünler</span>}>
                            <Dropdown.Menu>
                                <Dropdown.Item name='products' as={Link} to="/products">Bütün Ürünler</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </MenuItem>
                    <MenuItem>
                        <Dropdown closeOnChange icon={null} simple text={<span style={{ fontWeight: '700' }}>2. El Ürünler</span>}>
                            <Dropdown.Menu>
                                <Dropdown.Item name='products' as={Link} to="/products/secondhand">2. El Ürünler</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </MenuItem>
                    <MenuItem position='right'>
                        <Dropdown closeOnChange icon={"shopping cart"} simple text={<span style={{ fontWeight: '700' }}>Sepetiniz</span>}>
                            <Dropdown.Menu>
                                <Dropdown.Item name='products' as={Link} to="/cart">Sepetiniz</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </MenuItem>
                    <MenuItem className="menu-border-fix" />
                </Container>
            </Menu>
            </div>
            <div className="mobile-only">
                <Menu stackable >
                    <Container>
                        <MenuItem position='center'>
                            <Image src='/images/logo.jpg' size='medium' as={NavLink} to="/" />
                        </MenuItem>
                    <Menu stackable className="custom-menu" >
                        <MenuItem>
                            <Icon name='sidebar' size='large' onClick={() => setVisible(!visible)} />
                        </MenuItem>
                        <Sidebar 
                            as={Menu}
                            animation='overlay'
                            icon='labeled'
                            inverted
                            vertical
                            visible={visible}
                            onHide={() => setVisible(false)}
                            width='thin'
                            onClick={() => setVisible(false)}
                        >
                            <Menu.Item style={{ paddingBottom: "125px" }}><Image src='/images/logo2.png' size='small' as={NavLink} to="/" /></Menu.Item>

                            
                            <Menu.Item as={NavLink} to="/home" end={true} >Ana Sayfa</Menu.Item>
                            <Menu.Item as={NavLink} to="/categories" end={true}>Kategoriler</Menu.Item>
                            <Menu.Item as={NavLink} to="/aboutus">Hakkımızda</Menu.Item>
                            <Menu.Item as={NavLink} to="/services">Hizmetler</Menu.Item>
                            <Menu.Item as={NavLink} to="/ourprojects">Projelerimiz</Menu.Item>
                            <Menu.Item as={NavLink} to="/contact">Bize Ulaşın</Menu.Item>
                            

                        </Sidebar>
                        </Menu>    
                    </Container>
                </Menu>
            </div>
            
        </div >
        
    )
}
