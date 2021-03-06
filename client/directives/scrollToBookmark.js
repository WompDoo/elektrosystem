var scrollToBookmark = angular.module('scrollToBookmark', []);

scrollToBookmark.directive('scrollToBookmark', function(){
    return{
        link: function(scope, element, attrs){
            var value = attrs.scrollToBookmark;
            element.click(function(){
                scope.$apply(function(){
                    var selector = "[scroll-bookmark="+value+"]";
                    var element = $(selector);
                    if(element.length){
                        $('body, html').animate({scrollTop: element.offset().top}, "slow");
                        return false;
                    }
                })
            });

        }
    }
})