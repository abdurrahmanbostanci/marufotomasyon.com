import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { Card, CardContent, CardHeader, Grid, Header, Image, Segment, SidebarPushable } from 'semantic-ui-react'

export default function OurProjects() {
  return (
    <div>
        <div style={{ width: "auto", margin: "0 auto", position: "relative", paddingBottom: "100px"}}>
        <SidebarPushable as={Segment} >
            <Segment basic>
              <Header as='h1'>Projelerimiz</Header>
              <Segment basic>
                <Grid stackable centered>
                  <Grid.Column mobile={16} tablet={8} computer={4} as={NavLink} to="/video">
                    <Card>
                      <Image src='/images/video.jpg' wrapped ui={false} />
                      <CardContent>
                        <CardHeader>Video Galeri</CardHeader>
                      </CardContent>
                    </Card>
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={8} computer={4} as={NavLink} to="/photo" >
                    <Card>
                      <Image src='/images/fotoğraf.jpg' wrapped ui={false} />
                      <CardContent>
                        <CardHeader>Fotoğraf Galeri</CardHeader>
                      </CardContent>
                    </Card>
                  </Grid.Column>
                </Grid>  
              </Segment>
            </Segment>
          </SidebarPushable>   
        </div>
    </div>
  )
}
