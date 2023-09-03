declare module "love.audio" {
  /**
   * Types of audio sources.
   *
   * | Constant | Description |
   * | :- | :- |
   * | `"static"` | The whole audio is decoded. |
   * | `"stream"` | The audio is decoded in chunks when needed. |
   * | `"queue"` | The audio must be [manually queued](https://love2d.org/wiki/Source:queue) by the user. |
   *
   * @link [SourceType](https://love2d.org/wiki/SourceType)
   */
  type SourceType = "static" | "stream" | "queue";
}
