import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'linkedin': 'https://www.linkedin.com/in/hemanth1223',
        'github': 'https://github.com/hemanth1223',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'hemanthgowda1223@gmail.com',
        onClick: () => openLink('mailto:hemanthgowda1223@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements