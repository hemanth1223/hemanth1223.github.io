import { openLink } from "./methods"

const certifications = {
    heading:  `Certifications & Achievement`,
    list: [
        {
            size: 1,
            title: 'AI Governance Professional (AIGP) - Training',
            platform: 'IAPP',
            link: '',
            date: 'Issued Jan 2025',
            logo: '/assets/aigp.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Certified Information Privacy Professional/United States (CIPP/US) - Training',
            platform: 'IAPP',
            link: '',
            date: 'Issued Dec 2024',
            logo: '/assets/cipp_us.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'CyberOps Associate',
            platform: 'Cisco',
            link: '',
            date: 'Issued Oct 2023',
            logo: '/assets/download.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Agile Software Development',
            platform: 'University of Minnesota (Coursera)',
            link: '',
            date: 'Issued June 2023',
            logo: '/assets/cour.png',
            aos: 'zoom-out-right'
        },
        {
            size: 1,
            title: 'ISC2 Candidate',
            platform: 'ISC2',
            link: '',
            date: '',
            logo: '/assets/isc2.png',
            aos: 'zoom-out-right'
        },
        {
            size: 1,
            title: 'GATE Qualified',
            platform: 'GATE 2023 CS/IT',
            link: '',
            date: '',
            logo: '/assets/gate.webp',
            aos: 'zoom-out-right'
        },
    ],
    handleIconClick: openLink
}

export default certifications