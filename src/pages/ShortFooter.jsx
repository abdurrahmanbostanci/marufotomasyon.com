import React from 'react'
import {
    Segment,
    Grid,
} from 'semantic-ui-react'

export default function ShortFooter() {

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
            <Grid textAlign='center'>
                <Grid.Row>
                    <p>
                        © 2026 Maruf Otomasyon Tüm hakları saklıdır. Bu site herhangi bir şekilde ticari amaç gütmemektedir.
                    </p>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}