var elms = document.getElementsByTagName("*");
var n = elms.length;
for(var i = 0; i < n; i ++) {
    if(window.getComputedStyle(elms[i]).cursor == "pointer") {
        elms[i].style.cursor = "https://i.postimg.cc/0jZkRKVD/052dd0c023d9db3d5244875791c71c54-pixilated-arrow-cursor-by-vexels.png";
    }
}