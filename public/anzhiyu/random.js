var posts=["posts/1901878248.html","posts/2516383961.html","posts/898434083.html","posts/2921331606.html","posts/3459297216.html","posts/1436700789.html","posts/3461054545.html","posts/242091884.html","posts/697168895.html","posts/1849774907.html","posts/513978782.html","posts/3576320730.html","posts/124020408.html","posts/1462565397.html","posts/1964551916.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}