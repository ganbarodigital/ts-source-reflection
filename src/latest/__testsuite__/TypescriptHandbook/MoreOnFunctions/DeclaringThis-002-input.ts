interface DB {
    filterUsers(filter: (input: User) => boolean): User[];
}
