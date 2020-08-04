const USERS = new Map([[1,{"name": "Jack"}],[2,{"name":"Jon"}]]);

function getUser(id){
    if(!id){
        throw new Error("Invalid id param");
    }
    const foundUser = USERS.get(parseInt(id));
    if (!foundUser){
        throw new Error("User is not found");
    }
    return foundUser;
}

module.exports = {
    getUser
}