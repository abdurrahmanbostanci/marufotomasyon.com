import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { Item, Button, Icon, SidebarPushable, Segment } from 'semantic-ui-react'

export default function Hizmetler() {
  return (
    <div style={{ width: "auto", margin: "0 auto",position: "relative", paddingTop: "0px",  paddingBottom: "0px"}}>
      <SidebarPushable as={Segment} >
          <Segment basic>
            <Item.Group divided style={{ width: "auto", maxWidth: "800px", margin: "0 auto", paddingTop: "15px",  paddingBottom: "15px"}}>
              <Item>
                <Item.Image as={NavLink} to="/programming" src='/images/plc.jpg' />
                <Item.Content verticalAlign="middle">
                  <Item.Header as={NavLink} to="/programming">Makina Programlama</Item.Header>
                  <Item.Description>
                    En verimli ve uygun programlar
                  </Item.Description>
                  <Item.Extra>
                    <Button primary floated='right' as={NavLink} to="/programming">
                      Devamını Oku
                      <Icon name='right chevron' />
                    </Button>
                  </Item.Extra>
                </Item.Content>
              </Item>
              <Item>
                <Item.Image as={NavLink} to="/projects" src='/images/yenilikçi4.jpg' />
                <Item.Content verticalAlign="middle">
                  <Item.Header as={NavLink} to="/projects">Anahtar Teslim Projeler</Item.Header>
                  <Item.Description>
                    Anahtar teslim pano montajı
                  </Item.Description>
                  <Item.Extra>
                    <Button primary floated='right' as={NavLink} to="/projects">
                      Devamını Oku
                      <Icon name='right chevron' />
                    </Button>
                  </Item.Extra>
                </Item.Content>
              </Item>
              <Item>
                <Item.Image as={NavLink} to="/maintenance" src='/images/yenilikçi1.jpg' />
                <Item.Content verticalAlign="middle">
                  <Item.Header as={NavLink} to="/maintenance">Sisteminize Servis ve Bakım</Item.Header>
                  <Item.Description>
                    Tecrübeli kadro ile servis hizmetleri
                  </Item.Description>
                  <Item.Extra>
                    <Button primary floated='right' as={NavLink} to="/maintenance">
                      Devamını Oku
                      <Icon name='right chevron' />
                    </Button>
                  </Item.Extra>
                </Item.Content>
              </Item>
              <Item>
                <Item.Image as={NavLink} to="/heat" src='/images/rezistanslar.png' />
                <Item.Content verticalAlign="middle">
                  <Item.Header as={NavLink} to="/heat">Isıtma ve Isı Kontrolü</Item.Header>
                  <Item.Description>
                    Özel tasarım makina rezistansları
                  </Item.Description>
                  <Item.Extra>
                    <Button primary floated='right' as={NavLink} to="/heat">
                      Devamını Oku
                      <Icon name='right chevron' />
                    </Button>
                  </Item.Extra>
                </Item.Content>
              </Item>
              <Item>
                <Item.Image as={NavLink} to="/productsupplies" src='/images/malzeme-temini.jpg' />
                <Item.Content verticalAlign="middle">
                  <Item.Header as={NavLink} to="/productsupplies">Malzeme Temini</Item.Header>
                  <Item.Description>
                    Her türlü ve kaliteli malzemeler
                  </Item.Description>
                  <Item.Extra>
                    <Button primary floated='right' as={NavLink} to="/productsupplies">
                      Devamını Oku
                      <Icon name='right chevron' />
                    </Button>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
      </SidebarPushable> 
    </div>
  )
}