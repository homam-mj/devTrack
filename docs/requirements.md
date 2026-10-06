| Role                | Description                                                                       |
| ------------------- | --------------------------------------------------------------------------------- |
| **Project Manager** | The creator and highest-authority user of the project.                            |
| **Leader**          | Has management permissions within the project and can manage members and tickets. |
| **Member**          | Works on assigned tickets and contributes to the project.                         |

2. Role Authorization

| Action                   | Project Manager | Leader | Member |
| ------------------------ | :-------------: | :----: | :----: |
| View Project             |        ✅        |    ✅   |    ✅   |
| Invite Members           |        ✅        |    ✅   |    ❌   |
| Invite via Username      |        ✅        |    ✅   |    ❌   |
| Manage Members           |        ✅        |    ✅   |    ❌   |
| Kick Members             |        ✅        |    ✅   |    ❌   |
| Kick Leaders             |        ✅        |    ❌   |    ❌   |
| Promote Member to Leader |        ✅        |    ✅   |    ❌   |
| Change Member Roles      |        ✅        |    ✅   |    ❌   |
| Create Tickets           |        ✅        |    ✅   |    ❌   |
| Delete Tickets           |        ✅        |    ✅   |    ❌   |
| Review Tickets           |        ✅        |    ✅   |    ❌   |
| Modify Ticket Status     |        ✅        |    ✅   |    ❌   |
| Assign Tickets           |        ✅        |    ✅   |    ❌   |
| View PR Link             |        ✅        |    ✅   |    ✅   |
| Add PR Link              |        ✅        |    ✅   |    ❌   |
| Comment on Tickets       |        ✅        |    ✅   |    ✅   |
| Delete Member Comments   |        ✅        |    ✅   |    ❌   |
| Edit Own Comments        |        ✅        |    ✅   |    ✅   |
| Delete Own Comments      |        ✅        |    ✅   |    ✅   |
| Leave Project            |        ✅*       |    ✅   |    ✅   |
* The Project Manager cannot leave directly. They must first transfer the Project Manager role to another member.

3. Project Manager

The Project Manager is automatically assigned to the user who creates the project.
| Permission / Rule                        | Project Manager |
| ---------------------------------------- | --------------- |
| Creates the project                      | ✅               |
| Full project authority                   | ✅               |
| Can invite members                       | ✅               |
| Can invite users by username             | ✅               |
| Can kick members                         | ✅               |
| Can kick leaders                         | ✅               |
| Can promote members to leaders           | ✅               |
| Can change roles                         | ✅               |
| Can create tickets                       | ✅               |
| Can delete tickets                       | ✅               |
| Can review tickets                       | ✅               |
| Can modify ticket status                 | ✅               |
| Can assign tickets                       | ✅               |
| Inherits all Leader permissions          | ✅               |
| Can be demoted                           | ❌               |
| Can be kicked                            | ❌               |
| Can leave without transferring ownership | ❌               |
Project Manager Rules
The Project Manager is the creator of the project.
The Project Manager has full authority over the project.
The Project Manager automatically inherits all Leader permissions.
The Project Manager cannot be demoted.
The Project Manager cannot be kicked.
If the Project Manager wants to leave, they must first assign the Project Manager role to another member.

4. Leader

A project can have more than one Leader.
| Permission                      | Leader |
| ------------------------------- | :----: |
| Invite members                  |    ✅   |
| Kick members                    |    ✅   |
| Create tickets                  |    ✅   |
| Delete tickets                  |    ✅   |
| Review tickets                  |    ✅   |
| Modify ticket status            |    ✅   |
| Assign tickets to members       |    ✅   |
| View PR links                   |    ✅   |
| Promote members to Leader       |    ✅   |
| Manage member comments          |    ✅   |
| Kick other Leaders              |    ❌   |
| Become Project Manager directly |    ❌   |

