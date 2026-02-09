import React from 'react'
import { Grid, Header, Segment, SidebarPushable } from 'semantic-ui-react'

export default function PhotoGallery() {
  return (
    <div>
        <div style={{ width: "auto", maxWidth: "800px", margin: "0 auto", position: "relative", paddingBottom: "100px"}}>
        <SidebarPushable as={Segment} >
            <Segment basic>
                <Header as='h1'>Resimler</Header>
            <Segment basic>    
            <Grid stackable>
                <Grid.Column mobile={16} computer={4}>
                    
                </Grid.Column>
            </Grid>
            </Segment>
            </Segment>
        </SidebarPushable> 
        </div>
    </div>
  )
}
