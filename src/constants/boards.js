export const defaultBoards = [
    {
        id: 'MAIN',
        title: 'Main Board',
        sections: [
            {
                id: "BACKLOG",
                title: 'Backlog'
            },
            {
                id: "OPEN",
                title: 'Open'
            },
            {
                id: "IN_PROGRESS",
                title: 'In Progress'
            },
            {
                id: "DONE",
                title: 'Done'
            },
            {
                id: "CLOSED",
                title: 'Close'
            },
        ]
    },
    {
        id: 'DEVELOPMENT',
        title: 'Development Board',
        sections: [
            {
                id: "BACKLOG",
                title: 'Backlog'
            },
            {
                id: "OPEN",
                title: 'Open'
            },
            {
                id: "IN_PROGRESS",
                title: 'In Progress'
            },
            {
                id: "DONE",
                title: 'Done'
            },
            {
                id: "CLOSED",
                title: 'Close'
            },
        ]
    }
];

export const defaultBoardTasks = {
    'MAIN': [
        {
            tasks: [
                {
                    id: "1111",
                    title: "Task 1",
                    description: "Task 1 description",
                    assignee: "3"
                },
                {
                    id: "ce2eb823-9dbe-4aa5-897f-dae73b89ca56",
                    title: "asd",
                    description: "asd",
                    assignee: "1"
                }
            ],
            id: "BACKLOG"
        },
        {
            tasks: [
                {
                    id: "4",
                    title: "Task 4",
                    description: "5555",
                    assignee: "1"
                },
                {
                    id: "1",
                    title: "Task some task",
                    description: "Task some task description",
                    assignee: "2"
                }
            ],
            id: "OPEN"
        },
        {
            tasks: [
                {
                    id: "2",
                    title: "Task 2",
                    description: "Task some task description 3",
                    assignee: "1"
                },
                {
                    id: "22",
                    title: "Task 2",
                    description: "Task some task description 3",
                    assignee: "1"
                }
            ],
            id: "IN_PROGRESS"
        },
        {
            tasks: [
                {
                    id: "11",
                    title: "Task 1",
                    description: "Task 1 description",
                    assignee: "3"
                }
            ],
            id: "DONE"
        },
        {
            tasks: [
                {
                    id: "3",
                    title: "Task 3",
                    description: "Task some task description 444",
                    assignee: "1"
                },
                {
                    id: "5f905127-06c2-439a-b533-5f3b8495d9ad",
                    title: "User",
                    description: "asd",
                    assignee: "9"
                }
            ],
            id: "CLOSED"
        }
    ],
    'DEVELOPMENT': [
        {
            tasks: [
                {
                    id: "3",
                    title: "Task 3",
                    description: "Task some task description 444"
                }
            ],
            id: "BACKLOG"
        },
        {
            tasks: [
                {
                    id: "1",
                    title: "Task some task",
                    description: "Task some task description"
                },
                {
                    id: "2",
                    title: "Task 2",
                    description: "Task some task description 3"
                }
            ],
            id: "OPEN"
        },
        {
            tasks: [
                {
                    id: "4",
                    title: "Task 4",
                    description: "5555"
                }
            ],
            id: "IN_PROGRESS"
        },
        {
            tasks: [
                {
                    id: "11",
                    title: "Task 1",
                    description: "Task 1 description"
                }
            ],
            id: "DONE"
        },
        {
            tasks: [
                {
                    id: "1111",
                    title: "Task 1",
                    description: "Task 1 description"
                },
                {
                    id: "ee1dc27c-36fc-4a7b-a93e-79b392f02818",
                    title: "User",
                    description: "descr",
                    "assignee": "10"
                },
                {
                    id: "22",
                    title: "Task 2",
                    description: "Task some task description 3"
                }
            ],
            id: "CLOSED"
        }
    ]
}