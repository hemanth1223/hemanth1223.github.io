import { openLink } from "./methods"

const outer = {
    title1: `Hello, I'm`,
    title2: 'B L Hemanth.',
    decrypTexts: [
        'Data Privacy First,',
        'Compliance Always,',
        'Governance Ready,',
        '& Beyond.',
    ],
    desciption: `Privacy Matters.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:hemanthgowda1223@gmail.com?subject=Hello')
    }
}

export default outer