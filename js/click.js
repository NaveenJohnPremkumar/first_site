let clickable = document.body.querySelectorAll('#like');

let isClicked = new Array(clickable.length).fill(false);

let liked = 0;

for(var i = 0; i < clickable.length; i++) {
    (function (index) {
        clickable[index].addEventListener("click", function () {
            if (!isClicked[index]) {
                isClicked[index] = true;
                liked++;
                alert("You liked a post!");
            } else {
                alert("You already liked this post!");
            }
            console.log(document.body.querySelector('.liked').innerHTML);
            document.body.querySelector('.liked').innerHTML = ("Posts liked: " + liked);
        });
    })(i);
}
