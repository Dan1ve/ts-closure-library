/**
 * @fileoverview Renderer for {@link UiMenuItem}s.
 */
/**
 * Default renderer for {@link UiMenuItem}s.  Each item has the following
 * structure:
 *
 *    <div class="goog-menuitem">
 *      <div class="goog-menuitem-content">
 *        ...(menu item contents)...
 *      </div>
 *    </div>
 *
 * @extends {ControlRenderer<UiMenuItem>}
 */
export class MenuItemRenderer extends ControlRenderer<UiMenuItem> {
    /**
     * Commonly used CSS class names, cached here for convenience (and to avoid
     * unnecessary string concatenation).
     * @type {!Array<string>}
     * @private
     */
    classNameCache_: Array<string>;
    /**
     * Returns the composite CSS class by using the cached value or by constructing
     * the value from the base CSS class and the passed index.
     * @param {MenuItemRenderer.CompositeCssClassIndex_} index Index for the
     *     CSS class - could be highlight, checkbox or content in usual cases.
     * @return {string} The composite CSS class.
     * @private
     */
    getCompositeCssClass_(index: number): string;
    /** @override */
    getAriaRole(): any;
    /**
     * Overrides {@link ControlRenderer#createDom} by adding extra markup
     * and stying to the menu item's element if it is selectable or checkable.
     * @param {?Control} item Menu item to render.
     * @return {?Element} Root element for the item.
     * @override
     */
    createDom(item: Control<any>): Element;
    /** @override */
    getContentElement(element: any): Element;
    /**
     * Overrides {@link ControlRenderer#decorate} by initializing the
     * menu item to checkable based on whether the element to be decorated has
     * extra stying indicating that it should be.
     * @param {?Control} item Menu item instance to decorate the element.
     * @param {?Element} element Element to decorate.
     * @return {?Element} Decorated element.
     * @override
     */
    decorate(item: Control<any>, element: Element): Element;
    /**
     * Returns true if the element appears to have a proper menu item structure by
     * checking whether its first child has the appropriate structural class name.
     * @param {?Element} element Element to check.
     * @return {boolean} Whether the element appears to have a proper menu item DOM.
     * @protected
     */
    hasContentStructure(element: Element): boolean;
    /**
     * Wraps the given text caption or existing DOM node(s) in a structural element
     * containing the menu item's contents.
     * @param {?ControlContent} content Menu item contents.
     * @param {?DomHelper} dom DOM helper for document interaction.
     * @return {?Element} Menu item content element.
     * @protected
     */
    createContent(content: any, dom: goog_dom.DomHelper): Element;
    /**
     * Enables/disables radio button semantics on the menu item.
     * @param {?Control} item Menu item to update.
     * @param {?Element} element Menu item element to update (may be null if the
     *     item hasn't been rendered yet).
     * @param {boolean} selectable Whether the item should be selectable.
     */
    setSelectable(item: Control<any>, element: Element, selectable: boolean): void;
    /**
     * Enables/disables checkbox semantics on the menu item.
     * @param {?Control} item Menu item to update.
     * @param {?Element} element Menu item element to update (may be null if the
     *     item hasn't been rendered yet).
     * @param {boolean} checkable Whether the item should be checkable.
     */
    setCheckable(item: Control<any>, element: Element, checkable: boolean): void;
    /**
     * Determines whether the item contains a checkbox element.
     * @param {?Element} element Menu item root element.
     * @return {boolean} Whether the element contains a checkbox element.
     * @protected
     */
    hasCheckBoxStructure(element: Element): boolean;
    /**
     * Adds or removes extra markup and CSS styling to the menu item to make it
     * selectable or non-selectable, depending on the value of the
     * `selectable` argument.
     * @param {!Control} item Menu item to update.
     * @param {!Element} element Menu item element to update.
     * @param {boolean} enable Whether to add or remove the checkbox structure.
     * @protected
     */
    setEnableCheckBoxStructure(item: Control<any>, element: Element, enable: boolean): void;
}
export namespace MenuItemRenderer {
    export const CSS_CLASS: string;
    export namespace CompositeCssClassIndex_ {
        export const HOVER: number;
        export const CHECKBOX: number;
        export const CONTENT: number;
    }
    /**
     * Constants for referencing composite CSS classes.
     */
    export type CompositeCssClassIndex_ = number;
}
import { MenuItem as UiMenuItem } from "./menu.js";
import { ControlRenderer } from "./control.js";
import { Control } from "./control.js";
import * as goog_dom from "../dom/dom.js";
