const UserImage = document.querySelector('#user-img')
const followerCount = document.querySelector('#follower-count')
const clickButton = document.querySelector('#btn')



clickButton.addEventListener('click', ()=>{
    const requestUrl = "https://api.github.com/users/hiteshchoudhary";
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET', requestUrl)

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            const data = JSON.parse(this.responseText)
            console.log(data)
            followerCount.innerHTML = data.followers;
            UserImage.src = data.avatar_url;
        }
    }

    xhr.send()
})
