import { openLink, scrollTo } from "./methods";


const header = {
    menus: [
        { title: 'Home', id: 'home' },
        { title: 'About me', id: 'my-self' },
        { title: 'Experience', id: 'experience' },
        { title: 'Personal Projects', id: 'my-work' },
        { title: 'Interests', id: 'reviews' },
        { title: 'Certifications', id: 'certifications' },
        { title: 'Community', id: 'contributions' },
        { title: 'Contact', id: 'contact' },
    ],
    // rightBtn: {
    //    label: 'Resume',
    //    onClick: () => openLink('assets/cv.pdf')
    // },
    logo: {
        src: '/assets/profile1.jpeg',
        alt: 'Hemanth Gowda'
    },
    handleIconClick: () => scrollTo('home'),
    handleItemSelect: (menu) => scrollTo(menu.id),
}

export default header