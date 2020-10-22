const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e){
    span.classList.add('animated','rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function(e){
    span.classList.remove('animated','rubberBand')
}))

const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const phpBar = document.querySelector('.bar-php')
const MysqlBar = document.querySelector('.bar-Mysql')

var t1 = new TimelineLite()

t1.fromTo(htmlBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(80% - 6px)', ease: Power4.easeOut})
.fromTo(cssBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(60% - 6px)', ease: Power4.easeOut})
.fromTo(jsBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(45% - 6px)', ease: Power4.easeOut})
.fromTo(phpBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(35% - 6px)', ease: Power4.easeOut})
.fromTo(MysqlBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(50% - 6px)', ease: Power4.easeOut})

const contoller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})
.setTween(t1)
.addTo(contoller)

const showRequiredCategory = event => {
    const getId = event.id
    const links = document.querySelectorAll('.tz-gallery')
    for(i=0; i<links.length; i++) {
        if(links[i].hasAttribute('class')) {
        links[i].classList.remove('active')
    }
}

event.classList.add('active')
const getCategory = document.querySelector(`.category-${getId}`)
const categories = document.querySelectorAll('div[class ^= "category-"]')
for(i=0; i<categories.length; i++) {
    if(categories[i].hasAttribute('class')) {
    categories[i].classList.remove('showCategory')
    categories[i].classList.add('hideCategory')
    }
}
getCategory.classList.remove('hideCategory')
getCategory.classList.add('showCategory')

}

const fb_button = document.querySelector(".fb");
 
fb_button.addEventListener("click", () => {
  const fb_link = document.createElement("a");
  fb_link.setAttribute("href","https://pl-pl.facebook.com/people/%C5%81ukasz-Kura%C5%9B/100004945361791");
  fb_link.setAttribute("target", "blank_");
  fb_button.appendChild(fb_link);
  fb_button.removeChild(fb_link);
  fb_link.click();
  fb_button.removeChild(fb_link);
})

const ig_button = document.querySelector(".ig");
 
ig_button.addEventListener("click", () => {
  const ig_link = document.createElement("a");
  ig_link.setAttribute("href","https://www.instagram.com/luka.kuras/?hl=pl");
  ig_link.setAttribute("target", "blank_");
  ig_button.appendChild(ig_link);
  ig_button.removeChild(ig_link);
  ig_link.click();
  
})

const yt_button = document.querySelector(".yt");
 
yt_button.addEventListener("click", () => {
  const yt_link = document.createElement("a");
  yt_link.setAttribute("href","https://www.youtube.com/channel/UC-GtlkGduOpPL-plompi9Qg?view_as=subscriber");
  yt_link.setAttribute("target", "blank_");
  yt_button.appendChild(yt_link);
  yt_button.removeChild(yt_link);
  yt_link.click();
  
})


function onSubmit(token) {
  document.getElementById("demo-form").submit();
}


