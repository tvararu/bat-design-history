---
title: Tracking conditions individually iteration
description: Improving the way we let users update the status of conditions
date: 2020-10-27
screenshots:
  items:
    - text: Offer page
      src: offer-page.png
    - text: Update status of conditions page
      src: status-page.png
    - text: "Check: when a condition has been marked as ‘not met’"
      src: check--not-met.png
    - text: "Check: when a condition has been marked as ‘met’"
      src: check--met.png
    - text: "Check: when all conditions have been marked as ‘met’"
      src: check--all-met.png
    - text: Success message
      src: success-message.png
---

{% from "email/macro.njk" import appEmail %}

At the moment, users have to mark all conditions as met or not met at the same time.

This causes users to individually track and manage conditionsoutside of the service in a spreadsheet which is longwinded and onerous.

We previously [designed a solution for this](/manage-teacher-training-applications/tracking-conditions-individually/) but there was no way to update multiple conditions at the same time.

In this iteration we’re letting users update conditions individually but with the ability to update multiple at the same time too.

## Email when a condition has been met

{% set emailTemplate %}
<!-- markdownlint-disable MD025 MD001 -->
Dear ((candidate name))

# Condition met

((provider)) has confirmed that you’ve met the following condition for ((course)):

- DBS check

The following condition still needs to be met:

- Take English speaking course

Contact ((provider)) if you have any questions about this.

# Get support

You can chat to a Get Into Teaching adviser online for help and advice:

https://getintoteaching.education.gov.uk/#talk-to-us

You can also call for free on 0800 389 2500, Monday to Friday, 8.30am to 5pm (except public holidays).

{% endset %}

{{ appEmail({
  subject: "Condition met - Wren Academy",
  content: emailTemplate
}) }}

When more than one condition has been met:

- the subject and heading should say ‘Conditions met’ instead of ‘Condition met’
- the first sentence should say ‘conditions’ instead of ‘condition’

When more than one condition still needs to be met:

- the second sentence should say ‘The following conditions still need...’ instead of ‘The following condition still needs...’
