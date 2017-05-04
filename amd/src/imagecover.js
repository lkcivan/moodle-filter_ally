/**
 * This file is part of Moodle - http://moodle.org/
 *
 * Moodle is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Moodle is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Moodle.  If not, see <http://www.gnu.org/licenses/>.
 *
 * Library to add image covers to prevent seizure inducing images from showing.
 *
 * @package   filter_ally
 * @author    Guy Thomas <gthomas@moodlerooms.com>
 * @copyright Copyright (c) 2016 Blackboard Inc.
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

define(['jquery', 'filter_ally/util'], function($, Util) {
    return new function() {

        var applySizing = function() {
            $('.ally-image-wrapper').each(function(){
                var wrapper = this;
                var img = $(wrapper).find('img');
                var cover = $(wrapper).find('.ally-image-cover');
                var marginTop = parseInt($(img).css('marginTop'));
                var marginLeft = parseInt($(img).css('marginLeft'));
                Util.onCoordsChange(img, function(coords) {
                    $(cover).css('width', (coords.right - coords.left) + 'px');
                    $(cover).css('height', (coords.bottom - coords.top) + 'px');
                    var topPos = $(img).position().top + marginTop;
                    var leftPos = $(img).position().left + marginLeft;
                    $(cover).css('top', topPos + 'px');
                    $(cover).css('left', leftPos + 'px');
                });
            });
        };

        this.init = function() {
            $(document).ready(applySizing);
        };
    };
});