Leader Rules
Leaders can invite members.
Leaders can kick members.
Leaders can create and delete tickets.
Leaders can review tickets.
Leaders can modify ticket status.
Leaders can assign tickets to members.
Leaders can view PR links attached to tickets.
Leaders can promote a Member to Leader.
Only the Project Manager can kick a Leader.

5. Member

Members are the developers who work on assigned tickets.
| Permission                                   | Member |
| -------------------------------------------- | :----: |
| Join a project                               |    ✅   |
| View project                                 |    ✅   |
| View tickets                                 |    ✅   |
| View tickets assigned to other members       |    ✅   |
| Receive assigned tickets                     |    ✅   |
| Work on assigned tickets                     |    ✅   |
| Change assigned ticket to `Work in Progress` |    ✅   |
| Change assigned ticket to `Ready for Review` |    ✅   |
| Add PR link to assigned ticket               |    ✅   |
| Comment on tickets                           |    ✅   |
| Edit own comments                            |    ✅   |
| Delete own comments                          |    ✅   |
| Delete other members' comments               |    ❌   |
| Assign tickets                               |    ❌   |
| Create tickets                               |    ❌   |
| Delete tickets                               |    ❌   |
| Review tickets                               |    ❌   |
| Invite members                               |    ❌   |
| Kick members                                 |    ❌   |
| Promote members                              |    ❌   |

6. Ticket System

Tickets are used to represent tasks that need to be completed.
| Status               | Description                                                            |
| -------------------- | ---------------------------------------------------------------------- |
| **Not Completed**    | The ticket has not been started.                                       |
| **Work in Progress** | The assigned member is currently working on the ticket.                |
| **Ready for Review** | The member has finished their work and submitted it for Leader review. |
| **Completed**        | The Leader has reviewed and accepted the ticket.                       |

Ticket Status Flow
Not Completed
      ↓
Work in Progress
      ↓
Ready for Review
      ↓
Completed

Rejected Ticket Flow

If a Leader rejects a ticket while it is in Ready for Review:

Ready for Review
      ↓
   Rejected
      ↓
Work in Progress

The member must continue working on the ticket and submit it for review again.

7. Ticket Permissions

| Ticket Action        | Project Manager | Leader | Member |
| -------------------- | :-------------: | :----: | :----: |
| Create Ticket        |        ✅        |    ✅   |    ❌   |
| Delete Ticket        |        ✅        |    ✅   |    ❌   |
| Assign Ticket        |        ✅        |    ✅   |    ❌   |
| Review Ticket        |        ✅        |    ✅   |    ❌   |
| Change Ticket Status |        ✅        |    ✅   |   ⚠️   |
| Add PR Link          |        ❌        |    ❌   |    ✅   |
| View PR Link         |        ✅        |    ✅   |    ✅   |
| Comment              |        ✅        |    ✅   |    ✅   |


Member Ticket Rules

Members cannot freely change the status of any ticket.

A Member can only change the status of a ticket assigned to them:

Not Completed
      ↓
Work in Progress
      ↓
Ready for Review

Only Leaders can assign tickets to Members.

8. Ticket Assignment

| Rule                                                           | Description                               |
| -------------------------------------------------------------- | ----------------------------------------- |
| Who can assign tickets?                                        | Project Manager or Leader                 |
| Who can receive tickets?                                       | Members                                   |
| Can Members assign tickets?                                    | No                                        |
| Can Members change another Member's ticket status?             | No                                        |
| Can a Member change their assigned ticket to Work in Progress? | Yes                                       |
| Can a Member change their assigned ticket to Ready for Review? | Yes                                       |
| Who reviews Ready for Review tickets?                          | Leader or Project Manager                 |
| What happens when a ticket is rejected?                        | Status changes back to `Work in Progress` |


9. Invitations

Members can join a project through two invitation methods.

| Invitation Method       | Description                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------- |
| **Invite Link**         | A user can join the project using an invitation link.                                  |
| **Username Invitation** | A user can receive an invitation directly inside the application using their username. |


