import multer from 'multer';

// Biblioteca padrão do node para gerar caracteres
import crypto from 'crypto';

import { extname, resolve } from 'path';

export default {
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, res) => {
                if (err) return cb(err);

                // Se não deu erro chama o call
                // Primeiro parametro do callback é erro, se não deu erro coloca null
                return cb(
                    null,
                    // O nome do arquivo será varios caracteres aleatorios e a extensão do arquivo
                    res.toString('hex') + extname(file.originalname)
                );
            });
        },
    }),
};
