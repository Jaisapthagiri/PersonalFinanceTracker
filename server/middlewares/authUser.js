import express from 'express';
import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
    try { 
        const { token } = req.cookies;

        if (!token) {
            return res.json({ success: false, message: "Not authen" })
        }

        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)

        if (tokenDecode.id) {
            req.user = { id: tokenDecode.id }
            next()
        } else {
            return res.json({ success: false, message: "Not authen" })
        }
    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}

export default authUser;