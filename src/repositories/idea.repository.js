const BaseRepository = require("./base.repository");
let _idea = null;

// OJO al Extends, heredamos del base.repository
class IdeaRepository extends BaseRepository {
    constructor({Idea}) {
        super(Idea);
        _idea = Idea;

    }

    async getUserIdeas(author){
        return await _idea.find({author});
    }
}

module.exports = IdeaRepository;