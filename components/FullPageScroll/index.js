import React, { useEffect } from 'react';

export const dartPalettes = [
    {
        layer1: '#0a2463',   // Dark Navy Blue
        layer2: '#3e92cc',   // Sky Blue
        layer3: '#fffaff',   // Off White
        layer4: '#d8315b',   // Crimson Red
    },
    {
        layer1: '#222831',   // Charcoal Gray
        layer2: '#393E46',   // Slate Gray
        layer3: '#00ADB5',   // Teal Blue
        layer4: '#EEEEEE',   // Light Gray
    },
    {
        layer1: '#100720',   // Deep Purple
        layer2: '#31087B',   // Royal Indigo
        layer3: '#FA2FB5',   // Neon Pink
        layer4: '#FFC23C',   // Amber Yellow
    },
]

const litePalettes = [
    {
        layer1: '#f4f4ff',   // Very Light Lavender
        layer2: '#66ff33',   // Neon Lime Green
        layer3: '#000000',   // Black
        layer4: '#8080ff',   // Periwinkle Blue
    },

    {
        layer1: '#F4F4F9',   // Misty White (Elegant base)
        layer2: '#7FDBDA',   // Pastel Aqua (Soothing accent)
        layer3: '#2F3E46',   // Deep Charcoal (Text contrast)
        layer4: '#FF8C94',   // Coral Blush (Soft punch)
    },
    {
        layer1: '#FFF9F3',   // Ivory Cream
        layer2: '#FFC6AC',   // Light Peach
        layer3: '#8C7AA9',   // Dusty Lavender
        layer4: '#4A4E69',   // Steel Indigo
    },
    {
        layer1: '#F1F6F9',   // Frost Gray
        layer2: '#C8E7E0',   // Ocean Mint
        layer3: '#D99114',   // Golden Saffron
        layer4: '#4A4E69',   // Navy Charcoal
    },
    {
        layer1: '#FEF6E4',   // Soft Sand
        layer2: '#F582AE',   // Bubblegum Pink
        layer3: '#8BD3DD',   // Sky Blue Mist
        layer4: '#001858',   // Royal Navy
    },
    {
        layer1: '#FFF0F5',   // Lavender Blush
        layer2: '#C1E1C1',   // Mint Cream
        layer3: '#4B4453',   // Dark Mauve
        layer4: '#9D4EDD',   // Orchid Purple
    },
{
    layer1: '#F2F0EB',   // Warm Porcelain — calm and cozy full background
    layer2: '#B5DDE0',   // Misty Cyan — subtle content background
    layer3: '#2C2A4A',   // Slate Blue — elegant heading text
    layer4: '#6C757D',   // Cloud Gray — smooth, readable body text
},
    {
        layer1: '#F9F9FF',   // Paper White
        layer2: '#6A4C93',   // Grape Purple
        layer3: '#FFB6B9',   // Light Rosé
        layer4: '#FFDEE9',   // Petal Pink
    },
    {
        layer1: '#F2F4F3',   // Cloud Haze
        layer2: '#5D737E',   // Blue Slate
        layer3: '#FCF5ED',   // Vanilla Cream
        layer4: '#D4A373',   // Earthy Apricot
    },
    {
        layer1: '#FFFCF2',   // Eggshell
        layer2: '#B19470',   // Rustic Sand
        layer3: '#5C677D',   // Slate Indigo
        layer4: '#F07167',   // Watermelon Pop
    },
];

export const getPelettes = () => {
    // if (palettes)
    // return dartPalettes
    return litePalettes
}

function FullPageScroll() {

    useEffect(() => {
        window.addEventListener("scroll", scrollColor);
        scrollColor()
    }, []);

    const changeColors = (color) => {
        const root = document.documentElement;
        root.style.setProperty('--themeColor1', color.layer1);
        root.style.setProperty('--themeColor2', color.layer2);
        root.style.setProperty('--themeColor3', color.layer3);
        root.style.setProperty('--themeColor4', color.layer4);
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta?.setAttribute && meta?.content !== color.layer2) {
            meta.setAttribute('content', color.layer2)
        }
    }


    const getColorIndex = () => {
        const height = window.innerHeight;
        const currentLocation = window.pageYOffset;
        const scrollPosition = currentLocation + (height / 2)
        const views = document.getElementsByClassName('view-element');
        let index = 0
        if (!views) return index
        if (scrollPosition < views[0].scrollHeight) return index
        for (let i = 0; i < views.length; i++) {
            const current = views[i]
            const after = views[i + 1]
            if (!after) {
                index = i
                break
            }
            if (scrollPosition > current.offsetTop && scrollPosition < after?.offsetTop) {
                index = i
                break
            }
        }
        return index
    }

    const scrollColor = () => {
        const index = getColorIndex()
        const pelettes = getPelettes()
        changeColors(pelettes[index] || pelettes[0])
    }

    return (
        <div />
    )
}

export default FullPageScroll;
