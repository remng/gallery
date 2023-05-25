const imagesUrl = [
    { 
        url: 'https://source.unsplash.com/random/?city,night',
        alt: 'Imagem aleatória noturna',
        title: 'Night or city image'
    },
    {
        url: 'https://source.unsplash.com/random/?city',
        alt: 'Imagem aleatória relacionada a uma cidade',
        title: 'Image of a city'
    },
    {
        url: 'https://source.unsplash.com/random/?night',
        alt: 'Imagem aleatória relacionada a cidade',
        title: 'Night Image'
    },
    {
        url: 'https://source.unsplash.com/random/?abstract',
        alt: 'Imagem aleatória abstrata',
        title: 'Abstract Image'
    },
    {
        url: 'https://source.unsplash.com/random/?universe',
        alt: 'Imagem aleatória relacionada ao universo',
        title: 'Universe Image'
    },
    {
        url: 'https://source.unsplash.com/random/?water',
        alt: 'Imagem aleatória relacionada a água',
        title: 'Water Image'
    },
    {
        url: 'https://source.unsplash.com/random/?day',
        alt: 'Imagem aleatória relacionada ao dia',
        title: 'Day Image'
    },
    {
        url: 'https://source.unsplash.com/random/?light',
        alt: 'Imagem aleatória relacionada a luz',
        title: 'Image of the light'
    },
    {
        url: 'https://source.unsplash.com/random/?ice',
        alt: 'Imagem aleatória relacionada ao gelo',
        title: 'Ice Image'
    },
    {
        url: 'https://source.unsplash.com/random/?sky',
        alt: 'Imagem aleatória relacionada a céu',
        title: 'Sky Image'
    },
    {
        url: 'https://source.unsplash.com/random/?planet',
        alt: 'Imagem aleatória relacionada á um planeta',
        title: 'Image of a planet'
    },
    {
        url: 'https://source.unsplash.com/random/?sun',
        alt: 'Imagem aleatória relacionada ao sol',
        title: 'Sun Image'
    },
    {
        url: 'https://source.unsplash.com/random/?forest',
        alt: 'Imagem aleatória relacionada a uma floresta',
        title: 'Image of a forest'
    },
    {
        url: 'https://source.unsplash.com/random/?nature',
        alt: 'Imagem aleatória relacionada a natureza',
        title: 'Nature Image'
    }
]

const imgContainer = document.querySelector('.img-container')

window.addEventListener('load', () => {
    imagesUrl.map((image) => {
        const imgWrapper = document.createElement('div')
        const h2Wrapper = document.createElement('h2')

        imgWrapper.classList.add('img-wrapper')
        imgWrapper.innerHTML = `<img src="${image.url}" alt="${image.alt}" class="img" />`

        h2Wrapper.classList.add('title-img')
        h2Wrapper.innerHTML = `${image.title}`

        imgContainer.appendChild(imgWrapper)
        imgWrapper.appendChild(h2Wrapper)
    })
})