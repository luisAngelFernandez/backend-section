const { model } = require("../models/user.model");

class BaseRepository {
    constructor(model) {
        this.model = model;
        
    }

    async get(id) {
        return await this.model.findById(id);
    }

    // OJO en este metodo está paginando el resultado
    async getAll(pageSize = 5, pageNum = 1) {
        const skips = pageSize * (pageNum - 1);
        return await this.model.find().skip(skips).limit(pageSize);
    }

    async create(entity){
        return await this.model.create(entity);
    }

    async update(id, entity){
        return await this.model.finByIdAndUpdate(id, entity, {new:true});
    }

    async delete(id){
        await this.model.finByIdAndDelete(id);
        return true;
    }
}

module.exports = BaseRepository;