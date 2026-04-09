import { Request, Response } from "express";
import { prisma } from "../../config/prisma";


export default {

    list: async (requeste: Request, response: Response) => {
        try {
            const users = await prisma.anime.findMany();
            return response.status(200).json(users);

        } catch (e) {
            return response.status(500).json("Unknown error");
        }
    },

    create: async (request: Request, response: Response) => {
        try {
            const { nome, idade, ano, idadeRecomendada } = request.body
            const user = await prisma.anime.create({
                data: {
                    nome,
                    idade,
                    ano,
                    idadeRecomendada
                }
            });
            return response.status(200).json("Unknown error");
        } catch (e) {
            return response.status(500)
        }
    },

    getById: async (request: Request, response: Response) => {
        try {
            const user = await prisma.anime.findUnique({
                where: { id: +request.params.id }
            });
            return response.status(200).json(user);
        } catch (e) {
            return response.status(500).json
        }
    },

    update: async (request: Request, response: Response) => {
        try {
            const { id } = request.params;
            const { nome, idade, ano, idadeRecomendada } = request.body;
            const user = await prisma.anime.update({
                data: {
                    nome,
                    idade,
                    ano,
                    idadeRecomendada,
                },
                where: { id: +id },
            });
            return response.status(200).json(user);
        } catch (e) {
            return response.status(500).json("Unkown error. Try again later");
        }

    },

    delete: async (requeste: Request, response: Response) => {
        try {
            const { id } = requeste.params;
            const user = await prisma.anime.delete({
                where: { id: +id }
            });
            return response.status(200).json(user);
        } catch (e) {
            return response.status(500).json("Unkown error. Try again later");

        }
    }
}