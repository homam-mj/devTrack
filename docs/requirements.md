Project Management System

A project management system designed for solo developers and development teams.

1. Project Roles & Glossary
| Term                | Meaning                                                                                                               |
| ------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Project Member**  | Any user who belongs to a project, regardless of their role. This includes the Project Manager, Leaders, and Members. |
| **Member Role**     | The lowest project role. A user with the Member role works on assigned tickets and contributes to the project.        |
| **Project Manager** | The highest-authority project role. The user who creates the project starts as the Project Manager.                   |
| **Leader**          | A project management role with permissions to manage Members and tickets.                                             |


Each project has three roles:

Project Manager
Leader
Member

A project can have multiple Leaders, but only one Project Manager.

2. Project Manager

The user who creates a project starts as the Project Manager.

The Project Manager:

Has full authority over the project.
Inherits all Leader permissions.
Can invite project members.
Can invite users through their username.
Can kick project Members.
Can kick Leaders.
Can promote Members to Leaders.
Can demote Leaders to the Member role.
Can transfer the Project Manager role to another project member.
Can delete the project.
Cannot be kicked.
Cannot be demoted.

When the Project Manager transfers ownership, the previous Project Manager becomes a Leader if they remain in the project.

3. Leader

A project can have multiple Leaders.

Leaders can:

Invite project members.
Invite users through their username.
Kick Members.
Create tickets.
Edit ticket fields.
Delete tickets.
Review tickets.
Assign tickets to Members.
Modify ticket status according to the Status Moves table.
View PR links.
Promote Members to Leaders.
Delete Members' comments.

Leaders cannot:

Kick other Leaders.
Demote other Leaders.
Transfer the Project Manager role.
Delete the project.

Only the Project Manager can kick or demote a Leader.

4. Member Role

A user with the Member role is a project member who works on assigned tickets.

Members can:

Join a project.
View the project.
View project tickets.
View tickets assigned to other project members.
Work on tickets assigned to them.
Change their assigned tickets to Work in Progress.
Change their assigned tickets to Ready for Review.
Add a PR link to their ticket.
Add comments to tickets.
Edit their own comments.
Delete their own comments.
Leave the project.

Members cannot:

Create tickets.
Delete tickets.
Assign tickets.
Review tickets.
Invite project members.
Kick project members.
Promote Members.
Edit ticket fields.

5. Permissions

This table is the single source of truth for project permissions.
| Action                                         |      Project manager      |           Leader          |         Member role        | Non-member |
| ---------------------------------------------- | :-----------------------: | :-----------------------: | :------------------------: | :--------: |
| View project                                   |             ✅             |             ✅             |              ✅             |      ❌     |
| Create ticket                                  |             ✅             |             ✅             |              ❌             |      ❌     |
| Edit ticket title                              |             ✅             |             ✅             |              ❌             |      ❌     |
| Edit ticket description                        |             ✅             |             ✅             |              ❌             |      ❌     |
| Change ticket priority                         |             ✅             |             ✅             |              ❌             |      ❌     |
| Delete ticket                                  |             ✅             |             ✅             |              ❌             |      ❌     |
| Invite project member                          |             ✅             |             ✅             |              ❌             |      ❌     |
| Invite member by username                      |             ✅             |             ✅             |              ❌             |      ❌     |
| Kick Member role                               |             ✅             |             ✅             |              ❌             |      ❌     |
| Kick Leader                                    |             ✅             |             ❌             |              ❌             |      ❌     |
| Promote Member role to Leader                  |             ✅             |             ✅             |              ❌             |      ❌     |
| Demote Leader to Member role                   |             ✅             |             ❌             |              ❌             |      ❌     |
| Assign ticket to Member role                   |             ✅             |             ✅             |              ❌             |      ❌     |
| Review ticket                                  |             ✅             |             ✅             |              ❌             |      ❌     |
| Modify ticket status                           | According to Status Moves | According to Status Moves | According to Status Moves* |      ❌     |
| View PR link                                   |             ✅             |             ✅             |              ✅             |      ❌     |
| Add PR link to ticket                          |             ❌             |             ❌             |              ✅             |      ❌     |
| Add comment to ticket                          |             ✅             |             ✅             |              ✅             |      ❌     |
| Edit own comment                               |             ✅             |             ✅             |              ✅             |      ❌     |
| Delete own comment                             |             ✅             |             ✅             |              ✅             |      ❌     |
| Delete another Member's comment                |             ✅             |             ✅             |              ❌             |      ❌     |
| View tickets assigned to other project members |             ✅             |             ✅             |              ✅             |      ❌     |
| Transfer Project Manager role                  |             ✅             |             ❌             |              ❌             |      ❌     |
| Delete project                                 |             ✅             |             ❌             |              ❌             |      ❌     |
| Leave project                                  |            ⚠️*            |             ✅             |              ✅             |      ❌     |


* A Member role can only change the status of a ticket assigned to them, and only according to the Status Moves table.

