(()=>{function e(e,a){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,a){if(e){if("string"==typeof e)return t(e,a);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,a):void 0}}(e))||a&&e&&"number"==typeof e.length){o&&(e=o);var n=0,s=function(){};return{s:s,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,l=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return i=e.done,e},e:function(e){l=!0,r=e},f:function(){try{i||null==o.return||o.return()}finally{if(l)throw r}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=e[a];return o}!function(t){"use strict";t.ajaxSetup({headers:{"X-CSRF-TOKEN":t('meta[name="csrf-token"]').attr("content")}});var a=function(e){window.showAlert("alert-danger",e)},o=function(e){window.showAlert("alert-success",e)},n=function(e){void 0!==e.errors&&e.errors.length?s(e.errors):void 0!==e.responseJSON?void 0!==e.responseJSON.errors?422===e.status&&s(e.responseJSON.errors):void 0!==e.responseJSON.message?a(e.responseJSON.message):t.each(e.responseJSON,(function(e,o){t.each(o,(function(e,t){a(t)}))})):a(e.statusText)},s=function(e){var o="";t.each(e,(function(e,t){""!==o&&(o+="<br />"),o+=t})),a(o)};window.showAlert=function(e,a){if(e&&""!==a){var o=Math.floor(1e3*Math.random()),n='<div class="alert '.concat(e,' alert-dismissible" id="').concat(o,'">\n                <span class="close fa fa-times-circle" data-dismiss="alert" aria-label="close"></span>\n                <i class="fas fa-')+("alert-success"===e?"check-circle":"exclamation-circle")+' message-icon"></i>\n                '.concat(a,"\n            </div>");t("#alert-container").append(n).ready((function(){window.setTimeout((function(){t("#alert-container #".concat(o)).remove()}),6e3)}))}};var r="rtl"===t("body").prop("dir");t(document).ready((function(){window.onBeforeChangeSwatches=function(e){t(".add-to-cart-form .error-message").hide(),t(".add-to-cart-form .success-message").hide(),t(".number-items-available").html("").hide(),e&&e.attributes&&t(".add-to-cart-form button[type=submit]").prop("disabled",!0).addClass("btn-disabled")},window.onChangeSwatchesSuccess=function(e){if(t(".add-to-cart-form .error-message").hide(),t(".add-to-cart-form .success-message").hide(),e){var a=t(".add-to-cart-form button[type=submit]");if(e.error)a.prop("disabled",!0).addClass("btn-disabled"),t(".number-items-available").html('<span class="text-danger">('+e.message+")</span>").show(),t(".hidden-product-id").val("");else{t(".add-to-cart-form").find(".error-message").hide(),t(".product-price ins span.text-brand").text(e.data.display_sale_price),e.data.sale_price!==e.data.price?(t(".product-price ins span.old-price").text(e.data.display_price).show(),t(".product-price span.save-price .percentage-off").text(e.data.sale_percentage),t(".product-price span.save-price").show()):(t(".product-price ins span.old-price").hide(),t(".product-price span.save-price").hide()),t(".sku_wrapper .value").text(e.data.sku),t(".hidden-product-id").val(e.data.id),a.prop("disabled",!1).removeClass("btn-disabled"),e.data.error_message?(a.prop("disabled",!0).addClass("btn-disabled"),t(".number-items-available").html('<span class="text-danger">('+e.data.error_message+")</span>").show()):e.data.success_message?t(".number-items-available").html('<span class="text-success">('+e.data.success_message+")</span>").show():t(".number-items-available").html("").hide();var o=e.data.unavailable_attribute_ids||[];t(".attribute-swatch-item").removeClass("pe-none"),t("option.product-filter-item").prop("disabled",!1),o&&o.length&&o.map((function(e){var a=t('.attribute-swatch-item[data-id="'+e+'"]');a.length?(a.addClass("pe-none"),a.find("input").prop("checked",!1)):(a=t('option.product-filter-item[data-id="'+e+'"]')).length&&a.prop("disabled","disabled").prop("selected",!1)}));var n=t(".product-image-slider");n.slick("unslick");var s="";e.data.image_with_sizes.origin.forEach((function(e){s+='<figure class="border-radius-10"><img src="'+e+'" alt="image"/></figure>'})),n.html(s),n.slick({slidesToShow:1,slidesToScroll:1,rtl:r,arrows:!1,fade:!1,asNavFor:".slider-nav-thumbnails"});var i=t(".slider-nav-thumbnails");i.slick("unslick");var l="";e.data.image_with_sizes.thumb.forEach((function(e){l+='<div class="item"><img src="'+e+'" alt="image"/></div>'})),i.html(l),i.slick({slidesToShow:5,slidesToScroll:1,rtl:r,asNavFor:".product-image-slider",dots:!1,focusOnSelect:!0,prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'}),i.find(".slick-slide").removeClass("slick-active"),i.find(".slick-slide").eq(0).addClass("slick-active"),n.on("beforeChange",(function(e,t,a,o){var n=o;i.find(".slick-slide").removeClass("slick-active"),i.find(".slick-slide").eq(n).addClass("slick-active")})),n.on("beforeChange",(function(e,a,o,n){var s=t(a.$slides[n]).find("img");t(".zoomWindowContainer, .zoomContainer").remove(),t(s).elevateZoom({zoomType:"inner",cursor:"crosshair",zoomWindowFadeIn:500,zoomWindowFadeOut:750})})),n.length&&n.find(".slick-active img").elevateZoom({zoomType:"inner",cursor:"crosshair",zoomWindowFadeIn:500,zoomWindowFadeOut:750})}}},t(document).on("click",".newsletter-form button[type=submit]",(function(e){e.preventDefault(),e.stopPropagation();var s=t(this);s.addClass("button-loading"),t.ajax({type:"POST",cache:!1,url:s.closest("form").prop("action"),data:new FormData(s.closest("form")[0]),contentType:!1,processData:!1,success:function(e){s.removeClass("button-loading"),"undefined"!=typeof refreshRecaptcha&&refreshRecaptcha(),e.error?a(e.message):(s.closest("form").find("input[type=email]").val(""),o(e.message))},error:function(e){"undefined"!=typeof refreshRecaptcha&&refreshRecaptcha(),s.removeClass("button-loading"),n(e)}})})),t(document).on("change",".switch-currency",(function(){t(this).closest("form").submit()})),t(document).on("click",".js-add-to-wishlist-button",(function(e){e.preventDefault();var a=t(this);a.addClass("button-loading"),t.ajax({url:a.data("url"),method:"POST",success:function(e){if(e.error)return a.removeClass("button-loading"),window.showAlert("alert-danger",e.message),!1;window.showAlert("alert-success",e.message),t(".wishlist-count span").text(e.data.count),a.removeClass("button-loading"),a.toggleClass("wis_added"),a.removeClass("button-loading").removeClass("js-add-to-wishlist-button").addClass("js-remove-from-wishlist-button")},error:function(e){a.removeClass("button-loading"),window.showAlert("alert-danger",e.message)}})})),t(document).on("click",".js-remove-from-wishlist-button",(function(e){e.preventDefault();var a=t(this);a.addClass("button-loading"),t.ajax({url:a.data("url"),method:"DELETE",success:function(e){if(e.error)return a.removeClass("button-loading"),window.showAlert("alert-danger",e.message),!1;window.showAlert("alert-success",e.message),t(".wishlist-count span").text(e.data.count),a.removeClass("button-loading"),a.closest("tr").remove(),a.removeClass("js-remove-from-wishlist-button").addClass("js-add-to-wishlist-button")},error:function(e){a.removeClass("button-loading"),window.showAlert("alert-danger",e.message)}})})),t(document).on("click",".js-add-to-compare-button",(function(e){e.preventDefault();var a=t(this);a.addClass("button-loading"),t.ajax({url:a.data("url"),method:"POST",success:function(e){if(e.error)return a.removeClass("button-loading"),window.showAlert("alert-danger",e.message),!1;t(".compare-count span").text(e.data.count),window.showAlert("alert-success",e.message),a.removeClass("button-loading")},error:function(e){a.removeClass("button-loading"),window.showAlert("alert-danger",e.message)}})})),t(document).on("click",".js-remove-from-compare-button",(function(e){e.preventDefault();var a=t(this),o=a.html();a.html(o+"..."),t.ajax({url:a.data("url"),method:"DELETE",success:function(e){if(e.error)return a.text(o),window.showAlert("alert-danger",e.message),!1;t(".compare-count span").text(e.data.count),t(".table__compare").load(window.location.href+" .table__compare > *",(function(){window.showAlert("alert-success",e.message),a.html(o)}))},error:function(e){a.removeClass("button-loading"),window.showAlert("alert-danger",e.message)}})})),t(document).on("click",".add-to-cart-button",(function(e){e.preventDefault();var a=t(this);a.prop("disabled",!0).addClass("button-loading"),t.ajax({url:a.data("url"),method:"POST",data:{id:a.data("id")},dataType:"json",success:function(e){if(a.prop("disabled",!1).removeClass("button-loading").addClass("active"),e.error)return window.showAlert("alert-danger",e.message),!1;window.showAlert("alert-success",e.message),"checkout"===a.prop("name")&&void 0!==e.data.next_url?window.location.href=e.data.next_url:t.ajax({url:window.siteUrl+"/ajax/cart",method:"GET",success:function(e){e.error||(t(".cart-dropdown-wrap").html(e.data.html),t(".mini-cart-icon span").text(e.data.count))}})},error:function(e){a.prop("disabled",!1).removeClass("button-loading"),window.showAlert("alert-danger",e.message)}})})),t(document).on("click",".add-to-cart-form button[type=submit]",(function(e){e.preventDefault(),e.stopPropagation();var a=t(this);t(".hidden-product-id").val()?(a.prop("disabled",!0).addClass("btn-disabled").addClass("button-loading"),t.ajax({type:"POST",cache:!1,url:a.closest("form").prop("action"),data:new FormData(a.closest("form")[0]),contentType:!1,processData:!1,success:function(e){if(a.prop("disabled",!1).removeClass("btn-disabled").removeClass("button-loading"),e.error)return a.removeClass("button-loading"),window.showAlert("alert-danger",e.message),!1;window.showAlert("alert-success",e.message),"checkout"===a.prop("name")&&void 0!==e.data.next_url?window.location.href=e.data.next_url:t.ajax({url:window.siteUrl+"/ajax/cart",method:"GET",success:function(e){e.error||(t(".cart-dropdown-wrap").html(e.data.html),t(".mini-cart-icon span").text(e.data.count))}})},error:function(e){a.prop("disabled",!1).removeClass("btn-disabled").removeClass("button-loading"),n(e,a.closest("form"))}})):a.prop("disabled",!0).addClass("btn-disabled")})),t(document).on("click",".remove-cart-item",(function(e){e.preventDefault();var a=t(this);a.closest("li").addClass("content-loading"),t.ajax({url:a.data("url"),method:"GET",success:function(e){if(a.closest("li").removeClass("content-loading"),e.error)return window.showAlert("alert-danger",e.message),!1;t.ajax({url:window.siteUrl+"/ajax/cart",method:"GET",success:function(a){a.error||(t(".cart-dropdown-wrap").html(a.data.html),t(".mini-cart-icon span").text(a.data.count),window.showAlert("alert-success",e.message))}})},error:function(e){a.closest("li").removeClass("content-loading"),window.showAlert("alert-danger",e.message)}})})),t(document).on("click",".remove-cart-button",(function(e){e.preventDefault();var a=t(this);a.closest(".table--cart").addClass("content-loading"),t.ajax({url:a.data("url"),method:"GET",success:function(e){if(e.error)return window.showAlert("alert-danger",e.message),a.closest(".table--cart").removeClass("content-loading"),!1;t(".section--shopping-cart").load(window.location.href+" .section--shopping-cart > *",(function(){a.closest(".table--cart").removeClass("content-loading"),window.showAlert("alert-success",e.message)})),t.ajax({url:window.siteUrl+"/ajax/cart",method:"GET",success:function(e){e.error||(t(".cart-dropdown-wrap").html(e.data.html),t(".mini-cart-icon span").text(e.data.count))}})},error:function(e){a.closest(".table--cart").removeClass("content-loading"),window.showAlert("alert-danger",e.message)}})})),t(document).on("change",".submit-form-on-change",(function(){t(this).closest("form").submit()}));var s=[],i=function(t){var a,o=new ClipboardEvent("").clipboardData||new DataTransfer,n=e(s);try{for(n.s();!(a=n.n()).done;){var r=a.value;o.items.add(r)}}catch(e){n.e(e)}finally{n.f()}t.files=o.files,l(t)},l=function(e){var a=t(".image-upload__text"),o=t(e).data("max-files"),n=e.files.length;o?(n>=o?a.closest(".image-upload__uploader-container").addClass("d-none"):a.closest(".image-upload__uploader-container").removeClass("d-none"),a.text(n+"/"+o)):a.text(n);var s=t(".image-viewer__list"),r=t("#review-image-template").html();if(s.addClass("is-loading"),s.find(".image-viewer__item").remove(),n){for(var i=n-1;i>=0;i--)s.prepend(r.replace("__id__",i));for(var l=function(t){var a=new FileReader;a.onload=function(e){s.find(".image-viewer__item[data-id="+t+"]").find("img").attr("src",e.target.result)},a.readAsDataURL(e.files[t])},c=n-1;c>=0;c--)l(c)}s.removeClass("is-loading")};function c(e){e.closest(".table--cart").addClass("content-loading"),t.ajax({type:"POST",cache:!1,url:e.closest("form").prop("action"),data:new FormData(e.closest("form")[0]),contentType:!1,processData:!1,success:function(a){if(a.error)return window.showAlert("alert-danger",a.message),e.closest(".table--cart").removeClass("content-loading"),e.closest(".detail-qty").find(".qty-val").text(a.data.count),!1;t(".section--shopping-cart").load(window.location.href+" .section--shopping-cart > *",(function(){e.closest(".table--cart").removeClass("content-loading"),window.showAlert("alert-success",a.message)})),t.ajax({url:window.siteUrl+"/ajax/cart",method:"GET",success:function(e){e.error||(t(".cart-dropdown-wrap").html(e.data.html),t(".mini-cart-icon span").text(e.data.count))}})},error:function(t){e.closest(".table--cart").removeClass("content-loading"),window.showAlert("alert-danger",t.message)}})}t(document).on("change",".form-review-product input[type=file]",(function(e){e.preventDefault();var a=this,o=t(a),n=o.data("max-size");Object.keys(a.files).map((function(e){if(n&&a.files[e].size/1024>n){var t=o.data("max-size-message").replace("__attribute__",a.files[e].name).replace("__max__",n);window.showAlert("alert-danger",t)}else s.push(a.files[e])}));var r=s.length,l=o.data("max-files");l&&r>l&&s.splice(r-l-1,r-l),i(a)})),t(document).on("click",".form-review-product .image-viewer__icon-remove",(function(e){e.preventDefault();var a=t(e.currentTarget).closest(".image-viewer__item").data("id");s.splice(a,1);var o=t(".form-review-product input[type=file]")[0];i(o)})),sessionStorage.reloadReviewsTab&&(t('.nav-tabs li a[href="#Reviews"]').tab("show"),sessionStorage.reloadReviewsTab=!1),t(document).on("click",".form-review-product button[type=submit]",(function(e){var s=this;e.preventDefault(),e.stopPropagation(),t(this).prop("disabled",!0).addClass("btn-disabled").addClass("button-loading");var r=t(this).closest("form");t.ajax({type:"POST",cache:!1,url:r.prop("action"),data:new FormData(r[0]),contentType:!1,processData:!1,success:function(e){e.error?a(e.message):(r.find("select").val(0),r.find("textarea").val(""),o(e.message),setTimeout((function(){sessionStorage.reloadReviewsTab=!0,window.location.reload()}),1500)),t(s).prop("disabled",!1).removeClass("btn-disabled").removeClass("button-loading")},error:function(e){t(s).prop("disabled",!1).removeClass("btn-disabled").removeClass("button-loading"),n(e)}})})),t(".form-coupon-wrapper .coupon-code").keypress((function(e){if(13===e.keyCode)return t(".apply-coupon-code").trigger("click"),e.preventDefault(),e.stopPropagation(),!1})),t(document).on("click",".detail-qty .qty-up",(function(e){e.preventDefault(),e.stopPropagation();var a=parseInt(t(this).closest(".detail-qty").find(".qty-val").text(),10);a+=1,t(this).prev().text(a),t(this).closest(".detail-qty").find("input").val(a),t(this).closest(".section--shopping-cart").length&&c(t(this))})),t(document).on("click",".detail-qty .qty-down",(function(e){e.preventDefault(),e.stopPropagation();var a=parseInt(t(this).closest(".detail-qty").find(".qty-val").text(),10);(a-=1)>1||(a=1),t(this).next().text(a),t(this).closest(".detail-qty").find("input").val(a).trigger("change"),a>=0&&t(this).closest(".section--shopping-cart").length&&c(t(this))})),t(document).on("click",".btn-apply-coupon-code",(function(e){e.preventDefault();var a=t(e.currentTarget);a.prop("disabled",!0).addClass("btn-disabled").addClass("button-loading"),t.ajax({url:a.data("url"),type:"POST",data:{coupon_code:a.closest(".form-coupon-wrapper").find(".coupon-code").val()},headers:{"X-CSRF-TOKEN":t('meta[name="csrf-token"]').attr("content")},success:function(e){e.error?(window.showAlert("alert-danger",e.message),a.prop("disabled",!1).removeClass("btn-disabled").removeClass("button-loading")):t(".section--shopping-cart").load(window.location.href+"?applied_coupon=1 .section--shopping-cart > *",(function(){a.prop("disabled",!1).removeClass("btn-disabled").removeClass("button-loading"),window.showAlert("alert-success",e.message)}))},error:function(e){void 0!==e.responseJSON?"undefined"!==e.responseJSON.errors?t.each(e.responseJSON.errors,(function(e,a){t.each(a,(function(e,t){window.showAlert("alert-danger",t)}))})):void 0!==e.responseJSON.message&&window.showAlert("alert-danger",e.responseJSON.message):window.showAlert("alert-danger",e.status.text),a.prop("disabled",!1).removeClass("btn-disabled").removeClass("button-loading")}})})),t(document).on("click",".btn-remove-coupon-code",(function(e){e.preventDefault();var a=t(e.currentTarget),o=a.text();a.text(a.data("processing-text")),t.ajax({url:a.data("url"),type:"POST",headers:{"X-CSRF-TOKEN":t('meta[name="csrf-token"]').attr("content")},success:function(e){e.error?(window.showAlert("alert-danger",e.message),a.text(o)):t(".section--shopping-cart").load(window.location.href+" .section--shopping-cart > *",(function(){a.text(o)}))},error:function(e){void 0!==e.responseJSON?"undefined"!==e.responseJSON.errors?t.each(e.responseJSON.errors,(function(e,a){t.each(a,(function(e,t){window.showAlert("alert-danger",t)}))})):void 0!==e.responseJSON.message&&window.showAlert("alert-danger",e.responseJSON.message):window.showAlert("alert-danger",e.status.text),a.text(o)}})})),t(document).on("click",".js-remove-from-wishlist-button-wishlist",(function(e){e.preventDefault();var a=t(this);a.addClass("button-loading"),t.ajax({url:a.data("url"),method:"DELETE",success:function(e){if(e.error)return a.removeClass("button-loading"),window.showAlert("alert-danger",e.message),!1;window.showAlert("alert-success",e.message),t(".wishlist-count span").text(e.data.count),a.removeClass("button-loading"),a.closest("tr").remove()},error:function(e){a.removeClass("button-loading"),window.showAlert("alert-danger",e.message)}})})),t(window).on("load",(function(){var e=t("#flash-sale-modal");e.length&&!function(e){for(var t=e+"=",a=document.cookie.split(";"),o=0;o<a.length;o++){for(var n=a[o];" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return""}(e.data("id"))&&setTimeout((function(){e.modal("show"),function(e,t,a){var o=new Date,n=new URL(window.siteUrl);o.setTime(o.getTime()+864e5);var s="expires="+o.toUTCString();document.cookie=e+"=1; "+s+"; path=/; domain="+n.hostname}(e.data("id"))}),5e3)})),t(document).on("click",".js-quick-view-button",(function(e){e.preventDefault();var a=t("#quick-view-modal");a.find(".quick-view-content").html(""),a.find(".modal-body").addClass("modal-empty"),a.find(".loading-spinner").show(),a.modal("show"),t.ajax({url:t(e.currentTarget).data("url"),type:"GET",success:function(e){e.error?(window.showAlert("alert-danger",e.message),a.modal("hide")):(a.find(".loading-spinner").hide(),a.find(".modal-body").removeClass("modal-empty"),a.find(".quick-view-content").html(e.data),a.find(".product-image-slider").slick({slidesToShow:1,slidesToScroll:1,rtl:r,arrows:!1,fade:!1,asNavFor:".slider-nav-thumbnails"}),a.find(".slider-nav-thumbnails").slick({slidesToShow:5,slidesToScroll:1,rtl:r,asNavFor:".product-image-slider",dots:!1,focusOnSelect:!0,prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'}),a.find(".slider-nav-thumbnails .slick-slide").removeClass("slick-active"),a.find(".slider-nav-thumbnails .slick-slide").eq(0).addClass("slick-active"),a.find(".product-image-slider").on("beforeChange",(function(e,t,o,n){var s=n;a.find(".slider-nav-thumbnails .slick-slide").removeClass("slick-active"),a.find(".slider-nav-thumbnails .slick-slide").eq(s).addClass("slick-active")})),a.find(".product-image-slider").on("beforeChange",(function(e,a,o,n){var s=t(a.$slides[n]).find("img");t(".zoomWindowContainer, .zoomContainer").remove(),t(s).elevateZoom({zoomType:"inner",cursor:"crosshair",zoomWindowFadeIn:500,zoomWindowFadeOut:750})})),t(".product-image-slider").length&&t(".product-image-slider .slick-active img").elevateZoom({zoomType:"inner",cursor:"crosshair",zoomWindowFadeIn:500,zoomWindowFadeOut:750}),t(".list-filter").each((function(){t(this).find("a").on("click",(function(e){e.preventDefault(),t(this).parent().siblings().removeClass("active"),t(this).parent().toggleClass("active"),t(this).parents(".attr-detail").find(".current-size").text(t(this).text()),t(this).parents(".attr-detail").find(".current-color").text(t(this).attr("data-color"))}))})),t(".detail-qty").each((function(){var e=parseInt(t(this).find(".qty-val").text(),10);t(".qty-up").on("click",(function(a){a.preventDefault(),e+=1,t(this).prev().text(e),t(this).closest(".detail-qty").find("input").val(e)})),t(".qty-down").on("click",(function(a){a.preventDefault(),(e-=1)>1||(e=1),t(this).next().text(e),t(this).closest(".detail-qty").find("input").val(e)}))})))},error:function(){a.modal("hide")}})}));var d=t("#products-filter-ajax"),u=t(".products-listing");function m(e){d.find("input, select, textarea").each((function(a,o){var n=t(o),s=n.attr("name"),r=e[s]||null;"checkbox"===n.attr("type")?(n.prop("checked",!1),Array.isArray(r)?n.prop("checked",r.includes(n.val())):n.prop("checked",!!r)):n.is("[name=max_price]")?n.val(r||n.data("max")):n.is("[name=min_price]")?n.val(r||n.data("min")):n.val()!=r&&n.val(r),n.trigger("change")}))}function p(e){e||(e=d.serializeArray());var a=f(e),o=!1;a&&a.length&&a.map((function(e){var t;t="[]"==e.name.substring(e.name.length-2)?'[name="'+e.name+'"][value="'+e.value+'"]':'[name="'+e.name+'"]',d.find(t).length&&(o=!0)})),t(".shop-filter-toogle").length&&(o?t(".shop-filter-toogle").addClass("is-filtering"):t(".shop-filter-toogle").removeClass("is-filtering"))}function f(e){var t=[];return e.forEach((function(e){if(e.value){if(["min_price","max_price"].includes(e.name)&&d.find("input[name="+e.name+"]").data(e.name.substring(0,3))==parseInt(e.value))return;t.push(e)}})),t}function h(e){for(var t,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=e||window.location.search.substring(1),n=/([^&=]+)=?([^&]*)/g,s=/\+/g,r=function(e){return decodeURIComponent(e.replace(s," "))},i={};t=n.exec(o);){var l=r(t[1]),c=r(t[2]);"[]"==l.substring(l.length-2)?(a&&(l=l.substring(0,l.length-2)),(i[l]||(i[l]=[])).push(c)):i[l]=c}return i}t(document).on("click",".clear_filter.clear_all_filter",(function(e){e.preventDefault(),m([]),d.trigger("submit")})),t(document).on("click",".clear_filter.bf_icons",(function(e){e.preventDefault();var a,o=t(e.currentTarget),n=o.data("name"),s=o.data("value");if("[]"==n.substring(n.length-2))"checkbox"===(a=d.find('[name="'+n+'"][value="'+s+'"]')).attr("type")?a.prop("checked",!1):a.val(null);else switch((a=d.find('[name="'+n+'"]')).attr("name")){case"min_price":a.val(a.data("min"));break;case"max_price":a.val(a.data("max"));break;default:a.val(null)}a&&a.trigger("change"),d.trigger("submit")})),t(document).on("change",".product-category-select",(function(){t(".product-cat-label").text(t.trim(t(this).find("option:selected").text()))})),t(".product-cat-label").text(t.trim(t(".product-category-select option:selected").text())),t(document).on("click",".show-advanced-filters",(function(e){e.preventDefault(),e.stopPropagation(),t(this).toggleClass("active"),t(".advanced-search-widgets").slideToggle(500)})),p(),d.length&&(t(document).on("submit","#products-filter-ajax",(function(e){e.preventDefault();var o=t(e.currentTarget),s=o.serializeArray(),r=f(s),i=[];u.find("input").map((function(e,a){var o=t(a);o.val()&&r.push({name:o.attr("name"),value:o.val()})})),r.map((function(e){i.push(encodeURIComponent(e.name)+"="+e.value)}));var l=o.attr("action")+(i&&i.length?"?"+i.join("&"):"");r.push({name:"s",value:1}),t.ajax({url:o.attr("action"),type:"GET",data:r,beforeSend:function(){u.find(".list-content-loading").show(),window.closeShopFilterSection&&window.closeShopFilterSection(),t("html, body").animate({scrollTop:d.offset().top-t("header").height()},500)},success:function(e){0==e.error?(u.html(e.data),l!=window.location.href&&window.history.pushState(r,e.message,l),p(s)):a(e.message||"Opp!")},error:function(e){n(e)},complete:function(){u.find(".list-content-loading").hide()}})})),window.addEventListener("popstate",(function(){var e=window.location.origin+window.location.pathname;d.attr("action")==e?(m(h()),d.trigger("submit")):history.back()}),!1),t(document).on("click",".products-listing .pagination-page a",(function(e){e.preventDefault();var a=new URL(t(e.currentTarget).attr("href")).searchParams.get("page");u.find("input[name=page]").val(a),d.trigger("submit")})),t(document).on("click",".products_sortby .products_ajaxsortby a",(function(e){e.preventDefault();var a=t(e.currentTarget),o=a.attr("href"),n=a.closest(".products_ajaxsortby");if(n.find("a.selected").removeClass("selected"),a.addClass("selected"),o.indexOf("?")>=0){var s=o.substring(o.indexOf("?")+1);if(s){var r=h(s);u.find('input[name="'+n.data("name")+'"]').val(r[n.data("name")])}}d.trigger("submit")})))}))}(jQuery)})();