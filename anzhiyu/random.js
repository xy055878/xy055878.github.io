var posts=["posts/1901878248.html","posts/3866502874.html","posts/2516383961.html","posts/898434083.html","posts/2582852634.html","posts/3573626104.html","posts/3802395932.html","posts/1436700789.html","posts/2921331606.html","posts/3459297216.html","posts/1849774907.html","posts/2888368066.html","posts/2339945861.html","posts/3465743340.html","posts/1662855706.html","posts/224983156.html","posts/3047018547.html","posts/1554319381.html","posts/3288624177.html","posts/2291569139.html","posts/4031220249.html","posts/242091884.html","posts/2194604817.html","posts/124020408.html","posts/3461054545.html","posts/697168895.html","posts/4065634403.html","posts/513978782.html","posts/3576320730.html","posts/1964551917.html","posts/1462565397.html","posts/2321053998.html","posts/2210618669.html","posts/1802143498.html","posts/2105984013.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}