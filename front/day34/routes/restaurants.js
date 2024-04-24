const express = require('express');
const uuid = require(`uuid`);

const resData = require('../util/restaurant-data');

const router = express.Router();

const genId = (() => {
    let xxxx = 'kor';
    let nextId = 1;
    return () => {
        nextId++;
        return xxxx + nextId;
    }
})();

router.get('/restaurants', function(req, res) {

    let order = req.query.order;
    let nextOrder = 'desc';
    // 만약 초기조건이 오름차순도 아니고 내림차순도 아닐때 오름차순으로 지정
    if (order !== 'asc' && order !== 'desc') {
        order = 'asc';
    }

    if (order === 'desc') {
        nextOrder = 'asc';
    }

    const storedRestaurants = resData.getStoredRestaurants();
    // 오름차순 내림차순 조건에 따라 실제로 데이터를 정렬하는 로직입니다.
    storedRestaurants.sort((resA, resB) => {
        // 오름차순 기준임에도 앞에 데이터가 뒤보다 크거나
        // 내림차순 기준임에도 앞의 데이터가 뒤보다 작으면
        // 반환값을 통해 순서가 맞도록 분류(sort)해 줍니다
        if( ( order === 'asc' && resA.name > resB.name ) || ( order === 'dsec' && resA.name < resB.name ) ) {
            return 1
        }
        return -1
    })
    
    res.render('restaurants', {
        numberOfRestaurants: storedRestaurants.length,
        restaurants: storedRestaurants,
        nextOrder: nextOrder
    })

    res.render()
})
router.get('/restaurants/:id', (req, res) => {
    const restaurantId = req.params.id;

    const storedRestaurants = resData.getStoredRestaurants();
    for (const restaurant of storedRestaurants) {
        if (restaurant.id === restaurantId) {
            res.render('restaurant-detail', {restaurant: restaurant})
        }
    }
    res.render('404');
})

router.get('/recommend', function(req, res) {
    res.render('recommend')
})

router.post('/recommend', function(req,res) {
    const restaurant = req.body;
    restaurant.id = genId;
    const Restaurants = resData.getStoredRestaurants();

    Restaurants.push(restaurant);

    resData.storedRestaurants(Restaurants);

    res.redirect('/confirm')

})


router.get('/confirm', function(req, res) {
    res.render('confirm')
})

module.exports = router;