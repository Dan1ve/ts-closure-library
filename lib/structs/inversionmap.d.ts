/**
 * @fileoverview Provides inversion and inversion map functionality for storing
 * integer ranges and corresponding values.
 */
/**
 * Maps ranges to values.
 *     increasing integer values, with at least one instance.
 *     Length must be the same as rangeArray.
 * @template T
 */
export class InversionMap<T> {
    /**
     * Maps ranges to values.
     * @param {Array<number>} rangeArray An array of monotonically
     *     increasing integer values, with at least one instance.
     * @param {Array<T>} valueArray An array of corresponding values.
     *     Length must be the same as rangeArray.
     * @param {boolean=} opt_delta If true, saves only delta from previous value.
     * @template T
     */
    constructor(rangeArray: number[], valueArray: T[], opt_delta?: boolean);
    /**
     * @protected {?Array<number>}
     */
    rangeArray: any;
    /** @protected {Array<T>} */
    values: any;
    /**
     * Stores the integers as ranges (half-open).
     * If delta is true, the integers are delta from the previous value and
     * will be restored to the absolute value.
     * When used as a set, even indices are IN, and odd are OUT.
     * @param {Array<number>} rangeArray An array of monotonically
     *     increasing integer values, with at least one instance.
     * @param {boolean=} opt_delta If true, saves only delta from previous value.
     * @private
     */
    storeInversion_(rangeArray: number[], opt_delta?: boolean): void;
    /**
     * Splices a range -> value map into this inversion map.
     * @param {Array<number>} rangeArray An array of monotonically
     *     increasing integer values, with at least one instance.
     * @param {Array<T>} valueArray An array of corresponding values.
     *     Length must be the same as rangeArray.
     * @param {boolean=} opt_delta If true, saves only delta from previous value.
     */
    spliceInversion(rangeArray: number[], valueArray: T[], opt_delta?: boolean): void;
    /**
     * Gets the value corresponding to a number from the inversion map.
     * @param {number} intKey The number for which value needs to be retrieved
     *     from inversion map.
     * @return {T|null} Value retrieved from inversion map; null if not found.
     */
    at(intKey: number): T;
    /**
     * Gets the largest index such that rangeArray[index] <= intKey from the
     * inversion map.
     * @param {number} intKey The probe for which rangeArray is searched.
     * @return {number} Largest index such that rangeArray[index] <= intKey.
     * @protected
     */
    getLeast(intKey: number): number;
}
