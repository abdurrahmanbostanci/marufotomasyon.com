import React from 'react'
import { Button, Grid, GridColumn, Header, Icon, List, ListItem, Segment, SidebarPushable } from 'semantic-ui-react'

export default function Contact() {
  return (
    <div>
        <Segment style={{ padding: 0 }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d751.9469861903691!2d28.889253728496975!3d41.07362769820137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab069ef5551d7%3A0x82cf77ddf198e16!2sBarbaros%20Hayrettinpa%C5%9Fa%2C%201023.%20Sk.%20No%3A26%2C%2034250%20Gaziosmanpa%C5%9Fa%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1766159970671!5m2!1str!2str" 
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Firma Konumu"
            />
        </Segment>
        <div style={{ paddingTop: "50px",  paddingBottom: "100px"}}>
        <SidebarPushable     as={Segment} >
            <Segment basic>
                <Header as='h3'>İletişim Bilgileri</Header>
                <Segment basic>
                    <Grid centered>
                        <GridColumn width={16}>
                            <List>
                                <Header as='h3'>Aşağıdaki bilgilerden bize ulaşabilirsiniz.</Header>  
                                <ListItem icon='marker' content=' Barbaros Hayrettin Paşa M. 1023 S. No:26 Gaziosmanpaşa/500 Evler, İstanbul' /> 
                                <ListItem icon='mail'content="marufautomation.gmail.com"/>
                                <ListItem icon='phone' content='0539 886 8123' />
                                <Header as='h3'>Sosyal medya hesaplarımız:</Header>
                                <Button icon='linkedin' color='linkedin' href="https://www.linkedin.com/in/maruf-otomasyon-b41602398/" target="_blank">
                                    <Icon name='linkedin' /> Linkedin
                                </Button>
                                <Button icon='instagram' color='instagram' href="https://www.instagram.com/marufotomasyon/" target="_blank">
                                    <Icon name='instagram' /> Instagram
                                </Button>
                                <Button icon='facebook' color='facebook' href="https://www.facebook.com/people/Maruf-Otomasyon/pfbid02BPRqDBQ8tkgFjSFMjTLhvedWY6a4NVkvspLRZbWZNkegGXfW3cxiGmCAyycr5yiMl/" target="_blank">
                                    <Icon name='facebook' /> Facebook
                                </Button>
                                <Button icon='youtube' color='youtube' href="https://www.youtube.com/@marufotomasyon" target="_blank">
                                    <Icon name='youtube' /> Youtube
                                </Button>
                            </List>
                        </GridColumn>
                    </Grid>
                </Segment>
            </Segment>
        </SidebarPushable>    
    </div>
    </div>
  )
}
