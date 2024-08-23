import { PrismaClient } from '@prisma/client'
import { cryptId } from './common.js';
const prisma = new PrismaClient();

export const getPosts = async (req, res) => {
    try {
        const data = await prisma.post.findMany({
            select: {
                id: true, title: true, summary: true, categoryId: true, logo_url: true, likes: true, views: true, created_at: true, updated_at: true,
                Author: {
                    select: {
                        username: true,
                        display_name: true
                    }
                }
            }
        });

        const encryptedData = data.map(post => ({
            ...post,
            postId: cryptId(post.id?.toString()) // Ensure postId is a string
        }));
        return res.status(200).json({
            data: encryptedData
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: "Something went wrong"
        })
    }

}
export const getTrendingPosts = async (req, res) => {
    try {
        const { limit } = req.query;
        const parsedLimit = parseInt(limit, 10);

        // trends based on views
        const blogList = await prisma.post.findMany({
            select: {
                id: true, title: true, summary: true, categoryId: true, logo_url: true, likes: true, views: true, created_at: true, updated_at: true,
                Author: {
                    select: {
                        username: true,
                        display_name: true
                    }
                }
            },
            orderBy: {
                views: 'desc'
            },
            take: parsedLimit
        })
        return res.status(200).json(blogList);

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: "Something went wrong"
        })
    }
}
export const getReleventCategories = async (req, res) => {
    try {
        const { limit, offset } = req.query;
        const parsedLimit = parseInt(limit, 10);
        const parsedOffset = parseInt(offset, 10) || 0;

        // trends based on views
        const categoryList = await prisma.category.findMany({
            include: {
                _count: {
                    select: {
                        Post: true
                    }
                }
            },
            orderBy: {
                _count: {
                    Post: 'desc'
                }
            },
            take: parsedLimit,
            skip: parsedOffset,
        })
        return res.status(200).json(categoryList);

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: "Something went wrong"
        })
    }
}