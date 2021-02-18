import { Response, Request } from "express";
import Usuario from "../models/usuario";


export const getUsuarios = async (req: Request, res: Response) => {

    const usuarios = await Usuario.findAll();

    res.json({ usuarios });
}
export const getusuario = async (req: Request, res: Response) => {

    const { id } = req.params;

    const user = await Usuario.findByPk(id);

    if (user) {
        res.json({
            user
        });
    } else {
        res.status(404).json({
            msg: `there is not user with ${id} id`
        });
    }


}
export const postUsuario = async (req: Request, res: Response) => {

    const { body } = req;
    try {

        const userExist = await Usuario.findOne({
            where: {
                email: body.email
            }
        })

        if (userExist) {
            return res.status(404).json({
                msg: `The user ${body.email} there is exist already`
            })
        }

        const usuario = new Usuario(body);

        await usuario.save();
        res.json(usuario);


    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: `Talk with de admin`
        });
    }

}

export const putUsuario = async (req: Request, res: Response) => {

    const { body } = req;
    const { id } = req.params;

    try {

        const user = await Usuario.findByPk(id);

        if (!user) {
            return res.status(404).json({
                msg: `the user with the ${id} id there is not exists`
            })
        }
        await user.update(body);



        return res.json(user)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: `Talk with de admin`
        });
    }
}
export const deleteusuario = async (req: Request, res: Response) => {


    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
        return res.status(404).json({
            msg: `There is not exisit a user with the ${id} id`
        })
    }


    //  only update the stated field instead delete the row
    await usuario.update({ estado: false });
    // await usuario.destroy()


    res.json(usuario);
}


