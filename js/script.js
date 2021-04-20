var app = new Vue(
    {
        el: '#root',
        data: {
            activeImage: 0,
            sliderImages: [
                'img/campagna.jpg',
                'img/cascate.webp',
                'img/fiori.jpeg',
                'img/montagne.webp'
            ]
        },
        methods: {
            nextImage() {
                // indice per l'immagine successiva
                const next = this.activeImage + 1;

                if ( next > this.sliderImages.length - 1 ) {
                    this.activeImage = 0;
                }else {
                    this.activeImage = next;
                }
            },
            prevImage() {
                // indice per l'immagine prcedente
                const prev = this.activeImage - 1;

                if ( prev < 0 ) {
                    this.activeImage = this.sliderImages.length - 1;
                }else {
                    this.activeImage = prev;
                }
            }
        }
    }
);