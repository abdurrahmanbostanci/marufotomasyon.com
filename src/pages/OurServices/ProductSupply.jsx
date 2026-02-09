import React from 'react'
import { Grid, Header, Image, Segment, SidebarPushable } from 'semantic-ui-react'

export default function ProductSupply() {
  return (
    <div>
        <div style={{ width: "auto", margin: "0 auto", position: "relative", paddingBottom: "100px"}}>
        <SidebarPushable as={Segment} >
            <Segment basic>      
            <Grid stackable>
                <Grid.Column width={10}>
                <Header as='h1'>Malzeme Temini</Header>
                <p>
                <Header as='h4'>
                    Endüstriyel Isıtma ve Isı kontrol
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
                •	Özel tasarım makina rezistansları Temini hizmetini sizlere sunmaktayız.
                </p>
                <Header as='h4'>
                    Endüstriyel Otomasyon Ürün Temini
                </Header>
                <p>
                •	AC Motor Sürücüleri; ABB, Fuji, Emotron, İnvt,
                </p>
                <p>
                •	PLC; Ls, ABB, Siemens, GMT, Delta, Leadshine
                </p>
                <p>
                •	Her çeşit Rezistans Ürünleri ve Ekipmanları    
                </p>
                <p>
                •	Termostatlar; Enda, Fotek, Autonics
                </p>
                <p>
                •	SSR; Enda, Fotek, Gefran, Celtuc
                </p>
                <p>
                •	Weidmüller,Phoenix,Mean Well güç kaynakları
                </p>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Image src="/images/malzeme-temini.jpg" style={{ width: "100%", height: "auto", objectFit: "contain", paddingBottom: "30px"}}/>
                    <Image src="/images/satınAlım.png" style={{ width: "100%", height: "auto", objectFit: "contain"}}/>
                </Grid.Column>
            </Grid>
            </Segment>
        </SidebarPushable>  
        </div>
    </div>
  )
}
