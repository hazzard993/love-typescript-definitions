/**
 * An object which can be used to send and receive data between different threads.
 * @link [Channel](https://love2d.org/wiki/Channel)
 */
declare interface Channel extends LoveObject {

    /**
     * Clears all the messages in the Channel queue.
     *
     */
    clear(): void;

    /**
     * Retrieves the value of a Channel message and removes it from the message queue.
     *
     *
     * It waits until a message is in the queue then returns the message value.
     *
     * @return value, The contents of the message.
     */
    demand(): any;

    /**
     * Retrieves the value of a Channel message and removes it from the message queue.
     *
     *
     * It waits until a message is in the queue then returns the message value.
     *
     * @param timeout The maximum amount of time to wait.
     * @return value, The contents of the message or _nil/null_ if the timeout expired.
     */
    demand(timeout: number): any | null;

    /**
     * Retrieves the number of messages in the thread Channel queue.
     *
     * @return count, The number of messages in the queue.
     */
    getCount(): number;

    /**
     * Gets whether a pushed value has been popped or otherwise removed from the
     * Channel.
     *
     * @param id An id value previously returned by Channel:push.
     * @return hasread, Whether the value represented by the id has been removed from the Channel via Channel:pop, Channel:demand, or Channel:clear.
     */
    hasRead(id: number): boolean;

    /**
     * Retrieves the value of a Channel message, but leaves it in the queue.
     *
     *
     * It returns _nil/null_ if there's no message in the queue.
     *
     * @return value, The contents of the message.
     */
    peek(): any | null;

    /**
     * Executes the specified function atomically with respect to this Channel.
     *
     *
     * Calling multiple methods in a row on the same Channel is often useful. However
     * if multiple Threads are calling this Channel's methods at the same time, the
     * different calls on each Thread might end up interleaved (e.g. one or more of
     * the second thread's calls may happen in between the first thread's calls.)
     *
     *
     * This method avoids that issue by making sure the Thread calling the method has
     * exclusive access to the Channel until the specified function has returned.
     *
     * @param func The function to call, the form of function(channel, arg1, arg2, ...) end. The Channel is passed as the first argument to the function when it is called.
     * @param arg1 Additional arguments that the given function will receive when it is called.
     * @param ... Additional arguments that the given function will receive when it is called.
     * @return ret1, The first return value of the given function (if any.)
     * @return ..., Any other return values.
     * @tupleReturn
     */
    performAtomic(func: Function, arg1: any, ...vararg: Array<any>): Array<any>;

    /**
     * Retrieves the value of a Channel message and removes it from the message queue.
     *
     *
     * It returns _nil/null_ if there are no messages in the queue.
     *
     * @return value, The contents of the message.
     */
    pop(): any | null;

    /**
     * Send a message to the thread Channel.
     *
     *
     * See any for the list of supported types.
     *
     * @param value The contents of the message.
     */
    push(value: any): void;

    /**
     * Send a message to the thread Channel and wait for a thread to accept it.
     *
     *
     * See any for the list of supported types.
     *
     * @param value The contents of the message.
     * @return success, Whether the message was successfully supplied (always true).
     */
    supply(value: any): boolean;

    /**
     * Send a message to the thread Channel and wait for a thread to accept it.
     *
     *
     * See any for the list of supported types.
     *
     * @param value The contents of the message.
     * @param timeout The maximum amount of time to wait.
     * @return success, Whether the message was successfully supplied before the timeout expired.
     */
    supply(value: any, timeout: number): boolean;

}
