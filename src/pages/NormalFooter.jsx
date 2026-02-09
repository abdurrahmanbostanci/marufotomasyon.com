import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import {
    Segment,
    Grid,
    Button,
    Image,
    List,
    Header,
    Icon,
    Container,
} from 'semantic-ui-react'

export default function NormalFooter() {

    return (
        <Segment inverted
                color='black'
                style={{
                position: 'relative',
                bottom: 0,
                width: '100%',
                padding: '2em 0',
                textAlign: 'center',
        }}>
            <Container>
                <Grid stackable>
                <Grid.Column mobile={16} tablet={8} computer={4}>
                    <Grid.Row>
                        <Image src='/images/logo2.png' size='small' as={NavLink} to="/" />
                    </Grid.Row>
                    <Grid.Row>
                        Otomasyon Makinaları İmalatı
                    </Grid.Row>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={4}>
                    <Grid.Row>
                       <Header as='h5' className="section-title">Adres Bilgileri</Header>
                    </Grid.Row>
                    <List inverted>
                        <List.Item>
                            <Icon name='marker' /> Gaziosmanpaşa/500 Evler, İstanbul
                        </List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={4}>
                    <Grid.Row>
                        <Header as='h5' className="section-title">İletişim Bilgileri</Header>
                    </Grid.Row>
                    <List inverted>
                        <List.Item>
                            <Icon name='mail' /> marufautomation.gmail.com
                        </List.Item>
                        <List.Item>
                            <Icon name='phone' /> +90 539 886 81 23
                        </List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={4}>
                    <Grid.Row>
                        <Header as='h5' className="section-title" style={{ paddingBottom: "12px"}}>Sosyal Medya Hesaplarımız</Header>
                    </Grid.Row>
                    <Grid.Row>
                        <Button circular icon='linkedin' color='linkedin' href="https://www.linkedin.com/in/maruf-otomasyon-b41602398/" target="_blank"/>
                        <Button circular icon='instagram' color='instagram' href="https://www.instagram.com/marufotomasyon/" target="_blank"/>
                        <Button circular icon='facebook' color='facebook' href="https://www.facebook.com/people/Maruf-Otomasyon/pfbid02BPRqDBQ8tkgFjSFMjTLhvedWY6a4NVkvspLRZbWZNkegGXfW3cxiGmCAyycr5yiMl/" target="_blank"/>
                        <Button circular icon='youtube' color='youtube' href="https://www.youtube.com/@marufotomasyon" target="_blank"/>
                    </Grid.Row>
                </Grid.Column>
            </Grid>
            <Grid textAlign='center'>
                <Grid.Row>
                    <p>
                        © 2026 Maruf Otomasyon Tüm hakları saklıdır. Bu site herhangi bir şekilde ticari amaç gütmemektedir.
                    </p>
                </Grid.Row>
            </Grid>
            </Container>
        </Segment>
    )
}