import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { Button, Grid, Header } from 'semantic-ui-react'

export default function ComingSoon() {
  return (
    <div>
        <Grid>
            <Grid.Column width={16}>
              <Header as='h1'>ÇOK YAKINDA ...</Header>
            </Grid.Column>
            <Grid.Column width={16}>
                <Button as={NavLink} to="/" end={true}>Ana Sayfaya Geri Dön</Button>
            </Grid.Column>
        </Grid>      
    </div>
  )
}
