var arr = [
    {
        dp: "https://plus.unsplash.com/premium_photo-1706896207581-7ba31ff0bbde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTh8fHxlbnwwfHx8fHw%3D",
        story: "https://plus.unsplash.com/premium_photo-1705883268010-da0bd4581644?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1526449870103-234e4c371681?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        story:"https://images.unsplash.com/photo-1540834805150-b551c602aac8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1642010654709-37241c6874a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
        story:"https://images.unsplash.com/photo-1625008146658-d0c3929f0c8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"
    },
    {
        dp:"https://images.unsplash.com/photo-1544717305-2782549b5136?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        story:"https://images.unsplash.com/photo-1625090135097-eb934e675208?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
    }  
]

var clutter = ""
arr.forEach(function(elem, idx){
    clutter += ` <div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

var storiyan = document.querySelector("#storiyan");

storiyan.innerHTML = clutter

storiyan.addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    }, 3000)

})