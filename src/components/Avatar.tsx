import { useState } from "react"
import '../Avatar.css'

interface AvatarProps {
    firstName: string,
    lastName: string,
    imgSrc: string
}

function Avatar({firstName, lastName, imgSrc}: AvatarProps) {
    const [donuts, setDonuts] = useState(0)

    return (
        <div className="avatar">
            <img src={imgSrc} />
            <div className="lower-avatar">
                <p>{firstName} {lastName}</p>
                <button className="donuts-btn" onClick={() => setDonuts(donuts +1)}>🍩{donuts}</button>
            </div>
        </div>
    )
}

export default Avatar