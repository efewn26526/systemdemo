console.log("游戏选择系统")



const game_list = [
    {
        id:"1",
        game_name:"开心消消乐",
    },
    {
        id:"2",
        game_name:"贪吃蛇",
    },
    {
        id:"3",
        game_name:"王者",
    }
]

function get_game(name) {
    

    for(item of game_list){
      
    if(item.game_name === name){
        console.log(`选择${item.id}-${item.game_name}`)
        span.textContent = `选择了${item.id}-${item.game_name}`
    }


}
}

let count = 0
for(item of game_list){
    if(item.id < 3){
        console.log(`${item.id}-${item.game_name}`)
        count ++
    }
}

console.log(`本次选择游戏的次数${count}`)

//  获取页面元素

const input = document.querySelector("input")

const button = document.querySelector("button")

const span = document.querySelector("span")



//  监听点击事件

button.addEventListener('click', () => { get_game(input.value)})