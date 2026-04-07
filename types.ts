export interface Student {
    id: string;
    name: string;
    email: string;
    session: string;
    status: 'Active' | 'Inactive';
    rollNumber?: string;
    initials: string;
    color: string;
}

export interface Teacher {
    id: string;
    name: string;
    email: string;
    department?: string;
    initials: string;
    color: string;
}

export interface Report {
    id: string;
    title: string;
    student: string;
    date: string;
    category: string;
    status: 'Pending' | 'Approved' | 'Rejected';
}

export interface PendingItem {
    id: string;
    title: string;
    submittedBy: string;
    type: 'Paper' | 'Model' | 'Project';
    colorClass: string;
    iconClass: string;
}