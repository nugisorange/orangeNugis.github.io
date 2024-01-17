//lib call
import {getHash} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.2/croot.js";
//internal call
import { url } from "./config.js";

export function getContentURL(){
    let hashlink=getHash();
    switch (hashlink) {
        case "home":
            return url.template.content+"home.html";
        case "chapter/chap01":
            return url.template.content+"chapter/chap01.html";
        case "chapter/chap02":
            return url.template.content+"chapter/chap02.html";
        case "chapter/chap03":
            return url.template.content+"chapter/chap03.html";
        case "chapter/chap04":
            return url.template.content+"chapter/chap04.html";
        case "chapter/chap05":
            return url.template.content+"chapter/chap05.html";
        case "chapter/chap06":
            return url.template.content+"chapter/chap06.html";
        case "chapter/chap07":
            return url.template.content+"chapter/chap07.html";
        case "geo_query/GeoGeometry":
            return url.template.content+"geo_query/GeoGeometry.html";
        case "geo_query/GeoIntersect":
            return url.template.content+"geo_query/GeoIntersect.html";
        case "geo_query/GeoWithin":
            return url.template.content+"geo_query/GeoWithin.html";
        case "geo_query/GeoNear":
            return url.template.content+"geo_query/GeoNear.html";
        case "geo_query/GeoNearSphere":
            return url.template.content+"geo_query/GeoNearSphere.html";
        case "geo_query/GeoMaxDistance":
            return url.template.content+"geo_query/GeoMaxDistance.html";
        case "geo_query/GeoMinDistance":
            return url.template.content+"geo_query/GeoMinDistance.html";
        case "profile":
            return url.template.content+"profile.html";
        case "crud/insert":
            return url.template.content+"crud/insert.html";
        case "crud/get":
            return url.template.content+"crud/get.html";
        case "crud/update":
            return url.template.content+"crud/update.html";
        case "crud/delete":
            return url.template.content+"crud/delete.html";
        case "map":
            return url.template.content+"maps.html";
        case "logout":
            return url.template.content+"logout.html";
        default:
            return url.template.content+"home.html";
    }

}



export function getURLContentJS(){
    let hashlink=getHash();
    switch (hashlink) {
        case "home":
            return url.view.content+"home.js";
        case "profile/passwords":
            return url.view.content+"profile/passwords.js";
        case "profile/mail":
            return url.view.content+"profile/mail.js";
        case "profile/accounts":
            return url.view.content+"profile/accounts.js";
        case "messages":
            return url.view.content+"messages.js";
        case "notifications/blocked":
            return url.view.content+"notifications/blocked.js";
        case "notifications/silenced":
            return url.view.content+"notifications/silenced.js";
        case "notifications/publish":
            return url.view.content+"notifications/publish.js";
        case "notifications/program":
            return url.view.content+"notifications/program.js";
        case "explore":
            return url.view.content+"explore.js";
        case "saved":
            return url.view.content+"saved.js";
        case "logout":
            return url.view.content+"logout.js";
        default:
            return url.view.content+"home.js";
    }

}