import React from 'react'
import { Grid, Header, Segment, SidebarPushable } from 'semantic-ui-react'

export default function VideoGallery() {
  return (
    <div>
        <div style={{ width: "auto", maxWidth: "800px", margin: "0 auto", position: "relative", paddingBottom: "100px"}}>
        <SidebarPushable as={Segment} >
            <Segment basic>
                <Header as='h1'>Videolar</Header>
            <Segment basic>    
            <Grid >
                <Grid.Column mobile={16} computer={8}>
                    <iframe 
                    style={{ width: '100%', aspectRatio: '9/16', height: 'auto' }} 
                    src="https://www.youtube.com/embed/oLQsbozOQIA" 
                    title="Bruckner Ram Fırça Makinası" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                    </iframe>
                </Grid.Column>
                <Grid.Column mobile={16} computer={8}>
                    <iframe 
                    style={{ width: '100%', aspectRatio: '9/16', height: 'auto' }} 
                    src="https://www.youtube.com/embed/fBgPOtdFiMA" 
                    title="Bruckner Ram Fırça Makinası" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                    </iframe>
                </Grid.Column>
                <Grid.Column mobile={16} computer={8}>
                    <iframe 
                    style={{ width: '100%', aspectRatio: '9/16', height: 'auto' }}
                    src="https://www.youtube.com/embed/DVm2xMGKwXw" 
                    title="Bruckner Ram Fırça Makinası" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                    </iframe>
                </Grid.Column>
            </Grid>
            </Segment>
            </Segment>
        </SidebarPushable>  
        </div>
    </div>
  )
}