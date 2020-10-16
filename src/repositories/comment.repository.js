const BaseRepository = require("./base.repository");
let _comment = null;

// OJO al Extends, heredamos del base.repository
class CommentRepository extends BaseRepository {
    constructor({Comment}) {
        super(Comment);
        _comment = Comment;

    }
}

module.exports = CommentRepository;