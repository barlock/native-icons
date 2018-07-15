const _ = require('lodash');

// https://github.com/cheeriojs/cheerio/issues/748
module.exports = function extendCheerio($) {
  _.extend($.prototype, {
    wrapAll: function(wrapper) {
      if (this.length < 1) {
        return this;
      }

      if (this.length < 2 && this.wrap) {
        return this.wrap(wrapper);
      }

      const elems = this;
      const section = $(wrapper);
      let marker = $('<div>');

      marker = marker.insertBefore(elems.first());
      elems.each(function(k, v) {
        section.append($(v));
      });
      section.insertBefore(marker);
      marker.remove();

      return section;
    },
  });
};
