import './foodList.css';
import FoodItem from '../foodItem/foodItem';

function FoodList () {
    return (

        <div className='foodListContainer'>
            <div className='foddListItem'>
                <FoodItem
                    itemName='Pizza Planet'
                    quantity='2-4 people.'
                    foodDescription='The old classic italian favorite. Perfect for any kind of situation.'
                    imageSrc='https://tvpacifico.mx/recetas/intranet/images/recipes/330-349.jpg'
                    imageAlt='a pizza'
                />
            </div>
            <div className='foddListItem'>
                <FoodItem
                    itemName='Burguer Monster'
                    quantity='1'
                    foodDescription='Burguer, fries and sauces. Nothing more american than that!'
                    imageSrc='https://i.ibb.co/1dDXHMS/Image-2.png'
                    imageAlt='A burguer, fries and sauces'
                />
            </div>
            <div className='foddListItem'>
                <FoodItem
                    itemName='EatWell'
                    quantity='1'
                    foodDescription='Avocado salad, toasted bread and fried egg. A healthy and tasty way to begin the day.'
                    imageSrc='https://i.ibb.co/VMTS5ck/Image-3.png'
                    imageAlt='avocado toasted bread and fraid egg'
                />
            </div>
            <div className='foddListItem'>
                <FoodItem
                    itemName='Tutti Frutti  '
                    quantity='2-4 people'
                    foodDescription='Kiwi, strawberries, apple, pear, papaya... All those flavors at once in your mouth!'
                    imageSrc='https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/07/ensalada-de-frutas-de-temporada-para-el-desayuno.jpg'
                    imageAlt='fruit salad'
                />
            </div>
            <div className='foddListItem'>
                <FoodItem
                    itemName='Golden Rice'
                    quantity='3-5 people'
                    foodDescription='Titanic shrimps on the best asian rice you will ever try. More than enough to feed an entire family!'
                    imageSrc='https://www.restaurantedragonoriental.com/images/cabecero-chowfan2.jpg'
                    imageAlt='avocado toasted bread and fraid egg'
                />
            </div>
            <div className='foddListItem'>
                <FoodItem
                    itemName='Burrito Madness'
                    quantity='2 people'
                    foodDescription='Because hamburguers are not the only way a meal can taste good when you eat it all at once on each bite. Meat, vegetables, cheese and love.'
                    imageSrc='https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/01/09213530/RFB-2312-1-burrito.jpg'
                    imageAlt='avocado toasted bread and fraid egg'
                />
            </div>
            <div className='foddListItem'>
                <FoodItem
                    itemName='Burguer Monster'
                    quantity='1'
                    foodDescription='Burguer, fries and sauces. Nothing more american than that!'
                    imageSrc='https://i.ibb.co/1dDXHMS/Image-2.png'
                    imageAlt='A burguer, fries and sauces'
                />
            </div>
            <div className='foddListItem'>
                <FoodItem
                    itemName='EatWell'
                    quantity='1'
                    foodDescription='Avocado salad, toasted bread and fried egg. A healthy and tasty way to begin the day.'
                    imageSrc='https://i.ibb.co/VMTS5ck/Image-3.png'
                    imageAlt='avocado toasted bread and fraid egg'
                />
            </div>
            <div className='foddListItem'>
                <FoodItem
                    itemName='Pizza Planet'
                    quantity='2-4 people.'
                    foodDescription='The old classic italian favorite. Perfect for any kind of situation.'
                    imageSrc='https://tvpacifico.mx/recetas/intranet/images/recipes/330-349.jpg'
                    imageAlt='a pizza'
                />
            </div>
        </div>
    )
}

export default FoodList