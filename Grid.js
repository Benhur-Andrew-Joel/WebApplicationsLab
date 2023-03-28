import Card from "./Card.js";

class Grid{
    constructor(
        noOfColumns,
        noOfRows,
        gridStyle,
        cards,
      ) {
        this.noOfColumns = noOfColumns;
        this.noOfRows = noOfRows;
        this.gridStyle=gridStyle;
        this._cards = cards;
    }
}

const card1= new Card(
    "https://cdn.thewirecutter.com/wp-content/media/2022/11/decoratechristmastree-2048px-iStock-1281771707-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=980&dpr=1.5",
    "Decoration",
    "Lorem ipsum dolor sit amet (These are printed using Objects!)",
    '40%',
    ' $200',
    ' $170'

)
const card2= new Card(
    "https://media.istockphoto.com/id/1358361966/photo/jingle-bells.jpg?b=1&s=170667a&w=0&k=20&c=zNbdVxzOatolAqfAoAZ6_p3Af7vfNyi_WpxM8hX3q6M=",
    'Christmas Bells',
    'Lorem ipsum dolor sit ationem praesentium nihil.',
    '30%',
    ' $300',
    ' $210'

)
const card3= new Card(
    "https://i0.wp.com/www.onceuponachef.com/images/2020/12/gingerbread-men.jpg?resize=768%2C512&ssl=1",
    'Christmas Cookies',
    "Lorem ipsum dolor sit ameNonea!iyuiuhoubyhoiopygiugyihgihj",
    '20%',
    ' $200',
    ' $160'

)
const card4= new Card(
    "https://media.istockphoto.com/id/1069600900/photo/girls-opening-christmas-gifts.jpg?s=1024x1024&w=is&k=20&c=SlxbM82MgIv-NgMtjgw4qG7C6JXwWHQeviy-mvD34D0=",
    'Toys',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    '10%',
    ' $100',
    ' $90'

)

const grid = new Grid(
    4,
    1,
    'grid',   //Grid new class in CSS, please check
    new Array(card1,card2,card3,card4),
) 




document.getElementById('card1').src=grid._cards[0].imgSource;
document.getElementById('card2').src=grid._cards[1].imgSource;
document.getElementById('card3').src=grid._cards[2].imgSource;
document.getElementById('card4').src=grid._cards[3].imgSource;



document.getElementById('card1Title').innerHTML=grid._cards[0].cardTitle;
document.getElementById('card2Title').innerHTML=grid._cards[1].cardTitle;
document.getElementById('card3Title').innerHTML=grid._cards[2].cardTitle;
document.getElementById('card4Title').innerHTML=grid._cards[3].cardTitle;



document.getElementById('card1Description').innerHTML=grid._cards[0].cardDescription;
document.getElementById('card2Description').innerHTML=grid._cards[1].cardDescription;
document.getElementById('card3Description').innerHTML=grid._cards[2].cardDescription;
document.getElementById('card4Description').innerHTML=grid._cards[3].cardDescription;


document.getElementById('card1Span').innerHTML=grid._cards[0].cardDiscount;
document.getElementById('card2Span').innerHTML=grid._cards[1].cardDiscount;
document.getElementById('card3Span').innerHTML=grid._cards[2].cardDiscount;
document.getElementById('card4Span').innerHTML=grid._cards[3].cardDiscount;




// Generating the table

for(var i=0;i<grid.noOfColumns;i++)
    addRow('dealsTable',i)





function addRow(tableID,i) {  
    var table = document.getElementById(tableID);  
    var rowCount = table.rows.length;  
    var row = table.insertRow(rowCount);  
    //Column 1  
    var cell1 = row.insertCell(0);  
    cell1.innerHTML= grid._cards[i].cardTitle;
    //Column 2  
    var cell2 = row.insertCell(1);  
    cell2.innerHTML =grid._cards[i].cardOriginal;  
    //Column 3  
    var cell3 = row.insertCell(2);  
    cell3.innerHTML =grid._cards[i].cardDiscounted;    
}  




// Adding Animations
var gridPhotos=document.getElementById("gridPhotos");

gridPhotos.addEventListener("animation",Animation,false);


function Animation(gridPhotos){
    gridPhotos.addEventListener('click',Event=>{
        scalingImage(Event.target);
    })


}
console.log('The output of Grid object are:', grid);
// addRow()
export default Grid;