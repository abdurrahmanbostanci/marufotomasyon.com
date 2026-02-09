import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Slider from "react-slick";
import { Image, Container, Grid, Header, Card, CardContent, CardHeader, CardDescription, Button, SidebarPushable, Segment} from "semantic-ui-react";

export default function MainMenu() {

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Container style={{ margin: "0 auto", position: "relative", paddingBottom: "40px"}}>
          <Slider {...settings}>
            <div>
              <Image src="/images/marufotomasyon.png" style={{ width: "100%", height: "auto", objectFit: "contain"}}/>
            </div>
            <div>
              <Image src="/images/automation.jpg" style={{ width: "100%", height: "auto", objectFit: "contain"}}/>
            </div>
            <div>
              <Image src="/images/robotics.jpg" style={{ width: "100%", height: "auto", objectFit: "contain"}}/>
            </div>
          </Slider>
          <style>{`
            .slick-dots {
              position: absolute !important;
              bottom: 20px;
              left: 50%;
              transform: translateX(-50%);
              z-index: 10;
              margin: 0;
              padding: 0;
              width: auto;
            }
          `}</style>
        <div style={{ paddingTop: "100px" }}>
          <Grid stackable>
            <Grid.Column width={16}>
              <Header as='h1'>MARUF OTOMASYON</Header>
              <p>
              Biz Kimiz;
              </p>
              <p>
              Biz Endüstriyel Isıtma ve Endüstriyel Otomasyon sistemleri sektöründe anahtar teslim projeler ve  sisteminize A dan Z ye servis-bakım hizmetleri sunarak işletmenizin en verimli şekilde çalışmaya devam edebilmesi için Varız.
              Bilgi, tecrübe ve deneyimlerimizi siz müşterilerimizle paylaşarak Endüstriyel ısıtma ve ısı kontrolü sağlamada her türlü rezistans ihtiyaçlarınızı karşılamak, Endüstriyel Otomasyon konusunda sorunlarınızı ve ihtiyaçlarınızı iyi analiz ederek hızlı ve işletmenize uygun olan en iyi çözümler sunarak müşterilerimizin bizden memnun kalmalarını sağlamak öncelikli amacımızdır.
              Kaliteli teknolojiyi uygun şartlarda sunarak, her türlü bilgi ve teknik desteği vererek karşılıklı güven çerçevesinde siz müşterilerimize bizimle çalışmamın farklılığını yaşatmak istiyoruz.
              Bizi seçmeniz için geçerli nedenlerimizin bir kaçını şöyle sıralayabiliriz;
              </p>
              <p>
              •	Biz ticareti tek gaye olarak görmüyoruz, müşterilerimize faydalı olmak ve alternatif çözümler sunarak yardımcı olmayı istiyoruz.
              </p>
              <p>
              •	Biz; müşterilerimize verdiğimiz her hizmetin ve müşterilerimizden aldığımız her karşılığın bizlere ağır sorumluluklar yüklediğini ve karşılıklı kazanımların aynı zamanda bir kul hakkı doğurabileceği bilinciyle çalışmaktayız.
              </p>
              <p>
              •	Biz çalışmalarımızda istişarenin önemini bilmekte ve sektörde öncü firmaların desteğini alarak ve işletmeniz için en ideal çözümü üretmek, maliyet açısından en karlı olanı sunmak ve olabilecek en kaliteli teknolojiyi sunmak için çaba sarfetmekteyiz.
              </p>
              <p>
              Karar sizin…
              </p>
            </Grid.Column>
          </Grid>
        </div>
        <div style={{ paddingTop: "100px" }}>
          <Grid stackable>
            <Grid.Column width={16}>
              <Header as='h1'>Hizmetlerimiz</Header>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Card centered>
                <Image src='/images/plc.jpg' wrapped ui={false} />
                <CardContent>
                  <CardHeader>Makina Porgramlama</CardHeader>
                  <CardDescription>
                    En verimli ve uygun programlar
                  </CardDescription>
                </CardContent>
                <CardContent extra>
                  <Button as={NavLink} to="/programming" >Devamını Oku</Button>
                </CardContent>
              </Card>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Card centered>
                <Image src='/images/yenilikçi4.jpg' wrapped ui={false} />
                <CardContent>
                  <CardHeader>Anahtar Teslim Projeler</CardHeader>
                  <CardDescription>
                    Anahtar teslim pano montajı 
                  </CardDescription>
                </CardContent>
                <CardContent extra>
                  <Button as={NavLink} to="/projects" >Devamını Oku</Button>
                </CardContent>
              </Card>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Card centered>
                <Image src='/images/yenilikçi1.jpg' wrapped ui={false} />
                <CardContent>
                  <CardHeader>Sisteminize Servis ve Bakım</CardHeader>
                  <CardDescription>
                    Tecrübeli kadro ile servis hizmeti
                  </CardDescription>
                </CardContent>
                <CardContent extra>
                  <Button as={NavLink} to="/maintenance" >Devamını Oku</Button>
                </CardContent>
              </Card>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Card centered>
                <Image src='/images/rezistanslar.png' wrapped ui={false} />
                <CardContent>
                  <CardHeader>Isıtma ve Isı Kontrolü</CardHeader>
                  <CardDescription>
                    Özel tasarım makina rezistansları
                  </CardDescription>
                </CardContent>
                <CardContent extra>
                  <Button as={NavLink} to="/heat" >Devamını Oku</Button>
                </CardContent>
              </Card>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Card centered>
                <Image src='/images/malzeme-temini.jpg' wrapped ui={false} />
                <CardContent>
                  <CardHeader>Malzeme Temini</CardHeader>
                  <CardDescription>
                    Her türlü ve kaliteli malzemeler
                  </CardDescription>
                </CardContent>
                <CardContent extra>
                  <Button as={NavLink} to="/productsupplies">Devamını Oku</Button>
                </CardContent>
              </Card>
            </Grid.Column>
          </Grid>
        </div> 
        <div style={{ paddingTop: "100px" }}>
          <SidebarPushable as={Segment} >
            <Segment basic>
              <Header as='h1'>Projelerimiz</Header>
              <Segment basic>
                <Grid stackable centered>
                  <Grid.Column mobile={12} tablet={8} computer={4} as={NavLink} to="/video">
                    <Card>
                      <Image src='/images/video.jpg' wrapped ui={false} />
                      <CardContent>
                        <CardHeader>Video Galeri</CardHeader>
                      </CardContent>
                    </Card>
                  </Grid.Column>
                  <Grid.Column mobile={12} tablet={8} computer={4} as={NavLink} to="/photo" >
                    <Card>
                      <Image src='/images/fotoğraf.jpg' wrapped ui={false} />
                      <CardContent>
                        <CardHeader>Fotoğraf Galeri</CardHeader>
                      </CardContent>
                    </Card>
                  </Grid.Column>
                </Grid>  
              </Segment>
            </Segment>
          </SidebarPushable>   
        </div>
    </Container>

  );
}