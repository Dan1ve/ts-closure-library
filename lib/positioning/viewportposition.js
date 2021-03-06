import {Box} from './../math/box.js';
import {Coordinate} from './../math/coordinate.js';
import {Size} from './../math/size.js';
import * as style from './../style/style.js';
import {AbstractPosition} from './abstractposition.js';
import * as goog_positioning from './positioning.js';
import {Corner} from './positioning.js';
// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Client positioning class.
 */

/**
 * Encapsulates a popup position where the popup is positioned according to
 * coordinates relative to the  element's viewport (page). This calculates the
 * correct position to use even if the element is relatively positioned to some
 * other element.
 *
 * @extends {AbstractPosition}
 */
class ViewportPosition extends AbstractPosition {

  /**
   * Encapsulates a popup position where the popup is positioned according to
   * coordinates relative to the  element's viewport (page). This calculates the
   * correct position to use even if the element is relatively positioned to some
   * other element.
   *
   * @param {number|Coordinate} arg1 Left position or coordinate.
   * @param {number=} opt_arg2 Top position.
   */
  constructor(arg1, opt_arg2) {
    super();
  
    this.coordinate = arg1 instanceof Coordinate ?
        arg1 :
        new Coordinate(/** @type {number} */ (arg1), opt_arg2);
  }

  /**
   * Repositions the popup according to the current state
   *
   * @param {Element} element The DOM element of the popup.
   * @param {Corner} popupCorner The corner of the popup
   *     element that that should be positioned adjacent to the anchorElement.
   * @param {Box=} opt_margin A margin specified in pixels.
   * @param {Size=} opt_preferredSize Preferred size of the element.
   * @override
   */
  reposition(
      element, popupCorner, opt_margin, opt_preferredSize) {
    goog_positioning.positionAtAnchor(
        style.getClientViewportElement(element),
        Corner.TOP_LEFT, element, popupCorner, this.coordinate,
        opt_margin, null, opt_preferredSize);
  };
}

export {ViewportPosition};