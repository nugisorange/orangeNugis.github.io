//lib call
import {getHash} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.2/croot.js";
//internal call
import { url } from "./config.js";

export function getContentURL(){
    let hashlink=getHash();
    switch (hashlink) {
        case "form":
            return url.template.content+"formUser.html";
        
        default:
            return url.template.content+"home.html";
            case "home":
                return url.template.content+"home.html";
            case "tugas/chap01":
                return url.template.content+"tugas/chap01/index.html";
            case "tugas/chap02":
                return url.template.content+"tugas/chap02/index.html";
            case "tugas/chap03":
                return url.template.content+"tugas/chap03/index.html";
            case "tugas/chap04":
                return url.template.content+"tugas/chap04/index.html";
            case "tugas/chap05":
                return url.template.content+"tugas/chap05.html";
            case "tugas/chap06":
                return url.template.content+"tugas/chap06/index.html";
            case "tugas":
                return url.template.content+"tugas/chap07/index.html";
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
            case "blog":
                return url.template.content+"blog.html";
            case "crud/insert":
                return url.template.content+"crud/insert.html";
            case "crud/get":
                return url.template.content+"crud/get.html";
            case "crud/update":
                return url.template.content+"crud/update.html";
            case "crud/delete":
                return url.template.content+"crud/delete.html";
            case "peta":
                return url.template.content+"peta/maps.html";
            case "logout":
                return url.template.content+"logout.html";
    }

}



export function getURLContentJS(){
    let hashlink=getHash();
    switch (hashlink) {
        case "form":
            return url.view.content+"formUser.js";
    
        default:
            return url.view.content+"home.js";
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
            case "tugas":
                return url.view.content+"tugas/chap01.js";
            case "tugas":
                return url.view.content+"tugas/chap02.js";
            case "tugas":
                return url.view.content+"tugas/chap03.js";
            case "tugas":
                return url.view.content+"tugas/chap04.js";
            case "explore":
                return url.view.content+"explore.js";
            // case "saved":
            //     return url.view.content+"saved.js";
            case "peta":
                return url.view.content+"peta/maps.js";
            case "logout":
                return url.view.content+"logout.js";
    }

}