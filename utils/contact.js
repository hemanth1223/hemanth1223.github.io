import { openLink } from "./methods"

const contact = {
    label: `Get in touch`,
    heading: `Let’s Connect`,
    description: `The best technology is invisible - secure, private, and seamless. Let’s make that happen together.`,
    button: {
        label: 'Say Hello',
        onClick: () => openLink('mailto:hemanthgowda1223@gmail.com?subject=Hello')
    },
    designAndBuiltBy: `Made with 💗 by B L Hemanth (Oops... No Privacy Policy Here! 👀😆)`
}

export default contact
