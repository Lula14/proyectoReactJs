const AvatarJsx = () => { 
    const src = `https://randomuser.me/api/portartits/lego/2.jpg`
    return (
        <picture>
        <img src={src} alt= 'avatar'/>
        </picture>
    )

}

export default AvatarJsx