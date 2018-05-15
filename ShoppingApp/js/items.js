var app = angular.module('app',[]);
app.controller('ctrl',function($scope){

  $scope.cartItems = [];
  $scope.totallabel = 'Your cart is empty!';

  var itemsList =[{
      'id':'electronics',
      'url' : 'images/electronics/mac.jpg',
      'name' : 'Macbook Air A1466 - 13- i7 8gb 512',
      'price' : 48000
    }, {
      'id':'men',
      'url' : 'images/men/mencasual.jpg',
      'name' : 'Park Avenue Men Formal Shirt',
      'price' : 1930
    }, {
      'id':'women',
      'url' : 'images/women/womenShirt.jpg',
      'name' : 'POISON IVY women casual white shirt',
      'price' : 1699
    }, {
      'id':'men',
      'url' : 'images/men/mentees.jpg',
      'name' : 'Android Black Tshirt ',
      'price' : 485
    }, {
      'id':'kids',
      'url' : 'images/kids/kidsShirt.jpg',
      'name' : 'Little Kangaroos Black Full Sleeves Shirt',
      'price' : 2100
    }, {
      'id':'electronics',
      'url' : 'images/electronics/samsung.jpg',
      'name' : 'Samsung Galaxy A8+ (Black, 6GB RAM + 64GB Memory)',
      'price' : 30990
      }, {
      'id':'electronics',
      'url' : 'images/electronics/Bosch.jpeg',
      'name' : 'Bosch 12 Place Setting Dishwasher (SMS40E32EU, White)',
      'price' : 26000
    }, {
      'id':'men',
      'url' : 'images/men/menkurta.jpg',
      'name' : 'Black Kurta With Rust Koti',
      'price' : 15930
      }, {
      'id':'men',
      'url' : 'images/men/menshoes.jpg',
      'name' : 'Red Tape Men Derbys Leather Formal Shoes',
      'price' : 1589
    }, {
      'id':'women',
      'url' : 'images/women/womenjumpsuits.jpeg',
      'name' : 'Harpa Women Black Jumpsuits',
      'price' : 3568
    }, {
      'id':'electronics',
      'url' : 'images/electronics/speaker.jpg',
      'name' : 'PORTABLE WATERPROOF BLUETOOTH SPEAKER',
      'price' : 375
    }, {
      'id':'women',
      'url' : 'images/women/womensneakers.jpeg',
      'name' : 'Cool Women White Sneakers',
      'price' : 1299
    }, {
      'id':'kids',
      'url' : 'images/kids/bag.png',
      'name' : 'Teddy Blue Backpack',
      'price' : 956
    }, {
      'id':'kids',
      'url' : 'images/kids/kurta.jpg',
      'name' : 'Boy Kurta Payjama',
      'price' : 2589
    },{
      'id':'men',
      'url':'images/men/lee-tapered-jeans.png',
      'name':'LEE MEN MODERN SERIES SLIM-FIT TAPERED-LEG JEAN',
      'price':2599
    }, {
      'id':'women',
      'url' : 'images/women/womengucci.jpeg',
      'name' : 'Gucci Women Handbag',
      'price' : 12569
    }, {
      'id':'women',
      'url' : 'images/women/womenHighLowDress.jpeg',
      'name' : 'Zara Women High Low Dress',
      'price' : 499
    }, {
      'id':'kids',
      'url' : 'images/kids/romper.png',
      'name' : 'Suspender Style Blue Romper with Cap',
      'price' : 769
    }, {
      'id':'kids',
      'url' : 'images/kids/ps.jpg',
      'name' : 'Horizon Zero Dawn (PS4)',
      'price' : 1550
    }, {
      'id':'electronics',
      'url' : 'images/electronics/trimmer.jpg',
      'name' : 'Philips BT1212/15 Beard Trimmer (Green)',
      'price' : 899
    },{
      'id':'men',
      'url':'images/men/StraightCollarBlackShirt.jpg',
      'name': 'Straight Collar Black Shirt',
      'price': 3599
    }
  ];

  $scope.men = true;
  $scope.cartTable = true;
  $scope.women = true;
  $scope.kids = true;
  $scope.electronics = true;
  $scope.items = itemsList;
  $scope.isPayDisabled = true;
  $scope.quantity = 1;
  $scope.numOfCartItems = $scope.cartItems.length;

  $scope.addToCart = function(item,quantity){
    if(quantity>0 && quantity<5){
      var obj = { 'name':item.name, 'quantity':quantity,'price':item.price,'url':item.url,'id':item.id};
      var count = 0;
      angular.forEach($scope.cartItems,function(key){
        if(key.name === item.name){
          key.quantity++;
          count++;
          return false;
        }
      });
      if (count === 0) {
        $scope.cartItems.push(obj);
      }
    }
    var totalprice = 0;
    angular.forEach($scope.cartItems,function(key){
      totalprice += key.quantity * key.price;
    });
    $scope.total = totalprice;
    if($scope.cartItems.length >0){
      $scope.totallabel = 'Total Rs.';
      $scope.cartTable = false;
    }
    else{
      $scope.cartTable = true;
    }
    $scope.numOfCartItems = $scope.cartItems.length;
    if($scope.numOfCartItems>0){
      $scope.isPayDisabled = false;
    }
  };

  $scope.removeFromCart= function(id){
    angular.forEach($scope.cartItems,function(key){
      if(key.id === id){
        $scope.cartItems.pop(key);
      }
    });
    if($scope.cartItems.length>0){
      $scope.totallabel = 'Total Rs.';
      $scope.cartTable = false;
      $scope.isPayDisabled = false;
    }
    else{
      $scope.cartTable = true;
      $scope.isPayDisabled = true;
      $scope.total = '';
      $scope.totallabel = 'Your cart is empty!';
    }
    var totalprice = 0;
    angular.forEach($scope.cartItems,function(key){
      totalprice += key.quantity * key.price;
    });
    $scope.total = totalprice;
    $scope.numOfCartItems = $scope.cartItems.length;
  };

  $scope.showListView = function(){
    $scope.gridDiasabled = false;
    $scope.listDiasabled = true;
    $('.eachItem').css({'width':'100%','height':'400px'});
    $('img.eachItemImage').css({'width': '40%', 'left': '30%','height': '75%','top':'0%'});
    $('.addToCartButtons').css({'right':'0%','top':'90%'});
    $('.quantityLabel').css({'top':'73%'});
    $('.quantityNumber').css({'top':'73%','width':'8%'});
    $('.priceLabel').css({'top':'73%','right':'32%'});
    $('.eachItemPrice').css({'top':'73%','right':'32%'});
  };

  $scope.showGridView = function(){
    $scope.gridDiasabled = true;
    $scope.listDiasabled = false;
    $('.eachItem').css({'width':'32%','height':'350px'});
    $('img.eachItemImage').css({'width': '78%', 'left': '10%','height': '50%','top':'4%'});
    $('.addToCartButtons').css({'right':'14%','top':'80%'});
    $('.quantityLabel').css({'top':'57%'});
    $('.quantityNumber').css({'top':'57%','width':'10%'});
    $('.priceLabel').css({'top':'58%','right':'0%'});
    $('.eachItemPrice').css({'top':'58%','right':'0%'});
  };

  $scope.$watchGroup(['price5', 'price15','price50','price150','pricemax'], function(){
    angular.forEach($scope.items,function(key){
      if (key.price < 500) {
        $scope.price5 = key.price;
      } else if(key.price > 500 && key.price<1500){
        $scope.price15 = key.price;
      } else if(key.price > 1500 && key.price<5000){
        $scope.price50 = key.price;
      } else if(key.price > 5000 && key.price<15000){
        $scope.price150 = key.price;
      } else{
        $scope.pricemax = key.price;
      }
    });
  });

  $scope.check = function (price) {
    if (price<=500) {
      $scope.cond1 = true;
      return $scope.cond1;
    }
    else if(price<=1500) {
      $scope.cond2 = true;
      return $scope.cond2;
    }
    else if(price<=5000 ) {
      $scope.cond3 = true;
      return $scope.cond3;
    }
    else if(price<=15000) {
      $scope.cond4 = true;
      return $scope.cond4;
    }
    else{
      $scope.cond5 = true;
      return $scope.cond5;
    }
  };
});