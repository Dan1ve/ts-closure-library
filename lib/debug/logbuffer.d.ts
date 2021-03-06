/**
 * @type {number} The number of log records to buffer. 0 means disable
 * buffering.
 */
export const CAPACITY: number;
/**
 * @fileoverview A buffer for log records. The purpose of this is to improve
 * logging performance by re-using old objects when the buffer becomes full and
 * to eliminate the need for each app to implement their own log buffer. The
 * disadvantage to doing this is that log handlers cannot maintain references to
 * log records and expect that they are not overwriten at a later point.
 */
/**
 * Creates the log buffer.
 * @final
 */
export class LogBuffer {
    /**
     * The array to store the records.
     * @type {!Array<!DebugLogRecord|undefined>}
     * @private
     */
    buffer_: Array<DebugLogRecord | undefined>;
    /**
     * The index of the most recently added record or -1 if there are no records.
     * @type {number}
     * @private
     */
    curIndex_: number;
    /**
     * Whether the buffer is at capacity.
     * @type {boolean}
     * @private
     */
    isFull_: boolean;
    /**
     * Adds a log record to the buffer, possibly overwriting the oldest record.
     * @param {?Level} level One of the level identifiers.
     * @param {string} msg The string message.
     * @param {string} loggerName The name of the source logger.
     * @return {!DebugLogRecord} The log record.
     */
    addRecord(level: Level, msg: string, loggerName: string): DebugLogRecord;
    /**
     * Removes all buffered log records.
     */
    clear(): void;
    /**
     * Calls the given function for each buffered log record, starting with the
     * oldest one.
     * @param {function(!DebugLogRecord)} func The function to call.
     */
    forEachRecord(func: (arg0: DebugLogRecord) => any): void;
}
export namespace LogBuffer { }
import { LogRecord as DebugLogRecord } from "./logrecord.js";
import { Level } from "./logger.js";
