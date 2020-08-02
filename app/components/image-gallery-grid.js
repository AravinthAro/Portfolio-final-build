import Component from '@ember/component';

export default Component.extend({
    classNames : ['container-fluid image-gallery-grid'],
    elementId: 'image-gallery',
    init(){
        this._super(...arguments);
        this.set('isModalOpen', false);
        this.set('imageList',[

            { 
            "first" : { "url" : "marina-boat.JPG", "imageIndex" : 0},
            "second" : { "url" : "hawa-mahal-with-sun.jpg", "imageIndex" : 1},
            "third" : { "url" : "Arikkal-falls.JPG", "imageIndex" : 2},
            "fourth" : { "url" : "Athirapally-falls.jpg", "imageIndex" : 3},
            "fifth" : { "url" : "jashwand-thada.JPG", "imageIndex" : 4},
            "sixth" : { "url" : "trichy-uchi-pillayar-kovil.jpg", "imageIndex" : 5},
            "seventh" : { "url" : "srirangam-temple.jpg", "imageIndex" : 6}
            },

            {
            "first" : { "url" : "Rameshwaram-Pamban-bridge.JPG", "imageIndex" : 7},
            "second" : { "url" : "amber-pigeons.JPG", "imageIndex" : 8},
            "third" : { "url": "kaveri-water.JPG", "imageIndex" : 9},
            "fourth" : { "url" : "Alleppey-boat.JPG", "imageIndex" : 10},
            "fifth" : { "url" : "manali-stream.jpg", "imageIndex" : 11},
            "sixth" : {"url" : "manali-sun.JPG", "imageIndex" : 12},
            "seventh" : { "url" : "jaisalmer-maharaja-fort-architecture.JPG", "imageIndex" : 13}
            },

            {
            "first" : { "url" : "kanyakumari-horse.JPG", "imageIndex" : 14},
            "second" : { "url" : "Aluva-aquaduct-bridge.jpg", "imageIndex" : 15},
            "third" : { "url" : "pitchavaram-sun.jpg", "imageIndex" : 16},
            "fourth" : { "url" : "meharang-puppet.JPG", "imageIndex" : 17},
            "fifth" : { "url" : "jaisalmer-fort-with-blue-sky.jpg", "imageIndex" : 18},
            "sixth" : { "url" : "kanyakumari-boat.JPG", "imageIndex" : 19},
            "seventh" : { "url" : "marina-sun-1.JPG", "imageIndex" : 20}
            }

        ]);
        
        var self = this;
        this.set('imageAll', []);
        this.imageList.forEach(item => {
            for(let key in item){
                let obj = {};
                obj.imageUrl = item[key].url;
                obj.imageIndex = item[key].imageIndex;
                this.imageAll.push(obj);
            }
        });
    },
    didInsertElement(){
       
    },
    myOptions:  { 
        followFinger: false,
        loop : true,
        speed : 250,
        initialSlide : 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    },
    actions:{
        openModal: function(index){
            this.myOptions.initialSlide = index;
            this.toggleProperty('isModalOpen');
        }
    }
});
