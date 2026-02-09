import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import MainMenu from '../pages/MainMenu'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import ComingSoon from '../pages/ComingSoon'
import AboutUs from '../pages/AboutUs'
import Maintenance from '../pages/OurServices/Maintenance'
import Hizmetler from '../pages/Hizmetler'
import Contact from '../pages/Contact'
import ProductSupply from '../pages/OurServices/ProductSupply'
import Programming from '../pages/OurServices/Programming'
import Heat from '../pages/OurServices/Heat'
import Projects from '../pages/OurServices/Projects'
import VideoGallery from '../pages/VideoGallery'
import PhotoGallery from '../pages/PhotoGallery'
import OurProjects from '../pages/OurProjects'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import ProductDetail from '../pages/ProductDetail'
import BrandDetail from '../pages/BrandDetail'
import MobileCategories from '../pages/MobileCategories'
import ProductCardList from '../pages/ProductCardList'
import PLCNedir from '../pages/PLCNedir'

export default function Main() {
    const location = useLocation();

    const showHomePage = [
        '/',
        '/home'
    ];

    const showCategories = [
        '/products',
        '/products/secondhand'
    ];

    const isHomePageVisible = showHomePage.includes(location.pathname);

    const isCategoriesVisible = showCategories.includes(location.pathname);
  
    return (
        <div>
            <div className='desktop-only'>
            <Grid>
                <Grid.Row>
                {isHomePageVisible && (
                    <Grid.Column width={16}>
                        <Route exact path='/' component={MainMenu} />
                        <Route exact path='/home' component={MainMenu} />
                    </Grid.Column>
                )}

                {isCategoriesVisible && (
                    <Grid.Column width={4}>
                        <Categories/>
                    </Grid.Column>
                )}

                    <Grid.Column width={isCategoriesVisible ? 12 : 16}>
                        <Route exact path='/aboutus' component={AboutUs} />
                        <Route exact path='/services' component={Hizmetler} />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/programming' component={Programming} />
                        <Route exact path='/projects' component={Projects} />
                        <Route exact path='/maintenance' component={Maintenance} />
                        <Route exact path='/heat' component={Heat} />
                        <Route exact path='/productsupplies' component={ProductSupply} />
                        <Route exact path='/video' component={VideoGallery} />
                        <Route exact path='/photo' component={PhotoGallery} />
                        <Route exact path='/ourprojects' component={OurProjects} />
                        <Route exact path='/products/:name/:name' component={ProductDetail} />
                        <Route exact path='/brands/:name' component={BrandDetail} />
                        <Route exact path='/cart' component={ComingSoon} />
                        <Route exact path='/categories' component={MobileCategories} />
                        <Route exact path='/plcnedir' component={PLCNedir} />

                        {/*Ürün sayfaları:*/}
                        <Route exact path='/products' component={ProductCardList} />
                        <Route exact path='/products/secondhand' component={ProductList} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
            <div className='mobile-only'>
            <Grid>
                <Grid.Row>
                {isHomePageVisible && (
                    <Grid.Column width={16}>
                        <Route exact path='/' component={MainMenu} />
                        <Route exact path='/home' component={MainMenu} />
                    </Grid.Column>
                )}

                    <Grid.Column width={16}>
                        <Route exact path='/aboutus' component={AboutUs} />
                        <Route exact path='/services' component={Hizmetler} />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/programming' component={Programming} />
                        <Route exact path='/projects' component={Projects} />
                        <Route exact path='/maintenance' component={Maintenance} />
                        <Route exact path='/heat' component={Heat} />
                        <Route exact path='/productsupplies' component={ProductSupply} />
                        <Route exact path='/video' component={VideoGallery} />
                        <Route exact path='/photo' component={PhotoGallery} />
                        <Route exact path='/ourprojects' component={OurProjects} />
                        <Route exact path='/products/:name/:name' component={ProductDetail} />
                        <Route exact path='/brands/:name' component={BrandDetail} />
                        <Route exact path='/cart' component={ComingSoon} />
                        <Route exact path='/categories' component={MobileCategories} />
                        <Route exact path='/plcnedir' component={PLCNedir} />

                        {/*Ürün sayfaları:*/}
                        <Route exact path='/products' component={ProductCardList} />
                        <Route exact path='/products/secondhand' component={ProductList} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
            
        </div>
    )
}
