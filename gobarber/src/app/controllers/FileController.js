import File from '../models/File';

class FileController {
    async store(req, res) {
        // Original name e file name peguei pelo req.body do insomnia
        // Tranforma eles em name e path para retornar no banco de dados sql
        const { originalname: name, filename: path } = req.file;

        const file = await File.create({
            name,
            path,
        });

        return res.json(file);
    }
}

export default new FileController();
