# OneTV - Deep links

OneTV supports two types of deep links through the `onetv://` protocol

**NOTE:** GitHub does not allow links with a custom protocol, so just copy-paste the examples links in your browser's address bar and press Enter.

**Support for intents varies depending on platform.**

## To addons

Simply take a normal URL to a OneTV addon manifest, e.g. `https://your-addon.com/manifest.json`, and replace the leading `https://` with `onetv://`

E.g. `onetv://your-addon.com/manifest.json`


## To a page


### Board

[onetv:///board](onetv:///board)


### Discover

[onetv:///discover](onetv:///discover)

`onetv:///discover/{catalogAddonUrl}/{type}/{id}?genre={genre}`

* `catalogAddonUrl` - URL to manifest of the addon (URI encoded)
* `type` the addon type, see [content types](./api/responses/content.types.md)
* `id` [catalog id](./api/responses/manifest.md#catalog-format) from the addon
* `genre` the filter genre, see [catalog extra properties](./api/responses/manifest.md#extra-properties)


## Library

[onetv:///library](onetv:///library)


## Search

`onetv:///search?search={query}`

* `query` the search query (URI encoded)


### Detail

`onetv:///detail/{type}/{id}/{videoId}?autoPlay={autoPlay}`

* `type` corresponds to [content types](./api/responses/content.types.md)

* `id` is the [meta object ID](./api/responses/meta.md#meta-object)

* `videoID` is the [video object ID](./api/responses/meta.md#video-object); leave this empty if you only wish to show the list of episodes/videos (not applicable for one-video types, such as `movie` and `tv`)

* `autoPlay` can be `true` or `false`, optional, attempt playing the video with `videoID`, success depends on if the user played that video or a video from that meta before (in which case a stream url for the video, or a stream [bingeGroup](./api/responses/stream.md#additional-properties-to-provide-information--behaviour-flags) may be already available), currently only supported in the Android TV app

In the Cinemeta addon, the `videoID` is the same as the `id` for movies, and for series it's formed as `{id}:{season}:episode`

In the Channels addon, the `videoID` is formed as `{id}:{youtube video ID}`

Examples:

[onetv:///detail/movie/tt0066921/tt0066921](onetv:///detail/movie/tt0066921/tt0066921)

[onetv:///detail/series/tt0108778/tt0108778:1:1](onetv:///detail/series/tt0108778:1:1)

[onetv:///detail/channel/yt_id:UCrDkAvwZum-UTjHmzDI2iIw](onetv:///detail/channel/yt_id:UCrDkAvwZum-UTjHmzDI2iIw)

