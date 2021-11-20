# Create a Project

Projects in Fonoster allow you to manage related resources in a single place. With your Project account, you will be able to create and manage your Providers, Numbers, SIP Agents, Domains, Functions, etc.

Each Project has its own `ACCESS_KEY_ID` and `ACCESS_KEY_SECRET` and have the `PJ` prefix (i.e: `PJ619154d081467a0700000001`)

To create a new Project with the console follow the next few steps:

```none
1. Open a new terminal
2. Type the command "fonoster projects:create"
3. Type a friendly name
4. Chose to enable or disable experimental APIs
```

<video width="100%" playsInline="" controls="muted">
 <source src="/videos/create_a_project_1.mov" type="video/mp4" playsInline="" />
</video>

To start working with you new Project, you have to select it as default. To set your new Project as default, follow the next steps:

```none
2. Open a new terminal
3. Find the Project's reference
4. Issue the "fonoster projects:use [REF]" to set the default Project
```

<video width="100%" playsInline="" controls="muted">
 <source src="/videos/create_a_project_2.mov" type="video/mp4" playsInline="" />
</video>

You are all set. You can now begin adding your Providers, Numbers, etc.
