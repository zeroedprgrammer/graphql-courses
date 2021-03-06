'use strict'

const connectDB = require('./db')

module.exports = {
    Query:{
        getCourses: async () => {
            let db
            let courses = []
            try {
                db = await connectDB()
                courses = await db.collection('courses').find().toArray()
            } catch (error) {
                console.error(error)
            }
            return courses
        },
        getCourse: (root, args) => {
            const course = courses.filter(course => course._id === args.id)
            return course.pop() /* return only first element */
        }
    }
}