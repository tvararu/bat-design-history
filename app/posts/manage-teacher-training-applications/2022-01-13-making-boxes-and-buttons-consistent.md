---
title: Various changes to the way we use boxed content, warning messages and button labels
description: TODO
date: 2022-01-13
screenshots:
  items:
    - text: Stuff
      src: stuff.png
---

We have noticed that the way we use boxes for content and label buttons can be improved.

Rules going forward:

- use thin borders for boxes
- use boxes for content that sits above form controls to give users additional context of what they’re doing
- use warning text if users need to know certain details due to the action they’re about to take
- button text should just be the action

## What we changed

### Thick and thin borders around content

We have a mix of content that we place inside boxes. Some of them have thick borders and others have thin borders.

![Decision page](decision-page.png "Decision page")

![Interviews page](interviews-page.png "Interviews page")

To be consistent we’ll only use thin borders.

### Removing the status of conditions box

- updating conditions
- confirming a deferred offer

### Removing borders on check answers pages and adding warning text

We currently have borders around the details of an offer on the check answers pages when:

- making an offer
- changing an offer
- confirming a deferred offer
- updating the status of conditions

![Example with borders](make-offer-check-answers-page--with-borders.png "Example with borders")

We did this to help users spot any warning text that appears between the summary list and the button.

But check answers pages do not normally use borders so we removed them.

To help users spot the warning text, we’ll use warning text.

![Example without borders](make-offer-check-answers-page--without-borders.png "Example without borders")

### Simplifying button labels and using warning text consistently

We use warning text and button labels inconsistently.

For example, when:

- making an offer the button label is “Send offer”
- rejecting an application the button label is “Reject application and send feedback”
- marking conditions as met, the button label is “Mark conditions as met and tell candidate”

To be consistent and to keep button labels short and about the action that’s being taken, we’ve changed button labels and added warning text.

Button labels:

- Make offer
- Reject application
- Update interview details

Warning text:

- blah
- blah

