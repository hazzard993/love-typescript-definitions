/** @noSelf */
declare module "love.video" {
    import { File } from "love.filesystem";

    /**
     * Creates a new VideoStream. Currently only Ogg Theora video files are supported.
     * VideoStreams can't draw videos, see love.graphics.newVideo for that.
     *
     * @param filename The file path to the Ogg Theora video file.
     * @return videostream, A new VideoStream.
     * @link [love.video.newVideoStream](https://love2d.org/wiki/love.video.newVideoStream)
     */
    export function newVideoStream(filename: string): VideoStream;

    /**
     * Creates a new VideoStream. Currently only Ogg Theora video files are supported.
     * VideoStreams can't draw videos, see love.graphics.newVideo for that.
     *
     * @param file The File object containing the Ogg Theora video.
     * @return videostream, A new VideoStream.
     * @link [love.video.newVideoStream](https://love2d.org/wiki/love.video.newVideoStream)
     */
    export function newVideoStream(file: File): VideoStream;
}
