AOS.init();
let icon = document.querySelectorAll('.icon');
let searchinput = document.getElementById('input_search');
let asidemenyu = document.getElementById('aside__menyu');
icon.forEach(btn => {
    btn.addEventListener('click', function(){
        icon.forEach(btn => {
            btn.classList.remove('active')
        })
        btn.classList.add('active')
    })
})

let menyu = document.getElementById('menyu');

movies.forEach( i => {
  menyu.innerHTML += `
    <swiper-slide>
      <div class="menyu__card" style="background-image:url(${i.posterurl});background-size: cover; border-radius: 15px;">
        <ul class="menyu__list">
          <li class="menyu__list-item">${i.year}</li>
          <li class="menyu__list-item">${i.genres [0]}</li>
          <li class="menyu__list-item">${i.contentRating}</li>
        </ul>
        <h2 class="menyu__list-title">${i.title}</h2>
      </div> 
    </swiper-slide>
  `
})

function search(movies){
  asidemenyu.innerHTML = ''
  if(movies.lenght === 0){
    asidemenyu.innerHTML ='<h2>natija topilmadi</h2>'
    return;
  }
  movies.map((i,index) =>{
    asidemenyu.innerHTML +=`
            <div class="aside__menyu-card" data-aos="flip-down">
              <div class="aside__menyu-img">
                <img src="${i.posterurl}" alt="rasm" class="aside__img">
              </div>
              <ul class="aside__list">
                <li class="aside__list-item">${i.year}</li>
                <li class="aside__list-item">${i.genres}</li>
                <li class="aside__list-item">${i.contentRating}</li>
              </ul>
              <h2 class="aside__title">${i.title}</h2>
              <div class="hover-nav">
                <h2 class="hover-title">${i.imdbRating}</h2>
              </div>
            </div>
    `
  })
}
search(movies)
searchinput.addEventListener('input',function(event){
  let text = event.target.value.toLowerCase();
  let moviessearch = movies.filter(item => item.title.toLowerCase().includes(text));
  search(moviessearch)
});