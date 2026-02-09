import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Image avatar spaced="right" src="https://resmim.net/cdn/2024/02/08/ZJEfyC.jpg" />
            <Dropdown pointing="top right" text="Vtorn1k">
                <Dropdown.Menu>
                    <Dropdown.Item text="Hesap Bilgileri" icon="info" />
                    <Dropdown.Item text="Ürün Ekle" icon="plus" as={NavLink} to="/product/add" />
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