Invitation Link Rules
| Rule                                   | Description                                           |
| -------------------------------------- | ----------------------------------------------------- |
| Expiration after joining               | The link expires immediately after a successful join. |
| Unused expiration                      | An unused invitation link expires after **3 days**.   |
| Reuse after joining                    | ❌                                                     |
| Can the link be used after expiration? | ❌                                                     |


10. Project Visibility

Projects are private.
| User                             | Can View Project? |
| -------------------------------- | :---------------: |
| Project Manager                  |         ✅         |
| Leader                           |         ✅         |
| Project Member                   |         ✅         |
| User who is not a project member |         ❌         |
Only users who are members of a project can access that project and its contents.

11. Ticket Visibility

Members can see tickets belonging to the project, including tickets assigned to other members.
| Ticket Information                     | Project Manager | Leader | Member |
| -------------------------------------- | :-------------: | :----: | :----: |
| View project tickets                   |        ✅        |    ✅   |    ✅   |
| View tickets assigned to themselves    |        ✅        |    ✅   |    ✅   |
| View tickets assigned to other members |        ✅        |    ✅   |    ✅   |
| Modify another member's ticket         |        ❌        |    ✅   |    ❌   |
| Review tickets                         |        ✅        |    ✅   |    ❌   |


12. Comments

Users can comment on tickets.
| Comment Action                  | Project Manager | Leader | Member |
| ------------------------------- | :-------------: | :----: | :----: |
| Add comment                     |        ✅        |    ✅   |    ✅   |
| Edit own comment                |        ✅        |    ✅   |    ✅   |
| Delete own comment              |        ✅        |    ✅   |    ✅   |
| Delete another member's comment |        ❌        |    ✅   |    ❌   |

Leaders can delete Members' comments.

Members can only edit or delete their own comments.

13. Leaving a Project

Members can leave a project using a Quit / Leave Project option.
| User            | Can Leave? | Additional Rule                           |
| --------------- | :--------: | ----------------------------------------- |
| Member          |      ✅     | Can leave normally.                       |
| Leader          |      ✅     | Can leave normally.                       |
| Project Manager |     ⚠️     | Must transfer Project Manager role first. |
| Solo Developer  |     ⚠️     | Project is deleted after confirmation.    |


14. Solo Developer Project

A project can be created and used by a single developer.

If a solo developer chooses to quit the project:
Solo Developer
      ↓
   Quit Project
      ↓
Confirmation
      ↓
     Yes
      ↓
Project Deleted

Because the solo developer cannot transfer the Project Manager role to another member, quitting the project results in deleting the project.

The user must be asked to confirm before the project is deleted.

15. Project Manager Leaving

The Project Manager cannot simply quit the project.

Before leaving, the Project Manager must transfer the Project Manager role to another project member.

Project Manager
      ↓
Wants to Leave
      ↓
Select New Project Manager
      ↓
Transfer Project Manager Role
      ↓
Old Project Manager Leaves

The new Project Manager inherits the full Project Manager permissions.

16. Kicking Members
| Scenario                            | Result                          |
| ----------------------------------- | ------------------------------- |
| Leader kicks Member                 | Member is removed from project. |
| Project Manager kicks Member        | Member is removed from project. |
| Leader tries to kick Leader         | ❌ Not allowed.                  |
| Member tries to kick another Member | ❌ Not allowed.                  |
| Project Manager kicks Leader        | Leader is removed from project. |

