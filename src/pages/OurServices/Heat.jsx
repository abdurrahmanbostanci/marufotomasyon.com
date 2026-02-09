import React from 'react'
import { Grid, Header, Image, Segment, SidebarPushable } from 'semantic-ui-react'

export default function Heat() {
  return (
    <div>
        <div style={{ width: "auto", margin: "0 auto", position: "relative", paddingBottom: "100px"}}>
        <SidebarPushable as={Segment} >
            <Segment basic>
            <Grid stackable>
                <Grid.Column mobile={16} tablet={16} computer={10}>
                <Header as='h1'>Isıtma ve Isı Kontrolü</Header>
                <p>
                Endüstriyel üretim süreçlerinde sıcaklığın doğru ve kararlı şekilde kontrol edilmesi, hem ürün kalitesi hem de proses güvenliği açısından büyük önem taşır. Firmamız, endüstriyel ısıtma çözümleri ve ısı kontrol sistemleri alanında, uygulamaya özel ve güvenilir hizmetler sunmaktadır.
                </p>
                <p>
                Hizmet kapsamımız; farklı sektör ve proses ihtiyaçlarına uygun rezistanslı ısıtma sistemlerinin seçimi, uygulanması ve kontrol altına alınmasını içermektedir. Bu kapsamda fişek (kartuş) rezistanslar, bant rezistanslar, flanşlı rezistanslar, plaka rezistanslar ve özel imalat rezistanslar ile çözümler sunmaktayız.
                </p>
                <p>
                Isıtma sistemleri; sıcaklık sensörleri (PT100, termokupl vb.), PID kontrolörler, SSR veya kontaktörlü güç kontrol yapıları ile hassas şekilde yönetilir. Kurulan sistemler, stabil sıcaklık kontrolü sağlayarak prosesin tekrarlanabilirliğini ve verimliliğini artırır.
                </p>
                <p>
                Ayrıca rezistans beslemeleri, pano içi güç dağıtımı, koruma ve güvenlik ekipmanları, kablolama ve saha bağlantıları mühendislik esaslarına uygun olarak gerçekleştirilmektedir. Mevcut otomasyon sistemleri ile uyumlu veya bağımsız çalışabilen çözümler geliştirilmektedir.
                </p>
                <p>
                <Header as='h4'>
                    Isıtma ve Isı Kontrolü hizmetimiz sayesinde:
                </Header>
                </p>
                <p>
                •	Proses sıcaklıkları hassas ve kararlı şekilde kontrol edilir
                </p>
                <p>
                •	Enerji tüketimi optimize edilir
                </p>
                <p>
                •	Rezistans ve ekipman ömrü uzatılır
                </p>
                <p>
                •	Üretim kalitesi ve sürekliliği sağlanır
                </p>
                <p>
                Plastik, ambalaj, gıda, kimya, metal ve makine imalatı gibi birçok sektörde, endüstriyel ısıtma ve ısı kontrolü uygulamalarında güvenilir çözümler sunmaktayız.
                </p>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={6}>
                    <Image src="/images/rezistanslar.png" style={{ width: "100%", height: "auto", objectFit: "contain"}}/>
                    <Image src="/images/1-gozlu.png" style={{ width: "100%", height: "auto", objectFit: "contain"}}/>
                </Grid.Column>
            </Grid>
            </Segment>
        </SidebarPushable>   
        </div>
    </div>
  )
}
