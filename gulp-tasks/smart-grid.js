"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor", {
        outputStyle: "scss",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "40px", // gutter width
        mobileFirst: false,
        mixinNames: {
            container: "container"
        },
        container: {
            maxWidth: "1350px",
            fields: "15px" // side fields
        },
        breakPoints: {
            xs: {
                width: "320px"
            },
            sm: {
                width: "576px"
            },
            md: {
                width: "768px"
            },
            lg: {
                width: "992px"
            },
            xl: {
                width: "1350px"
            }
        }
    });
    cb();
});