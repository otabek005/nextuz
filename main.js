
let slide = document.querySelectorAll('.carusel-items')
let step = 0;
let go = document.querySelector('.slide')

function nextslide(){
    step++;
    if(step >= slide.length){
        step = 0;
    }else{
        go.style.transform = `translate(${-step*1230}px)`
    }
}

function prewslide(){
    step--;
    if(step < 0){
        step = slide.length;
    }else{
        go.style.transform = `translate(${step*-1230}px)`
    }
}


let card = document.querySelector('#cards');
for (let index = 0; index < 10; index++) {
    let car = document.createElement('div')
    car.innerHTML = `
    <div class="bg-white rounded-xl py-[10px] px-[15px] w-[200px]">
                        <img src="./img/komp.png" alt="img">
                        <h3 class="text-[#0D63F3] font-[500] text-[18px] mb-2">299 000 so’m</h3>
                        <p class="w-[197px] font-[500] mb-[33px] ">Apple Airpods Pro simsiz quloqchin , Oq rangda   </p>
                        <p class="text-[#6C757D] mb-[25px]">1230 ta buyurtma</p>
                        <div class="flex gap-[40px] items-center">
                            <button class="py-[10px] bg-[#0D63F3] px-[10px] rounded-xl text-white cursor-pointer font-[500]">Sotib olish</button>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_3133_172)">
                                      <path d="M15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.27 2H1V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13H15.55ZM6.16 6H18.31L15.55 11H8.53L6.16 6ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="#6C757D"/>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_3133_172">
                                        <rect width="24" height="24" fill="white"/>
                                      </clipPath>
                                    </defs>
                                  </svg>
                            </span>
                        </div>
                    </div>
    `
    card.append(car);
}


let cardd = document.querySelector('#cardss');

for (let index = 0; index < 10; index++) {
    let car = document.createElement('div')
    car.innerHTML = `
    <div class="bg-white rounded-xl py-[10px] px-[15px] w-[200px]">
                        <img src="./img/komp.png" alt="img">
                        <h3 class="text-[#0D63F3] font-[500] text-[18px] mb-2">299 000 so’m</h3>
                        <p class="w-[197px] font-[500] mb-[33px] ">Apple Airpods Pro simsiz quloqchin , Oq rangda   </p>
                        <p class="text-[#6C757D] mb-[25px]">1230 ta buyurtma</p>
                        <div class="flex gap-[40px] items-center">
                            <button class="py-[10px] bg-[#0D63F3] px-[10px] rounded-xl text-white cursor-pointer font-[500]">Sotib olish</button>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_3133_172)">
                                      <path d="M15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.27 2H1V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13H15.55ZM6.16 6H18.31L15.55 11H8.53L6.16 6ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="#6C757D"/>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_3133_172">
                                        <rect width="24" height="24" fill="white"/>
                                      </clipPath>
                                    </defs>
                                  </svg>
                            </span>
                        </div>
                    </div>
    `
    cardd.append(car);
}


let kirish = document.querySelector('#kirish');
let kirishpage = document.querySelector('#register');
let exit = document.querySelector('#exit')

kirish.addEventListener("click", ()=>{
    kirishpage.style.display = "block"; 
    document.body.style.overflow="hidden";
});

exit.addEventListener("click", ()=>{
  kirishpage.style.display = "none";
  document.body.style.overflow="visible";
});


let kirish2 = document.querySelector("#kirish2");
let cardregister = document.querySelector('#card');

kirish2.addEventListener('click', ()=>{
    cardregister.innerHTML = `
    <div class="flex flex-col ">
    <h2 class="font-[500] text-[36px] mb-4">Telefon raqam orqali kirish</h2>
    <span id="exit2" class="absolute right-[25px] top-[5px] text-[30px] cursor-pointer"><i class='bx bx-window-close'></i></span>
    <input type="text" placeholder="Telefon raqam" id="telefon" class="border-[1px] border-[#00000058] py-3 px-2 rounded-xl mb-[13px]">
    <input type="password" placeholder="Parol" id="parol"  class="border-[1px] border-[#00000058] py-3 px-2 rounded-xl mb-[13px]">
    <button id="kirish3" class="w-full bg-[#0D63F3] text-white font-[500] py-3 rounded-2xl mb-[5px]">Kirish</button>
    <button class="text-[#0D63F3]">Parolni unutdingizmi ?</button>
    </div>
    `
    let telefon = document.querySelector('#telefon')
    let exit2 = document.querySelector('#exit2')
    exit2.addEventListener("click", ()=>{
      kirishpage.style.display = "none";
      document.body.style.overflow="visible";
    });

    let kirish3 = document.querySelector("#kirish3");
    kirish3.addEventListener('click', ()=> {
      cardregister.innerHTML= `
      <div class="flex flex-col ">
      <h2 class="font-[500] text-[36px] mb-4">Telefon raqamini kiriting</h2>
      <span id="exit3" class="absolute right-[25px] top-[5px] text-[30px] cursor-pointer"><i class='bx bx-window-close'></i></span>
      <input type="text" placeholder="Telefon raqam" id="telefon2" class="border-[1px] border-[#00000058] py-3 px-2 rounded-xl mb-[13px]">     
      <button id="kirish4" class="w-full bg-[#0D63F3] text-white font-[500] py-3 rounded-2xl mb-[5px]">Kodni qabul qilish</button>
      </div>
      `

      let telefon2 = document.querySelector('#telefon2')
      telefon2.value = telefon.value;


      let exit3 = document.querySelector('#exit3')
      exit3.addEventListener("click", ()=>{
        kirishpage.style.display = "none";
        document.body.style.overflow="visible";
      });


      let kirish4 = document.querySelector('#kirish4')
      kirish4.addEventListener('click', () => {
          kirishpage.style.display = "none";
          document.body.style.overflow="visible";
          kirish.style.display = 'none'

          let user = document.querySelector('#user');
          let panel = document.querySelector('#user_panel')
          user.style.display='block';
          user.innerHTML = `<i class='bx bx-user' ></i>`

          user.addEventListener('click', ()=> {
            panel.style.display = 'block'
          })

          let main = document.querySelector('main');
          main.addEventListener('click', ()=>{
            panel.style.display = "none"
          })
          
      })
    })
});

