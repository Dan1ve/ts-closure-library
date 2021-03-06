/**
 * @fileoverview MD5 cryptographic hash.
 * Implementation of http://tools.ietf.org/html/rfc1321 with common
 * optimizations and tweaks (see http://en.wikipedia.org/wiki/MD5).
 *
 * Usage:
 *   var md5 = new Md5();
 *   md5.update(bytes);
 *   var hash = md5.digest();
 *
 * Performance:
 *   Chrome 23              ~680 Mbit/s
 *   Chrome 13 (in a VM)    ~250 Mbit/s
 *   Firefox 6.0 (in a VM)  ~100 Mbit/s
 *   IE9 (in a VM)           ~27 Mbit/s
 *   Firefox 3.6             ~15 Mbit/s
 *   IE8 (in a VM)           ~13 Mbit/s
 */
/**
 * MD5 cryptographic hash constructor.
 * @extends {Hash}
 * @final
 * @class
 */
export class Md5 extends Hash {
    /**
     * Holds the current values of accumulated A-D variables (MD buffer).
     * @type {!Array<number>}
     * @private
     */
    chain_: Array<number>;
    /**
     * A buffer holding the data until the whole block can be processed.
     * @type {!Array<number>}
     * @private
     */
    block_: Array<number>;
    /**
     * The length of yet-unprocessed data as collected in the block.
     * @type {number}
     * @private
     */
    blockLength_: number;
    /**
     * The total length of the message so far.
     * @type {number}
     * @private
     */
    totalLength_: number;
    /**
     * Internal compress helper function. It takes a block of data (64 bytes)
     * and updates the accumulator.
     * @param {Array<number>|Uint8Array|string} buf The block to compress.
     * @param {number=} opt_offset Offset of the block in the buffer.
     * @private
     */
    compress_(buf: string | number[] | Uint8Array, opt_offset?: number): void;
    /** @override */
    update(bytes: any, opt_length?: any): void;
    /** @override */
    digest(): any[];
}
import { Hash } from "./hash.js";
