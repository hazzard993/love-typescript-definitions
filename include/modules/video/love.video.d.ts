declare namespace love {

    /**
     * This module is responsible for decoding, controlling, and streaming video
     * files.
     *
     *
     * It can't draw the videos, see love.graphics.newVideo and Video objects for
     * that.
     * @noSelf
     * @link [love.video](https://love2d.org/wiki/love.video)
     */
    export namespace video {
        /**
         * Creates a new VideoStream. Currently only Ogg Theora video files are supported.
         * VideoStreams can't draw videos, see love.graphics.newVideo for that.
         *
         * @param filename The file path to the Ogg Theora video file.
         * @return {VideoStream} videostream, A new VideoStream.
         */
        export function newVideoStream(filename: string): VideoStream;

        /**
         * Creates a new VideoStream. Currently only Ogg Theora video files are supported.
         * VideoStreams can't draw videos, see love.graphics.newVideo for that.
         *
         * @param file The File object containing the Ogg Theora video.
         * @return {VideoStream} videostream, A new VideoStream.
         */
        export function newVideoStream(file: File): VideoStream;

    }

}
