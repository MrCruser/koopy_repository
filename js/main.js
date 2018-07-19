var config =
{
    "sites":
    [
        { "url": "https://boards.4chan.org/w/catalog",                             "text": "/w/" },
        { "url": "https://boards.4chan.org/wg/catalog",                            "text": "/wg/"  },
        { "url": "https://boards.4chan.org/wsg/catalog",                           "text": "/wsg/"  },
        { "url": "https://boards.4chan.org/gif/catalog",                           "text": "/gif/" },
        { "url": "https://boards.4chan.org/b/catalog",                             "text": "/b/"  },
        { "url": "https://www.youtube.com/",                                       "text": "YT"  },
        { "url": "https://soundcloud.com/stream",                                  "text": "SC" },
        { "url": "http://kissanime.ru/",                                           "text": "KA"  },
        { "url": "https://www.facebook.com/messages/",                             "text": "FB"   },
        { "url": "https://outlook.live.com/owa/?fid=flinbox",                      "text": "OL"  },
        { "url": "http://siiauescolar.siiau.udg.mx/wus/gupprincipal.inicio",       "text": "SE"   },
        { "url": "https://www.freecodecamp.com/",                                  "text": "FCC" },
    ]
}, d = document;

d.addEventListener("DOMContentLoaded", function()
{
    d.removeEventListener("DOMContentLoaded", arguments.callee, false);

    for (var i = 0, MAX = config.sites.length; i < MAX; ++i)
    {
        var p = i / 12,
            site = d.createElement("a");
        site.href = config.sites[i].url;
        site.textContent = config.sites[i].text;

        if (i % 12 === 0)
        {
            var page = d.createElement("div");
            page.id = "page" + p;

            d.querySelector("#sites").appendChild(page);
            // d.querySelector("#navigation ul").appendChild((d.createElement("li")));

            if (p === 0)
            {
                // d.querySelector("#navigation ul li").classList.add("selected");
                d.querySelector("#sites > div").classList.add("selected");
            }
        }

        d.querySelector("#page" + Math.floor(p)).appendChild(site);
    }
});
