const BaseRepository = require("./base.repository");
let _user = null;

// OJO al Extends, heredamos del base.repository
class UserRepository extends BaseRepository {
    constructor({User}) {
        super(User);
        _user = User;

    }

    async getUserByUserName(username) {
        return await _user.findone({username});
    }

}

module.exports = UserRepository;