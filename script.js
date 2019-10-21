const URL = "http://developer.marvel.com"
let selectCharacter = document.querySelector(".content")
class MarvelApi{
    constructor(){
      this.root = "https://gateway.marvel.com/v1/public/";
      this.characters = this.root+"characters";
      this.api = "197da119e85cecc8c5196784d18fe046";
      this.private = "089967773610007dd39854c6056eb9baea453ea5";
    }
    getCreds(){
      let timestamp = Date.now();
      let hash = md5(timestamp+this.private+this.api);
      let cred = `?&ts=${timestamp}&apikey=${this.api}&hash=${hash}`;
      return cred;
    }
    
    charactersMenu = (array) => {
            for(let i = 0; i < array.length; i++){
              console.log(i);
              let char = array[i];
              let li = document.createElement("li");
              let thumbnail = document.createElement("img");
              thumbnail.src = `${char.thumbnail.path}.${char.thumbnail.extension}`;
              li.appendChild(thumbnail);
              li.setAttribute("id", i)
              thumbnail.addEventListener("click", function (e){
                e.preventDefault;
                console.log(e)
                aside.classList.toggle("toggle");
            });
              aside.appendChild(li);
              li.classList.add("border")
              thumbnail.classList.add("charPic")
            }
    }

    // addCharInfo() {
    //     fetch(this.characters+this.getCreds())
    //     .then(res => res.json())
    //     .then(res => {
    //       console.log(res.data.results);
    //       let chars = res.data.results;
    //       li.addEventListener("click", function (e){
    //         e.preventDefault;
    //         console.log(e)
    //         selectCharacter.appendChild()
    //     });
    //     })
    //     .catch(err => console.log("err", err)); 
    // }
    
    getCharacterList(){
      fetch(this.characters+this.getCreds())
        .then(res => res.json())
        .then(res => {
          console.log(res.data.results);
          let chars = res.data.results;
          this.charactersMenu(chars);
        })
        .catch(err => console.log("err", err));
    }
}

let api = new MarvelApi();

const menu = document.querySelector("#menu")
const aside = document.querySelector("#toggle")
aside.classList.add("charsList")

menu.addEventListener('click', function (e){
    e.preventDefault;
    console.log(e)
    aside.classList.toggle("toggle")

})


api.getCharacterList();



