 const resultdiv=document.querySelector(".result");

 window.addEventListener("load", createList);
 function createList(){
    emojiList.forEach((emoji) => {
    const parent =document.createElement("div");
    parent.classList.add("parent")

    const emoji_icon=document.createElement("span");
    emoji_icon.innerText=emoji.emoji;
    parent.append(emoji_icon)

    const emoji_aliases=document.createElement("span");
    const new_emoji_aliases=emoji.aliases.map((aliases)=> aliases.replaceAll("_"," "));
    emoji.aliases=new_emoji_aliases
    emoji_aliases.innerText=emoji.aliases.join(",");
    parent.append(emoji_aliases)

    const emoji_category=document.createElement("span");
    emoji_category.innerText=emoji.category;
    parent.append(emoji_category);

    resultdiv.append(parent);
    
});
    attatchListner();

    function attatchListner(){
        const input=document.querySelector("input");
        input.addEventListener("keyup",filteremojis);
    }

    function filteremojis(e){
        const keyword=e.target.value;
    

    

    const filterdData=emojiList.filter((emoji)=> {
        if(emoji.description.includes(keyword) || emoji.aliases.includes(keyword) || emoji.tags.includes(keyword) ){
            return emoji;
        }
        else{
           renderNoMatchMessage();
        }
    });
    resultdiv.innerText="";
    filterdData.forEach((emoji) => {
        const parent =document.createElement("div");
        parent.classList.add("parent")
    
        const emoji_icon=document.createElement("span");
        emoji_icon.classList.add("icon");
        emoji_icon.innerText=emoji.emoji;
        parent.append(emoji_icon)
    
        const emoji_aliases=document.createElement("span");
        emoji_aliases.classList.add("aliases");
        const new_emoji_aliases=emoji.aliases.map((aliases)=> aliases.replaceAll("_"," "));
        emoji.aliases=new_emoji_aliases
        emoji_aliases.innerText=emoji.aliases.join(",");
        parent.append(emoji_aliases)
    
        const emoji_category=document.createElement("span");
        emoji_category.classList.add("category");
        emoji_category.innerText=emoji.category;
        parent.append(emoji_category);
    
        resultdiv.append(parent);
        
    });
}
    function renderNoMatchMessage() {
    resultdiv.innerHTML = "";
    const para = document.createElement("p");
    para.classList.add("para");
    para.innerText = "No match found";
    resultdiv.appendChild(para);
}
}