* The Project Manager must transfer the Project Manager role before leaving. After the transfer, the previous Project Manager becomes a Leader if they remain in the project.

6. Ticket Statuses

The previous name Not Completed has been replaced with To Do because it better represents a ticket that has not yet been started and avoids making "not completed" sound like a failure.

Tickets have four statuses:

| Status               | Description                                                             |
| -------------------- | ----------------------------------------------------------------------- |
| **To Do**            | The ticket has not been started yet.                                    |
| **Work in Progress** | The assigned Member is currently working on the ticket.                 |
| **Ready for Review** | The Member has finished their work and submitted the ticket for review. |
| **Completed**        | The ticket has been reviewed and accepted.                              |


7. Status Moves

This table is the single source of truth for ticket status transitions.

| From             | To               | Who can do it                |
| ---------------- | ---------------- | ---------------------------- |
| To Do            | Work in Progress | Assigned Member              |
| Work in Progress | Ready for Review | Assigned Member              |
| Ready for Review | Completed        | Leader and above             |
| Ready for Review | Work in Progress | Leader and above (rejection) |
No other status transitions are currently allowed.

Therefore:

A Leader cannot reopen a Completed ticket.
A Leader cannot move a ticket back to To Do.
A Member cannot change a ticket to Completed.
A Member cannot change a ticket that is not assigned to them.

Rejection is not a status. It is an action performed during review that moves a ticket from Ready for Review back to Work in Progress.

8. Ticket Assignment

Only the Project Manager and Leaders can assign tickets to Members with the Member role.

A ticket can exist without an assignee.

When a ticket is assigned to a Member:

The Member works on the ticket.
The Member changes the ticket to Work in Progress.
The Member finishes the work.
The Member changes the ticket to Ready for Review.
A Leader reviews the ticket.
If accepted, the ticket becomes Completed.
If rejected, the ticket returns to Work in Progress.

Tickets that have not yet been assigned remain unassigned until a Project Manager or Leader assigns them.

9. Ticket Editing

Only the Project Manager and Leaders can edit ticket fields.
| Field       | Project manager | Leader | Member role |
| ----------- | :-------------: | :----: | :---------: |
| Title       |        ✅        |    ✅   |      ❌      |
| Description |        ✅        |    ✅   |      ❌      |
| Priority    |        ✅        |    ✅   |      ❌      |

10. PR Links

Members with the Member role are responsible for adding PR links to tickets.
| Action       | Project manager | Leader | Member role |
| ------------ | :-------------: | :----: | :---------: |
| Add PR link  |        ❌        |    ❌   |      ✅      |
| View PR link |        ✅        |    ✅   |      ✅      |

11. Comments

Users can comment on tickets.
| Action                          | Project manager | Leader | Member role |
| ------------------------------- | :-------------: | :----: | :---------: |
| Add comment                     |        ✅        |    ✅   |      ✅      |
| Edit own comment                |        ✅        |    ✅   |      ✅      |
| Delete own comment              |        ✅        |    ✅   |      ✅      |
| Delete another Member's comment |        ✅        |    ✅   |      ❌      |

Leaders can delete comments made by Members.

Members can only edit or delete their own comments.

12. Invitations

Project Managers and Leaders can invite users to a project.

There are two invitation methods:
| Method                  | Description                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------ |
| **Invitation Link**     | A user can join the project using an invitation link.                                      |
| **Username Invitation** | A Project Manager or Leader can invite a user using their username inside the application. |

Invitation Link
| Rule                                                         | Status            |
| ------------------------------------------------------------ | ----------------- |
| Unused invitation expires after 3 days                       | ✅                 |
| Invitation expires after being used                          | ✅                 |
| Invitation can be reused after joining                       | ❌                 |
| Invitation can be used after expiration                      | ❌                 |
| Invitation is automatically tied to a specific email address | **Open Question** |


13. Project Visibility

Projects are private.

Only project members can access a project.
| User            | Can view project? |
| --------------- | :---------------: |
| Project Manager |         ✅         |
| Leader          |         ✅         |
| Member role     |         ✅         |
| Non-member      |         ❌         |

14. Kicking Members
| Scenario                            | Result                            |
| ----------------------------------- | --------------------------------- |
| Leader kicks Member role            | ✅ Member is removed from project. |
| Project Manager kicks Member role   | ✅ Member is removed from project. |
| Leader tries to kick Leader         | ❌ Not allowed.                    |
| Member tries to kick another Member | ❌ Not allowed.                    |
| Project Manager kicks Leader        | ✅ Leader is removed from project. |

Tickets of Kicked Members

When a project member is kicked:

Their tickets remain in the project.
Their tickets are not automatically reassigned.
The Project Manager or a Leader can manually assign those tickets to another Member role.
The system does not automatically choose a replacement assignee.

15. Promoting and Demoting Leaders
Promoting a Member

A Project Manager or Leader can promote a user with the Member role to Leader.
Member Role
     ↓
