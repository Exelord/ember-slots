ember-slots
==============================================================================

Named slots for Ember.js apps.


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above

Installation
------------------------------------------------------------------------------

```
ember install ember-slots
```


Usage
------------------------------------------------------------------------------

### Define slots in your component template

```hbs
<!-- components/card-panel/template.hbs -->

<div class="card">
  <div class="card-header">
    <Slot @name="header" />
  </div>
  
  <div class="card-body">
    {{yield}}
  </div>

  <div class="card-footer">
    <Slot @name="footer">
      This is default footer - please replace it!
    </Slot>
  </div>
</div>
```

### Use Template component to render content inside of slots

```hbs
<!-- templates/dashboard.hbs -->

<CardPanel>
  <Template @slot="header">
    This content will land in header slot
  </Template>

  <Template @slot="footer">
    Created with love ♥
  </Template>

  <p>Here is a card body content</p>
</CardPanel>
```


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
