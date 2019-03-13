declare namespace love {

    /**
     * Allows you to work with threads.
     * @link [love.thread](https://love2d.org/wiki/love.thread)
     */
    export namespace thread {
        /**
         * Creates or retrieves a named thread channel.
         *
         * @param name The name of the channel you want to create or retrieve.
         * @return {Channel} channel, A named channel object which can be further manipulated.
         */
        export function getChannel(name: string): Channel;

        /**
         * Create a new unnamed thread channel.
         *
         *
         * One use for them is to pass new unnamed channels to other threads via
         * Channel:push
         *
         * @return {Channel} channel, A unnamed channel object which can be further manipulated.
         */
        export function newChannel(): Channel;

        /**
         * Creates a new Thread from a File or Data object.
         *
         * @param filename The name of the Lua File to use as source.
         * @return {Thread} thread, A new Thread that has yet to be started.
         */
        export function newThread(filename: string): Thread;

        /**
         * Creates a new Thread from a File or Data object.
         *
         * @param fileData The FileData containing the Lua code to use as the source.
         * @return {Thread} thread, A new Thread that has yet to be started.
         */
        export function newThread(fileData: FileData): Thread;

        /**
         * Creates a new Thread from a File or Data object.
         *
         * @param codestring A string containing the Lua code to use as the source. It needs to either be at least 1024 characters long, or contain at least one newline.
         * @return {Thread} thread, A new Thread that has yet to be started.
         */
        export function newThread(codestring: string): Thread;

    }

}
