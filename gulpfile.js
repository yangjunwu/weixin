var gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	cleancss= require("gulp-clean-css"),
	rev = require("gulp-rev-append"),
	less = require("gulp-less"),
	livereload = require("gulp-livereload"), 
	concat = require("gulp-concat");

/*合并全部外部的css*/
gulp.task("myconcatcss",function(){
	gulp.src(["css/font-awesome.css","css/jquery-weui.css","css/weui.css"])
		.pipe(concat("all.css"))
		.pipe(gulp.dest("css"));
});
/*合并外部的js*/
gulp.task("myconcatjs",function(){
	gulp.src(["js/jquery-2.1.4.js","js/jquery-weui.js"])
		.pipe(concat("all.js"))
		.pipe(gulp.dest("js"));
})
gulp.task("jsmin",function(){
	gulp.src(["js/all.js","js/common.js","js/list.js","js/search.js"])
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"));
});

/*压缩css*/
gulp.task("cleancss",function(){
	gulp.src(["css/notice.css","css/all.css"])
		.pipe(cleancss())
		.pipe(gulp.dest("dist/css"));
});

gulp.task("rev",function(){
	gulp.src(["notice.php","search.php"])
		.pipe(rev())
		.pipe(gulp.dest("dist"));
})

/*less*/
gulp.task("less",function(){
	gulp.src(["css/less/notice.less"])
		.pipe(less())
		.pipe(gulp.dest("css"))
		.pipe(livereload());
})
/*watch*/
gulp.task("watch",function(){
	livereload.listen();
	gulp.watch("css/less/*.less",["less"]);
})

gulp.task("cleanjs",function(){
	gulp.src(["js/common.js","js/list2.js","search2.js"])
		.pipe(concat("use.js"))
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"));
})