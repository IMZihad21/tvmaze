export interface Shows {
    "score": number,
    "show": Show
}

export interface Show {
    "id": number,
    "url": string,
    "name": string,
    "type": string,
    "language": string,
    "genres": Array<string>,
    "status": string,
    "runtime": number,
    "averageRuntime": number,
    "premiered": string,
    "ended": any,
    "officialSite": string,
    "schedule": {
        "time": string,
        "days": Array<string>
    },
    "rating": {
        "average": number
    },
    "weight": number,
    "network": {
        "id": number,
        "name": string,
        "country": {
            "name": string,
            "code": string,
            "timezone": string
        }
    },
    "webChannel": any,
    "dvdCountry": any,
    "externals": {
        "tvrage": any,
        "thetvdb": number,
        "imdb": string
    },
    "image": {
        "medium": string,
        "original": string
    },
    "summary": string,
    "updated": number,
    "_links": {
        "self": {
            "href": string
        },
        "previousepisode": {
            "href": string
        },
        "nextepisode": {
            "href": string
        }
    }
}