let katalog = document.querySelector('#katalog_panel')
let katalog_btn = document.querySelector('#katalog')
let idmain = document.querySelector('#main')

katalog_btn.addEventListener('click', ()=> {
    katalog.innerHTML = `
    <div id="panel_katalog" class="absolute w-[1200px] h-[800px] bg-white top-[40px] left-[-360px] flex p-5 justify-between pr-[200px]">
    <ul class="bg-[#ECF4FF] w-[300px] p-5">
       <li class="font-[500]  mb-3">Aksiya</li>
       <li class="font-[500]  mb-3">Aksiya</li>
       <li class="font-[500]  mb-3">Aksiya</li>
       <li class="font-[500]  mb-3">Aksiya</li>
       <li class="font-[500]  mb-3">Aksiya</li>
       <li class="font-[500]  mb-3">Aksiya</li>
       <li class="font-[500]  mb-3">Aksiya</li>
       <li class="font-[500]  mb-3">Aksiya</li>
       <li class="font-[500]  mb-3">Aksiya</li>
       <li class="font-[500]  mb-3">Aksiya</li>
       <li class="font-[500]  mb-3">Aksiya</li>
       <li class="font-[500]  mb-3">Aksiya</li>
       <li class="font-[500]  mb-3">Aksiya</li>
       <li class="font-[500]  mb-3">Aksiya</li>
       <li class="font-[500]  mb-3">Aksiya</li>
       <li class="font-[500]  mb-3">Aksiya</li>
       <li class="font-[500] ">Aksiya</li>
    </ul>
    <ul>
       <li class="font-[500]  mb-3">Samsung</li>
       <li class="font-[500]  mb-3">Samsung</li>
       <li class="font-[500]  mb-3">Samsung</li>
       <li class="font-[500]  mb-3">Samsung</li>
       <li class="font-[500]  mb-3">Samsung</li>
       <li class="font-[500]  mb-3">Samsung</li>
       <li class="font-[500]  mb-3">Samsung</li>
       <li class="font-[500]  mb-3">Samsung</li>
       <li class="font-[500]  mb-3">Samsung</li>
       <li class="font-[500]  mb-3">Samsung</li>
       <li class="font-[500]  mb-3">Samsung</li>
       <li class="font-[500]  mb-3">Samsung</li>
       <li class="font-[500]  mb-3">Samsung</li>
       <li class="font-[500]  mb-3">Samsung</li>
       <li class="font-[500]  mb-3">Samsung</li>
       <li class="font-[500]  mb-3">Samsung</li>
       <li class="font-[500] ">Samsung</li>
    </ul>
    <div>
       <ul class="mb-[60px]">
           <li>Samsung brendi</li>
           <li>S seriyalar</li>
           <li>A seriyalar</li>
           <li>Note seriyalar</li>
       </ul>
       <ul class="mb-[60px]"">
           <li>Samsung brendi</li>
           <li>S seriyalar</li>
           <li>A seriyalar</li>
           <li>Note seriyalar</li>
       </ul>
       <ul class="mb-[60px]">
           <li>Samsung brendi</li>
           <li>S seriyalar</li>
           <li>A seriyalar</li>
           <li>Note seriyalar</li>
       </ul>
    </div>
    <div>
       <ul class="mb-[60px]">
           <li>Samsung brendi</li>
           <li>S seriyalar</li>
           <li>A seriyalar</li>
           <li>Note seriyalar</li>
       </ul>
       <ul class="mb-[60px]"">
           <li>Samsung brendi</li>
           <li>S seriyalar</li>
           <li>A seriyalar</li>
           <li>Note seriyalar</li>
       </ul>
       <ul class="mb-[60px]">
           <li>Samsung brendi</li>
           <li>S seriyalar</li>
           <li>A seriyalar</li>
           <li>Note seriyalar</li>
       </ul>
    </div>
    <div>
       <ul class="mb-[60px]">
           <li>Samsung brendi</li>
           <li>S seriyalar</li>
           <li>A seriyalar</li>
           <li>Note seriyalar</li>
       </ul>
       <ul class="mb-[60px]"">
           <li>Samsung brendi</li>
           <li>S seriyalar</li>
           <li>A seriyalar</li>
           <li>Note seriyalar</li>
       </ul>
       <ul class="mb-[60px]">
           <li>Samsung brendi</li>
           <li>S seriyalar</li>
           <li>A seriyalar</li>
           <li>Note seriyalar</li>
       </ul>
    </div>
</div>
    `
    katalog.style.display = 'block';
})
idmain.addEventListener('click', ()=> {
    katalog.style.display = 'none';
})


