function removeFocusFx(){$(".js-alt-active").remove()}function highlightSelected(e){e.addClass($classSelected).siblings().removeClass($classSelected)}function showArrows(){$($prevButton).show(),$($nextButton).show()}function hidePrevArrow(){$($prevButton).hide()}function hideNextArrow(){$($nextButton).hide()}function loadCarouselSlide(){$($currentSlide).empty(),$activeLink.startsWith("https://youtube.com/")?($($currentSlide).append($iframeHtml),$($currentSlide).find("iframe").attr("src",$activeLink)):($($currentSlide).append($imageHtml),$($currentSlide).find("img").attr("src",$activeLink)),$($currentSlide).append($captionHtml),$($currentSlide).find("figcaption").text($activeCaption),$currentItemIndex===$firstItemIndex?hidePrevArrow():$currentItemIndex===$lastItemIndex?hideNextArrow():showArrows()}function setIndex(){$prevItemIndex=$currentItemIndex-1,$nextItemIndex=$currentItemIndex+1}function showOverlay(e){function t(){$("body").prepend($overlayHtml),$($overlay).hide(),$($overlay).append($closeHtml+$carouselHtml),$($carousel).append($slidesWrapperHtml),$($slidesWrapper).append($slideHtml+$prevButtonHtml+$nextButtonHtml)}function n(e){$activeLink=e.find("a").attr("href"),$activeCaption=e.find("img").attr("title")}function i(){function e(e){function t(){$($currentSlide).fadeOut($singleDuration).fadeIn($singleDuration)}highlightSelected(e),n(e),t(),setTimeout(loadCarouselSlide,$singleDuration),setIndex()}function t(){$currentItemIndex>$firstItemIndex&&(showArrows(),$currentItemIndex-=1,e($($selectedItem).prev())),$currentItemIndex===$firstItemIndex&&hidePrevArrow()}function i(){$lastItemIndex>$currentItemIndex&&(showArrows(),$currentItemIndex+=1,e($($selectedItem).next())),$currentItemIndex===$lastItemIndex&&hideNextArrow()}function r(){function e(){$($overlay).remove()}$($overlay).fadeOut($doubleDuration),setTimeout(e,$doubleDuration),$(document).off("keydown")}$($prevButton).click(function(){t()}),$($nextButton).click(function(){i()}),$($closeButton).click(function(){r()}),$(document).on("keydown",function(e){switch(e.which){case 37:t();break;case 39:i();break;case 27:r();break;default:return}})}t(),highlightSelected(e),n(e),loadCarouselSlide(),$($overlay).fadeIn($doubleDuration),i()}var $input="#search",$inputValue,$imageName,$selectedItem=".selected",$classSelected="selected",$galleryItem=".gallery-item",$gallery="#image-gallery",$totalItems=$("li").size(),$currentItemIndex,$prevItemIndex,$nextItemIndex,$firstItemIndex=0,$lastItemIndex=$totalItems-1,$hoverTile,$activeLink,$activeCaption,$overlay="#js-image-overlay",$carousel="#js-carousel",$slidesWrapper="#js-carousel-slides",$currentSlide=".current-slide",$overlayHtml='<div id="js-image-overlay"></div>',$closeHtml='<button id="js-close-overlay" class="close-overlay">Close overlay</button>',$carouselHtml='<div id="js-carousel" class="carousel"></div>',$slidesWrapperHtml='<div id="js-carousel-slides" class="carousel-slides">',$slideHtml='<div class="carousel-slide current-slide"></div>',$imageHtml="<img>",$iframeHtml='<div class="videoWrapper"><iframe frameborder="0"></iframe></div>',$captionHtml="<figcaption></figcaption>",$prevButtonHtml='<button id="previous-slide" class="carousel-control left-control">Previous</button>',$nextButtonHtml='<button id="next-slide" class="carousel-control right-control">Next</button>',$prevButton="#previous-slide",$nextButton="#next-slide",$closeButton="#js-close-overlay",$singleDuration=200,$doubleDuration=400;$($input).keyup(function(){$inputValue=$(this).val(),$($gallery).find("img").each(function(){$imageName=$(this).attr("title"),$imageName.toLowerCase().indexOf($inputValue.toLowerCase())<0?$(this).parent().parent().fadeOut($doubleDuration):$(this).parent().parent().fadeIn($doubleDuration)})}),$($galleryItem).click(function(e){$currentItemIndex=$($(this)).index(),e.preventDefault(),showOverlay($(this)),setIndex()}),$($galleryItem).mouseover(function(){$hoverTile='<p class="js-alt-active">'+$(this).find("img").attr("alt")+"</p>",$(this).prepend($hoverTile)}),$($galleryItem).mouseout(function(){removeFocusFx()}),$($galleryItem+" a").focus(function(){$hoverTile='<p class="js-alt-active">'+$(this).find("img").attr("alt")+"</p>",$(this).prepend($hoverTile)}),$($galleryItem+" a").blur(function(){removeFocusFx()});