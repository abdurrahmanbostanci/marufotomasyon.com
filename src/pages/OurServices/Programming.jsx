import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { Button, Grid, Header, Icon, Image, Segment, SidebarPushable } from 'semantic-ui-react'

export default function Programming() {
  return (
    <div>
        <div style={{ width: "auto", margin: "0 auto", position: "relative", paddingBottom: "100px"}}>
        <SidebarPushable as={Segment} >
            <Segment basic>    
            <Grid stackable>
                <Grid.Column width={10}>
                <Header as='h1'>Makina Programlama</Header>
                <p>
                Deneyimli ve uzman kadromuzla, ihtiyacınıza en uygun çözümleri sunarak makinanıza özel programlar geliştiriyoruz. Verimlilik, kalite ve fiyat/performans dengesini ön planda tutarak üretim süreçlerinizi daha hızlı ve daha güvenilir hâle getiriyoruz.
                </p>
                <p>            
                Sektörün önde gelen firmalarıyla edindiğimiz tecrübe sayesinde, farklı makine tipleri ve üretim ihtiyaçları için esnek ve etkili programlama çözümleri sunabiliyoruz. Her türlü talep ve ihtiyaca profesyonel yaklaşımımızla karşılık veriyoruz.
                </p>
                <p>
                Kendini sürekli yenileyen ve geliştiren bir firma olarak, güncel teknolojileri yakından takip ediyor; en yenilikçi ve en gelişmiş makina programlarını sizlere sunmak için titizlikle çalışıyoruz.
                </p>
                <p>
                Geliştirdiğimiz programlar sayesinde üretim sürelerini kısaltıyor, hata oranlarını minimize ediyor ve işletme maliyetlerinizi düşürmenize yardımcı oluyoruz.
                </p>
                <p>
                PLC ile özel amaçlı üretim makineleri için profesyonel programlama hizmetleri sunuyoruz.
                </p>
                <p>
                Makina programlama ihtiyaçlarınız için bizimle iletişime geçebilir, size özel çözümlerimiz hakkında detaylı bilgi alabilirsiniz.
                </p>
                <Button primary as={NavLink} to="/contact">
                Bize Ulaşın
                <Icon name='right chevron' />
                </Button>
                </Grid.Column>
                <Grid.Column width={6} >
                    <Image src="/images/codesys.png" style={{ width: "100%", height: "auto", objectFit: "contain", paddingBottom: "10px"}}/>
                    <Image src="/images/tiaportal.png" style={{ width: "100%", height: "auto", objectFit: "contain", paddingBottom: "10px"}}/>
                    <Image src="/images/omron.png" style={{ width: "100%", height: "auto", objectFit: "contain"}}/>
                </Grid.Column>
            </Grid>
            </Segment>
        </SidebarPushable>  
        </div>
    </div>
  )
}
