// src/controller.ts
import {Controller, Get} from 'routing-controllers'

@Controller()
export default class MainController {

    @Get("/")
    main() {
       return {
         hello: 'World'
       }
    }

}