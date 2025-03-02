---
title: Improving the references user journey
description: Adapting the references section so it works for candidates applying for the first time and for candidates applying again.
date: 2020-04-27
tags:
  - AN023
screenshots:
  items:
    - The box is already ticked to show the references section is complete
    - The references section is automatically marked as complete
    - Making it clearer that you need to add another referee
    - Making it clearer that you need to add 2 referees
    - Removing the intermediate page before adding referees
    - The button for adding another referee was not the clear call to action
    - Static guidance about contacting your referees when you submit
    - Static guidance about sending the application to the provider once the references are in
    - Showing guidance at the relevant point when replacing referees
    - Candidates go straight to add their referee
---

A candidate has to add 2 references when applying for the first time. When applying again, they can keep their old references or replace them.

We need to adapt the references section so that it works for candidates in all scenarios. It was initially designed for candidates applying only once.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Hypotheses

### Showing the right guidance at the right time

At various points in the user journey we tell candidates:

* [we’ll contact your referees after you submit your application](/apply-for-teacher-training/improving-the-references-user-journey#static-guidance-about-contacting-your-referees-when-you-submit)
* [we’ll send your application to your provider when your references are in](/apply-for-teacher-training/improving-the-references-user-journey#static-guidance-about-sending-the-application-to-the-provider-once-the-references-are-in)

This is not the case if a candidate keeps their references when applying again.

If we show the right guidance at the right time
Then candidates will understand what happens with their references

#### What this looks like

Rather than having static sentences explaining the above, we’ll show guidance only when you add or replace a referee.

![Showing guidance at the relevant point when replacing referees](showing-guidance-at-the-relevant-point-when-replacing-referees.png)

### Cutting out unnecessary steps

There’s an [intermediate step between viewing your application menu and adding your referees](/apply-for-teacher-training/improving-the-references-user-journey#removing-the-intermediate-page-before-adding-referees) - but there’s no evidence to say that it’s needed.

If we remove the intermediate step, whether you’re applying for the first time or applying again
Then candidates will still give suitable referees
Because there’s similar guidance on the following page

#### What this looks like

Candidates go straight to add their references, rather than having to go through an intermediate step.

![Candidates go straight to add their references](candidates-go-straight-to-add-their-referee.png)

### Leading the candidate to the necessary actions

If a candidate deletes one or both of their referees they have to replace them. However, [the button for adding another referee is not the clear call to action](/apply-for-teacher-training/improving-the-references-user-journey#the-button-for-adding-another-referee-was-not-the-clear-call-to-action).

If we make adding another referee the main call to action
Then candidates will know they need to do this

#### What this looks like

It’s now clearer that you need to add another referee when you delete one, even if you do not do it now.

![Making it clearer that you need to add another referee](making-it-clearer-that-you-need-to-add-another-referee.png)

We’ve also made it clear that you need 2 referees when you’ve deleted both of them.

![Making it clearer that you need to add 2 referees](making-it-clearer-that-you-need-to-add-2-referees.png)

### Marking the references section as complete when applying again

When applying again, we mark most sections of the application form as complete.

If we mark the references section as complete
Then candidates will know they do not have to review the section if they do not want to

#### What this looks like

The section is already marked as complete when you sign in to apply again.

![Checkbox is already ticked to show the references section iscomplete](the-box-is-already-ticked-to-show-the-references-section-is-complete.png)

And it’s clear that you do not have to review the references section.

![References section marked as complete](the-references-section-is-automatically-marked-as-complete.png)
