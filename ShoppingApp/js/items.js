var app = angular.module('app',[]);
app.controller('ctrl',function($scope){

  $scope.cartItems = [];
  $scope.totallabel = 'Your cart is empty!';

  $scope.men = true;
  $scope.cartTable = true;
  $scope.women = true;
  $scope.kids = true;
  $scope.electronics = true;
  $scope.isPayDisabled = true;
  $scope.quantity = 1;
  $scope.numOfCartItems = $scope.cartItems.length;

  var itemsList =[{
    'id':'electronics',
    'url' : 'images/electronics/mac.jpg',
    'name' : 'Macbook Air A1466 - 13- i7 8gb 512',
    'mrp' : 48000,
    'discount': 10
  }, {
    'id':'men',
    'url' : 'images/men/mencasual.jpg',
    'name' : 'Park Avenue Men Formal Shirt',
    'mrp' : 1930,
    'discount': 20
  }, {
    'id':'women',
    'url' : 'images/women/womenShirt.jpg',
    'name' : 'POISON IVY women casual white shirt',
    'mrp' : 1699,
    'discount': 15
  }, {
    'id':'men',
    'url' : 'images/men/mentees.jpg',
    'name' : 'Android Black Tshirt ',
    'mrp' : 485,
    'discount': 5
  }, {
    'id':'kids',
    'url' : 'images/kids/kidsShirt.jpg',
    'name' : 'Little Kangaroos Black Full Sleeves Shirt',
    'mrp' : 2100,
    'discount': 10
  }, {
    'id':'electronics',
    'url' : 'images/electronics/samsung.jpg',
    'name' : 'Samsung Galaxy A8+ (Black, 6GB RAM + 64GB Memory)',
    'mrp' : 30990,
    'discount': 20
    }, {
    'id':'electronics',
    'url' : 'images/electronics/Bosch.jpeg',
    'name' : 'Bosch 12 Place Setting Dishwasher (SMS40E32EU, White)',
    'mrp' : 26000,
    'discount': 11
  }, {
    'id':'men',
    'url' : 'images/men/menkurta.jpg',
    'name' : 'Black Kurta With Rust Koti',
    'mrp' : 15930,
    'discount': 30
    }, {
    'id':'men',
    'url' : 'images/men/menshoes.jpg',
    'name' : 'Red Tape Men Derbys Leather Formal Shoes',
    'mrp' : 1589,
    'discount': 2
  }, {
    'id':'women',
    'url' : 'images/women/womenjumpsuits.jpeg',
    'name' : 'Harpa Women Black Jumpsuits',
    'mrp' : 3568,
    'discount': 8
  }, {
    'id':'electronics',
    'url' : 'images/electronics/speaker.jpg',
    'name' : 'PORTABLE WATERPROOF BLUETOOTH SPEAKER',
    'mrp' : 375,
    'discount': 25
  }, {
    'id':'women',
    'url' : 'images/women/womensneakers.jpeg',
    'name' : 'Cool Women White Sneakers',
    'mrp' : 1299,
    'discount': 10
  }, {
    'id':'kids',
    'url' : 'images/kids/bag.png',
    'name' : 'Teddy Blue Backpack',
    'mrp' : 956,
    'discount': 5
  }, {
    'id':'kids',
    'url' : 'images/kids/kurta.jpg',
    'name' : 'Boy Kurta Payjama',
    'mrp' : 2589,
    'discount': 20
  },{
    'id':'men',
    'url':'images/men/lee-tapered-jeans.png',
    'name':'LEE MEN MODERN SERIES SLIM-FIT TAPERED-LEG JEAN',
    'mrp':2599,
    'discount': 12
  }, {
    'id':'women',
    'url' : 'images/women/womengucci.jpeg',
    'name' : 'Gucci Women Handbag',
    'mrp' : 12569,
    'discount': 25
  }, {
    'id':'women',
    'url' : 'images/women/womenHighLowDress.jpeg',
    'name' : 'Zara Women High Low Dress',
    'mrp' : 499,
    'discount': 5
  }, {
    'id':'kids',
    'url' : 'images/kids/romper.png',
    'name' : 'Suspender Style Blue Romper with Cap',
    'mrp' : 769,
    'discount': 15
  }, {
    'id':'kids',
    'url' : 'images/kids/ps.jpg',
    'name' : 'Horizon Zero Dawn (PS4)',
    'mrp' : 1550,
    'discount': 20
  }, {
    'id':'electronics',
    'url' : 'images/electronics/trimmer.jpg',
    'name' : 'Philips BT1212/15 Beard Trimmer (Green)',
    'mrp' : 899,
    'discount': 30
  },{
    'id':'men',
    'url':'images/men/StraightCollarBlackShirt.jpg',
    'name': 'Straight Collar Black Shirt',
    'mrp': 3599,
    'discount': 10
  }
];

  $scope.items = itemsList;

  //function is used to add item to cart
  $scope.addToCart = function(item,quantity){
    if(quantity>0 && quantity<5){
      var obj = {
        'name':item.name,
        'quantity':quantity,
        'price':item.mrp/100*(100-item.discount),
        'url':item.url,
        'id':item.id};
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

  //function is used to remove item from cart
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

  //function is used to show list view if items in body
  $scope.showListView = function(){
    $scope.gridDiasabled = false;
    $scope.listDiasabled = true;
    $('.eachItem').css({'width':'100%','height':'400px'});
    $('.eachItemDiscount').css({'top':'52%','right':'-18%'});
    $('.discountLabel').css({'top':'59%','right':'48%'});
    $('.eachItemDeal').css({'top':'58%','right':'-2.5%'});
    $('.dealLabel').css({'top':'58%','right':'-2%'});
    $('img.eachItemImage').css({'width': '36%', 'left': '31%','height': '60%','top':'0%'});
    $('.addToCartButtons').css({'top': '78%','width':'72%','left':'3%','height':'10%'});
    $('.quantityLabel').css({'top':'66%','right':'-30%'});
    $('.quantityNumber').css({'top':'66%','width':'4%','right':'-31%'});
    $('.priceLabel').css({'top':'59%','left':'-51%'});
    $('.eachItemPrice').css({'top':'59%','left':'-50%'});
  };

  //function is used to show grid view if items in body
  $scope.showGridView = function(){
    $scope.gridDiasabled = true;
    $scope.listDiasabled = false;
    $('.eachItem').css({'width':'32%','height':'350px'});
    $('.eachItemDiscount').css({'top':'41%','right':'25%'});
    $('.discountLabel').css({'top':'41%','right':'28%'});
    $('.eachItemDeal').css({'top':'40%','right':'8%'});
    $('.dealLabel').css({'top':'40%','right':'11%'});
    $('img.eachItemImage').css({'width': '78%', 'left': '10%','height': '45%','top':'4%'});
    $('.addToCartButtons').css({'top':'73%','width':'115%','left':'-7.5%'});
    $('.quantityLabel').css({'top':'72%','right':'13%'});
    $('.quantityNumber').css({'top':'72%','width':'10%','right':'10%'});
    $('.priceLabel').css({'top':'35%','left':'15%'});
    $('.eachItemPrice').css({'top':'35%','left':'18%'});
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