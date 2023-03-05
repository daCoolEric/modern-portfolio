import React from 'react'
import { SocialIcon } from 'react-social-icons';
type Props = {}

export default function Header({}: Props) {
  return (
    <header>
        <div>
            {/* Social Icons */}
            <SocialIcon network = "facebook" url="https://twitter.com/jaketrent" />
            <SocialIcon network = "sharethis" url="https://twitter.com/jaketrent" />
            <SocialIcon network = "youtube" url="https://twitter.com/jaketrent" />
            <SocialIcon network = "instagram" url="https://twitter.com/jaketrent" />
            <SocialIcon network = "sharethis" url="https://twitter.com/jaketrent" />
            <SocialIcon network = "twitter" url="https://twitter.com/jaketrent" />
            <SocialIcon network = "email" url="https://twitter.com/jaketrent" />
        </div>

        
    </header>
  )
}