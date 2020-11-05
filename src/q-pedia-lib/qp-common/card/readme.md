# Card

`<qp-card>` is a component to display contents like text, image, and actions of a single context information.

## Sub Components of Card

The sub components are completely optional, use a sub component that you need in the card, else you can render the card with any content.

|   Sub Components            |   Description                                  |
|-----------------------------|------------------------------------------------|
|`<qp-card-header>`           |   Card Header Section, that can have any or all of the `<qp-card-title>`, `<qp-card-subtitle>`, `<qp-card-avatar>`|
|`<qp-card-image>`            |   Card Image Section, that can display an image, and this section can be positioned at `top`, `right`, `bottom`, `left` or `overlay` to card body. |
|`<qp-card-body>`             |   Card body section, that contains all the content of the card |
|`<qp-card-footer>`           |   Card Footer Section, this can contain footer information of the card |
|`<qp-card-actions>`          |   Card Actions Section, this can contain action buttons or any other component that allows you to take actions for this card. |
|`<qp-card-backside>`         |   Card back side content section, when flipped on card mouse hover. |


## `<qp-card>` Properties & methods

* `image-position`: This enables the positioning of `<qp-card-image` component in the card, default is `top` and possible values can be `top`, `right`, `bottom`, `left` or `overlay`.

### `<qp-card-actions>` Properties & methods

* `align`: This enables the actions alignment, default is `left` and possible values can be `left`, `right`, `center`.