Promoted by Project Manager / Leader
     ↓
Leader

Demoting a Leader

Only the Project Manager can demote a Leader.

Leader
   ↓
Demoted by Project Manager
   ↓
Member Role

A Leader cannot demote another Leader.


16. Leaving a Project

Project members can leave a project using the Quit / Leave Project option.
| User            | Can leave? | Requirement                               |
| --------------- | :--------: | ----------------------------------------- |
| Member role     |      ✅     | No additional requirement.                |
| Leader          |      ✅     | No additional requirement.                |
| Project Manager |     ⚠️     | Must transfer Project Manager role first. |
| Solo developer  |     ⚠️     | Project is deleted after confirmation.    |

17. Project Manager Transfer

The Project Manager must transfer ownership before leaving.

The new Project Manager can be any other project member, including a Leader or a user with the Member role.

Project Manager
       ↓
Selects another project member
       ↓
Transfers Project Manager role
       ↓
Selected user becomes Project Manager
       ↓
Previous Project Manager becomes Leader
       ↓
Previous Project Manager can leave

There can only be one Project Manager at a time.

18. Solo Developer Project

A solo developer can create a project without any other project members.

If the solo developer chooses to quit:

Solo Developer
      ↓
Quit Project
      ↓
Confirmation
      ↓
Confirm
      ↓
Project Deleted

Because there is no other project member to receive the Project Manager role, quitting the solo project deletes the project.

The project must be deleted only after the user confirms the action.

19. Open Questions

The following decisions have not yet been finalized.
|  # | Open question                                                                                                                                |
| -: | -------------------------------------------------------------------------------------------------------------------------------------------- |
|  1 | **Invitation link:** Is an invitation link tied to one email address, or can anyone who obtains the link use it?                             |
|  2 | **Username invitation:** Can the invited user accept or decline the invitation?                                                              |
|  3 | **Username invitation:** Does a username invitation expire? If so, after how long?                                                           |
|  4 | **Username privacy:** Does the system reveal whether a username exists when sending an invitation?                                           |
|  5 | **Invitation conflicts:** What happens if a user receives multiple invitations to the same project?                                          |
|  6 | **Project deletion:** Should deleting a project require a confirmation step for all projects, not only solo projects?                        |
|  7 | **Ticket reassignment:** Can a ticket be reassigned to another Member after work has started, and if so, what happens to its current status? |


20. Out of Scope

The following features are outside the initial MVP scope:
| Feature                                                   | Status         |
| --------------------------------------------------------- | -------------- |
| Automatic reassignment of tickets when a Member is kicked | ❌ Out of scope |
| Automatic selection of a replacement assignee             | ❌ Out of scope |
| Reopening `Completed` tickets                             | ❌ Out of scope |
| Moving tickets directly back to `To Do`                   | ❌ Out of scope |
| Additional ticket statuses                                | ❌ Out of scope |
| More than one Project Manager per project                 | ❌ Out of scope |

21. Development Scope

The project will be developed in stages based on the core development workflow.

Phase 1a — Core Development Loop

The goal of Phase 1a is to make the main project-management workflow functional from beginning to end.

Core Loop
Sign Up
   ↓
Create Project
   ↓
Add Members
   ↓
Create Ticket
   ↓
Assign Ticket
   ↓
Work on Ticket
   ↓
Ready for Review
   ↓
Leader Reviews
   ↓
Completed / Rejected

Features
| Feature              | Phase |
| -------------------- | ----- |
| User authentication  | 1a    |
| Project creation     | 1a    |
| Project Manager role | 1a    |
| Project visibility   | 1a    |
| Member invitation    | 1a    |
| Ticket creation      | 1a    |
| Ticket editing       | 1a    |
| Ticket assignment    | 1a    |
| Ticket statuses      | 1a    |
| Status transitions   | 1a    |
| Ticket review        | 1a    |
| Ticket rejection     | 1a    |
| Comments             | 1a    |
| PR links             | 1a    |

Invitation Method for Phase 1a

Phase 1a will use invitation links as the initial invitation method.

This keeps the core loop simpler by avoiding username-search, invitation-state, and user-discovery logic while still allowing users to add teammates to a project.

Username-based invitations will be considered later.

Phase 1b — Membership Management

Phase 1b adds the management functionality required to properly manage project membership and ownership.

| Feature                                             | Phase |
| --------------------------------------------------- | ----- |
| Promote Member to Leader                            | 1b    |
| Demote Leader to Member                             | 1b    |
| Kick Members                                        | 1b    |
| Kick Leaders                                        | 1b    |
| Leave project                                       | 1b    |
| Project Manager ownership transfer                  | 1b    |
| Solo project quit and deletion                      | 1b    |
| Manual reassignment after a Member leaves/is kicked | 1b    |
Phase 2 — Future Enhancements

Phase 2 will contain functionality that is not required for the core product workflow or initial membership-management system.

Specific Phase 2 features will be defined after Phase 1a and Phase 1b are completed and evaluated.