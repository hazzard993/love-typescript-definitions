/**
 * Types of audio sources.
 *
 *
 * A good rule of thumb is to use stream for music files and static for all short
 * sound effects. Basically, you want to avoid loading large files into memory at
 * once.
 * @link [SourceType](https://love2d.org/wiki/SourceType)
 */
declare type SourceType = 'static' | 'stream';
