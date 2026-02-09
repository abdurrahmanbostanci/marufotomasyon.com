import React from 'react'
import { Grid, Header, Image, Segment, SidebarPushable } from 'semantic-ui-react'

export default function PLCNedir() {
  return (
    <div>
        <div style={{ width: "auto", margin: "0 auto", position: "relative", paddingBottom: "100px"}}>
        <SidebarPushable as={Segment} >
            <Segment basic>
            <Grid stackable>
                <Grid.Row>
                <Grid.Column mobile={16} tablet={16} computer={10}>
                <Header as='h1'>PLC</Header>
                <p>
                PLC (Programlanabilir Mantıksal Denetleyici, İngilizce: programmable logic controller) fabrikalardaki imalat hatları veya makinelerin kontrolü gibi işleçlerin denetiminde kullanılan özel bilgisayar. İlk PLC 1968 yılında şimdiki adı Modicon olan Associates firması tarafından üretilmiştir.
                </p>
                <p>
                Genel kullanımlı bilgisayarların aksine PLC birçok girişi ve çıkışı olacak şekilde düzenlenir ve elektriksel gürültülere, sıcaklık farklarına, mekanik darbe ve titreşimlere karşı daha dayanıklı tasarlanırlar. PLC'lere denetleyeceği sistemin işleyişine uygun programlar yüklenir. PLC programları, giriş bilgilerini milisaniyeler mertebesinde hızla tarayarak buna uygun çıkış bilgilerini gerçek zamanlıya yakın, cevap verecek şekilde çalışırlar. 
                </p>
                <p>
                <Header as='h4'>
                    Giriş
                </Header>
                </p>
                <p>
                İçinde bir mikroişlemcisi olup karmaşık sistemlerin programlanmasında kullanılabilir. PC'lerden en temel farkı sinyal girişlerinin ve çıkışlarının (İng: Input/Output) çalışma ve işlenme şeklinde ortaya çıkmaktadır. PLC'ler ilk olarak karmaşık röle sistemlerinin yükünü hafifletmek için çıkarılmış basit mantıksal (lojik) işlemleri yapan cihazlardı. Daha az yer kaplar ve ekonomiktir 
                </p>
                <p>
                <Header as='h4'>
                    Özellikleri
                </Header>
                </p>
                <p>
                Günümüzde diğer programlanabilir bilgisayarlarla arasındaki farklılıklar giderek azalmaktadır. PLC bir bakıma monitörü ve klavyesi bulunmayan bir bilgisayar gibidir. Bir diğer fark ise işletilecek verilerin gerçek ortamdan gelmesi ve sonuçların yine gerçek ortama analog veya sayısal (dijital) olarak gönderilmesidir. 
                </p>
                <p>
                Mikroişlemcilerin maliyeti daha düşük olmasına rağmen, PLC'lerin tercih edilmelerinin sebebi; elektronik tasarım için harcanacak zamanı en aza indirmesidir. Aynı zamanda endüstriyel ortamların sahip olduğu zor koşullardan (manyetik alan, büyük sıcaklık farkları, toz vb.) etkilenmeden çalışabilen hazır çözümler olmalarıdır. 
                </p>
                <p>
                Bir fabrikanın tüm otomasyon işlerini yüklenebilecek kadar Giriş/Çıkış sayısına sahip PLC'ler bulunmaktadır. Günümüzde geliştirilen modüler yapıdaki PLC'lere gerektiğinde ek giriş-çıkış modülleri, RS232, RS485, modem, ethernet gibi haberleşme modülleri eklenebilmektedir. Bu gibi özelliklerle mevcut yapı geliştirilebilmektedir. Ayrıca birçok modelde proses kontrolüne yönelik hazır ON-OFF (AÇ-KAPA), PID, Fuzzy (Bulanık) vb. tiplerdeki kontrolörler standart olarak bulunmaktadır. 
                </p>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={6}>
                    <Image src="/images/plc1.jpg" style={{ width: "100%", height: "auto", objectFit: "contain"}}/>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={16} computer={10}>
                <p>
                <Header as='h4'>
                    Programlama Yazılımı
                </Header>
                </p>
                <p>
                Programlanabilir mantık denetleyicileri, programlama geçmişi olmayan mühendisler tarafından kullanılmak üzere tasarlanmıştır. Bu nedenle ilk olarak Merdiven Diagramı (İngilizce: Ladder) (LD, LAD) adlı bir grafik programlama dili geliştirildi. Elektromekanik rölelerle oluşturulmuş bir sistemin şematik diyagramına benzer ve birçok üretici tarafından benimsenmiş ve daha sonra IEC 61131-3 kontrol sistemleri programlama standardında standartlaştırılmıştır. 
                </p>
                <p>
                Piyasada bulunan farklı marka PLC'lerin Ladder yazılımları kendilerine özgü olmakla birlikte genel işleyiş mantıkları benzerdir. Ladder dışında kullanılan PLC yazılımlarını da ST(Structured text), FBD(Function block diagram), SFC (Sequential function), IL (Instruction list) olarak sıralayabiliriz. Günümüzde ise 5 farklı yazılımı da içeren IEC61131-3 standartlarına uygun yazılım paketi kullanıcılara kolaylık sağlamaktadır. 
                </p>
                <p>
                <Header as='h4'>
                    Gelecek
                </Header>
                </p>
                <p>
                Endüstride oldukça fazla kullanım alanı olan PLC'lerin hafızaları ve işlem kapasiteleri karmaşık prosesler karşısında yetersiz kalabilmekte, bu yüzden de gelişen teknoloji ile birlikte daha güçlü yapıya sahip endüstriyel PC'lere geçiş söz konusu olmaktadır. Günümüzde artık Endüstriyel PC olarak imal edilen PLC ler mevcuttur. Bunlar hem dokunmatik paneli üzerinde montajlı olan aynı zamanda bilgisayar aracılığı ile veya kendi üzerindeki kontrol üniteleriyle programlanabilmektedir. 
                </p>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={6}>
                    <Image src="/images/plc2.png" style={{ width: "200px", height: "auto", objectFit: "contain"}}/>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </Segment>
        </SidebarPushable>   
        </div>
    </div>
  )
}
