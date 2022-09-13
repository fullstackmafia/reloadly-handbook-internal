---
title : Engineering Operating Procedure
author: Arun K. Patra
email: mailto:akpatra@reloadly.com
image: https://ca.slack-edge.com/T8XB4CHJQ-U0239HATSHW-7502b6e33b74-512
---

&nbsp;

This section describes the standard operating procedure for the engineering team.

&nbsp;

Software development methodology
--------------------------------

&nbsp;

Reloadly's engineering team uses the agile methodology. All work on software development is done in bi-weekly sprints. A the beginning of each sprint, the product owners plan out the work to be done.

The product owner also refers to a list of unfinished work items from the last sprint - this is called a product backlog. From the product backlog, a subset of items is prioritized to be completed during the current sprint.

Software development work is broken down into tasks which are further defined into user stories and assigned story points according to their order of complexity. These user stories are tracked and maintained on Jira (an Atlassian product) where they are groomed and tracked to completion.

Daily meetings (stand-ups) are conducted by members of the engineering team to discuss software development work done the previous day, work that will be done for the day and if there are any issues or blockers.

If the business team needs to get a particular request from customers prioritized, they can relay this request to the engineering team by communicating with the product owner. The product owner then works with the engineering team to translate this request to a software development task, assign a user story and story points to it, assign a member of the engineering team to this task, and log all the details of the task on Jira.

The product owner keeps track of every ongoing task and is aware of any updates, issues or blockers concerning a task. When a task is completed, the product owner communicates this with every Reloadly employee via dedicated channels on Slack - a business communication platform.

&nbsp;

Fixing issues
-------------

When a task is complete and the corresponding update to the software product is made, issues with the software product may arise. When these occur, they are detected and reported to the engineering team by the associate product owner. Issues detected by customers are picked up by the customer success team and relayed to the engineering team as well.

To fix an issue, a task(ticket) is logged on Jira and a member of the engineering team is assigned to it. For critical bugs, the engineering team would prioritize these over usual tasks.

&nbsp;

Software development and release process
----------------------------------------

In every sprint, members of the engineering team are assigned tasks. Each member then makes the necessary changes to a copy of the source code that has to be updated or write new software as needed.

After these updates and changes are made, engineers then share their copy of the source code to be reviewed by the lead engineer - in engineering terms, this is called a "pull request".

The lead engineer reviews this code and either makes some corrections which are to be implemented by the engineer or approves it to be merged to the source code version that controls a replica environment of the software product that is to be updated/fixed - in engineering terms, this environment is called "staging environment".

Once the engineer's update is merged to the staging environment, it is thoroughly tested and verified for accuracy by the quality assurance(QA) team. Should the QA team be satisfied with the update and the overall behavior of the software, the engineer's code is then merged to the main software product. This is followed by a second test known as "sanity test" which is also performed by the QA team.

If the engineer’s update will result in changes to the API documentation, the engineer shares these changes with the Developer Relations team. Should the Developer Relations team be satisfied that these changes are not irregular or could result in API inconsistencies, the API documentation is then updated.

&nbsp;

Access to infrastructure
------------------------

For operational access to existing tools and infrastructure, the following procedures should be observed:

*   New team members may contact technical lead for getting access to Bitbucket
    
*   Access to AWS, Cloud Foundry, GCP or any other cloud resources are managed and granted by the Chief Technology Officer (CTO)
    
*   Access to any systems that control Reloadly's software products are controlled and need approval from CTO