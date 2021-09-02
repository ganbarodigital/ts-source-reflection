// this test proves that we support parameters called 'this'
// (which is a reserved word) in:
//
// - arrow functions
// - anonymous functions

interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admins = db.filterUsers(function (this: User) {
    return this.admin;
});