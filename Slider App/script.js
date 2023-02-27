var models = [
    {
        Name : 'Opel Astra',
        image : 'astra.jpg',
        link : 'http://www.arabalar.com.tr/opel/astra/2023/1-2-gs-at'
    },
    {
        Name : 'BMW 435İ',
        image : '435-i.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2017/coupe-430i-xdrive-2-0-m-plus'
    },
    {
        Name : 'Ford Mustang',
        image : 'Mustang.jpg',
        link : 'https://www.ford.com.tr/modeller/gelecek-araclar/mustang-mach-e'
    },
    {
        Name : 'Audi RS7',
        image : 'Rs7.webp',
        link : 'https://www.audi.com.tr/tr/web/tr/modeller/a7/rs-7-sportback-2023.html'
    },
    {
        Name : 'Toyota Supra',
        image : 'supra.jpg',
        link : 'https://www.toyota.com/grsupra/'
    },
]
let index = 0;
let slideCount = models.length;
let İnterval;

let settings={
    duration : '2000',
    random : true,

}


init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',
function(){
index -=1;
showSlide(index);
})

document.querySelector('.fa-arrow-circle-right').addEventListener('click',
function(){
    index +=1;
    showSlide(index);
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(İnterval);
    })
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
});


function init(settings) {

    let prev;

   İnterval = setInterval(function(){
        if(settings.random){
            do{
                index = Math.floor(Math.random() * slideCount);
            }
            while(index == prev)
      prev = index; 
        }
        else{
            if(slideCount == index + 1){
                index = -1;
            }
            showSlide(index);
            index += 1;
        }
        showSlide(index);
    },settings.duration)
}


function showSlide(i){

    index = i ;

    if(i<0){
        index = slideCount - 1;
    }
    else if(i>=slideCount){
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].Name;

    document.querySelector('.card-img-top').setAttribute('src',models
    [index].image);
    
    document.querySelector('.card-link').setAttribute('href',models
    [index].link);
    
}



