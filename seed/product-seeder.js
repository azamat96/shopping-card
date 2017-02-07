var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://s-media-cache-ak0.pinimg.com/originals/13/27/a7/1327a70ac5747e4aca1c1426a947a3e9.jpg',
        title: 'Assasins Video Game',
        description: 'Awesome Game!',
        price: 10
    }),
    new Product({
        imagePath: 'http://www.gadgetreview.com/wp-content/uploads/2013/08/GTA-V-big.jpg',
        title: 'Grant Theft Auto',
        description: 'Sure, you can rampage with whatever weapons and ammo you find, but the real joy comes when you’ve got several platoons chasing you down while you take out tanks with a rocket launcher. I really wanted to see how the new game responds to an overpowered and near immortal homicidal maniac, unfortunately, I was unable to find any cheats providing all weapons and unlimited ammo, but there are a few bugs that ',
        price: 20
    }),
    new Product({
        imagePath: 'https://media.easports.com/content/www-easports/ru_RU/fifa/news/2015/fifa-16-reasons/_jcr_content/headerImages/image.img.jpg',
        title: 'FIFA 2016',
        description: 'Sure, you can rampage with whatever weapons and ammo you find, but the real joy comes when you’ve got several platoons chasing you down while you take out tanks with a rocket launcher. I really wanted to see how the new game responds to an overpowered and near immortal homicidal maniac, unfortunately, I was unable to find any cheats providing all weapons and unlimited ammo, but there are a few bugs that ',
        price: 30
    }),
    new Product({
        imagePath: 'https://www.ea.com/content/c-needforspeednolimits/en_US/news/race-on-the-edge/_jcr_content/image.adaptive.full.medium..jpg',
        title: 'Need for Speed No Limits',
        description: 'Sure, you can rampage with whatever weapons and ammo you find, but the real joy comes when you’ve got several platoons chasing you down while you take out tanks with a rocket launcher. I really wanted to see how the new game responds to an overpowered and near immortal homicidal maniac, unfortunately, I was unable to find any cheats providing all weapons and unlimited ammo, but there are a few bugs that ',
        price: 50
    })
]

var done=0;
for(var i=0; i < products.length; i++){
    products[i].save(function(err, result) {
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}