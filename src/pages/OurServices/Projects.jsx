import React from 'react'
import { Grid, Header, Image, Segment, SidebarPushable } from 'semantic-ui-react'

export default function Projects() {
  return (
    <div>
        <div style={{ width: "auto", margin: "0 auto", position: "relative", paddingBottom: "100px"}}>
        <SidebarPushable as={Segment} >
            <Segment basic> 
            <Grid stackable>
                <Grid.Column width={10}>
                <Header as='h1'>Anahtar Teslim Projeler</Header>
                <p>
                Otomasyon makinaları imalatı alanında sunduğumuz Anahtar Teslim Projeler hizmeti ile, projelerinizi tek bir noktadan, eksiksiz ve sorunsuz şekilde hayata geçiriyoruz. Tasarımdan devreye almaya kadar tüm süreci planlıyor, uyguluyor ve teslim ediyoruz.
                </p>
                <p>
                Anahtar teslim yaklaşımımız; elektrik panolarının projelendirilmesi ve imalatı, saha montajları, kablolama, otomasyon altyapısının kurulumu ve devreye alma çalışmalarını kapsamaktadır. Projenin her aşaması, alanında uzman ekibimiz tarafından titizlikle yürütülür.
                </p>
                <p>
                İhtiyaca özel olarak tasarlanan elektrik panoları; güvenlik, verimlilik ve uzun ömür kriterleri gözetilerek üretilir. Sahada gerçekleştirilen işçiliklerde ise ulusal ve uluslararası standartlara uygunluk esas alınır. Böylece sistemleriniz, ilk çalıştırmadan itibaren stabil ve güvenilir bir şekilde çalışır.
                </p>
                <p>
                <Header as='h4'>
                    Anahtar teslim projelerimiz sayesinde;
                </Header>
                </p>
                <p>
                •	Farklı tedarikçilerle uğraşmak zorunda kalmazsınız
                </p>
                <p>
                •	Zaman ve maliyet avantajı sağlarsınız
                </p>
                <p>
                •	Tek muhatap ile daha hızlı ve kontrollü bir proje süreci yaşarsınız
                </p>
                <p>
                Projenizin ölçeği ne olursa olsun, otomasyon ihtiyaçlarınıza özel çözümler sunarak üretim süreçlerinizi daha verimli, güvenli ve sürdürülebilir hale getiriyoruz.
                </p>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Image src="/images/yenilikçi4.jpg" style={{ width: "100%", height: "auto", objectFit: "contain"}}/>
                    <Image src="/images/anahtarTeslim.png" style={{ width: "100%", height: "auto", objectFit: "contain"}}/>
                </Grid.Column>
            </Grid>
            </Segment>
        </SidebarPushable>  
        </div>
    </div>
  )
}