17. Permissions 
| Action                                 | Project manager | Leader | Member | Non-member |
| -------------------------------------- | --------------- | ------ | ------ | ---------- |
| Create ticket                          | Yes             | Yes    | No     | No         |
| Delete ticket                          | Yes             | Yes    | No     | No         |
| Invite member                          | Yes             | Yes    | No     | No         |
| Kick member                            | Yes             | Yes    | No     | No         |
| Kick leader                            | Yes             | No     | No     | No         |
| Promote member to leader               | Yes             | Yes    | No     | No         |
| Assign ticket to member                | Yes             | Yes    | No     | No         |
| Review ticket                          | Yes             | Yes    | No     | No         |
| Modify ticket status                   | Yes             | Yes    | Yes*   | No         |
| View PR link                           | Yes             | Yes    | Yes    | No         |
| Add PR link to ticket                  | No              | No     | Yes    | No         |
| Add comment to ticket                  | Yes             | Yes    | Yes    | No         |
| Edit own comment                       | Yes             | Yes    | Yes    | No         |
| Delete own comment                     | Yes             | Yes    | Yes    | No         |
| Delete another member's comment        | Yes             | Yes    | No     | No         |
| View project                           | Yes             | Yes    | Yes    | No         |
| View tickets assigned to other members | Yes             | Yes    | Yes    | No         |
| Leave project                          | Yes*            | Yes    | Yes    | No         |

* Members can only modify the status of tickets assigned to them.
* The Project Manager must transfer the Project Manager role before leaving.

18. Status Moves

| From             | To               | Who can do it                |
| ---------------- | ---------------- | ---------------------------- |
| Not Completed    | Work in Progress | Assigned Member              |
| Work in Progress | Ready for Review | Assigned Member              |
| Ready for Review | Completed        | Leader and above             |
| Ready for Review | Work in Progress | Leader and above (rejection) |


Tickets of Kicked Members

If a Member is kicked from the project:

Their assigned tickets remain in the project.
The tickets are not deleted.
The project retains the ticket history.

19. Role Hierarchy
Project Manager
       │
       ├── Full Project Authority
       │
       └── Leader Permissions
              │
              ├── Manage Members
              ├── Manage Tickets
              ├── Review Tickets
              └── Assign Tickets
                     │
                     ▼
                   Member
                     │
                     ├── Work on Assigned Tickets
                     ├── Add PR Links
                     └── Comment

20. Core Business Rules

|  # | Rule                                                                            |
| -: | ------------------------------------------------------------------------------- |
|  1 | Every project has one Project Manager.                                          |
|  2 | The creator starts as a project manager.                              |
|  3 | A project can have multiple Leaders.                                            |
|  4 | The Project Manager cannot be kicked.                                           |
|  5 | The Project Manager cannot be demoted.                                          |
|  6 | Only the Project Manager can kick Leaders.                                      |
|  7 | Leaders and above can kick Members.                                                       |
|  8 | Leaders and above can promote Members to Leaders.                                         |
|  9 | Only Project Manager and Leaders can create tickets.                            |
| 10 | Only Project Manager and Leaders can delete tickets.                            |
| 11 | Only Project Manager and Leaders can assign tickets.                            |
| 12 | Members can only work on tickets assigned to them.                              |
| 13 | Members can move their assigned tickets to `Work in Progress`.                  |
| 14 | Members can move their assigned tickets to `Ready for Review`.                  |
| 15 | Leaders and above review tickets in `Ready for Review`.                                   |
| 16 | A rejected ticket returns to `Work in Progress`.                                |
| 17 | Members can add PR links to their tickets.                                      |
| 18 | Members can see tickets assigned to other Members.                              |
| 19 | Members can edit and delete their own comments.                                 |
| 20 | Leaders and above can delete Members' comments.                                           |
| 21 | Members can leave projects.                                                     |
| 22 | Leaders can leave projects.                                                     |
| 23 | Project Managers must transfer ownership to any member before leaving.                        |
| 24 | A solo developer quitting their project deletes the project after confirmation. |
| 25 | Tickets assigned to kicked Members remain in the project and reassigned to other members.                       |
| 26 | Invitation links expire after being used.                                       |
| 27 | Unused invitation links expire after 3 days.                                    |
| 28 | Only project members can access a project.                                      |
             |

Invitations. The list has no rule for the in-app invite by username, and nothing about whether a link is tied to one email address.