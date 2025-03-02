---
title: Letting providers change course before making an offer
description: We added change links and a flow to let providers change course details before they make an offer.
date: 2021-12-16
screenshots:
  items:
    - text: Applications details - course applied for
      src: applications-details--course-applied-for.png
    - text: Change training provider
      src: course-applied-for--change-training-provider.png
    - text: Change course
      src: course-applied-for--change-course.png
    - text: Change full time or part time
      src: course-applied-for--change-full-time-or-part-time.png
    - text: Change location
      src: course-applied-for--change-location.png
    - text: Check and update course
      src: course-applied-for--check-answers.png
    - text: Timeline - course updated
      src: timeline--course-changed.png
    - text: Activity log - course updated
      src: activity-log--course-changed.png
---

Currently providers can make an offer for a different course to the one which a candidate applied for. They cannot change the course before they make an offer.

Providers sometimes need to change the course sooner so that they can:

- move candidates to a more appropriate school or course
- keep good candidates even if a course is full

We made changes to allow providers to do this. Doing so led to us making [changes to the flows which let users make and change offers](/manage-teacher-training-applications/updating-make-offer-and-change-offer/).

## Information which providers give about courses

When providers publish a course, they enter information including:

- type of course, for example “primary”
- one or more subjects, for example “Primary with English”
- age range, for example “3 to 7”
- course outcome, for example “PGCE with QTS”
- funding type, for example “fee paying”
- full time, part time or both
- one or more locations
- accredited body
- when applications will open - this can be immediately or on a specific date
- when the course starts, for example “September 2022”

## Course data analysis

We looked at course data to see how likely it is that a user will be able to change the details of a course.

Looking at how many providers a user belongs to, we found that:

- 88% of users belong to 1 provider
- 12% of users belong to 2 or more providers

Looking at how many courses providers have, we found that:

- 22% of training providers have 1 course
- 90% of training providers have fewer than 20 courses
- the maximum number of courses per training provider is 78
- the average number of courses per training provider is 10

Looking at whether courses are full time or part time, we found that:

- 94% of courses are full time
- 2% of courses are part time
- 4% of courses can be either full time or part time

Looking at course locations, we found that:

- 70% of courses provided by school centred initial teacher training providers (SCITTs) have only one location
- 72% of courses provided by school direct providers have only one location
- 96% of courses provided by higher education institutions (HEIs) have only one location

## What we changed

We’ve added:

- additional attributes to course details
- change links to the ‘course applied for’ section of application details
- a change course flow which can be entered at various points, depending on the change link which the user clicks
- a new event for the activity log and timeline

### Course details

Qualification and funding type are not currently shown in the service. We’re adding them as part of this work and will always show details of the course in this order:

- training provider
- course - this includes the course code
- full time or part time
- location
- accredited body - we do not show this if it’s the same as the training provider
- qualification
- funding type

### ‘Course applied for’ section of application details

In the ‘course applied for’ section, we now show change links if:

- the user has permission to make offers and reject applications
- the application has a status of ‘received’ or ‘interviewing’

The course attributes which can have change links are:

- training provider - if the user is a member of multiple training providers
- course - if the currently selected training provider has multiple courses
- full time or part time - if the currently selected course has both full time and part time options
- location - if the currently selected course has multiple locations

### Change course flow

Course attributes can be changed in this order:

- training provider
- course
- full time or part time
- location

When the user clicks a change link on the application details page, they’re taken to a page to change the appropriate course attribute.

They will then continue to the next attribute which has multiple options, based on the choice they just made.

For example, if the user clicked the change link next to ‘course’ then they will be taken to a page where they can change course. They will not be asked to change training provider.

When they continue, they will be taken to:

- choose full time or part time, if both options are available for the course they chose
- choose location, if the course they chose is only part time or only full time and the course has multiple locations
- the check answers page, if the course they chose is only part time or only full time and has only one location

#### Training provider

On this page we show training providers that:

- the user belongs to
- provide courses ratified by the accredited body of the course which the candidate applied for

#### Course

On this page we show courses that are:

- run by the training provider
- ratified by the accredited body of the course which the candidate applied for
- open on apply

Currently it is not possible to change to a course ratified by a different accredited body.

For each course, we show:

- course - this includes the course code
- qualification
- accredited body

#### Full time or part time

On this page we show 2 options:

- full time
- part time

#### Location

On this page we show for each location:

- location name
- address

### Activity log and timeline

When a course is changed, a new event is added to the activity log and timeline. The new event shows:

- title of the event, which is “Course updated”
- candidate’s name - in the activity log only
- date and time the change was made
- who made the change - the user’s first and last name
- new course details - in the same order as they’re displayed in the application details
- link to the application details

## Further considerations

In future we may consider:

- showing pages even if there’s no decision to be made
- improving what we show when a candidate’s application is transferred to another provider
- letting users add a note about why the course has been changed
- letting users change to a course which is ratified by a different accredited body
- using an alternative design when a provider has many courses or a course has many locations

### Showing pages even if there’s no decision to be made

In the change course flow we do not show pages where there is only one option, since the user cannot make a choice.

For example, if user chooses a new training provider which only offers one course then we will not show a list of courses. If the course also is only full time or only part time, and has only one location, then the user will be taken straight to the check answers page.

We think that this will not be a problem because the user will see all the course attributes on the check answers page. If the details are not correct then the user can click either:

- a change link
- the cancel link

If we find that users are confused by this, we could show pages where there is no decision to be made. We could include either:

- a single radio button
- content explaining that there’s no decision to make

### Transferring to another provider

We have already designed what users should see when an application is [transferred to another provider](/manage-teacher-training-applications/what-to-show-when-an-application-has-been-transferred-to-another-provider/).

We should consider implementing that design at the same time as this new work.

### Adding a note about why the course or offer has been changed

We could consider allowing users to add a note at the end of the change course flow.

This would help them to keep track of why they made a change and might mean that they do not need to keep notes outside the service.

### Allowing users to change to a course which is ratified by a different accredited body

Currently it is only possible to change to a course which is ratified by the same organisation which ratified the course the candidate originally applied for.

There is a plan to change this. We should make sure that our design will work well once that has been done.

We do not think that we will need to add a change link next to ‘accredited body’. We think that users would want to select a new training provider or course instead, with the accredited body linked to the course.

### Using an alternative design when a provider has many courses or a course has many locations

It could be difficult for a user to choose from a large number of courses or locations.

We could consider an alternative design rather than showing a long list of radio buttons and labels. For example, we could show a text input field with an autocomplete.
