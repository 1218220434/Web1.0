// const imgurl = "http://demo.sc.chinaz.net/Files/DownLoad/moban/201906/moban3833/assets/images/product/medium-size/"
// const BASE_URL = "http://192.168.110.166:8081"
// $.ajax({
//     url: `${BASE_URL}/product`,
//     dataType: "json"
// }).done(res => {
//     var ab = document.querySelector(".wrper")
//         // console.log(ab)

//     // 筛选查询，可以后端也可以前端。
//     let newArr = res.data.filter((item) => {
//         return item.price > 40
//     })
//     console.log(newArr)
//     var str = ""
//     res.data.forEach((element, el) => {

//         var ac = `<li> 

//         <img src=${imgurl}${element.avatar}> 
//         <img src=${imgurl}${element.avatar} class="user-img">
//         <p>${element.name}</p>
//         <p>${element.star}</p>   
//         </li>`
//         str += ac
//     });
//     ab.innerHTML = str
// }).fail(err => {
//     console.log(err);
// });

// $(".btnp").on("click", function() {
//     $(this).prev().hide()
// })