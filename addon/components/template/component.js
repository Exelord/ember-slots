import Component from '@ember/component';
import layout from './template';
import Slot from '../slot/component';
import { computed } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

export default Component.extend({
  layout,

  tagName: '',

  slot: computed({
    get() {
      return 'main';
    },

    set(key, value, oldValue) {
      if (value !== oldValue) {
        this._setSlotElement();
        return value
      }
    }
  }),

  init() {
    this._super(...arguments);
    this._setSlotElement();
  },

  _setSlotElement() {
    scheduleOnce('afterRender', () => {
      let slot = this.parentView.childViews.find((child) => child.constructor === Slot && child.name === this.slot);

      if (slot && slot.element) {
        slot.element.innerHTML = '';
        this.set('slotElement', slot.element);
      }
    })
  }
});
