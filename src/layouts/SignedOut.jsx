import React from 'react'
import { Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Button onClick={signIn} primary>Giriş Yap</Button>
            <Button as={NavLink} to="/register" primary style={{marginleft:"0.5em"}}>Kayıt Yap</Button>
        </div>
    )
}
