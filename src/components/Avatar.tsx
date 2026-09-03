interface AvatarProps {
    firstName: string,
    lastName: string,
    imgSrc: string
}

function Avatar({firstName, lastName, imgSrc}: AvatarProps) {
    return (
        <>
            <img src={imgSrc} />
            <p>{firstName} {lastName}</p>
        </>
    )
}

export default Avatar