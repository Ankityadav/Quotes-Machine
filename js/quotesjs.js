/**
 * Created by Ankit on 04/05/16.
 */
(function(){
    $.ajax({
        url :'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function(data){
            var quote = data.shift();
            $('#quote-content').html(quote.content);
            $('#quote-title').html(' - '+quote.title);
            var twitterHref = "https://twitter.com/intent/tweet?text="
                , n = quote.content.replace(/(<([^>]+)>)/ig, "");
            n = n.replace(/&#8217;/gi, "'");
            if(n.length >135) {
                var u = n.substring(0, 135);
                twitterHref += u + "..." ;
            }
            else{
                twitterHref += n;
            }
            $("#twitter").attr("href", twitterHref);
        },
        cache:false
    });
    $('#randomQuoteButton').on('click',function(e){
        e.preventDefault();
        $.ajax({
            url :'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            success: function(data){
                var quote = data.shift();
                $('#quote-content').html(quote.content);
                $('#quote-title').html(' - '+quote.title);
                var twitterHref = "https://twitter.com/intent/tweet?text="
                    , n = quote.content.replace(/(<([^>]+)>)/ig, "");
                n = n.replace(/&#8217;/gi, "'");
                console.log(n);
                if(n.length >135) {
                    n = n.substring(0, 135) + '...';

                }
                twitterHref = twitterHref + n;
                $("#twitter").attr("href", twitterHref);
            },
            cache:false
        });
    });
})();
