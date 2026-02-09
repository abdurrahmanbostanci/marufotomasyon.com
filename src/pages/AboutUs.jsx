import React from 'react'
import { Button, Card, CardContent, CardDescription, CardHeader, CardMeta, Grid, GridColumn, Header, Icon, Image, Segment, SidebarPushable } from 'semantic-ui-react'

export default function AboutUs() {
  return (
    <div style={{ width: "auto", margin: "0 auto",position: "relative", paddingTop: "0px",  paddingBottom: "0px"}}>
        <div>
            <Grid>
                <Grid.Column width={16}>
                <Header as='h1'>MARUF OTOMASYON</Header>
                <p>
                Biz Kimiz;
                </p>
                <p>
                Biz Endüstriyel Isıtma ve Endüstriyel Otomasyon sistemleri sektöründe anahtar teslim projeler ve  sisteminize A dan Z ye servis-bakım hizmetleri sunarak işletmenizin en verimli şekilde çalışmaya devam edebilmesi için Varız.
                </p>
                <p>
                Bilgi, tecrübe ve deneyimlerimizi siz müşterilerimizle paylaşarak Endüstriyel ısıtma ve ısı kontrolü sağlamada her türlü rezistans ihtiyaçlarınızı karşılamak, Endüstriyel Otomasyon konusunda sorunlarınızı ve ihtiyaçlarınızı iyi analiz ederek hızlı ve işletmenize uygun olan en iyi çözümler sunarak müşterilerimizin bizden memnun kalmalarını sağlamak öncelikli amacımızdır.
                </p>
                <p>
                Kaliteli teknolojiyi uygun şartlarda sunarak, her türlü bilgi ve teknik desteği vererek karşılıklı güven çerçevesinde siz müşterilerimize bizimle çalışmamın farklılığını yaşatmak istiyoruz.
                </p>
                <p>
                <Header as='h4'>
                    Bizi seçmeniz için geçerli nedenlerimizin bir kaçını şöyle sıralayabiliriz;
                </Header>
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
                <p>
                İletişim:
                </p>
                <p>
                Gsm: 0 539 886 81 23
                </p>
                <p>
                E-mail: marufautomation@gmail.com
                </p>
            </Grid.Column>
        </Grid>
    </div>
    <div style={{ paddingTop: "50px",  paddingBottom: "100px"}}>
        <SidebarPushable as={Segment}>
            <Segment basic>
                <Header as='h3'>Ekibimiz</Header>
                <Segment basic>
                    <Grid centered>
                    <GridColumn mobile={12} tablet={8} computer={6}>
                    <Card centered>
                        <Image src='/images/hasan.jpg' wrapped ui={false} />
                        <CardContent>
                        <CardHeader>Hasan Bostancı</CardHeader>
                        <CardMeta>
                            <span className='date'>Kurucu</span>
                        </CardMeta>
                        <CardDescription>
                            Programcı, Elektrik Uzmanı, Servis ve Bakım Sorumlusu
                        </CardDescription>
                        </CardContent>
                        <CardContent extra>
                        
                        </CardContent>
                    </Card>
                    </GridColumn>
                    <GridColumn mobile={12} tablet={8} computer={6}>
                    <Card centered>
                        <Image src='/images/abdurrahman.jpg' wrapped ui={false} />
                        <CardContent>
                        <CardHeader>Abdurrahman Bostancı</CardHeader>
                        <CardDescription>
                            Kullanıcı Arayüzü Tasarım Müdürü
                        </CardDescription>
                        </CardContent>
                        <CardContent extra>
                            <Button icon='linkedin' color='linkedin' href="https://www.linkedin.com/in/abdubstnci/" target="_blank">
                                <Icon name='linkedin' /> Linkedin
                            </Button>
                        </CardContent>
                    </Card>
                    </GridColumn>
                    </Grid>
                </Segment>
            </Segment>
        </SidebarPushable>    
    </div>
    </div>
  )
}
