$(document).ready(function(){
    $('.toggle-menu').click(function(){
        $('nav').toggleClass('active');
    })
      $('ul li').click(function(){
        $(this).siblings().removeClass("active");
        $(this).toggleClass("active");

    })

});  
content = [`<h4>A Reason</h4>
<h3>To Smile</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quis. Veritatis deleniti autem alias. Itaque quia laborum in dignissimos non, sed omnis ipsam.</p>
<a href="" class="link1 mt-4">View Our Portfolio</a><br><br><a href="" class="link2">Costomer Testimonials</a>`,
`<h4>Awesome Smiles</h4>
<h3>Great Care</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quis. Veritatis deleniti autem alias. Itaque quia laborum in dignissimos non, sed omnis ipsam.</p>
<a href="" class="link1 mt-4">View Our Portfolio</a><br><br><a href="" class="link2">Denticare Solution</a>`
];
image=["images/img-slider-02.jpg", "images/img-slider-03.jpg"];
imageindex=0;
textindex =0;
setInterval(()=>{
textindex= (textindex + 1) % content.length;
imageindex=(imageindex + 1) % image.length;
carasol_text=document.querySelector('.carasol-text');
carasol_text.innerHTML=content[textindex];
header=document.querySelector("header");
header.style.background= `url(${image[imageindex]})`;
header.style.backgroundSize= `cover`;
header.style.backgroundPosition= `center`;
}, 5000);

toTop = document.querySelector(".to-top");
toTop.addEventListner("click", ()=>{
    console.log("hello");
})


