import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("build", shell.task("parcel build starter/index.html"));
gulp.task("serve", shell.task("parcel starter/index.html"));

gulp.task("test", shell.task("npm run test"));
gulp.task("cypress", shell.task("npx cypress run"));

gulp.task("default", gulp.series("build", "serve"));
