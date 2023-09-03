/**
 * This module is responsible for decoding, controlling, and streaming video
 * files.
 *
 * It can't draw the videos, see love.graphics.newVideo and Video objects for
 * that.
 *
 * @noResolution
 * @noSelf
 * @link [love.video](https://love2d.org/wiki/love.video)
 */
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
  function newVideoStream(filename: string): VideoStream;

  /**
   * Creates a new VideoStream. Currently only Ogg Theora video files are supported.
   * VideoStreams can't draw videos, see love.graphics.newVideo for that.
   *
   * @param file The File object containing the Ogg Theora video.
   * @return videostream, A new VideoStream.
   * @link [love.video.newVideoStream](https://love2d.org/wiki/love.video.newVideoStream)
   */
  function newVideoStream(file: File): VideoStream;
}
