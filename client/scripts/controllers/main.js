/**
 * Created by sibusiso on 2014/08/05.
 */
/*var dapperApp = angular.module('dapperApp',[]);*/

dapperApp.controller('mainController', function($scope, $modal, $log, $rootScope){

    $rootScope.days = ['Sunday','Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];
    $scope.centerImageResource ="/images/home/" + $scope.days[new Date().getDay()]+"-Square-A.jpg";
    $scope.logoImageResource ="/images/home/logo.png";
    $scope.clickedimgUrl ='';
    $log.info('today is day number ' + new Date().getDay()+' of the week');
     $log.info('today is ' + new Date());
    $scope.switchImage = function(selectedImage) {
        $scope.centerImageResource = "/images/home/" + $rootScope.days[selectedImage]+"-Square-A.jpg";

    };

    $scope.message = 'Everyone come and see how good I look!';
    $scope.howmessage = 'How it works content';
    $scope.journalmessage = 'The Journal content';
    $scope.abtmessage = 'About us content';
    
      $scope.open = function (size,selectedIndex) {
        
        $rootScope.clickedDayIndex = selectedIndex;
        var modalInstance = $modal.open({
          templateUrl: '/views/modal-carousel.html',
          controller: ModalInstanceCtrl,
          size: size,
          resolve: {
            days: function () {
              return $scope.days;
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date().getDay());
        });
      };
});

function CarouselDemoCtrl($scope,$rootScope) {
  $scope.myInterval = -1;
  var slides = [];
      $scope.slides = [];
  $scope.addSlide = function() {
    var imgBaseUrl ='/images/home';
   
    slides.push({
      image: imgBaseUrl + '/Sunday.jpg',
          active: false,
         day: 0,
      text: 'Sunday:RELAX',
         detail1:'Bring your kids to the beach in the morning. Go to the grocers with your partner to plan what to cook for your two-person candlelight dinner tonight. Or meet a special someone or friends for a movie or brunch.',
        detail2:'Whatever you decide to do, you need a shirt that is comfortable for the day; that exhibits the air of nonchalance or casual elegance without looking jaded or unkempt. You’re comfortable in your own skin, and the light, airy material projects the ease with which others can approach you. The earthy colours create a familial feeling, putting whoever you are with at complete ease with you.',
          detail3:'You’re just a click away for that Sunday shirt – yes, that click is right '
    });
      slides.push({
      image: imgBaseUrl + '/Monday.jpeg',
          active: false,
           day: 1,
      text: 'Monday:IMPRESS',
        detail1:'You’ve got a big presentation, or an important meeting. Or maybe you just want to set the right tone for the rest of your week.',
        detail2:'On ‘big event’ days, you want a shirt that reinforces that air of calm authority you are projecting (or you could just be too nervous to speak, but no one else needs to know that). You’re quietly assertive, your wardrobe, clearly tailored, makes use of a simple solid palette, clean lines and French cuffs to cut an effortlessly powerful sharp silhouette.',
          detail3:'Take that first step to impress '
    });
      slides.push({
      image: imgBaseUrl + '/Tuesday.jpeg',
          active: false,
           day: 2,
      text: 'Tuesday:DAPPER',
        detail1:'Today, you connect. You’re taking a client out to lunch, or meeting them for drinks after hours. You’re not in the boardroom, but you know you’re still at work.',
        detail2:'On days like these you aim for that perfect balance of personality and professionalism. You’re poised and relaxed, and you put the people around you at ease, inviting conversation and compliments with your understatedly stylish shirt. Concealed collar buttons and shirt piping that are just enough to pique people’s interest and leave your mark on the occasion.',
          detail3:'Step out and into your Dapper mode '
    });
      slides.push({
      image: imgBaseUrl + '/Wednesday.jpg',
          active: false,
           day: 3,
      text: 'Wedneday:FLAUNT',
        detail1:'It’s midweek. You’re anticipating a fun night out with the boys or an intense night out with the ladies. Either way, today your shirt is all about you.',
        detail2:'You’re charismatic, blending in at the pub, or standing out at the club with a shirt that draws people irresistibly to you. They can’t resist the bold colours or flirty florals beneath the cuff - hinting that under your easy smile lies a maverick streak that guarantees an interesting ride.',
          detail3:'Got the personality to flaunt? Match it with a shirt '
    });
      slides.push({
      image: imgBaseUrl + '/Thursday.jpg',
          active: false,
           day: 4,
      text: 'Thursday:CONFIDENT',
         detail1:'You’re late. Or you will be if you aren’t out of the house in twelve minutes. Also, you can’t remember what day of the week it is, and what you have on later in the day.',
        detail2:'Today you’ll pull off a miracle. You’ll grab one of your DA classics, fix your hair, and make it to work on time; looking so put-together that you look like you spent all morning getting dressed. With a balance of subdued shirt colour with contrasting inner collar and striking sleeve plackets, your DA classic, like you, is always good to go.',
          detail3:'Call it The Classic or your miracle shirt – whatever it is, you can start creating it '
    });
      slides.push({
      image: imgBaseUrl + '/Friday.jpg',
        active: false,
           day: 5,
      text: 'Friday:UNWIND',
        detail1:'It’s dress-down Friday. Whether you have plans for after-work or not, this is the day to break out of your formal wear and trade in your leather oxfords for suede loafers.',
        detail2:'All week long you’ve deferred to The Man, though you’ve done it in style. Today, you’re wearing – you. More smart than casual, but sassy enough to stand out, your DA shirt charms with its distinct personality be it in your mandarin collar, daring prints or polka dots. People will ask you all day, where you got your shirt from, and you’ll tell them, because you know this one was – literally – made for you; Quirky, interesting and one-of-a-kind, oh, and your shirt is too.',
          detail3:'Know the perfect dress-down look for yourself? We’ll stitch it together right '
    });
       slides.push({
      image: imgBaseUrl + '/Saturday.jpg',
        active: false,
           day: 6,
      text: 'Saturday:CHARM',
         detail1:'Time to meet your friends for coffee, catch up with the buddies over lunch, look for books and be looked upon in the afternoons, and to take that special someone out to a Michelin rated dinner.',
        detail2:'This is the day where you stand up and be noticed for who you are and not how much you can bring in for your company. Discard the formalities and the clean lines, and let the attitude ooze. Put a small pocket on your left breast. Accentuate the corners and edges of your shirt with flowers. Double the charm with double the collar.',
          detail3:'Get ready to charm and let the creativity flow '
    });
  };
$scope.addSlide();
    var imageLastPart = ['-Square-A.jpg','-Square-B.jpg','-Square-C.jpg'];
 for (var i=0; i<7; i++) {
    if(slides[i].day === $rootScope.clickedDayIndex){
        for (var j=0; j<3; j++) {
            
            $scope.slides.push({
                image: '/images/home/' + $rootScope.days[i]+imageLastPart[j],
                active: slides[i].active,
                day: slides[i].day,
                text: slides[i].text,
                detail1:slides[i].detail1,
                detail2:slides[i].detail2,
                detail3:slides[i].detail3
            });
        }
       
     }
}
};

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

var ModalInstanceCtrl = function ($scope, $modalInstance, days) {

  $scope.days = days;
  $scope.selected = {
    day: $scope.days[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.day);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};