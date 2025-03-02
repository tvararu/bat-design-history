---
layout: page
title: Mission patches
description: Archive of patches created to celebrate milestones in the development of our different services.
tags: reference
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
---

<style>
  .app-prose figure > a { outline: 0 }
</style>

{% from "gallery/macro.njk" import appGallery with context %}

## Apply for teacher training

The mascot for Apply (and Manage) is a beaver named Brian Townley. We chose a beaver because we are building a complex service and delivering it in the rapid-flowing waters of the ever-changing initial teacher training market.

{{ appGallery({
  items: [{
    text: "Apply for teacher training SCITT Pilot",
    caption: "This patch celebrated the tenacity of our team, who despite a power cut and several building evacuations, launched the service from a nearby pub. November 2019"
  }, {
    text: "Transition team 10,000 miles travelled",
    caption: "This patch celebrated the work of the transition team, who travelled the length of breadth of England to encourage providers to join our pilots. April 2020"
  }, {
    text: "Find and Apply for teacher training",
    caption: "This patch marked the candidate-facing Find and Apply services joining together under one team. August 2020"
  }, {
    text: "Apply for teacher training HEI Pilot",
    caption: "This patch celebrated 11 early-adopter HEIs joining Apply as we embarked on our second recruitment cycle. As the University of Bedfordshire was the first HEI to be onboarded, Brian’s mortarboard featured a red tassel. October 2020"
  }, {
    text: "Apply for teacher training UCAS Switch-off",
    caption: "This patch celebrated applications for the 2022/23 cycle being made exclusively via the Apply service. Brian dons the helmet he wore in his very first patch as he detonates the UCAS ITT service he helped to replace. October 2021"
  }]
}) }}

* * *

## Find postgraduate teacher training

The mascot for Find (and Publish) is a canary. When we launched Publish we weren’t sure how much our recent integration with DfE Sign-in would work. Our first few providers were used as [canaries](https://en.wikipedia.org/wiki/Sentinel_species) to test if they could access service – we had many dead canaries until we got the process right and could roll out the service to everyone.

{{ appGallery({
  items: [{
    text: "Find teacher training beta",
    caption: "This patch celebrated the launch of the Find service moving into its beta phase. November 2018"
  }, {
    text: "2020-21 recruitment cycle",
    caption: "This patch celebrated the start of the 2020-21 recruitment cycle. October 2020"
  }, {
    text: "2021-22 recruitment cycle",
    caption: "This patch celebrated the start of the 2021-22 recruitment cycle. October 2021"
  }]
}) }}

* * *

## Register trainee teachers

The mascot for Register is an octopus called Inky. We chose an octopus because they have multiple hearts which symbolises how multiple teams combined to form Publish/Register. Their many legs symbolise how we’re joining up many dots for internal and external stakeholders.

The team was formed during a period where they couldn’t be physically near, so just like an octopus, they reached with curiosity to connect with those around them.

{{ appGallery({
  items: [{
    text: "Register trainee teachers private beta",
    caption: "This patch celebrated the service entering private beta with a junior octopus to represent an emerging service. September 2020"
  }, {
    text: "10,000 trainee teachers",
    caption: "10,000 trainees added to Register trainee teachers. October 2021"
  }]
}) }}

* * *

## Get Into Teaching

The mascot for Get Into Teaching is called Tian. We chose a mole due to the fact that we were beginning to open up more as a society, much like a mole surfacing from underground. 

We chose the plaid shirt and mug due to the fact that several team members shared this 'look' as a profile picture on Slack.

{{ appGallery({
  items: [{
    text: "Get Into Teaching Public Beta",
    caption: "This patch celebrated the service entering Public Beta with a mole to represent our emergence. April 2021."
    }]
}) }}

* * *

## Other projects

{{ appGallery({
  items: [{
    text: "Allocations discovery",
    caption: "This patch captured the team trying to find their way. The allocations discovery was a confusing time with complex problems to solve. A fox was chosen for their cleverness but also because a team member’s last name was Fox. January 2020"
  }, {
    text: "Allocations 2020",
    caption: "This patch celebrated how well the team handled the allocations request period. It was a stressful time but we remained calm and collected. July 2020"
  }, {
    text: "Data discovery",
    caption: "This patch celebrated the completion of a discovery into the department’s data collection and usage. The team chose a lobster (named Madame Michelle Bisque) as they uncovered many legacy systems which like lobsters, [tend to live far longer than they should](https://twitter.com/drsnooks/status/1217775748980912130). February 2020" | markdown | safe
  }, {
    text: "Impact squad",
    caption: "This patch celebrated the creation of a team to coordinate impactful change across the service line. The team chose an elephant (named Kahar after the team’s founding product manager) given their strength, wisdom and memory. Different coloured eyes represent diversity, and that the team works across Get into teaching (green) and Becoming a teacher (blue). May 2021"
  }]
}) }}

* * *

## Print specifications

We use [Diginate](https://diginate.com) to print our stickers using the following specifications:

{% from "govuk/components/summary-list/macro.njk" import govukSummaryList %}

{{ govukSummaryList({
  rows: [{
    key: {
      text: "Product"
    },
    value: {
      text: "Vinyl stickers"
    }
  }, {
    key: {
      text: "Material"
    },
    value: {
      text: "Gloss"
    }
  }, {
    key: {
      text: "Shape"
    },
    value: {
      text: "Circular"
    }
  }, {
    key: {
      text: "Supply"
    },
    value: {
      text: "Individuals on a square backing"
    }
  }, {
    key: {
      text: "Diameter"
    },
    value: {
      text: "50mm"
    }
  }]
}) }}
