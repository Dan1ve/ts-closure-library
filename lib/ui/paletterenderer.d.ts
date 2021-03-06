/**
 * @fileoverview Renderer for {@link UiPalette}s.
 */
/**
 * Default renderer for {@link UiPalette}s.  Renders the palette as an
 * HTML table wrapped in a DIV, with one palette item per cell:
 *
 *    <div class="goog-palette">
 *      <table class="goog-palette-table">
 *        <tbody class="goog-palette-body">
 *          <tr class="goog-palette-row">
 *            <td class="goog-palette-cell">...Item 0...</td>
 *            <td class="goog-palette-cell">...Item 1...</td>
 *            ...
 *          </tr>
 *          <tr class="goog-palette-row">
 *            ...
 *          </tr>
 *        </tbody>
 *      </table>
 *    </div>
 *
 * @extends {ControlRenderer<UiPalette>}
 */
export class PaletteRenderer extends ControlRenderer<UiPalette> {
    /**
     * Returns the given items in a table with `size.width` columns and
     * `size.height` rows.  If the table is too big, empty cells will be
     * created as needed.  If the table is too small, the items that don't fit
     * will not be rendered.
     * @param {Array<Node>} items Palette items.
     * @param {?Size} size Palette size (columns x rows); both dimensions
     *     must be specified as numbers.
     * @param {?DomHelper} dom DOM helper for document interaction.
     * @return {!Element} Palette table element.
     */
    createGrid(items: Node[], size: Size, dom: googdom.DomHelper): Element;
    /**
     * Returns a table element (or equivalent) that wraps the given rows.
     * @param {Array<Element>} rows Array of row elements.
     * @param {?DomHelper} dom DOM helper for document interaction.
     * @return {!Element} Palette table element.
     */
    createTable(rows: Element[], dom: googdom.DomHelper): Element;
    /**
     * Returns a table row element (or equivalent) that wraps the given cells.
     * @param {Array<Element>} cells Array of cell elements.
     * @param {?DomHelper} dom DOM helper for document interaction.
     * @return {!Element} Row element.
     */
    createRow(cells: Element[], dom: googdom.DomHelper): Element;
    /**
     * Returns a table cell element (or equivalent) that wraps the given palette
     * item (which must be a DOM node).
     * @param {Node|string} node Palette item.
     * @param {?DomHelper} dom DOM helper for document interaction.
     * @return {!Element} Cell element.
     */
    createCell(node: string | Node, dom: googdom.DomHelper): Element;
    /**
     * Updates the aria label of the cell if it doesn't have one. Descends the DOM
     * and tries to find an aria label for a grid cell from the first child with a
     * label or title.
     * @param {!Element} cell The cell.
     * @private
     */
    maybeUpdateAriaLabel_(cell: Element): void;
    /**
     * Overrides {@link ControlRenderer#decorate} to be a no-op, since
     * palettes don't support the decorate flow (for now).
     * @param {?Control} palette Ignored.
     * @param {?Element} element Ignored.
     * @return {null} Always null.
     * @override
     */
    decorate(palette: UiPalette, element: Element): null;
    /**
     * Returns the item corresponding to the given node, or null if the node is
     * neither a palette cell nor part of a palette item.
     * @param {?UiPalette} palette Palette in which to look for the item.
     * @param {?Node} node Node to look for.
     * @return {?Node} The corresponding palette item (null if not found).
     */
    getContainingItem(palette: UiPalette, node: Node): Node;
    /**
     * Updates the highlight styling of the palette cell containing the given node
     * based on the value of the Boolean argument.
     * @param {?UiPalette} palette Palette containing the item.
     * @param {?Node} node Item whose cell is to be highlighted or un-highlighted.
     * @param {boolean} highlight If true, the cell is highlighted; otherwise it is
     *     un-highlighted.
     */
    highlightCell(palette: UiPalette, node: Node, highlight: boolean): void;
    /**
     * @param {?Node} node Item whose cell is to be returned.
     * @return {?Element} The grid cell for the palette item.
     */
    getCellForItem(node: Node): Element;
    /**
     * Updates the selection styling of the palette cell containing the given node
     * based on the value of the Boolean argument.
     * @param {?UiPalette} palette Palette containing the item.
     * @param {?Node} node Item whose cell is to be selected or deselected.
     * @param {boolean} select If true, the cell is selected; otherwise it is
     *     deselected.
     */
    selectCell(palette: UiPalette, node: Node, select: boolean): void;
}
export namespace PaletteRenderer {
    export const cellId_: number;
    export const CSS_CLASS: string;
    export const GRID_WIDTH_ATTRIBUTE: string;
}
import { Palette as UiPalette } from "./palette.js";
import { ControlRenderer } from "./control.js";
import { Size } from "../math/size.js";
import * as googdom from "../dom/dom.js";
import { Control } from "./control.js";
