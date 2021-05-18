import { Request, Response } from 'express'
import CreateCourseservice from './CreateCourseService';

export function createCourse (request: Request, response: Response) {
 
    CreateCourseservice.execute({
        name: "NodeJS",
        educator: "Dani",
        duration: 10
        });
    
        CreateCourseservice.execute({
         name: "ReactJS",
         educator: "Diego",
            });

    return response.send();
}
