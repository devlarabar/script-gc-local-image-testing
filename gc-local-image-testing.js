// ==UserScript==
// @name         GC Local Image Testing
// @namespace    grundos.cafe
// @version      1.0.0
// @description  Replace Grundo's Cafe image URLs with test bucket image URLs
// @author       Lara
// @match        http://localhost:8000/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=grundos.cafe
// @grant        none
// ==/UserScript==

/* globals $ */

(function() {
    'use strict';
    // Images in HTML
    $("img").each(function() {
        let source = $(this).attr("src")
        let newSrc = source.replace("https://grundoscafe.b-cdn.net/gctimes/", "https://neoclone-test.s3.amazonaws.com/gctimes/")
        $(this).attr("src", newSrc)
    });
    // Image URLs in CSS
    let bg = $("body").css("background-image")
    let banner = $(".page-header").css("background-image")
    let newBg = bg.replace("https://grundoscafe.b-cdn.net/gctimes/", "https://neoclone-test.s3.amazonaws.com/gctimes/")
    let newBanner = banner.replace("https://grundoscafe.b-cdn.net/gctimes/", "https://neoclone-test.s3.amazonaws.com/gctimes/")
    document.documentElement.style.setProperty("--bg-body", newBg)
    document.documentElement.style.setProperty("--bg-banner", newBanner)
})();
