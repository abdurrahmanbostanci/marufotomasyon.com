import React from 'react'
import { Grid, Header, Image, Segment, SidebarPushable } from 'semantic-ui-react'

export default function Maintenance() {
  return (
    <div>
        <div style={{ width: "auto", margin: "0 auto", position: "relative", paddingBottom: "100px"}}>
        <SidebarPushable as={Segment} >
            <Segment basic>    
            <Grid stackable>
                <Grid.Column width={10}>
                <Header as='h1'>Servis & Bakım</Header>
                <p>
                <Header as='h4'>Endüstriyel Otomasyon ve Isı Kontrol Sistemleri</Header>
                </p>
                <p>
                Bizim öncelikli amacımız; Endüstriyel Isıtma ve Endüstriyel Otomasyon sistemleri sektöründe sisteminize servis-bakım hizmetleri sunarak işletmenizin en verimli şekilde çalışmaya devam edebilmesi için bilgi, tecrübe ve deneyimlerimizi siz müşterilerimizle paylaşarak Endüstriyel ısıtma ve ısı kontrolü sağlamada her türlü rezistans ihtiyaçlarınızı karşılamak, Endüstriyel Otomasyon konusunda makinalarınızın sorunlarını ve ihtiyaçlarını iyi analiz ederek hızlı ve işletmenize uygun olan en iyi çözümler sunarak müşterilerimizin bizden memnun kalmalarını sağlamaktır.
                </p>
                <p>
                <Header as='h4'>
                    Endüstriyel Isıtma ve Isı kontrol Servis ve Bakımı
                </Header>
                </p>
                <p>
                •	Extruder makinalarının kovan rezistansları;
                </p>
                <p>
                •	Her türlü plastik Kalıp üzerinde bulunan manifold, sıcak yolluk ve meme rezistansları;
                </p>
                <p>
                •	Enjeksiyon makina kovan rezistansları;
                </p>
                <p>
                •	Granül makinalarının kovan rezistansları;
                </p>
                <p>
                •	Ambalaj makina rezistansları;
                </p>
                <p>
                •	Özel tasarım makina rezistansları Temini, bakım, onarımı ve sıcaklık kontrollerinin sağlanması seklinde ısı ile ilgili geniş servis hizmetini sizlere sunmaktayız.
                </p>
                <p>
                <Header as='h4'>
                    Endüstriyel Otomasyon Servis ve Bakımı
                </Header>
                </p>
                <p>
                •	AC Motor sürücülerinin parametre ayarlarının düzenlenmesi, revizyonu, arıza tespiti, onarımı ve ürün temini yapmaktayız.
                </p>
                <p>
                •	Endüstriyel makinalarınızın elektrik arızalarının tespitinde ve otomasyonu konusunda servis-bakım hizmeti vermekteyiz.
                </p>
                <p>
                •	Her türlü kumanda, plc pano yapımı,plc programlama ve panolarınızın arıza-bakım hizmetini vermekteyiz.
                </p>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Image src="/images/yenilikçi1.jpg" style={{ width: "100%", height: "auto", objectFit: "contain"}}/>
                    <Image src="/images/servis-ustasi_1.jpg" style={{ width: "100%", height: "auto", objectFit: "contain"}}/>
                </Grid.Column>
            </Grid>
            </Segment>
        </SidebarPushable>     
        </div>
    </div>
  )
}
